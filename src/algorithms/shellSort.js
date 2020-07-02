import { addToTrace, createRange } from './helpers';

export default (numbers) => {
  let trace = [];
  let gaps = [/*701, 301, 132, 57,*/ 23, 10, 4, 1];

  gaps.forEach((gap) => {
    for (let i = 0; i < numbers.length; i++) {
      let temp = numbers[i];
      let j = i;
      while (j >= gap && numbers[j - gap] > temp) {
        numbers[j] = numbers[j - gap];
        j -= gap;
      }
      numbers[j] = temp;
      if (i !== j) addToTrace(trace, numbers, [], [i, j], [], []);
    }
  });

  addToTrace(trace, numbers, [], [], [], createRange(0, numbers.length));
  return trace;
};

export const keys = {
  groupA: 'Comparing',
  groupB: 'Swapping',
};

export const pseudocode = `
A ← unsorted array
gaps ← [701, 301, 132, 57, 23, 10, 4, 1]

foreach gap in gaps do
  for i = 0 to length(A) do
    j ← i
    while j ≥ gap and A[j-gap] > temp
      A[j] ← A[j-gap]
      j ← j - gap
    end while
    A[j] ← temp
  end for
end foreach
`;
