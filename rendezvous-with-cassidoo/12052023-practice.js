/* There is a sorted integer array that has been rotated an unknown number of times. Given that rotated array, 
return how many times it has been rotated. It may contain duplicate numbers! */

// Helper function to rotate an array
function rotate(arr){
    // Variable to store the first element in the array
    let firstElement = arr[0];

    // Remove the first element
    arr.shift();

    // Add the first element to the back of the array
    arr.push(firstElement);
}

// Function to determine the number of times the array had been rotated
function rotatedNum(arr){
    // Variables to store the original array, the sorted array for comparison, and the number of rotations
    let originalArr = [...arr];
    let sortedArr = arr.sort(function(a, b){return a-b});
    let rotations = 0;

    // While loop that iterated until the original array is not sorted
    while(JSON.stringify(originalArr) != JSON.stringify(sortedArr)){
        // Envoke the rotate function to rotate the array
        rotate(originalArr);
        
        // Increment the rotations value by 1
        rotations++;
    }

    return rotations;
}

<<<<<<< HEAD
// console.log(rotatedNum([4, 0, 1, 2, 3]));

=======
console.log(rotatedNum([4, 0, 1, 2, 3]));
>>>>>>> f4cddff55742a626c1945333946c41d07231cef8
