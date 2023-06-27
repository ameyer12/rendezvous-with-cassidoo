// Given an array of words, return the words that can be typed using letters of only one row on a keyboard. 

function oneRow(array) {
    let resultArray = [];
    let keyboard = {
        row1: ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
        row2: ["a", "s", "d", "f", "g", "h", "j", "k", "l"],
        row3: ["z", "x", "c", "v", "b", "n", "m"]
    };

    for(let i = 0; i < array.length; i++){
        let word = array[i];
        //Only the second and third row of an ANSI keyboard can produce capitalized letters
        if(keyboard.row1.includes(word[0])){
            let j = 1;
            while(j < word.length){
                let letter = word[j];
                if(!keyboard.row1.includes(letter)){
                    break;
                } else if(j == word.length-1){
                    resultArray.push(word);
                }
                j++;
            }
        } else if(keyboard.row2.includes(word[0]) || keyboard.row2.includes(word[0].toLowerCase())){
            let j = 1;
            while(j < word.length){
                let letter = word[j];
                if(!keyboard.row2.includes(letter)){
                    break;
                } else if(j == word.length-1){
                    resultArray.push(word);
                }
                j++;
            }
        } else if(keyboard.row3.includes(word[0]) || keyboard.row3.includes(word[0].toLowerCase())){
            let j = 1;
            while(j < word.length){
                let letter = word[j];
                if(!keyboard.row3.includes(letter)){
                    break;
                } else if(j == word.length-1){
                    resultArray.push(word);
                }
                j++;
            }
        }
    }
    return resultArray;
}
