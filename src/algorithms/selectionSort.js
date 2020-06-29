import { swap, addToTrace, createRange } from './helpers';

export default (array) => {
  let trace = [];

  for (let i = 0; i < array.length; i++) {
    let min = i;
    for (let j = i + 1; j < array.length; j++) {
      addToTrace(trace, array, [j, min], [], createRange(0, i));
      if (array[j] < array[min]) {
        min = j;
      }
    }
    if (min !== i) {
      swap(array, i, min);
      addToTrace(trace, array, [], [i, min], createRange(0, i));
    }
  }

  addToTrace(trace, array, [], [], createRange(0, array.length));
  return trace;
};

export const keys = {
  groupA: 'Comparing',
  groupB: 'Swapping',
};
