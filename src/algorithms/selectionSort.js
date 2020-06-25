import { swap, addToTrace } from './helpers';

export default (array) => {
  let trace = [];

  for (let i = 0; i < array.length; i++) {
    let min = i;
    for (let j = i + 1; j < array.length; j++) {
      addToTrace(trace, [...array], [j, min], [], false);
      if (array[j] < array[min]) {
        min = j;
      }
    }
    if (min !== i) {
      swap(array, i, min);
      addToTrace(trace, [...array], [], [i, min], false);
    }
  }

  addToTrace(trace, [...array], [], [], true);
  return trace;
};
