// Function to reverse reindeer names and put them in alphabetical order
function rollCall(names) {

  // Loop through the names and reverse each name
  for(let i = 0; i < names.length; i++){
    // Reverse each element
    names[i] = names[i].split("").reverse().join("");
  }
  
  // Return sorted names
  return names.sort()
}

// console.log(rollCall(["yzneT","ydissaC","enimA"]));
// console.log(rollCall(["rennuD","nexiV","recnarP","temoC","neztilB","recnaD","diduC","rehsaD","hploduR"]));
// console.log(rollCall(rollCall(["A","B","C"])));