// ----- Helper functions -----
function drawTopSide(cube, width, lengthEdge, widthEdge) {
  // Constructing top side
  cube += " ".repeat(width + 1);
  cube += lengthEdge + "\n";

  for(let i = 0; i < width; i++){
    cube += widthEdge.join("") + "\n";
    widthEdge.splice(widthEdge.length - 1, 0, " "); //  Logic to help construct right side
    widthEdge.shift();
  }

  cube += lengthEdge;
  cube += " ".repeat(width);
  cube += "|\n";

  return cube;
}

function drawFrontSide(cube, height, width, lengthEdge, heightEdge) {
  // Constructing front side
  let numSpaces = width - 1;
  let middle = height % 2 != 0 ? Math.floor(height / 2) : Math.floor(height / 2) - 1

  for(let i = 0; i < height; i++){
    cube += heightEdge.join("");

    //  Logic to help construct right side
    if(i < middle){
      cube += " ".repeat(width);
      cube += "|\n";
    } else if(i === middle){
      cube += " ".repeat(width);
      cube += "+\n";
    } else {
      cube += " ".repeat(numSpaces);
      cube += "/\n";
      numSpaces--;
    }
  }
  cube += lengthEdge;
  
  return cube;
}

// Function that draws an ASCII art cube of given height n.
function drawCube(n){
  let length = n * 2;
  let width = Math.floor(n / 2);
  let height = n; 
  let cube = "";

  let lengthEdge = "+";
  let widthEdge = [];
  let heightEdge = ["|"];

  // Construct length edge
  lengthEdge += "-".repeat(length);
  lengthEdge += "+";

  // Construct width edge
  for(let i = 0; i < width; i++){
    widthEdge.push(" ");
  }
  widthEdge.push("/");

  for(let i = 0; i < length; i++){
    widthEdge.push(" ");
  }
  widthEdge.push("/");
  widthEdge.push("|"); // Logic to help construct right side

  // Construct height edge
  for(let i = 0; i < length; i++){
    heightEdge.push(" ");
  }
  heightEdge.push("|");

  // Construct cube
  let top = drawTopSide(cube, width, lengthEdge, widthEdge);  // Constructing top side
  let front = drawFrontSide(cube, height, width, lengthEdge, heightEdge) // Constructing front side
  cube = top + front;

  return cube;
}

// console.log(drawCube(2));
// console.log(drawCube(4));
// console.log(drawCube(5));
// console.log(drawCube(7));
