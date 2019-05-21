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

    for (let k = i; k < arrayToSort.length; k++) {
      // console.log(arrayToSort[i], arrayToSort[k], arrayToSort[i] > arrayToSort[k]);
      if (arrayToSort[i] > arrayToSort[k]) {
        // console.log(temp, arrayToSort[k]);
        swapAandB(k, i, arrayToSort) ;
      }
    }

    // if(arrayToSort[i] < arrayToSort[i-1] ) {
    //   const temp = [...arrayToSort];
    //   swapAandB(i, i - 1, temp);
    //   // console.table({'arrayToSort[i]': arrayToSort[i], 'result[i - 1]': arrayToSort[i-1]});
    //   selectionSort(temp);
    // }
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
