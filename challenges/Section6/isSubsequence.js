function isSubsequence(str1,str2) {
  if (str1.length === 0 || str2.length === 0) return false;
  
  let i = 0;

  for(let char of str2){
    if (str1[i] === char) i++
    if (i === str1.length) return true
  }

  return false;
}

console.log(isSubsequence('hello','hello world')) // true
console.log(isSubsequence('sing', 'sting')) // true
console.log(isSubsequence('abc', 'abracadabara')) // true
console.log(isSubsequence('abc', 'acb')) // false (order matters)
console.log(isSubsequence('gle', 'my late grandmother told me')) // true