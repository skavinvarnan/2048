//
//  2048
//
//  Created by Kavin Varnan on 2019-03-20
//

class Game {

  constructor() {
    this.rowLength = 4;
    this.colLength = 4;
    this.matrix = [];
  }

  // [
  //   [-1, -1, -1, -1],
  //   [-1, -1, -1, -1],
  //   [-1, -1, -1, -1],
  //   [-1, -1, -1, -1]
  // ]
  // Generate the matrix something like this
  generateInitialMatrix() {
    let colArray = [];
    for (let i = 0; i < this.rowLength; i++) {
      let rowArray = [];
      for (let j = 0; j < this.colLength; j++) {
        rowArray.push(-1);
      }
      colArray.push(rowArray);
    }
    return colArray;
  };

  run() {
    this.matrix = this.generateInitialMatrix();
    console.table(this.matrix)
  }
  
}


module.exports = Game;
