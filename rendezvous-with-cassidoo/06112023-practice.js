// Given an array arr and integers n and m, remove n elements from the front of the array, and m elements from the back. Assume that n + m <= arr.length.

function trimArray(arr, n, m) {
    let start = n;
    let end = arr.length-m;

    arr = arr.slice(start, end);

    return arr;
}
