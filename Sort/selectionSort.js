function sort(arr){
  let newArr = arr;

  for(let i=0;i<newArr.length;i++){
    let min = i;
    for(let j=i+1;j<newArr.length;j++){

      if(newArr[j] < newArr[min]) min = j;
    
    }
    if(i !== min) [arr[i],arr[min]] = [arr[min],arr[i]];
  }

  return newArr;
}

console.log(sort([0,2,4, 7, 1, 9, 10, 2, 6]));