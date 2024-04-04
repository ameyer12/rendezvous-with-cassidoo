// Given a base size, draw the corresponding triangle using *'s

function drawTriangle(b) {
  let levelSizes = [];

  while(b > 0){
    levelSizes.push(b);
    b = b - 2;
  }

  for(let i = levelSizes.length - 1; i >= 0; i--){ 
    let line = ""
    let j = 0;
  
    while(j < levelSizes[i]){
      line += "*";
      j += 1;
    }

    console.log(line + "\n");
  }

}

drawTriangle(6);