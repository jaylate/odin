function fibs(n) {
  if (n == 0) return [0];

  const fibList = [0, 1];
  for (let i = 2; i < n; i++) {
    fibList.push(fibList[i - 2] + fibList[i - 1]);
  }
  return fibList;
}

function fibsRec(n) {
  if (n == 0) return [0];
  if (n == 1) return [0, 1];
  const arr = fibsRec(n - 1);
  arr.push(arr[n - 2] + arr[n - 1]);
  return arr;
}

console.log(fibs(8));
console.log(fibsRec(8));
