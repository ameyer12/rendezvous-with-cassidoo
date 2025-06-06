// Function to turn an array of integers into a nested array

function nestArray(arr) {
  let res = [];
  let idxStk = [];

  if(arr.length == 1){
    return [arr[0]]
  }

  res.push([arr[0]])
  res[0].push([arr[1]])

  for(let i = 2; i < arr.length; i++){
    idxStk.push(1)
    
    let target = idxStk.reduce((acc, cur) => acc[cur], res[0]);

    target.push([arr[i]])

  }
  return res;
}

console.log(nestArray([1]));  
// [1]
console.log(JSON.stringify(nestArray([1, 2, 3, 4])));  
// [[1,[2,[3,[4]]]]]

