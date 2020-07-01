import { addToTrace, createRange, swap } from './helpers';

export default (numbers) => {
  let trace = [];
  let sorted = [];

  const partition = (array, lo, hi) => {
    let pivot = array[hi];
    let i = lo;
    for (let j = lo; j <= hi; j++) {
      addToTrace(trace, numbers, [j, hi], [], [], sorted);
      if (array[j] < pivot) {
        swap(array, i, j);
        addToTrace(trace, numbers, [], [i, j], [], sorted);
        i++;
      }
    }
    swap(array, i, hi);
    sorted = sorted.concat([i]);
    addToTrace(trace, numbers, [], [i, hi], [], sorted);
    return i;
  };

  const quickSort = (array, lo, hi) => {
    if (lo < hi) {
      let p = partition(array, lo, hi);
      quickSort(array, lo, p - 1);
      quickSort(array, p + 1, hi);
    } else {
      sorted = sorted.concat([hi]);
    }
  };

  quickSort(numbers, 0, numbers.length - 1);
  addToTrace(trace, numbers, [], [], [], createRange(0, numbers.length));
  return trace;
};

export const keys = {
  groupA: 'Comparing',
  groupB: 'Swapping',
};

export const pseudocode = `
function partition(A, lo, hi) is
  pivot ← A[hi]
  i ← lo
  for j = lo to hi do
    if A[j] < pivot then
      swap A[i] with A[j]
      i ← i + 1
    end if
  end for
  swap A[i] with A[hi]
  return i
end function

function quicksort(A, lo, hi) is
  if lo < hi then
    p ← partition(A, lo, hi)
    quicksort(A, lo, p - 1)
    quicksort(A, p + 1, hi)
  end if
end function
`;
