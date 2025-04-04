/* Write a function that takes an array of timestamps (HH:MM) 
from the same day and returns the longest gap in minutes between consecutive timestamps */

function findLongestTimeGap(arr) {
  // Variable to store the largest time gap
  let largestTimeGap = 0;

  // If the array only has one element, there is no time gap
  if(arr.length < 2){
    return 0;
  }

  // Sort the array by timestamp
  arr = arr.sort(function(a, b){return parseInt(a) - parseInt(b)});

  for(let i = 0; i < arr.length - 1; i++){
    // Pointer to check next number
    let j = i + 1; 

    // Variables to store the number of hours for both numbers (int)
    let time1Hrs = parseInt(arr[i].split(":")[0]);
    let time2Hrs = parseInt(arr[j].split(":")[0]);

    // Variables to store the number of minutes for both numbers (int)
    let time1Mins = parseInt(arr[i].split(":")[1]);
    let time2Mins = parseInt(arr[j].split(":")[1]);

    // Variables to store the total minutes for both numbers
    let totalTime1 = (time1Hrs * 60) + time1Mins;
    let totalTime2 = (time2Hrs * 60) + time2Mins;

    // Calculate the gap in minutes
    let currTimeGap = Math.abs(totalTime1 - totalTime2);

    // Calculate the largestTimeGap
    largestTimeGap = Math.max(largestTimeGap, currTimeGap);
  }

  return largestTimeGap;
}

// console.log(findLongestTimeGap(['12:00']));
// console.log(findLongestTimeGap(['09:00', '11:00']));
// console.log(findLongestTimeGap(['14:00', '09:00', '15:00', '10:30']));
// console.log(findLongestTimeGap(['08:00', '10:00', '10:00', '14:00']));