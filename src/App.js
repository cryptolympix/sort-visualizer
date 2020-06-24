import React, { Component } from 'react';
import './App.css';
import SortChart from './component/SortChart';
import Controls from './component/Controls';

class App extends Component {
  state = {
    array: [],
    arraySize: 20,
    comparing: [],
    inProgress: false,
    sorted: false,
    timeoutIds: [],
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
    this.setState({
      array: this.generateRandomArray(),
      sorted: false,
      inProgress: false,
      comparing: [],
      timeoutIds: [],
    });
  };

  start = (sortType) => {
    if (this.state.inProgress) {
      return;
    }

    switch (sortType) {
      default:
        this.setState({ inProgress: true });
        this.insertionSort(this.state.array);
        break;
    }
  };

  stop = () => {
    this.state.timeoutIds.forEach((timeoutId) => {
      clearInterval(timeoutId);
    });
    this.setState({ inProgress: false, timeoutIds: [] });
  };

  insertionSort = (array) => {
    let i = 1;
    let timer = 150;
    let timeoutIds = [];

    const swap = (array, i, j) => {
      let temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    };

    // Sort the array
    while (i < array.length) {
      let j = i;
      let timeoutId = setTimeout(
        (j) => {
          while (j > 0 && array[j - 1] > array[j]) {
            swap(array, j, j - 1);
            this.setState({ array, comparing: [j, j - 1] });
            j--;
          }
        },
        i * timer,
        j
      );
      i++;
      timeoutIds.push(timeoutId);
    }

    // The array is sorted
    let timeoutId = setTimeout(() => {
      this.setState({ sorted: true });
    }, i * timer);
    timeoutIds.push(timeoutId);

    this.setState({ timeoutIds });
  };

  render() {
    return (
      <div className="App">
        <div className="App__Body">
          <SortChart
            numbers={this.state.array}
            comparing={this.state.comparing}
            sorted={this.state.sorted}
          />
          <Controls reset={this.reset} start={this.start} stop={this.stop} />
        </div>
      </div>
    );
  }
}

export default App;
