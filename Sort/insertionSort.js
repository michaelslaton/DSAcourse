function sort(arr) {
  let newArr = arr;
  let currentVal;

  for (let i = 1; i < newArr.length; i++) {
    currentVal = newArr[i];

    const j = i - 1;

    while (j >= 0 && currentVal < newArr[j]) {
      newArr[j + 1] = newArr[j];
      j--;
    }

    newArr[j + 1] = currentVal;
  }

  return newArr;

}

console.log(sort([4, 7, 1, 0, 9, -3, 2, 6, 10]));
