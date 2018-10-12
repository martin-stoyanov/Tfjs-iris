import React from 'react';
import * as tf from '@tensorflow/tfjs';
import iris from "../data/iris-training";
import irisTesting from "../data/iris-testing";

class Index extends React.Component {

  componentDidMount() {
    this.trainFunction();
  }

  trainFunction = async() => {
    const trainingData = tf.tensor2d(iris.map(item => [
      item.sepal_length, item.sepal_width, item.petal_length, item.petal_width,
  ]))
  
  const outputData = tf.tensor2d(iris.map(item => [
    item.species === 'setosa' ? 1 : 0,
    item.species === 'virginica' ? 1 : 0,
    item.species === 'versicolor' ? 1 : 0,
  ]))
  
  const testingData = tf.tensor2d(irisTesting.map(item => [
    item.sepal_length, item.sepal_width, item.petal_length, item.petal_width,
  ]))
  
  const model = tf.sequential()
  
  model.add(tf.layers.dense({
    inputShape: [4],
    activation: "sigmoid",
    units: 5,
  }))
  
  model.add(tf.layers.dense({
    inputShape: [5],
    activation: "sigmoid",
    units: 3,
  }))
  
  
  model.add(tf.layers.dense({
    activation: "sigmoid",
    units: 3,
  }))
  
  model.compile({
    loss: "meanSquaredError",
    optimizer: tf.train.adam(0.06)
  })
  
  const startTime = Date.now()
  const history = await model.fit(trainingData, outputData, {epochs: 100})
  console.log(history);
  const predictions = model.predict(testingData)
  console.log(`predictions: ${predictions}`);
  console.log(`irisTesting: ${irisTesting}`);
  document.getElementById('predictions').innerText += predictions.dataSync();
  }

  render() {    
    return (
      <div id = 'predictions'></div>
    );
  }
}

export default Index;
