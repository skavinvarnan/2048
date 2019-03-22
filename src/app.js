//
//  2048
//
//  Created by Kavin Varnan on 2019-03-20
//

// const Game = require('./game');
//
// new Game().run();

const keypress = require('keypress');

// make `process.stdin` begin emitting "keypress" events
keypress(process.stdin);

// listen for the "keypress" event
process.stdin.on('keypress', (ch, key) => {
  if (key && key.ctrl && key.name === 'c') {
    process.stdin.pause();
    console.log("Exit game");
  }

  if (key && key.name === 'right') {
    console.log("Slide Right");
  }

  if (key && key.name === 'left') {
    console.log("Slide Left");
  }

  if (key && key.name === 'up') {
    console.log("Slide Up");
  }

  if (key && key.name === 'down') {
    console.log("Slide Down");
  }
});

process.stdin.setRawMode(true);
process.stdin.resume();
