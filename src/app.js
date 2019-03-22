//
//  2048
//
//  Created by Kavin Varnan on 2019-03-20
//

const Game = require('./game');
const Keypress = require('./keypress');

class App {
  constructor() {
    this.game = new Game();
    this.game.generateInitialMatrix();

    const availableSpots = this.game.findAvailableSpots(this.game.matrix);
    const spot1 = this.game.getRandomSpot(availableSpots);
    const spot2 = this.game.getRandomSpot(availableSpots);
    this.game.insertRandomNumberToMatrixForSpot(spot1);
    this.game.insertRandomNumberToMatrixForSpot(spot2);

    console.table(this.game.matrix);
    new Keypress(this.upClicked.bind(this), this.downClicked.bind(this), this.leftClicked.bind(this), this.rightClicked.bind(this))
  }

  upClicked() {
    this.game.slideUp(this.game.matrix);
    this.insertNumberOnRandomSpot();
    console.table(this.game.matrix);
  }

  downClicked() {
    this.game.slideDown(this.game.matrix);
    this.insertNumberOnRandomSpot();
    console.table(this.game.matrix);
  }

  leftClicked() {
    this.game.slideLeft(this.game.matrix);
    this.insertNumberOnRandomSpot();
    console.table(this.game.matrix);
  }

  rightClicked() {
    this.game.slideRight(this.game.matrix);
    this.insertNumberOnRandomSpot();
    console.table(this.game.matrix);
  }

  insertNumberOnRandomSpot() {
    const availableSpots = this.game.findAvailableSpots(this.game.matrix);
    const randomStop = this.game.getRandomSpot(availableSpots);
    this.game.insertRandomNumberToMatrixForSpot(randomStop);
  }
}

new App();



