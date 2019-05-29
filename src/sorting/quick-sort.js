export default function quick(array) {

  if (array.length === 1) {
    return array;
  }

  array[array.length] = Infinity;
  quickSort();

  function quickSort(start = 0, end = array.length) {
    if (start < end) {
      const j = partition(start, end);
      quickSort(start, j);
      quickSort(j + 1, end);
    }
  }

  function partition(start, end) {
    const pivot = array[start];
    let i = start;
    let j = end;

    while (i < j) {
      do {
        i++;
      } while (array[i] <= pivot);

      do {
        j--;
      } while (array[j] > pivot);

      if (i < j) {
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
    }
    const temp = array[start];
    array[start] = array[j];
    array[j] = temp;
    return j;
  }

  return array;
}
