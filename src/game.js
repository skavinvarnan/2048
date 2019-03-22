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
    // Please note unit tests will only pass if the grid size is 4
    this.gridSize = 4;
    this.winningScore = 128;
    this.rowLength = this.gridSize;
    this.colLength = this.gridSize;
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
    this.matrix = colArray;
    return colArray;
  };

  // To find the available spots for numbers to be inserted
  findAvailableSpots(matrix) {
    let availableSpots = [];
    for (let i = 0; i < this.rowLength; i++) {
      for (let j = 0; j < this.colLength; j++) {
        // Check if the spot has 0. That is considered as empty
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

  // Push a single row to the left with the logic of combining numbers
  pushRowToLeft(row) {
    let nextNonZeroIndex;
    for (let i = 0; i < row.length; i++) {
      // Get the index of first non zero number which is not is 0th index
      nextNonZeroIndex = row.findIndex((currentValue, index) => {
        return index > i && currentValue !== 0;
      });
      // Safe check since if no value present findIndex will give -1
      if (nextNonZeroIndex !== -1) {
        // If current index location is 0 swap 0 with non zero item index
        if (row[i] === 0) {
          row[i] = row[nextNonZeroIndex];
          row[nextNonZeroIndex] = 0;
          // decrement i because if the same number is present else where is the next element of the array
          // that particular number should be added to this number
          i = i - 1;
        } else if (row[i] === row[nextNonZeroIndex]) {
          // If the next value is the same as non zero item, multiply current item and make non zero item index 0
          row[i] = row[i] * 2;
          row[nextNonZeroIndex] = 0;
        }
      }
    }
    return row;
  }

  isTheGameWon(score, matrix) {
    for (let i = 0; i < this.rowLength; i++) {
      for (let j = 0; j < this.colLength; j++) {
        if (matrix[i][j] >= score) {
          return true;
        }
      }
    }
    return false;
  }

  // Slide the whole matrix left, just equivalent to swipe left in the game
  slideLeft(matrix) {
    // Loop through all the row length
    for (let i = 0; i < this.rowLength; i++) {
      let rowArrayItems = [];
      // Loop through all the col length
      for (let j = 0; j < this.colLength; j++) {
        // Get a particular row
        rowArrayItems.push(matrix[i][j]);
      }
      // Push the row to left
      rowArrayItems = this.pushRowToLeft(rowArrayItems);

      // Again update the pushed data through the matrix
      for (let j = 0; j < this.colLength; j++) {
        matrix[i][j] = rowArrayItems[j];
      }
    }
    return matrix;
  }

  // Slide the whole matrix right, just equivalent to swipe right in the game
  slideRight(matrix) {
    for (let i = 0; i < this.rowLength; i++) {
      let rowArrayItems = [];
      for (let j = 0; j < this.colLength; j++) {
        rowArrayItems.push(matrix[i][j]);
      }
      // Same as left logic, just reversing the array
      rowArrayItems = this.pushRowToLeft(rowArrayItems.reverse()).reverse();

      for (let j = 0; j < this.colLength; j++) {
        matrix[i][j] = rowArrayItems[j];
      }
    }
    return matrix;
  }

  // Slide the whole matrix up, just equivalent to swipe up in the game
  slideUp(matrix) {
    for (let i = 0; i < this.rowLength; i++) {
      let rowArrayItems = [];
      for (let j = 0; j < this.colLength; j++) {
        // reverse i j to achieve slideUp
        rowArrayItems.push(matrix[j][i]);
      }
      rowArrayItems = this.pushRowToLeft(rowArrayItems);

      for (let j = 0; j < this.colLength; j++) {
        // reverse i j to achieve slideUp
        matrix[j][i] = rowArrayItems[j];
      }
    }
    return matrix;
  }

  // Slide the whole matrix up, just equivalent to swipe up in the game
  slideDown(matrix) {
    for (let i = 0; i < this.rowLength; i++) {
      let rowArrayItems = [];
      for (let j = 0; j < this.colLength; j++) {
        // reverse i j to achieve slideUp
        rowArrayItems.push(matrix[j][i]);
      }
      // Same as left logic, just reversing the array
      rowArrayItems = this.pushRowToLeft(rowArrayItems.reverse()).reverse();

      for (let j = 0; j < this.colLength; j++) {
        // reverse i j to achieve slideUp
        matrix[j][i] = rowArrayItems[j];
      }
    }
    return matrix;
  }

  run() {
    this.matrix = this.generateInitialMatrix();
    // const availableSpots = this.findAvailableSpots(this.matrix);
    // const spot1 = this.getRandomSpot(availableSpots);
    // const spot2 = this.getRandomSpot(availableSpots);
    // this.insertRandomNumberToMatrixForSpot(spot1);
    // this.insertRandomNumberToMatrixForSpot(spot2);
    // console.table(this.matrix);
    // const a = this.pushRowToLeft([0, 0, 4, 2]);
    const matrix = [[2, 4, 0, 2],
                    [4, 4, 0, 2],
                    [2, 0, 8, 2],
                    [4, 0, 0, 2]];
    this.slideDown(matrix);
    console.table(matrix);
  }
  
}


module.exports = Game;
