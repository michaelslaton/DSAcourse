function longStringSearch(longStr, shortStr) {
  longStr = longStr.toLowerCase();
  shortStr = shortStr.toLowerCase();

  let count = 0;

  for (let i = 0; i < longStr.length; i++) {
    if (longStr[i] === shortStr[0]) {

      for (let j = 0; j < shortStr.length; j++) {        
        if (longStr[i + j] !== shortStr[j]) break;
        if (j === shortStr.length - 1) count++;
      }

    }
  }

  return count;
}

console.log(longStringSearch("thisthatOmgthatomgandomgthisOmgthat", "omg")); // 4
