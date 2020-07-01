import { addToTrace, createRange, swap, getSubTree } from './helpers';

export default (numbers) => {
  let trace = [];
  let sorted = [];

  const leftChild = (k) => 2 * k + 1;
  // const rightChild = (k) => 2 * k + 2;

  // Transform the tree to max heap
  const heapify = (tree, node, l) => {
    let k = node;
    let j = leftChild(k);

    while (j <= l) {
      // Get the greater child of the node
      if (j < l && tree[j] < tree[j + 1]) j++;
      // Compare the the greater child and the parent
      addToTrace(trace, tree, [k, j], [], [], sorted);
      if (tree[k] < tree[j]) {
        // Swap them if the child is greater than the parent
        swap(tree, k, j);
        addToTrace(trace, tree, [], [k, j], [], sorted);
        // Go to the next level (down)
        k = j;
        j = leftChild(k);
      } else {
        break;
      }
    }
  };

  const heapSort = (tree, l) => {
    // Transform the tree to max heap
    for (let i = l / 2 - 1; i >= 0; i--) {
      i = Math.floor(i);
      heapify(tree, i, l);
      addToTrace(trace, tree, [], [], getSubTree(tree, i, l), sorted);
    }
    // Main loop
    for (let i = l - 1; i > 0; i--) {
      swap(tree, i, 0);
      sorted = createRange(i, l);
      addToTrace(trace, tree, [], [i, 0], [], sorted);
      heapify(tree, 0, i - 1);
      addToTrace(trace, tree, [], [], getSubTree(tree, 0, i - 1), sorted);
    }
  };

  heapSort(numbers, numbers.length);
  addToTrace(trace, numbers, [], [], [], createRange(0, numbers.length));
  return trace;
};

export const keys = {
  groupA: 'Comparing',
  groupB: 'Swapping',
  groupC: 'Heap built',
};

export const pseudocode = `
function heapify (tree, node, length) is
  k ← node
  j ← 2 * k + 1

  while j ≤ length
    if j < length and tree[j] < tree[j + 1] then
      j ← j + 1
    end if
    if tree[k] < tree[j] then
      swap tree[k] with tree[j]
      k ← j
      j ← 2 * k  + 1
    end if
  end while
end function

function heap_sort (tree, length) is
  for i = length/2 - 1 to 0 do
    heapify(tree, i, length)
  end for
  for i = length - 1 to 1 do
    swap tree[i] with tree[0]
    heapify(tree, 0, i - 1)
  end for
end function
`;
