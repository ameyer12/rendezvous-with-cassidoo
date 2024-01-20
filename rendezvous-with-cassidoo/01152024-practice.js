// Given a 2D array, write a function that flips it vertically or horizontally.

class arrayFlipper {
  constructor(array) {
    this.array = array;
  }

  horizontalFlip() {
    for (let row in this.array){
      let i = 0;
      let j = this.array[row].length-1;

      while (i < j){
        let temp = this.array[row][i];
        this.array[row][i] = this.array[row][j];
        this.array[row][j] = temp;

        i++;
        j--;
      }
    }
    return this.array;
  }

  verticalFlip() {
    let i = 0;
    let j = this.array.length-1;

    while (i < j){
      let temp = this.array[i];
      this.array[i] = this.array[j];
      this.array[j] = temp;

      i++;
      j--;
    }
    return this.array;
  }
}

myArray = new arrayFlipper([
  [1, 2, 3],
  [4, 5, 6],    
  [7, 8, 9]
]);

// console.log(myArray.horizontalFlip());
// console.log(myArray.verticalFlip());