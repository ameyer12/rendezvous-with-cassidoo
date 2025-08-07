/* Given an array arr representing the positions of monsters along a straight line, 
and an integer d representing the minimum safe distance required between any two monsters, 
write a function to determine if all monsters are at least d units apart. If not, return the smallest distance 
found between any two monsters. If all monsters are safely spaced, return -1. */

function minMonsterDistance(monsters, d) {
  // Variable to store the minimum distance
  let minDistance = Infinity;

  // Sort the monsters in ascending order
  let sortedMonsters =  monsters.sort((a, b) => a - b);

  // Iterate through to check if all monsters are safely distanced
  for(let i = 0; i < monsters.length - 1; i++){
    // Variable to store the distance between current monster and next monster
    let distance = sortedMonsters[i + 1] - sortedMonsters[i];

    // Check if distance is safe. If not, update minDistance
    if(distance < d) {
      minDistance = Math.min(minDistance, distance);
    }
  }

  // If monsters are not safely distanced, return minDistance. Otherwise, return -1
  if(minDistance != Infinity){
    return minDistance;
  } else {
    return -1;
  }
}

console.log(minMonsterDistance([3, 8, 10, 15], 6))
console.log(minMonsterDistance([5, 9, 14, 18], 4))