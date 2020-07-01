import { swap, addToTrace, createRange } from './helpers';

export default (numbers) => {
  let trace = [];

  for (let i = 0; i < numbers.length; i++) {
    let min = i;
    for (let j = i + 1; j < numbers.length; j++) {
      addToTrace(trace, numbers, [j, min], [], [], createRange(0, i));
      if (numbers[j] < numbers[min]) {
        min = j;
      }
    }
    if (min !== i) {
      swap(numbers, i, min);
      addToTrace(trace, numbers, [], [i, min], [], createRange(0, i));
    }
  }

  addToTrace(trace, numbers, [], [], [], createRange(0, numbers.length));
  return trace;
};

export const keys = {
  groupA: 'Comparing',
  groupB: 'Swapping',
};
