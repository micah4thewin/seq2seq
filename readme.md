# seq2seq

A sequence to sequence chatbot developed using TensorFlow.js.

## Description

This project implements a sequence to sequence chatbot using TensorFlow.js. The chatbot is designed to answer simple questions and provide assistance based on pre-defined training data. It utilizes the Universal Sentence Encoder for text encoding and TensorFlow.js for model training and prediction.

## Installation

To install the dependencies, run the following command:


The chatbot will be trained using the provided training data and will then be ready to accept user input.

## Dependencies

The following dependencies are used in this project:

- [@tensorflow-models/universal-sentence-encoder](https://www.npmjs.com/package/@tensorflow-models/universal-sentence-encoder): ^1.3.3
- [@tensorflow/tfjs](https://www.npmjs.com/package/@tensorflow/tfjs): ^4.5.0
- [@tensorflow/tfjs-node](https://www.npmjs.com/package/@tensorflow/tfjs-node): ^4.5.0
- [lodash](https://www.npmjs.com/package/lodash): ^4.17.21
- [natural](https://www.npmjs.com/package/natural): ^6.3.0

Make sure to install these dependencies before running the application.

## License

This project is licensed under the ISC License. See the [LICENSE](LICENSE) file for details.

## Author

Created by Micah.

## Tree:

``` js
├── chatbot.js
├── LICENSE
├── node_modules
├── package.json
├── package-lock.json
├── readme.md
└── trainingData.json

```

## Node Error:

``` js
node chatbot.js
Platform node has already been set. Overwriting the platform with node.

============================
Hi, looks like you are running TensorFlow.js in Node.js. To speed things up dramatically, install our node backend, visit https://github.com/tensorflow/tfjs-node for more details.
============================
Orthogonal initializer is being called on a matrix with more than 2000 (65536) elements: Slowness may result.
Orthogonal initializer is being called on a matrix with more than 2000 (16384) elements: Slowness may result.
/home/micanie/Desktop/seqtoseq/node_modules/@tensorflow/tfjs/dist/tf.node.js:3979
        throw new Error(`Argument ${argName} passed to ${functionName} must be a ` +
              ^

Error: Argument tensors passed to stack must be a `Tensor[]` or `TensorLike[]`
    at convertToTensorArray (/home/micanie/Desktop/seqtoseq/node_modules/@tensorflow/tfjs/dist/tf.node.js:3979:15)
    at stack_ (/home/micanie/Desktop/seqtoseq/node_modules/@tensorflow/tfjs/dist/tf.node.js:22562:22)
    at stack__op (/home/micanie/Desktop/seqtoseq/node_modules/@tensorflow/tfjs/dist/tf.node.js:4027:28)
    at Object.value (/home/micanie/Desktop/seqtoseq/node_modules/@tensorflow/tfjs/dist/tf.node.js:30628:31)
    at /home/micanie/Desktop/seqtoseq/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/tf-core.node.js:3385:73
    at /home/micanie/Desktop/seqtoseq/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/tf-core.node.js:4562:22
    at Engine.scopedRun (/home/micanie/Desktop/seqtoseq/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/tf-core.node.js:4572:23)
    at Engine.tidy (/home/micanie/Desktop/seqtoseq/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/tf-core.node.js:4561:21)
    at /home/micanie/Desktop/seqtoseq/node_modules/@tensorflow/t
```
