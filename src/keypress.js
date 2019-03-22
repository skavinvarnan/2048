//
//  2048
//
//  Created by Kavin Varnan on 2019-03-22
//

const keypress = require('keypress');

class Keypress {
  constructor(up, down, left, right) {
    this.up = up;
    this.down = down;
    this.left = left;
    this.right = right;
    this.startKeypressListener();
  }


  startKeypressListener() {
    // make `process.stdin` begin emitting "keypress" events
    keypress(process.stdin);

    // listen for the "keypress" event
    process.stdin.on('keypress', (ch, key) => {
      if (key && key.ctrl && key.name === 'c') {
        process.stdin.pause();
        console.log("Exit game");
      }

      if (key && key.name === 'right') {
        if (this.right) {
          this.right();
        }
      }

      if (key && key.name === 'left') {
        if (this.left) {
          this.left();
        }
      }

      if (key && key.name === 'up') {
        if (this.up) {
          this.up();
        }
      }

      if (key && key.name === 'down') {
        if (this.down) {
          this.down();
        }
      }
    });

    process.stdin.setRawMode(true);
    process.stdin.resume();
  };

}

module.exports = Keypress;
