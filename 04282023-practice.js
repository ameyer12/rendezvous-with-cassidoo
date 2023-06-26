/* Given an array of integers, find whether it’s possible to construct an integer using all the digits of the numbers in the array such that it would be divisible by n 
(where n is 1 <= n <= 9). If it’s possible, return true, else return false. */

// function divisibleIntegers(n, array) {
//     let newArray = array.toString().split("").filter(char => char !== ",");
//     let newArrayCopy = array.toString().split("").filter(char => char !== ",");
//     let numsToCheck = [];
//     let spliceStart1 = 2;
//     let spliceStart2 = 0;

//     // console.log(newArrayCopy)

//     // newArrayCopy.splice(2, 0, newArray[0]);
//     // console.log(newArrayCopy)
//     // newArrayCopy.splice(0, 1);
//     // console.log(newArrayCopy);

//     // newArrayCopy.splice(3, 0, newArray[0])
//     // newArrayCopy.splice(1, 1);
//     // console.log(newArrayCopy);

//     // newArrayCopy.splice(4, 0, newArray[0])
//     // newArrayCopy.splice(2, 1);
//     // console.log(newArrayCopy);

//     // newArrayCopy.splice(5, 0, newArray[0])
//     // newArrayCopy.splice(3, 1);
//     // console.log(newArrayCopy);

//     // newArrayCopy.splice(6, 0, newArray[0])
//     // newArrayCopy.splice(4, 1);
//     // console.log(newArrayCopy);


//     // console.log(newArrayCopy)

//     // newArrayCopy.splice(3, 0, newArray[1]);
//     // console.log(newArrayCopy)
//     // newArrayCopy.splice(1, 1);
//     // console.log(newArrayCopy);

//     // newArrayCopy.splice(3, 0, newArray[1])
//     // newArrayCopy.splice(1, 1);
//     // console.log(newArrayCopy);

//     // newArrayCopy.splice(4, 0, newArray[1])
//     // newArrayCopy.splice(2, 1);
//     // console.log(newArrayCopy);

//     // newArrayCopy.splice(5, 0, newArray[1])
//     // newArrayCopy.splice(3, 1);
//     // console.log(newArrayCopy);

//     // newArrayCopy.splice(6, 0, newArray[1])
//     // newArrayCopy.splice(4, 1);
//     // console.log(newArrayCopy);


//     // console.log(newArrayCopy.splice(1, 0, newArray[0]))
//     console.log(newArrayCopy)
//     for(let i = 0; i < newArray.length; i++){
//         console.log(newArray[i])
//         for(let j = i; j < newArray.length; j++){
//             let num = 0;
//             newArrayCopy.splice(spliceStart1, 0, newArray[i]);
//             newArrayCopy.splice(spliceStart2, 1);

//             num = newArrayCopy;

//             if(num[0])
//             console.log(newArrayCopy)
//             spliceStart1++;
//             spliceStart2++;
//         }
//         spliceStart1 = 2;
//         spliceStart2 = 0;
//         // break
//     }
//     // return newArray
// }

function divisibleIntegers(n, array) {
    let digitArray = array.toString().split("").filter(char => char !== ",");
    let digitSum = 0;

    console.log(digitArray)

    // if(n > 9 || n > 1){
    //     return "The number must be between 1 and 9. Please enter a valid number."
    // }

    // if(n === 1){
    //     return true;
    // }
    
    for(let i = 0; i < digitArray.length; i++){
        let digit = parseInt(digitArray[i]);
        digitSum += digit;
    }
    
    // if(n === 3 && digitSum % 3 === 0){
    //     return true;
    // } else if(n === 9 && digitSum % 9 === 0){
    //     return true;
    // }

    for(let i = 0; i < digitArray.length; i++){

        let digit = digitArray[i];
        if(n === 2 && digit % 2 === 0){
            console.log("true")
        } else if(n === 5 && digit === 0 || digit === 5){
            console.log("true")
        } else if(n === 6 && digit % 2 === 0 && digitSum % 3 === 0){
            console.log("true")
        }
    }
}

console.log(divisibleIntegers(3, [40, 50, 90]))