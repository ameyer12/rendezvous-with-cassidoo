/* Function that finds the maximum number of gifts that can be wrapped using a single strip of wrapping paper of a given width. 
Each gift has a specific length, and you can only wrap gifts if their total length fits 
within the paper width without cutting the paper
*/

// Greedy Approach
function wrapGifts(arr, length) {
  // Variable to store the maximim number of gifts
  let maxGifts = 0;

  // Sort the gifts array
  let sortedGifts = arr.sort();

  // Initialize a pointer
  let i = 0;

  // While there is unused wrapping paper
  while (length > 0) {

    // If there is enough wrapping paper left, wrap the smallest remaining present. Otherwise, break.
    if (length >= sortedGifts[i]) {
      maxGifts++;
      length -= sortedGifts[i];
    } else {
      break;
    }

    i++;
  }

  return maxGifts
}


// console.log(wrapGifts([2, 3, 4, 5], 7));
// console.log(wrapGifts([1, 1, 1, 1, 1, 1, 1], 3));
// console.log(wrapGifts([1, 2, 3, 4, 5], 6));
