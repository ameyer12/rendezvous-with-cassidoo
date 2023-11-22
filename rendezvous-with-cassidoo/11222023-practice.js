/* Given a start number a, an ending number b, and a string str that can be "odd", "even", or "prime", return all of the numbers that are odd, 
even, or prime between a and b. a will not always necessarily be less than b! */

function betweenNums(a, b, evalType) {
    // Variable to store the result array, the start variable, and the end variable
    let result = [];
    let start = 0;
    let end = 0;

    if(a < b){
        start = a;
        end = b;
    } else if(a > b){
        start = b;
        end = a;
    } else {
        // Handling the edge case where a and b are equal
        if(evalType == "prime"){
            for(let i = 2; i < a; i++){
                if(a % i == 0){
                    return result;
                }
            }
            result.push(a);
        } else if(evalType == "even"){
            if(a % 2 == 0){
                result.push(a);
            }
        } else {
            if(a % 2 != 0){
                result.push(a);
            }
        }
    }

    if(start < end){
        if(evalType == "prime"){
            for(let i = start; i <= end; i++){
                let isPrime = true;
                for(let j = 2; j < i; j++) 
                    if(i % j == 0){
                        isPrime = false;
                        break; 
                    }        
                if(i > 1 && isPrime){
                    result.push(i);
                }
            }
        } else if(evalType == "even"){
            for(let i = start; i <= end; i++){
                if(i % 2 == 0){
                    result.push(i);
                }       
            }
        } else {
            for(let i = start; i <= end; i++){
                if(i % 2 != 0){
                    result.push(i);
                }       
            }
        }
    } 
    return result;
}

console.log(betweenNums(15, 1, 'prime'))