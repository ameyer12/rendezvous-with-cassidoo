// Find the last non-repeating character in a given string. If all characters repeat, return an empty string.

function nonRepeat(string) {
  // Remove spaces
  let noSpaceStr = string.replaceAll(" ", "");
  let charCounter = {};

  // Iterate through to count character frequencies
  for(let i = 0; i < noSpaceStr.length; i++){
    let char = noSpaceStr[i];

    if(charCounter[char] == undefined){
      charCounter[char] = 1;
    } else {
      charCounter[char]++;
    }
  }

  // Iterate through charCounter to find the last non-repeating character
  for(let i = Object.keys(charCounter).length - 1; i >= 0; i--){
    let key = Object.keys(charCounter)[i];

    if(charCounter[key] < 2){
      return key;
    }
  }
  return "";
}

// console.log(nonRepeat("candy canes do taste yummy"));