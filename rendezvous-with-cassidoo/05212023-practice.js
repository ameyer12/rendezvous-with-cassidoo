// Given a string, calculate the score that it would get in a game of Scrabble.

function scrabbleScore(word) {
    let score = 0;
    let capitalizedWord = word.toUpperCase();

    for(let i = 0; i < capitalizedWord.length; i++){
        let character = capitalizedWord[i];

        if(character === "E" || character === "A" || character === "I" || character === "O" || character === "N" || character === "R" || character === "T" ||
        character === "L" || character === "S" || character === "U"){
            score += 1;
        } else if(character === "D" || character === "G"){
            score += 2;
        } else if(character === "B" || character === "C" || character === "M" || character === "P"){
            score += 3;
        } else if(character === "F" || character === "H" || character === "V" || character === "W" || character === "Y"){
            score += 4;
        } else if(character === "K"){
            score += 5;
        } else if(character === "J" || character === "X"){
            score += 8;
        } else if(character === "Q" || character === "Z"){
            score += 10;
        }
    }
    return score;
}
