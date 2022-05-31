function sort(arr) {
  let newArr = arr;
  let noSwaps;

  for (let i = newArr.length; i > 0; i--) {
    noSwaps = true;

    for (let j = 0; j < i - 1; j++) {
      if (newArr[j] > newArr[j + 1]) {
        [arr[j],arr[j+1]] = [arr[j+1],arr[j]];
        noSwaps = false;
      }
    }

    if(noSwaps) break;
  }
  return newArr;
}

console.log(sort([4, 7, 1, 9, 2, 6, 10]));