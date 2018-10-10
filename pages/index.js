import React from 'react';
import * as tf from '@tensorflow/tfjs';
import iris from "../data/iris-training";
import irisTesting from "../data/iris-testing";

class Index extends React.Component {

  render() {
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
  model.fit(trainingData, outputData, {
          epochs: 100
      })
      .then((history) => {
      console.log(history);
          model.predict(testingData).print()
      })

    console.log(irisTesting);
    console.log(history);
    return (
      <p></p>
    );
  }
}

export default Index;
