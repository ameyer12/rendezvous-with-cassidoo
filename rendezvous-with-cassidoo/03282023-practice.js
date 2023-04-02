// Given a list of numbers, return all groups of repeating consecutive numbers.
function generateRandomInt(max){
    return Math.floor(Math.random() * max + 1);
}

function rollDice(string){
    let total = 0;
    let stringArray = string.split("+");

    for(let i = 0; i < stringArray.length; i++){
        let diceArray = stringArray[i].split("d");
        let numberOfDiceToRoll = parseInt(diceArray[0]);

        while(numberOfDiceToRoll > 0){
            total += generateRandomInt(diceArray[1]);
            numberOfDiceToRoll--;
        }
    }
    return total;
}
