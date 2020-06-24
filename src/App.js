import React, { Component } from 'react';
import './App.css';
import SortChart from './component/SortChart';
import Controls from './component/Controls';

class App extends Component {
  state = {
    array: [],
    arraySize: 20,
    trace: [],
    traceStep: -1,
    timeoutIds: [],
    inProgress: false,
    speed: 150,
  };

  componentDidMount() {
    this.reset();
  }

  generateRandomArray = () => {
    const generateRandomInt = (max, min = 1) => {
      return Math.floor(Math.random() * max) + min;
    };

    return Array(this.state.arraySize)
      .fill(0)
      .map(() => generateRandomInt(this.state.arraySize * 5));
  };

  reset = () => {
    this.clearTimeouts();
    this.setState({
      array: this.generateRandomArray(),
      trace: [],
      traceStep: -1,
      inProgress: false,
      timeoutIds: [],
    });
  };

  start = async () => {
    // Cannot start if the array is sorted
    if (this.state.trace.length > 0) return;

    let timeoutIds = [];

    this.setState({ inProgress: true });
    await this.sortArray(this.state.array);

    // Sort the algorithm
    this.state.trace.forEach((item, i) => {
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
    }, this.state.speed * this.state.trace.length);
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
    let array = [...this.state.array]; // copy
    this.insertionSort(array);
  };

  insertionSort = (array) => {
    let i = 1;
    let trace = [];

    const swap = (array, i, j) => {
      let temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    };

    const addToTrace = (array, comparing, sorted) => {
      trace.push({
        array,
        comparing,
        sorted,
      });
    };

    // Core algorithm
    while (i < array.length) {
      let j = i;
      while (j > 0 && array[j - 1] > array[j]) {
        swap(array, j, j - 1);
        addToTrace([...array], [j, j - 1], false);
        j--;
      }
      i++;
    }
    addToTrace([...array], [], true);

    this.setState({ trace });
  };

  render() {
    let visualState = this.state.trace[this.state.traceStep];
    return (
      <div className="App">
        <div className="App__Body">
          <SortChart numbers={this.state.array} state={visualState} />
          <Controls
            onReset={this.reset}
            onStart={this.start}
            onPause={this.pause}
            inProgress={this.state.inProgress}
          />
        </div>
      </div>
    );
  }
}

export default App;
