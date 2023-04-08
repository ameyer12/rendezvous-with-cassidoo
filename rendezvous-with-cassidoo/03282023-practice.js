<<<<<<< HEAD
//Given a string in dice notation, return a random integer you can get by rolling those dice.
=======
>>>>>>> 04b06414e12d747605ad25a1de52e817682ba382
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
