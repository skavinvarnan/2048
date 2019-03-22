//
//  2048
//
//  Created by Kavin Varnan on 2019-03-20
//

const Game = require('./game');
const Keypress = require('./keypress');
const Table = require('cli-table3');
const { terminal } = require('terminal-kit');

class App {
  constructor() {
    this.game = new Game();
    // Create the initial 0 matrix
    this.game.generateInitialMatrix();

    const availableSpots = this.game.findAvailableSpots(this.game.matrix);
    const spot1 = this.game.getRandomSpot(availableSpots);
    const spot2 = this.game.getRandomSpot(availableSpots);

    // Insert two number in random two spots
    this.game.insertRandomNumberToMatrixForSpot(spot1);
    this.game.insertRandomNumberToMatrixForSpot(spot2);
    this.renderTable();
    new Keypress(this.upClicked.bind(this), this.downClicked.bind(this), this.leftClicked.bind(this), this.rightClicked.bind(this))
  }

  // Up click action
  upClicked() {
    this.game.slideUp(this.game.matrix);
    this.insertNumberOnRandomSpot();
    this.checkGameWon(this.game.isTheGameWon(this.game.winningScore, this.game.matrix));
    const gameWon = this.checkGameWon(this.game.isTheGameWon(this.game.winningScore, this.game.matrix));
    // Render table if the game is not won
    if (!gameWon) { this.renderTable(); }
  }

  // Down click action
  downClicked() {
    this.game.slideDown(this.game.matrix);
    this.insertNumberOnRandomSpot();
    this.checkGameWon(this.game.isTheGameWon(this.game.winningScore, this.game.matrix));
    const gameWon = this.checkGameWon(this.game.isTheGameWon(this.game.winningScore, this.game.matrix));
    // Render table if the game is not won
    if (!gameWon) { this.renderTable(); }
  }

  // Left click action
  leftClicked() {
    this.game.slideLeft(this.game.matrix);
    this.insertNumberOnRandomSpot();
    this.checkGameWon(this.game.isTheGameWon(this.game.winningScore, this.game.matrix));
    const gameWon = this.checkGameWon(this.game.isTheGameWon(this.game.winningScore, this.game.matrix));
    // Render table if the game is not won
    if (!gameWon) { this.renderTable(); }
  }

  // Right click action
  rightClicked() {
    this.game.slideRight(this.game.matrix);
    this.insertNumberOnRandomSpot();
    const gameWon = this.checkGameWon(this.game.isTheGameWon(this.game.winningScore, this.game.matrix));
    // Render table if the game is not won
    if (!gameWon) { this.renderTable(); }
  }

  checkGameWon(isGameWon) {
    if (isGameWon) {
      this.renderTable(true);
      setTimeout(() => { process.stdin.pause(); }, 100);
    }
    return isGameWon;
  }

  // After a move insert either 2 or 4 on a random available spot
  insertNumberOnRandomSpot() {
    const availableSpots = this.game.findAvailableSpots(this.game.matrix);
    const randomStop = this.game.getRandomSpot(availableSpots);
    // Check if random spot is available. Only if available add to matrix
    if (randomStop) {
      this.game.insertRandomNumberToMatrixForSpot(randomStop);
    }
  }

  renderTable(isGameWon) {
    terminal.bgBrightBlue();
    terminal.fullscreen();

    if (isGameWon) {
      terminal.wrap.white('You won the game');
      console.log("");
    }

    // Recreate table everytime we render
    const table = new Table({
      colWidths: [6, 6, 6, 6],
      rowHeights: [3, 3, 3, 3],
      colAligns: ['center', 'center', 'center', 'center'],
      rowAligns: ['center', 'center', 'center', 'center'],
      chars: { 'top': '═' , 'top-mid': '╤' , 'top-left': '╔' , 'top-right': '╗'
        , 'bottom': '═' , 'bottom-mid': '╧' , 'bottom-left': '╚' , 'bottom-right': '╝'
        , 'left': '║' , 'left-mid': '╟' , 'mid': '─' , 'mid-mid': '┼'
        , 'right': '║' , 'right-mid': '╢' , 'middle': '│' }
    });
    // Use spread operator to convert
    table.push(...this.game.matrix);
    console.log(table.toString());
  }
}

new App();



