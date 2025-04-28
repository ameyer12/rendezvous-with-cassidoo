/* Given an array of characters chars, compress it such that consecutive duplicate characters are replaced with the character
 followed by the count of duplicates. If the count is 1, omit it. */

 function compress(arr) {
  let res = [];
  let charCounter = {};

  // Loop through and count the character frequencies
  for(let i = 0; i < arr.length; i++){
    if (!charCounter[arr[i]]){
      charCounter[arr[i]] = 1;
    } else {
      charCounter[arr[i]]++;
    }
  }

  // Loop through the charCounter object to generate the res array
  for(char in charCounter) {
    // If the count is 1, omit it. Otherwise, include the count
    if(charCounter[char] < 2){
      res.push(char);
    } else {
      res.push(char);
      res.push(charCounter[char].toString());
    }
  }

  return res;
 }

//  console.log(compress(["a", "b", "b", "b", "c"]));
//  console.log(compress(["a", "a", "b", "b", "c", "c", "c"]));
