import { swap, addToTrace } from './helpers';

export default (array) => {
  let i = 1;
  let trace = [];

  // Core algorithm
  while (i < array.length) {
    let j = i;
    while (j > 0 && array[j - 1] > array[j]) {
      swap(array, j, j - 1);
      addToTrace(trace, [...array], [j, j - 1], false);
      j--;
    }
    i++;
  }
  addToTrace(trace, [...array], [], true);

  return trace;
};
