// Given an integer n, return true if it's a perfect square AND when reversed, is still a perfect square.

function reversedSquares(n) {
    let nString = n.toString();
    let reversedNString = n.toString().split('').reverse().join('');
    let reversedN = parseInt(reversedNString);

    if(nString.length == 1 && Number.isInteger(Math.sqrt(n))){
        return true;
    } else if(Number.isInteger(Math.sqrt(reversedN))){
        return true;
    } else {
        return false;
    }
}
