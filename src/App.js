import React, { Component } from 'react';
import './App.css';
import SortChart from './component/molecules/SortChart';
import Controls from './component/molecules/Controls';
import ProgressBar from './component/molecules/ProgressBar';

import { ALGORITHMS } from './algorithms';

class App extends Component {
  state = {
    array: [],
    arraySize: 10,
    algorithm: null,
    trace: [],
    traceStep: -1,
    timeoutIds: [],
    inProgress: false,
    speed: 150, // in ms
  };

  componentDidMount() {
    this.reset();
  }

  generateRandomArray = (size) => {
    const generateRandomInt = (max, min = 1) => {
      return Math.floor(Math.random() * max) + min;
    };

    return Array(size)
      .fill(0)
      .map(() => generateRandomInt(size * 5));
  };

  reset = () => {
    this.clearTimeouts();
    this.setState({
      array: this.generateRandomArray(this.state.arraySize),
      trace: [],
      traceStep: -1,
      inProgress: false,
      timeoutIds: [],
    });
  };

  continue = () => {
    const trace = this.state.trace.slice(this.state.traceStep + 1);
    this.visualize(trace);
  };

  start = async () => {
    this.sortArray(this.state.array)
      .then(() => {
        this.visualize(this.state.trace);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  visualize = (trace) => {
    let timeoutIds = [];

    this.setState({ inProgress: true });

    // Sort the algorithm
    trace.forEach((item, i) => {
      let timeoutId = setTimeout(() => {
        this.setState({
          array: item.array,
          traceStep: this.state.traceStep + 1,
        });
      }, i * this.state.speed);
      timeoutIds.push(timeoutId);
    });

    // Algorithm is sorted
    let timeoutId = setTimeout(() => {
      this.setState({ inProgress: false });
    }, this.state.speed * trace.length);
    timeoutIds.push(timeoutId);

    this.setState({ timeoutIds });
  };

  pause = () => {
    this.clearTimeouts();
  };

  clearTimeouts = () => {
    this.state.timeoutIds.forEach((timeoutId) => {
      clearInterval(timeoutId);
    });
    this.setState({ inProgress: false, timeoutIds: [] });
  };

  sortArray = () => {
    return new Promise((resolve, reject) => {
      let array = [...this.state.array]; // copy
      const sort = this.state.algorithm;
      if (sort) {
        const trace = sort(array);
        if (trace) {
          this.setState({ trace });
          resolve();
        } else {
          reject('Something went wrong when sorting the array');
        }
      } else {
        reject('Cannot find the sorting algorithm');
      }
    });
  };

  onAlgorithmChange = (label) => {
    ALGORITHMS.forEach((algo) => {
      if (algo.label === label) {
        this.setState({ algorithm: algo.function });
        return;
      }
    });
  };

  onArraySizeChange = (size) => {
    size = Number(size);
    const array = this.generateRandomArray(size);
    this.setState({ array, arraySize: array.length });

    const isSorted = this.state.traceStep + 1 === this.state.trace.length;
    if (this.state.inProgress || isSorted) {
      this.clearTimeouts();
      this.setState({
        trace: [],
        traceStep: -1,
        inProgress: false,
        timeoutIds: [],
      });
    }
  };

  render() {
    let visualState = this.state.trace[this.state.traceStep];
    let algorithmLabels = ALGORITHMS.map((algo) => algo.label);

    return (
      <div className="App">
        <div className="App__Body">
          <SortChart numbers={this.state.array} state={visualState} />
          <ProgressBar
            value={this.state.traceStep + 1}
            maxValue={this.state.trace.length}
          />
          <Controls
            onReset={this.reset}
            onStart={this.state.traceStep > -1 ? this.continue : this.start}
            onPause={this.pause}
            inProgress={this.state.inProgress}
            algorithms={algorithmLabels}
            onAlgorithmChange={this.onAlgorithmChange}
            arraySize={this.state.arraySize}
            onArraySizeChange={this.onArraySizeChange}
            speed={this.state.speed}
            onAdjustSpeed={this.onAdjustSpeed}
          />
        </div>
      </div>
    );
  }
}

export default App;
