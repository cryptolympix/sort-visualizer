import { addToTrace, createRange, swap } from './helpers';

export default (numbers) => {
  let trace = [];
  let n = numbers.length;
  let swapped = false;

  do {
    swapped = false;
    for (let i = 1; i < n; i++) {
      addToTrace(trace, numbers, [i - 1, i], [], [], createRange(n, numbers.length));
      if (numbers[i - 1] > numbers[i]) {
        swap(numbers, i - 1, i);
        swapped = true;
        addToTrace(trace, numbers, [], [i - 1, i], [], createRange(n, numbers.length));
      }
    }
    n--;
  } while (swapped);

  addToTrace(trace, numbers, [], [], [], createRange(0, numbers.length));
  return trace;
};

export const keys = {
  groupA: 'Comparing',
  groupB: 'Swapping',
};

export const pseudocode = `
A ← unsorted array
n ← length(A)

repeat
  swapped ← false
  for i = 1 to n - 1 do
    if A[i-1] > A[i] then
      swap A[i-1] with A[i]
      swapped = true
    end if
  end for
until not swapped
`;
