function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let mergedArrayFirst = mergeSort(arr.slice(0, mid));
  let mergedArrayLast = mergeSort(arr.slice(mid));

  let merged = [];

  let i = 0,
    j = 0;

  while (i < mergedArrayFirst.length && j < mergedArrayLast.length) {
    if (mergedArrayFirst[i] < mergedArrayLast[j]) {
      merged.push(mergedArrayFirst[i]);
      i++;
    } else {
      merged.push(mergedArrayLast[j]);
      j++;
    }
  }
  while (i < mergedArrayFirst.length) {
    merged.push(mergedArrayFirst[i]);
    i++;
  }

  while (j < mergedArrayLast.length) {
    merged.push(mergedArrayLast[j]);
    j++;
  }

  return merged;
}

console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]));
console.log(mergeSort([105, 79, 100, 110]));
