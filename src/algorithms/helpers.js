export const swap = (array, i, j) => {
  let temp = array[i];
  array[i] = array[j];
  array[j] = temp;
};

export const addToTrace = (trace, array, comparing, swapping, sorted) => {
  trace.push({
    array,
    comparing,
    swapping,
    sorted,
  });
};
