export const swap = (array, i, j) => {
  let temp = array[i];
  array[i] = array[j];
  array[j] = temp;
};

export const addToTrace = (trace, array, groupA, groupB, sorted) => {
  trace.push({
    array: [...array], // copy
    groupA,
    groupB,
    sorted,
  });
};

export const createRange = (start, end) => {
  return [...Array(end - start).keys()].map((elem) => elem + start);
};
