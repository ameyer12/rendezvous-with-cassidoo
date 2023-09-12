// Given a sequence of numbers, generate a "count and say" string.

function countAndSay(nums) {
    numArray = [...nums.toString()];
    console.log(numArray);


    for(let i = 0; i < numArray.length; i++){
        console.log(numArray[i])
    }
}

countAndSay(112222555)