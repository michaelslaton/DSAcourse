function sameFrequency(num1,num2){
  let str1 = num1.toString()
  let str2 = num2.toString()

  if (str1.length !== str2.length) return false
  
  let obj = {};

  for(let num of str1){
    if(obj[num]) obj[num]++
    else obj[num] = 1
  }

  for(let num of str2){
    if(obj[num]>0) obj[num]--
    else return false
  }

  return true;
}

console.log(sameFrequency(182,281)) // true
console.log(sameFrequency(34,14)) // false
console.log(sameFrequency(3589578,5879385)) //true
console.log(sameFrequency(22,222)) // false
console.log(sameFrequency(211,111)) // true