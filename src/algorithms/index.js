import insertionSort, { keys as insertionKeys } from './insertionSort';
import selectionSort, { keys as selectionKeys } from './selectionSort';
import mergeSort, { keys as mergeKeys } from './mergeSort';
import heapSort, { keys as heapKeys } from './heapSort';

export const ALGORITHMS = [
  { label: 'Insertion Sort', function: insertionSort, keys: insertionKeys },
  { label: 'Selection Sort', function: selectionSort, keys: selectionKeys },
  { label: 'Merge Sort', function: mergeSort, keys: mergeKeys },
  { label: 'Heap Sort', function: heapSort, keys: heapKeys },
];
