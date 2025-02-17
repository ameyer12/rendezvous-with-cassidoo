/* Given an array of attack damages and a shield capacity for a spaceship, 
return the index when cumulative damage exceeds the shield. Return -1 if shield survives.
*/

function findShieldBreak(arr, capacity) {
  if(arr.reduce((acc, curr) => acc + curr) < capacity) {
    return -1;
  }

  for(let i = 0; i < arr.length; i++){
    atkDmg = arr[i];
    capacity -= atkDmg;

    if(capacity <= 0){
      return i;
    }
  }
}