// Given an array of numbers, add all of the values together but only if the number doesn't repeat a digit.

function uniqueSum(arr) {
  let result = 0;

  // Loop over the the input array
  for(let i = 0; i < arr.length; i++){
    // Convert each number to an array containing each digit
    let digitArr = [...arr[i].toString()]

    // Define a set, which will be used to compare to the digitArr
    let digitSet = new Set(digitArr)

    // If the length of digitArr matches the size of digitSet, it means there are no duplicates, and the number can be added to the result
    if(digitArr.length == digitSet.size){
      result += arr[i];
    }   
  }
  return result;
}

// console.log(uniqueSum([101, 2, 3]));