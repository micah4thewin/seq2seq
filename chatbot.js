const tf = require('@tensorflow/tfjs');
const use = require('@tensorflow-models/universal-sentence-encoder');
const fs = require('fs');

let encoderModel;

async function loadUSEModel() {
  encoderModel = await use.load();
}

async function preprocessData(data) {
  await loadUSEModel();
  const questions = data.qas.map(qa => qa.question);
  const answers = data.qas.map(qa => qa.answers[0]);
  const questionEmbeddings = await encoderModel.embed(questions);
  const answerEmbeddings = await encoderModel.embed(answers);
  return {questionEmbeddings, answerEmbeddings};
}

function createModel(inputShape) {
  const model = tf.sequential();
  model.add(tf.layers.lstm({units: 128, returnSequences: true, inputShape: [1, inputShape[1]]}));
  model.add(tf.layers.lstm({units: 64, returnSequences: false}));
  model.add(tf.layers.dense({units: inputShape[1], activation: 'linear'}));
  model.compile({optimizer: 'adam', loss: 'meanSquaredError'});
  return model;
}

async function trainModel(model, inputData, targetData, epochs = 100, batchSize = 32) {
  await model.fit(inputData, targetData, {epochs, batchSize});
}

async function chat(model, input) {
  const inputEmbedding = await encoderModel.embed([input]);
  const outputEmbedding = model.predict(inputEmbedding);
  return outputEmbedding;
}

const trainingData = JSON.parse(fs.readFileSync('trainingData.json'));

(async function main() {
  const {questionEmbeddings, answerEmbeddings} = await preprocessData(trainingData);
  const questionEmbeddings3D = questionEmbeddings.reshape([questionEmbeddings.shape[0], 1, questionEmbeddings.shape[1]]);
  const answerEmbeddings2D = answerEmbeddings.reshape([answerEmbeddings.shape[0], answerEmbeddings.shape[1]]);
  const chatbotModel = createModel(questionEmbeddings.shape);
  await trainModel(chatbotModel, questionEmbeddings3D, answerEmbeddings2D);
  const output = await chat(chatbotModel, "Hello, how are you?");
  console.log(output);
})();
