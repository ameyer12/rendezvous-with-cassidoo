/* Given an array of side lengths, write a function to determine they can form a hexagon with three side-length pairs
 (as in, three pairs of equal sides needed). Return true if possible. */

function canFormHexagon(arr) {
  // Hashmap to count number frequencies
  let numCounter = {};

  // Loop through the input array to count number frequencies
  for(let i = 0; i < arr.length; i++){
    if(numCounter[arr[i]] == undefined){
      numCounter[arr[i]] = 1;
    } else {
      numCounter[arr[i]]++;
    }
  } 
  // Use the number frequencies to count the number of pairs
  let numCounts = Object.values(numCounter);
  let numPairs = numCounts.filter((x) => x == 2).length;

  // Return true if there are 3 pairs and false otherwise
  return numPairs == 3;
}

// console.log(canFormHexagon([2, 3, 8, 8, 2, 3]));
// console.log(canFormHexagon([1, 2, 3, 4, 5, 6]));
// console.log(canFormHexagon([2, 2, 2, 2, 2, 2, 2]));