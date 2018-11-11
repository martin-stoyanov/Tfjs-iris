import React from 'react';
import { Grommet, Box, Table, TableHeader, TableRow, TableCell, TableBody, Button, Text } from 'grommet';
import * as tf from '@tensorflow/tfjs';
import * as hpjs from 'hyperparameters';
import iris from '../data/iris-training';
import irisTesting from '../data/iris-testing';

let predictions;
const lossArr = [];
const numLayersArr = [];


const TestHeader = ({ title }) => (
  <TableCell size='xsmall' scope='col' border='bottom'><b>{title}</b></TableCell>
);

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formattedPredictions: [],
      lossArr: [],
      numLayersArr: [],
    };
  }

  arrayto2dArray = (array, size) => {
    const newArray = [];
    for (let i = 0; i < array.length; i += size) {
      newArray.push(array.slice(i, i + size));
    }
    this.setState({
      predictions: newArray, // eslint-disable-line react/no-unused-state
    });
  };


  optFunction = async ({ numLayers }, { trainingData, outputData }) => {
    const model = tf.sequential();

    console.log(numLayers);

    for (let i = 0; i < numLayers; i += 1) {
      model.add(tf.layers.dense({
        inputShape: i === 0 ? [4] : [5], // if first layer
        activation: 'sigmoid',
        units: i === numLayers - 1 ? 3 : 5,
      }));
    }

    model.compile({
      loss: 'meanSquaredError',
      optimizer: tf.train.adam(0.06),
    });

    const h = await model.fit(trainingData, outputData, { epochs: 100 });
    const loss = h.history.loss[h.history.loss.length - 1];
    lossArr.push(loss);
    numLayersArr.push(numLayers);
    console.log(numLayersArr);

    this.setState({
      lossArr, // eslint-disable-line react/no-unused-state
      numLayersArr,
    });

    // return the model, loss, and status
    return {
      model,
      loss,
      status: hpjs.STATUS_OK,
    };
  };


  trainAndPredict = async () => {
    const space = {
      numLayers: hpjs.quniform(1, 5, 1),
    };


    const trainingData = tf.tensor2d(iris.map(item => [
      item.sepal_length, item.sepal_width, item.petal_length, item.petal_width,
    ]));

    const outputData = tf.tensor2d(iris.map(item => [
      item.species === 'setosa' ? 1 : 0,
      item.species === 'virginica' ? 1 : 0,
      item.species === 'versicolor' ? 1 : 0,
    ]));

    const testingData = tf.tensor2d(irisTesting.map(item => [
      item.sepal_length, item.sepal_width, item.petal_length, item.petal_width,
    ]));

    const testingOutput = irisTesting.map(item => [
      item.species,
    ]);

    const numOptCalls = 3;

    this.setState({ numOptCalls });
    const trials = await hpjs.fmin(
      this.optFunction, space, hpjs.search.randomSearch, numOptCalls,
      { rng: new hpjs.RandomState(64321), trainingData, outputData }
    );

    const opt = trials.argmin;
    console.log(trials);

    console.log(opt);

    const { model } = await this.optFunction(opt, { trainingData, outputData });

    predictions = model.predict(testingData).dataSync();

    const formattedArray = [];
    for (let i = 0; i < predictions.length; i += 3) {
      let row = predictions.slice(i, i + 3); // adding testing predictions to array
      row = Array.prototype.slice.call(row);
      row[3] = testingOutput[i / 3]; // adding testing answers to array
      formattedArray.push(row);
    }

    this.setState({
      formattedPredictions: formattedArray, // eslint-disable-line react/no-unused-state
    });

    console.log(formattedArray);
  }

  render() {
    const {
      formattedPredictions, lossArr, numOptCalls, numLayersArr, // eslint-disable-line
    } = this.state;
    console.log(lossArr);
    return (
      <Grommet>
        <Box direction='row-responsive' justify='center' gap='medium'>
          <Box direction='column' align='center' gap='xsmall' margin='small'>
            <Text weight='bold'># of OptFunction calls: {numOptCalls}</Text>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableCell size='xsmall' scope='col' border='bottom'><b>Iteration</b></TableCell>
                  <TableCell size='xsmall' scope='col' border='bottom'><b># Layers</b></TableCell>
                  <TableCell size='small' scope='col' border='bottom'><b>Loss</b></TableCell>
                </TableRow>
              </TableHeader>
              <TableBody>
                {lossArr.filter((e, index) => index < numOptCalls).map((e, index) => (
                  <TableRow key={`loss_${index}`}>
                    <TableCell size='xsmall' scope='row'>{index + 1}</TableCell>
                    <TableCell size='xsmall' scope='row'>{numLayersArr[index]}</TableCell>
                    <TableCell size='small' scope='row'>{e}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <Text>
              Best # of Layers: {numLayersArr[numOptCalls]}
            </Text>
            <Button
              label='Start Training'
              onClick={this.trainAndPredict}
              style={{ marginTop: '15px' }}
            />
          </Box>
          <Box direction='column' align='center' gap='xsmall' margin='small'>
            <Text weight='bold'>Test Predictions</Text>
            <Table>
              <TableHeader>
                <TableRow>
                  {['Setosa', 'Virginica', 'Versicolor', 'Actual'].map(title => (
                    <TestHeader title={title} key={`title_${title}`} />
                  ))}
                </TableRow>
              </TableHeader>
              <TableBody>
                {formattedPredictions.map((e, index) => (
                  <TableRow key={`predictions_${index}`}>
                    {console.log(e[0])}
                    <TableCell size='xxsmall' scope='row'>{(e[3][0] === 'setosa' ? e[0] < 0.5 ? <Text weight='bold' color='status-critical'>{e[0]}</Text> : <Text weight='bold'>{e[0]}</Text> : e[0])}</TableCell>
                    <TableCell size='xxsmall' scope='row'>{(e[3][0] === 'virginica' ? e[1] < 0.5 ? <Text weight='bold' color='status-critical'>{e[1]}</Text> : <Text weight='bold'>{e[1]}</Text> : e[1])}</TableCell>
                    <TableCell size='xxsmall' scope='row'>{(e[3][0] === 'versicolor' ? e[2] < 0.5 ? <Text weight='bold' color='status-critical'>{e[2]}</Text> : <Text weight='bold'>{e[2]}</Text> : e[2])}</TableCell>
                    <TableCell size='xxsmall' scope='row'>{e[3]}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <Text>
              Testing Loss: {lossArr[numOptCalls]}
            </Text>
          </Box>
        </Box>
      </Grommet>
    );
  }
}

export default Index;
