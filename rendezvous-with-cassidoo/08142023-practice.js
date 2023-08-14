// You have a faulty keyboard. Whenever you type a vowel on it (a,e,i,o,u,y), it reverses the string that you have written, instead of typing the character. 
// Typing other characters works as expected. Given a string, return what will be on the screen after typing with your faulty keyboard.

function faultyKeeb(s){
    let charArray = [...s.toLowerCase()];
    let vowels = ["a", "e", "i", "o", "u"];
    let result = "";

    for(char in charArray){
        letter = charArray[char];
        
        if(!vowels.includes(letter)){
            result += letter;
        } else {
            result = result.split('').reverse().join('');
        }
    }
    return result;
}
