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

export const pseudocode = `
A ← unsorted array

for i = 0 to length(A) - 1
  min ← i
  for j = i + 1 to length(A) - 1 do
    if A[j] < A[min] then
      min = j
    end if
  end for
  if min != i then
    swap(A[i], A[min])
  end if
end for
`;
