// Write a program that prints Happy new year! without using the string/character literals for the characters in the string!

function happyNewYear() {
    let happyNewYearString = "";

    for(let i = 0; i <= 14; i++){
        switch(i){
            case 0:
                happyNewYearString += String.fromCharCode(72);
                break;
            case 1:
                happyNewYearString += String.fromCharCode(97);
                break;
            case 2:
                happyNewYearString += String.fromCharCode(112);
                break;
            case 3:
                happyNewYearString += String.fromCharCode(112);
                break;
            case 4:
                happyNewYearString += String.fromCharCode(121);
                break;
            case 5:
                happyNewYearString += String.fromCharCode(32);
                break;
            case 6:
                happyNewYearString += String.fromCharCode(78);
                break;
            case 7:
                happyNewYearString += String.fromCharCode(101);
                break;
            case 8:
                happyNewYearString += String.fromCharCode(119);
                break;     
            case 9:
                happyNewYearString += String.fromCharCode(32);
                break;   
            case 10:
                happyNewYearString += String.fromCharCode(89);
                break;     
            case 11:
                happyNewYearString += String.fromCharCode(101);
                break;    
            case 12:
                happyNewYearString += String.fromCharCode(97);
                break;   
            case 13:
                happyNewYearString += String.fromCharCode(114);
                break;    
            case 14:
                happyNewYearString += String.fromCharCode(33);
                break;
        }
    }
    return happyNewYearString;
}

console.log(happyNewYear());