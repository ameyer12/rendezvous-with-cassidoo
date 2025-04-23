/* Given a 2D grid of integers, find the largest sum of any connected path of cells. 
A path consists of horizontally or vertically adjacent cells (no diagonals) and cannot reuse cells. 
Return the largest sum. */


function sumHelper(array) {
  let sum = 0;

  if(!array) {
    return 0; 
  }
  array.forEach(x => {
    sum += x;
  });

  return sum;
}


function largestPathSum(grid) {
  let res = 0;
  
  while(grid){
    if(grid.length < 1){
      break;
    }

    // Step 1: Add sum of first row
    res += sumHelper(grid.shift());

    // Step 2: Add the last element of each row.
    console.log("res after step 1: ", res)
    for(let i = 0; i < grid.length-1; i++){
      res += grid[i].pop(grid[i].length-1);
    }

    console.log("res after step 2: ", res)

    // Step 3: Add sum of last row
    res += sumHelper(grid.pop());

    console.log("res after step 3: ", res)

    // Step 4: Add the first element of each row
    for(let i = grid.length-1; i >= 0; i--){
      res += grid[i].shift();
    }


    console.log("res after step 4: ", res, "grid: ", grid)
  }
  
  return res;
}

const grid1 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

const grid2 = [
  [5, 3],
  [2, 8]
];