/* Write a function that returns the first n Leyland numbers in ascending order. 
A Leyland number is defined as x^y + y^x for integers x > 1 and y > 1 */

function calculateLeylandNumber(x, y) {
  let res = Math.pow(x, y) + Math.pow(y, x);
  return res;
}

function getLeylandNumbers(n) {
  let res = [];
  let i = 2;
  let j = 2;

  // Loop longer than the size of n to account for duplicates and out-of-order numbers
  while(res.length < n * n){
    let leylandNumber = calculateLeylandNumber(i, j);

    res.push(leylandNumber);

    // console.log("i: ", i, "j: ", j, "leyland number: ", leylandNumber)
    // If i and j are equal, increment i and reset j. Otherwise, incrememnt j
    if(i === j){
      i++;
      j = 2
    } else {
      j++;
    }
  }

  // Sort res and return only the first n numbers
  res = res.sort((a, b) => a - b);
  res = res.slice(0, n);

  return res;
}

// console.log(getLeylandNumbers(1))
// console.log(getLeylandNumbers(5))