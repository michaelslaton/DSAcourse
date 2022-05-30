function binarySearch(arr,val){
  let left = 0;
  let right = arr.length - 1;
  let middle = Math.floor((right + left) / 2);

  while (arr[middle] !== val && left <= right){
    if (arr[middle] > val) right = middle - 1;
    else  left = middle + 1;

    middle = Math.floor((right + left) / 2);
  }
  
  return arr[middle] === val ? middle : -1;
}

console.log(binarySearch([1,2,3,4,5,6,7,8,9,10],4)) // 3
console.log(binarySearch([22,33,44,55,77,99,100],99)) // 5
console.log(binarySearch([22,33,44,55,77,99,100],98)) // -1