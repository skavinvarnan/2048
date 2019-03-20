//
//  2048
//
//  Created by Kavin Varnan on 2019-03-20
//

// Hint
//   [1, 2, 3, 4],
//   [5, 6, 7, 8],
//   [9, 10, 11, 12],
//   [13, 14, 15, 16]
//
// is in matrix element as [x, y]
//
//   [0, 0] [0, 1] [0, 2] [0, 3]
//   [1, 0] [1, 1] [1, 2] [1, 3]
//   [2, 0] [2, 1] [2, 2] [2, 3]
//   [3, 0] [3, 1] [3, 2] [3, 3]
//
// As table by console.table(matrix)
// ┌─────────┬────┬────┬────┬────┐
// │ (index) │ 0  │ 1  │ 2  │ 3  │
// ├─────────┼────┼────┼────┼────┤
// │    0    │ 1  │ 2  │ 3  │ 4  │
// │    1    │ 5  │ 6  │ 7  │ 8  │
// │    2    │ 9  │ 10 │ 11 │ 12 │
// │    3    │ 13 │ 14 │ 15 │ 16 │
// └─────────┴────┴────┴────┴────┘
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

  // To find the available spots for numbers to be inserted
  findAvailableSpots(matrix) {
    let availableSpots = [];
    for (let i = 0; i < this.rowLength; i++) {
      for (let j = 0; j < this.colLength; j++) {
        if (matrix[i][j] === -1) {
          availableSpots.push([{x: i, y: j}]);
        }
      }
    }
    return availableSpots;
  }

  run() {
    this.matrix = this.generateInitialMatrix();
    const availableSpots = this.findAvailableSpots(this.matrix);
    console.table(availableSpots)
  }
  
}


module.exports = Game;
