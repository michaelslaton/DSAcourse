function merge(arr1, arr2) {
  let newArr = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr2[j] > arr1[i]) {
      newArr.push(arr1[i]);
      i++;
    } else {
      newArr.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    newArr.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    newArr.push(arr2[j]);
    j++;
  }

  return newArr;
}

function sort(arr){
  let newArr = arr;
  if(newArr.length <= 1) return newArr;
  const mid = Math.floor(newArr.length/2)
  const left = sort(newArr.slice(0,mid))
  const right = sort(newArr.slice(mid))
  return merge(left,right);
}

console.log(sort([2, 6, 34, 55, 5, 4, 7, 3, 22, 16, 8])); // [ 2, 3,  4,  5,  6, 7, 8, 16, 22, 34, 55 ]
