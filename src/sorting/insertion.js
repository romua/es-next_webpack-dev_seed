export default function insertionSort(arrayToSort) {
  if (arrayToSort.length === 1) {
    return arrayToSort;
  }
  for (let i = 1; i !== arrayToSort.length;) {
    if (arrayToSort[i] < arrayToSort[i - 1]) {
      for (let j = i; j !== 0;) {
        if (arrayToSort[j] < arrayToSort[j - 1]) {
          const temp = arrayToSort[j];
          arrayToSort[j] = arrayToSort[j - 1];
          arrayToSort[j - 1] = temp;
          j--;
        } else {
          j--;
        }
      }
      i++;
    } else {
      i++;
    }
  }
  return arrayToSort;
}
