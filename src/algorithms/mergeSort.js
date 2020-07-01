import { addToTrace, createRange } from './helpers';

export default (numbers) => {
  let trace = [];

  const mergeSort = (array, start, end) => {
    // Base case. A list of zero or one elements is sorted, by definition.
    if (array.length <= 1) {
      return array;
    }

    let mid = Math.floor(array.length / 2);

    // Recursive case. First, divide the list into equal-sized sublists
    // consisting of the first half and second half of the list.
    // This assumes lists start at index 0.
    let left = [];
    let right = [];
    for (let i = 0; i < array.length; i++) {
      if (i < mid) {
        left.push(array[i]);
      } else {
        right.push(array[i]);
      }
    }

    // Recursively sort left sublist.
    addToTrace(trace, numbers, [], createRange(start, start + mid), [], []);
    left = mergeSort(left, start, start + mid);
    // Recursively sort right sublist.
    addToTrace(trace, numbers, [], createRange(start + mid, end), [], []);
    right = mergeSort(right, start + mid, end);

    // Then merge the now-sorted sublists.
    let merged = merge(left, right);
    for (let i = 0; i < merged.length; i++) {
      numbers[start + i] = merged[i];
      addToTrace(trace, numbers, [start + i], [], [], []);
    }
    return merged;
  };

  const merge = (left, right) => {
    let result = [];

    while (left.length > 0 && right.length > 0) {
      if (left[0] <= right[0]) {
        result.push(left[0]);
        left = [...left.slice(1)];
      } else {
        result.push(right[0]);
        right = [...right.slice(1)];
      }
    }

    // Either left or right may have elements left; consume them.
    // (Only one of the following loops will actually be entered.)
    while (left.length > 0) {
      result.push(left[0]);
      left = [...left.slice(1)];
    }
    while (right.length > 0) {
      result.push(right[0]);
      right = [...right.slice(1)];
    }

    return result;
  };

  let sortedList = mergeSort(numbers, 0, numbers.length);
  addToTrace(trace, sortedList, [], [], [], createRange(0, numbers.length));
  return trace;
};

export const keys = {
  groupA: 'Overwrite',
  groupB: 'Call merge sort',
};

export const pseudocode = `
function merge_sort (list) is
  if length(list) <= 1 then
    return list
  end if

  left ← empty list
  right ← empty list
  for each x with index i in list do
    if i < length(m)/2 then
      add x to left
    else 
      add x to right
    end if
  end for

  left ← merge_sort(left)
  right ← merge_sort(right)

  return merge(left, right)
end function

function merge (left, right) is
  result ← empty list

  while left is not empty and right is not empty do
    if first(left) ≤ first(right) then
      append first(left) to result
      left ← rest(left)
    else
      append first(right) to result
      right ← rest(right)
    end if

    while left is not empty do
        append first(left) to result
        left ← rest(left)
    end while

    while right is not empty do
        append first(right) to result
        right ← rest(right)
    end while
end function
`;
