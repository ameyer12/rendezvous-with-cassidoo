/* Given an array of integers, return the majority element. If there is no majority element, return if the array is 
majority even or odd numbers, and if there is none, say so. */

const majority = (arr) => {
    let elementCountObject = {};
    let evenAndOddCountObject = {
        even: 0,
        odd: 0
    };
    let maxElementCount = 0;
    let maxElementArr = [];

    for(let i = 0; i < arr.length; i++){
        if(elementCountObject[arr[i]] == undefined){
            elementCountObject[arr[i]] = 1;
        } else {
            elementCountObject[arr[i]]++;
        }

        if(arr[i] % 2 == 0){
            evenAndOddCountObject['even']++;
        } else {
            evenAndOddCountObject['odd']++;
        }
    }

    maxElementCount = Math.max(...Object.values(elementCountObject));

    for(let i = 0; i < Object.keys(elementCountObject).length; i++){
        if(elementCountObject[Object.keys(elementCountObject)[i]] == maxElementCount){
            maxElementArr.push(Object.keys(elementCountObject)[i]);
        }
    }

    if(maxElementArr.length == 1){
        return maxElementArr[0];
    } else {
        if(evenAndOddCountObject['even'] > evenAndOddCountObject['odd']){
            return 'Majority evens';
        } else if(evenAndOddCountObject['even'] < evenAndOddCountObject['odd']){
            return 'Majority odds';
        } else {
            return 'No Majority';
        }
    }
}

console.log(majority([3,1,4,1]));