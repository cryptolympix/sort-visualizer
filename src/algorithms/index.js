import insertionSort, {
  keys as insertionKeys,
  pseudocode as insertionPseudocode,
} from './insertionSort';
import selectionSort, {
  keys as selectionKeys,
  pseudocode as selectionPseudocode,
} from './selectionSort';
import mergeSort, { keys as mergeKeys, pseudocode as mergePseudocode } from './mergeSort';
import heapSort, { keys as heapKeys, pseudocode as heapPseudocode } from './heapSort';
import quickSort, { keys as quickKeys, pseudocode as quickPseudocode } from './quickSort';
import shellSort, { keys as shellKeys, pseudocode as shellPseudocode } from './shellSort';
import bubbleSort, {
  keys as bubbleKeys,
  pseudocode as bubblePseudocode,
} from './bubbleSort';

export const ALGORITHMS = [
  {
    label: 'Insertion Sort',
    function: insertionSort,
    keys: insertionKeys,
    pseudocode: insertionPseudocode,
  },
  {
    label: 'Selection Sort',
    function: selectionSort,
    keys: selectionKeys,
    pseudocode: selectionPseudocode,
  },
  {
    label: 'Merge Sort',
    function: mergeSort,
    keys: mergeKeys,
    pseudocode: mergePseudocode,
  },
  { label: 'Heap Sort', function: heapSort, keys: heapKeys, pseudocode: heapPseudocode },
  {
    label: 'Quick Sort',
    function: quickSort,
    keys: quickKeys,
    pseudocode: quickPseudocode,
  },
  {
    label: 'Shell Sort',
    function: shellSort,
    keys: shellKeys,
    pseudocode: shellPseudocode,
  },
  {
    label: 'Bubble Sort',
    function: bubbleSort,
    keys: bubbleKeys,
    pseudocode: bubblePseudocode,
  },
];
