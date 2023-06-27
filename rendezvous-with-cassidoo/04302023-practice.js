// Given a non-empty array containing only non-negative integers, return the list with trailing and leading zeroes removed.

function removeZeroes(array) {
    let start = 0;
    let end = array.length-1;

    if(array.length < 1){
        return "Invalid input. The array must have at least one element.";
    }

    while(array[start] == 0){
        start++;
    }

    while(array[end] == 0){
        end--;
    }

    end = end + 1;

    let resultArray = array.slice(start, end);

    return resultArray;
}  
