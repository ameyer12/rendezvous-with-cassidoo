/* Given an array of strings representing a sequence of traffic light states ("red" for stop, "green" for go, "yellow" for slow), 
write a function that returns true if the sequence could represent a valid state machine for a standard traffic light */

function isValidTrafficSequence(seq) {
  while(seq.length > 1){
    let state = seq.shift();
    let head = seq[0];

    if(state == "green" && head != "yellow"){
      return false;
    } else if(state == "yellow" && head != "red"){
      return false;
    } else if(state == "red" && head != "green"){
      return false;
    }
  }
  return true;
}

// console.log(isValidTrafficSequence(["red", "green", "yellow", "red", "green"]));
// console.log(isValidTrafficSequence(["red", "yellow", "green"]));
// console.log(isValidTrafficSequence([]));