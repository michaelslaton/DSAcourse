function linearSearch(arr,val){

  for(let i=0;i<arr.length;i++){
    if (arr[i] === val) return i;
  }

  return -1;
}

console.log(linearSearch([1,2,3,4,5,6,7,8,9,10],6)) // 5
console.log(linearSearch([100],100)) // 0
console.log(linearSearch([22,45,65],44)) // -1