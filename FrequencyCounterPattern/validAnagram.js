function validAnagram(str1,str2){
  if (str1.length !== str2.length) return false;

  let breakdown = {};
  
  for(let char of str1){
      if(breakdown[char]) breakdown[char]++
      else breakdown[char] = 1;
  }
  
  for(let char of str2){
    if(!breakdown[char]) return false
    else breakdown[char]-=1;
  }
  
  return true
};

console.log(validAnagram('','')); // true
console.log(validAnagram('aaz','zza')); // false
console.log(validAnagram('anagram','nagaram')); // false