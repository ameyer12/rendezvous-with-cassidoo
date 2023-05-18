// Write a function to find out whether the binary representation of a number is palindrome or not.

function convertToBinary(n) {
    let remainderArray = [];

    if(n === 0){
        return "0";
    }

    while(n >= 1){
        remainderArray.push(Math.floor(n % 2));
        n = n/2;
    }
    return remainderArray.reverse().join("");
}

function binaryPal(n) {
    let num = convertToBinary(n);
    let start = 0;
    let end = num.length-1;

    if(num == 0 || num == 1 || num == -1){
        return true;
    }
    
    while(start <= end){
        if(num[start] !== num[end]){
            return false;
        }
        start++;
        end--;
    }
    return true;
}

console.log(binaryPal(127))