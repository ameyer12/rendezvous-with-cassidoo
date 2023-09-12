// Given an array of integers, sort them into two separate sorted arrays of even and odd numbers. If you see a zero, skip it.

function seperateAndSort(arr) {
    splitArrays = [[],[]]
    
    // Iterate through the array, and add non-zero numbers to either even (splitArrays[0]) or odd (splitArrays[1])
    for(num in arr) {
        number = arr[num];

        if(number == 0){
            continue;
        } else if(number % 2 == 0){
            splitArrays[0].push(number)
        } else {
            splitArrays[1].push(number);
        }
    };

    // Sort the even and odd arrays before sorting
    splitArrays[0] = splitArrays[0].sort()
    splitArrays[1] = splitArrays[1].sort()

    return splitArrays;
}

