// Given a direction and a number, write a function that outputs an arrow of asterisks with the height of that number!
function printArrow(direction, number) {
  // format the direction to lower case to prevent unnecessary errors
  let formattedDirection = direction.toLowerCase()

  if(formattedDirection == 'up'){
    let line = '';

    for(let i = 1; i <= number; i++){
      console.log(constructString(i));
    }
  }
}

printArrow('up', 2);

function constructString(n) {
  let lineString = '';

  for(let i = 0; i < n; i++){
    if(i == 1){
      lineString += 'i*';
    } else {
      lineString += 'i*';
    }
  }

  return lineString;
}

// console.log(constructString(2));