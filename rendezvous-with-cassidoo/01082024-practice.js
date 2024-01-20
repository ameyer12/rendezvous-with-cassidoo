// You have an array of letters. Return the number of possible sequences of letters you can make using the letters in the array. Extra credit: print the sequences!

// function combinations(array) {
//     return new Array(1 << array.length).fill().map(
//       (e1, i) => array.filter((e2, j) => i & 1 << j));
//   }

function letters(arr){
  if(arr.length > 2){
    return Math.pow(2, arr.length);
  } else if(arr.length < 2){
    return 1;
  } else if(arr.length < 1){
    return -1;
  }
}

console.log(letters(['A', 'B', 'C', 'D', 'E']));

