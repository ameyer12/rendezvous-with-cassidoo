//Write a function that takes an array of consecutive, increasing letters as input, and returns any missing letters in the array between the first and last letter.

function getKeyByValue(object, value) {
    return Object.keys(object).find(key => object[key] === value);
}

function missingLetters(array) {  
    let result = [];
    let letterPositions = {
        "a": 1,
        "b": 2,
        "c": 3,
        "d": 4,
        "e": 5,
        "f": 6, 
        "g": 7,
        "h": 8,
        "i": 9,
        "j": 10,
        "k": 11,
        "l": 12,
        "m": 13,
        "n": 14,
        "o": 15,
        "p": 16,
        "q": 17,
        "r": 18,
        "s": 19,
        "t": 20,
        "u": 21,
        "v": 22,
        "w": 23,
        "x": 24,
        "y": 25,
        "z": 26
        }
    let j = 1;

    for(let i = 0; i < array.length-1; i++){
        let firstLetter = array[i];
        let secondLetter = array[j];

        if(letterPositions[firstLetter] + 1 !== letterPositions[secondLetter]){
            let missingLetters = letterPositions[secondLetter] - letterPositions[firstLetter];
            let k = 1;
            while(k < missingLetters){
                result.push(getKeyByValue(letterPositions, letterPositions[firstLetter] + k));
                k++;
            }
        }
        j++;
    }
    return result;
}
