import React from 'react';
import { Grommet, Box, FormField, Table, TableHeader, TableRow, TableCell, TableBody, Button, Text, TextInput, Anchor } from 'grommet';
import * as tf from '@tensorflow/tfjs';
import * as hpjs from 'hyperparameters';
import iris from '../data/iris-training';
import irisTesting from '../data/iris-testing';

let predictions;
const lossArr = [];
const numLayersArr = [];
const optimizerArr = [];


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
      optimizerArr: [],
      numOptCalls: 3,
      optCallsTemp: 3,
    };
  }

  updateNumOptCalls = () => {
    console.log('updated');
    const numCalls = document.getElementById('numOptCalls').value;
    this.setState({
      optCallsTemp: numCalls, // eslint-disable-line react/no-unused-state
    });
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


  optFunction = async ({ numLayers, optimizer }, { trainingData, outputData }) => {
    const optimizers = {
      sgd: tf.train.sgd,
      adagrad: tf.train.adagrad,
      adam: tf.train.adam,
      adamax: tf.train.adamax,
      rmsprop: tf.train.rmsprop,
    };

    const model = tf.sequential(); // creating a simple model

    // adding random number of layers
    for (let i = 0; i < numLayers; i += 1) {
      model.add(tf.layers.dense({
        inputShape: i === 0 ? [4] : [5], // if first layer
        activation: 'sigmoid',
        units: i === numLayers - 1 ? 3 : 5,
      }));
    }

    model.compile({
      loss: 'meanSquaredError',
      optimizer: optimizers[optimizer](0.06),
    });

    const h = await model.fit(trainingData, outputData, { epochs: 100 });
    const loss = h.history.loss[h.history.loss.length - 1];
    lossArr.push(loss);
    numLayersArr.push(numLayers);
    optimizerArr.push(optimizer);

    this.setState({
      lossArr, // eslint-disable-line react/no-unused-state
      numLayersArr,
      optimizerArr,
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
      optimizer: hpjs.choice(['sgd', 'adam', 'adagrad', 'rmsprop']),
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

    const { optCallsTemp } = this.state;
    this.setState({
      lossArr: [], // reset training array every time train button clicked
      formattedPredictions: [], // reset pred array every training session
      numOptCalls: optCallsTemp, // eslint-disable-line react/no-unused-state
    });
    console.log(`numOptCalls: ${this.state.optCallsTemp}`);

    const trials = await hpjs.fmin(
      this.optFunction, space, hpjs.search.randomSearch, this.state.optCallsTemp,
      { trainingData, outputData }
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

    // console.log(formattedArray);
  }

  render() {
    const {
      formattedPredictions, lossArr, numOptCalls, numLayersArr, optimizerArr, optCallsTemp // eslint-disable-line
    } = this.state;
    // console.log(lossArr);
    return (
      <Grommet>
        <Box>
          <Box direction='row-responsive' justify='center' gap='medium'
            style={{ height: 'auto', minHeight: '100vh' }}>
            <Box direction='column' align='center' gap='xsmall' margin='small'>
              <Box direction='row' align='center' gap='xsmall'>
                <Text weight='bold'># of OptFunction calls: </Text>
                <FormField style={{ maxWidth: '20%' }}>
                  <TextInput
                      size = 'small'
                      id='numOptCalls'
                      name='numOptCalls'
                      placeholder={optCallsTemp.toString()}
                      style={{ paddingBottom: '0px', paddingLeft: '20px'}}
                      onKeyPress={(e) => {
                        if (e.key === 'Enter') {
                          console.log('Enter pressed');
                          this.updateNumOptCalls();
                          document.getElementById('numOptCalls').value = '';
                        }
                      }}
                    />
                </FormField>
              </Box>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableCell size='xsmall' scope='col' border='bottom'><b>Iteration</b></TableCell>
                    <TableCell size='xsmall' scope='col' border='bottom'><b># Layers</b></TableCell>
                    <TableCell size='xsmall' scope='col' border='bottom'><b>Optimizer</b></TableCell>
                    <TableCell size='small' scope='col' border='bottom'><b>Loss</b></TableCell>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {lossArr.filter((e, index) => index < numOptCalls).map((e, index) => (
                    <TableRow key={`loss_${index}`}>
                      <TableCell size='xsmall' scope='row'>{index + 1}</TableCell>
                      <TableCell size='xsmall' scope='row'>{numLayersArr[index]}</TableCell>
                      <TableCell size='xsmall' scope='row'>{optimizerArr[index]}</TableCell>
                      <TableCell size='small' scope='row'>{e}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              <Text>
                Best # of Layers: {numLayersArr[numOptCalls]} 
                <br />
                Best Optimizer: {optimizerArr[numOptCalls]}
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
          <Box align='center' justify='center' pad='xsmall' direction='row'
            style = {{ height: '5vh', marginTop: '-5vh' }}>
            <Anchor
              primary={true}
              color='black'
              href='https://github.com/atanasster/hyperparameters'
              target='_blank'
            >
              <Text>Hpjs git</Text>
            </Anchor>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Anchor
              color='black'
              primary={true}
              href='https://github.com/martin-stoyanov/tfjs-iris'
              target='_blank'
            >
              <Text>Site git</Text>
            </Anchor>
          </Box>
        </Box>
      </Grommet>
    );
  }
}

export default Index;
