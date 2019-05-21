/**
 * Sort input array of elements.
 * @param {Array} arrayToSort - Array to sort.
 * @return {Array} sortedArray - Sorted Array
 */
export function bubbleSortingV2(arrayToSort) {
  let artifactFound = false;

  for (let i = 1; i < arrayToSort.length; i++) {
    // console.table({
    //   previousValue: arrayToSort[i - 1],
    //   currentValue: arrayToSort[i],
    //   currentIndex: i,
    //   resultArray: arrayToSort
    // });
    // console.log(arrayToSort);
    if (arrayToSort[i - 1] > arrayToSort[i]) {
      artifactFound = true;
      swapAandB(i, i - 1, arrayToSort);
    }
  }
  if (artifactFound) {
    bubbleSortingV2(arrayToSort);
  }
  return arrayToSort;
}

export function bubbleSortingV1(arrayToSort) {
  for (let i = 1; i < arrayToSort.length; i++) {
    // console.table({
    //   previousValue: arrayToSort[i - 1],
    //   currentValue: arrayToSort[i],
    //   currentIndex: i,
    //   resultArray: arrayToSort
    // });

    // console.log(arrayToSort);
    if (arrayToSort[i - 1] > arrayToSort[i]) {
      // console.count('artifact found');
      swapAandB(i, i - 1, arrayToSort);
      bubbleSortingV1(arrayToSort);
    }
  }

  return arrayToSort;
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
