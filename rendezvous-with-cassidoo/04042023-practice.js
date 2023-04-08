//Write a program that prints the amount of characters its source has in English words.
//So a program that is 44 characters long would output “forty four” and a program that is 108 characters long would output “one hundred eight”.
let ones = {
    0: "zero",
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine"
}
let tens = {
    10: "ten",
    11: "eleven",
    12: "twelve",
    13: "thirteen",
    14: "fourteen",
    15: "fifteen",
    16: "sixteen",
    17: "seventeen",
    18: "eighteen",
    19: "nineteen"
}
let prefixes = {
    2: "twenty",
    3: "thirty",
    4: "forty",
    5: "fifty",
    6: "sixty",
    7: "seventy",
    8: "eighty",
    9: "ninety"
}
let suffixes = {
    1: " hundred ",
    2: " thousand "
}

function printCharacterAmount(string) {
    let result = [];
    let joinedString = string.split(" ").join(" ");
    let numberOfCharacters = joinedString.length.toString();

    if(joinedString.length < 10){
        return ones[joinedString.length];
    }
    if(joinedString.length < 20){
        return tens[joinedString.length];
    }
    if(joinedString.length < 100){
        result.push(prefixes[numberOfCharacters[0]]);
        if(numberOfCharacters[1] != 0){
            result.push("-");
            result.push(ones[numberOfCharacters[1]]);
        } 
        return result.join("");
    }  
    if(joinedString.length < 1000){
        result.push(ones[numberOfCharacters[0]]);
        result.push(suffixes[1]);
        if(numberOfCharacters[1] != 0 && numberOfCharacters[1] > 1){
            result.push(prefixes[numberOfCharacters[1]]);
            result.push("-");
            result.push(ones[numberOfCharacters[2]]);
        } else if(numberOfCharacters[1] != 0 && numberOfCharacters[1] == 1){
            result.push(tens[parseInt(numberOfCharacters[1] + numberOfCharacters[2])]);
        } else {
            result.push(ones[numberOfCharacters[2]]);
        }
        return result.join("");
    }
    if(joinedString.length <= 9999){
        result.push(ones[numberOfCharacters[0]]);
        result.push(suffixes[2]);
        if(numberOfCharacters[1] == 0){
            if(numberOfCharacters[2] == 0){
                result.push(ones[numberOfCharacters[3]]);
            } else {
                result.push(tens[parseInt(numberOfCharacters[2] + numberOfCharacters[3])]);
            }
        } else {
            result.push(ones[numberOfCharacters[1]]);
            result.push(suffixes[1]);
            if(numberOfCharacters[2] == 0){
                result.push(ones[numberOfCharacters[3]]);
            } else if(numberOfCharacters[2] == 1){
                result.push(tens[parseInt(numberOfCharacters[2] + numberOfCharacters[3])]);
            } else {
                if(numberOfCharacters[3] != 0){
                    result.push(prefixes[numberOfCharacters[2]]);
                    result.push("-");
                    result.push(ones[numberOfCharacters[3]]);
                } else {
                    result.push(prefixes[numberOfCharacters[2]]);
                }
            }
        }
        return result.join("");
    }
    return "Number too large. Please enter a number less than 10,000.";
}


console.log(printCharacterAmount("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."))