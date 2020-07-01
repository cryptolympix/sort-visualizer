import { swap, addToTrace, createRange } from './helpers';

export default (numbers) => {
  let i = 1;
  let trace = [];

  // Core algorithm
  while (i < numbers.length) {
    let j = i;
    addToTrace(trace, numbers, [j, j - 1], [], [], []);
    while (j > 0 && numbers[j - 1] > numbers[j]) {
      swap(numbers, j, j - 1);
      addToTrace(trace, numbers, [], [j, j - 1], [], []);
      j--;
    }
    i++;
  }

  addToTrace(trace, numbers, [], [], [], createRange(0, numbers.length));
  return trace;
};

export const keys = {
  groupA: 'Comparing',
  groupB: 'Swapping',
};
