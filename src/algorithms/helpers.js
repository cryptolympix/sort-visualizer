export const swap = (array, i, j) => {
  let temp = array[i];
  array[i] = array[j];
  array[j] = temp;
};

export const addToTrace = (trace, array, groupA, groupB, groupC, sorted) => {
  trace.push({
    array: [...array], // copy
    groupA,
    groupB,
    groupC,
    sorted,
  });
};

export const createRange = (start, end) => {
  return [...Array(end - start).keys()].map((elem) => elem + start);
};

// Get all the nodes of a subtree
export const getSubTree = (tree, node, length) => {
  let nodes = [];

  const leftChild = (k) => 2 * k + 1;
  const rightChild = (k) => 2 * k + 2;

  const getChildren = (k, l) => {
    let c = [];
    if (leftChild(k) <= l) c.push(tree[leftChild(k)]);
    if (rightChild(k) <= l) c.push(tree[rightChild(k)]);
    return c;
  };

  const getAllChildren = (k, l) => {
    nodes.push(k);
    let c = getChildren(k, l);
    if (c.length > 0) {
      if (c[0]) getAllChildren(leftChild(k), l);
      if (c[1]) getAllChildren(rightChild(k), l);
    }
  };

  getAllChildren(node, length);
  return nodes;
};
