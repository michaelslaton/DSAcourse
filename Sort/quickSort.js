function pivot(arr, start=0, end=arr.length+1){

  function swap(array, i, j){
    [[array[i]],[array[j]]] = [[array[j]],[array[i]]]
  }

  let pivot = arr[start];
  let swapIdx = start;

  for(let i=start+1;i<arr.length; i++){
    if(pivot > arr[i]) {
      swapIdx++
      swap(arr,swapIdx,i);
    }

  }
  swap(arr,start,swapIdx)
  return swapIdx;
}

function sort (arr, left=0, right=arr.length-1){
  if(left < right) {
    let pivotIndex = pivot(arr, left, right)
    sort(arr,left,pivotIndex-1)
    sort(arr,pivotIndex+1,right)
  }
  return arr;
}

console.log(sort([5,2,1,8,4,7,6,3])) // [ 1, 2, 3, 4, 5, 6, 7, 8 ]