/**
 * Sort input array of elements.
 * @param {Array} arrayToSort - Array to sort.
 * @return {Array} sortedArray - Sorted Array
 */
export function selectionSort(arrayToSort) {
  for (let i = 0; i < arrayToSort.length; i++) {
    // console.table({
    //   previousValue: arrayToSort[i - 1],
    //   currentValue: arrayToSort[i],
    //   currentIndex: i,
    //   resultArray: arrayToSort
    // });
  }

  return arrayToSort;
}

/**
 * Compare A and B elements in array.
 * @param {number} indexOfA - Index of A element.
 * @param {number} indexOfB - Index of B element.
 * @param {Array} array - Array to swap into.
 */
function compareAandB(indexOfA, indexOfB, array) {
  return array[indexOfA] > array[indexOfB];
}


/**
 * Swap two(A and B) elements in array.
 * @param {number} indexOfA - Index of A element.
 * @param {number} indexOfB - Index of B element.
 * @param {Array} array - Array to swap into.
 */
function swapAandB(indexOfA, indexOfB, array) {
  const newA = array[indexOfB];
  const newB = array[indexOfA];
  array[indexOfB] = newB;
  array[indexOfA] = newA;
}
