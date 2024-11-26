// // You're organizing a family meal. Given a list of dishes and their respective preparation times, 
// // return the minimum number of hours required to prepare all dishes if you can cook up to two dishes simultaneously. 
// // If a dish takes longer than the remaining time of the current hour, it will be moved to the next hour.

function mealPrep(arr) {
  // Edge case where there are no dishes
  if(arr.length == 0){
    return 0;
  }

  // Sort the meal times in descending order
  let sortedTimes = arr.sort((a, b) => b - a);

  // Initialize pointers and array to store pairs
  let i = 0;
  let j = sortedTimes.length - 1
  let pairedArr = [];

  // Loop through the array, and for each pair, add the larger element
  while(i <= j){
    pairedArr.push(sortedTimes[i]);

    i++;
    j--;
  }

  // Variable to store and minHours
  let minHours = 0;

  // Loop through pairedArr
  for(let i = 0; i < pairedArr.length; i++){
    // Add the number of hours needed for current batch
    minHours += Math.ceil(pairedArr[i] / 60)
  }

  return Math.ceil(minHours);
}

// console.log(mealPrep([120]))
// console.log(mealPrep([30, 30, 30, 20]))
// console.log(mealPrep([30, 25, 45, 30, 60, 15]))






