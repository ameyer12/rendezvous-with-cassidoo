// Sum the odd-square numbers less than a given integer n.

function oddSquareSum(n) {
    let result = 0;

    for(let i = 1; i < n; i+=2){
        let oddSquareNum = Math.pow(i, 2);
        if(oddSquareNum < n){
            result += oddSquareNum;
        }
    }
    return result;
}