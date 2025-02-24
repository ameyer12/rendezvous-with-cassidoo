/* Given a list of frequencies (in Hz), write a function to determine the 
closest musical note for each frequency based on the A440 pitch standard.
*/

function getNoteNames(arr) {
  let res = [];
  let noteNames = ["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"];
  let refFreq = 440;
  
  for(let i = 0; i < arr.length; i++){
    let freq = arr[i];
    let noteFormula = 12 * (Math.log2(freq / refFreq));
    let midi = Math.round(69 + noteFormula);
    let resElement = "This is a " + noteNames[midi % 12];

    res.push(resElement);
  }
  return res;
}
