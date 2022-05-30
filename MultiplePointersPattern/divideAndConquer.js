function search(array, val) {
  let min = 0;
  let max = array.length - 1;

  while (min <= max) {
    let middle = Math.floor((min + max) / 2);
    console.log(middle)
    if (array[middle] < val) min = middle + 1;
    else if (array[middle] > val) max = middle - 1;
    else return middle;

  }

  return -1;
}

console.log(search([1,2,3,4,5,10,11,12,13,15,16,17,18,20,21,22,23,24,27,28,29,30],21)) // 14