// Convert a number in English words to an integer. You can assume the number will never go beyond the millions, and there will be no punctuation.

function parseNumber(string) {
    let wordArray = string.split(" ");
    let solution = "";

    let small = {
        'zero': 0,
        'one': 1,
        'two': 2,
        'three': 3,
        'four': 4,
        'five': 5,
        'six': 6,
        'seven': 7,
        'eight': 8,
        'nine': 9,
        'ten': 10,
        'eleven': 11,
        'twelve': 12,
        'thirteen': 13,
        'fourteen': 14,
        'fifteen': 15,
        'sixteen': 16,
        'seventeen': 17,
        'eighteen': 18,
        'nineteen': 19,
        'twenty': 20,
        'thirty': 30,
        'forty': 40,
        'fifty': 50,
        'sixty': 60,
        'seventy': 70,
        'eighty': 80,
        'ninety': 90
    };

    var Magnitude = {
        'thousand': 1000,
        'million': 1000000,
        'billion': 1000000000
    };

    for(i in wordArray){
        let word = wordArray[i];

        console.log(word);

        console.log(parseInt(word));

        // if(word == 'Million'){

        // } else if(word == 'Thousand'){

        // } else if(word == 'Hundred'){

        // } else {

        // }
    }

    // if(wordArray.includes('Million')){
    //     console.log("Million is in the array");
    // } else if(wordArray.includes('Thousand')){
    //     console.log("Thousand is in the array");
    // } else if(wordArray.includes('Hundred')){
    //     console.log("Hundred is in the array");
    // }
}

parseNumber("Twelve Thousand Three Hundred Forty Five");