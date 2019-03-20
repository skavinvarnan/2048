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
  //   [0, 0, 0, 0],
  //   [0, 0, 0, 0],
  //   [0, 0, 0, 0],
  //   [0, 0, 0, 0]
  // ]
  // Generate the matrix something like this
  generateInitialMatrix() {
    let colArray = [];
    for (let i = 0; i < this.rowLength; i++) {
      let rowArray = [];
      for (let j = 0; j < this.colLength; j++) {
        rowArray.push(0);
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
        // Check if the spot has 0. Thats considered as empty
        if (matrix[i][j] === 0) {
          // Save that coordinate in an array
          availableSpots.push([i, j]);
        }
      }
    }
    return availableSpots;
  }

  // Only partial unit test available
  // Select a random spot from availableSpot
  getRandomSpot(availableSpots) {
    // Get a random spot from the array
    let randomSpot = Math.floor((Math.random() * availableSpots.length));
    // Pick that item from the list and return
    return availableSpots[randomSpot];
  }


  // No unit testing done
  // Insert a random number to matrix either a 2 or 4
  insertRandomNumberToMatrixForSpot(spot) {
    // 0 -> x
    // 1 -> y
    this.matrix[spot[0]][spot[1]] = (Math.random() >= 0.5) ? 2 : 4;
  }

  pushRowToRight(row) {
    // Remove all zero from the array and create a new array
    row = row.filter(x => x !== 0);

    for (let i = row.length; i >= 1; i--) {
      if (row[i] === row[i - 1]) {
        row[i] = row[i] + row[i - 1];
        row[i - 1] = 0;
        break;
      }
    }

    // Get the missing count from the array
    let missingItemsCount = this.rowLength - row.length;
    // Create a new array of 0's
    let zeroArray = Array.from(Array(missingItemsCount), () => 0);
    // Merge the zero array and new array something line ( zeroArray + newArray)
    let pushedArray = zeroArray.concat(row);
    
    return pushedArray;
  }

  run() {
    // this.matrix = this.generateInitialMatrix();
    // const availableSpots = this.findAvailableSpots(this.matrix);
    // const spot1 = this.getRandomSpot(availableSpots);
    // const spot2 = this.getRandomSpot(availableSpots);
    // this.insertRandomNumberToMatrixForSpot(spot1);
    // this.insertRandomNumberToMatrixForSpot(spot2);
    // console.table(this.matrix);
    const a = this.pushRowToRight([2, 2, 0, 4]);
    console.log(a);
    const b = this.pushRowToRight(a);
    console.log(b);
  }
  
}


module.exports = Game;
