//
//  2048
//
//  Created by Kavin Varnan on 2019-03-20
//

const assert = require('assert');
const Game = require("../src/game");
const { expect } = require('chai');


describe('Game test', function () {
  it('generateInitialMatrix', () => {
    const initialMatrix = new Game().generateInitialMatrix();
    expect(initialMatrix).to.eql([[-1, -1, -1, -1], [-1, -1, -1, -1], [-1, -1, -1, -1], [-1, -1, -1, -1]]);
  });

  it('findAvailableSpots pos [0, 0]', () => {
    const matrix = [
      [5, -1, -1, -1],
      [-1, -1, -1, -1],
      [-1, -1, -1, -1],
      [-1, -1, -1, -1]
    ];
    const availableSpots = new Game().findAvailableSpots(matrix);
    expect(availableSpots).to.eql([
      [{x: 0, y: 1}],
      [{x: 0, y: 2}],
      [{x: 0, y: 3}],
      [{x: 1, y: 0}],
      [{x: 1, y: 1}],
      [{x: 1, y: 2}],
      [{x: 1, y: 3}],
      [{x: 2, y: 0}],
      [{x: 2, y: 1}],
      [{x: 2, y: 2}],
      [{x: 2, y: 3}],
      [{x: 3, y: 0}],
      [{x: 3, y: 1}],
      [{x: 3, y: 2}],
      [{x: 3, y: 3}],
    ])
  });

  it('findAvailableSpots pos [0, 2]', () => {
    const matrix = [
      [-1, -1, 6, -1],
      [-1, -1, -1, -1],
      [-1, -1, -1, -1],
      [-1, -1, -1, -1]
    ];
    const availableSpots = new Game().findAvailableSpots(matrix);
    expect(availableSpots).to.eql([
      [{x: 0, y: 0}],
      [{x: 0, y: 1}],
      [{x: 0, y: 3}],
      [{x: 1, y: 0}],
      [{x: 1, y: 1}],
      [{x: 1, y: 2}],
      [{x: 1, y: 3}],
      [{x: 2, y: 0}],
      [{x: 2, y: 1}],
      [{x: 2, y: 2}],
      [{x: 2, y: 3}],
      [{x: 3, y: 0}],
      [{x: 3, y: 1}],
      [{x: 3, y: 2}],
      [{x: 3, y: 3}],
    ])
  });

  it('findAvailableSpots pos [1, 3]', () => {
    const matrix = [
      [-1, -1, -1, -1],
      [-1, -1, -1, 6],
      [-1, -1, -1, -1],
      [-1, -1, -1, -1]
    ];
    const availableSpots = new Game().findAvailableSpots(matrix);
    expect(availableSpots).to.eql([
      [{x: 0, y: 0}],
      [{x: 0, y: 1}],
      [{x: 0, y: 2}],
      [{x: 0, y: 3}],
      [{x: 1, y: 0}],
      [{x: 1, y: 1}],
      [{x: 1, y: 2}],
      [{x: 2, y: 0}],
      [{x: 2, y: 1}],
      [{x: 2, y: 2}],
      [{x: 2, y: 3}],
      [{x: 3, y: 0}],
      [{x: 3, y: 1}],
      [{x: 3, y: 2}],
      [{x: 3, y: 3}],
    ])
  });

  it('findAvailableSpots pos [2, 1]', () => {
    const matrix = [
      [-1, -1, -1, -1],
      [-1, -1, -1, -1],
      [-1, 5, -1, -1],
      [-1, -1, -1, -1]
    ];
    const availableSpots = new Game().findAvailableSpots(matrix);
    expect(availableSpots).to.eql([
      [{x: 0, y: 0}],
      [{x: 0, y: 1}],
      [{x: 0, y: 2}],
      [{x: 0, y: 3}],
      [{x: 1, y: 0}],
      [{x: 1, y: 1}],
      [{x: 1, y: 2}],
      [{x: 1, y: 3}],
      [{x: 2, y: 0}],
      [{x: 2, y: 2}],
      [{x: 2, y: 3}],
      [{x: 3, y: 0}],
      [{x: 3, y: 1}],
      [{x: 3, y: 2}],
      [{x: 3, y: 3}],
    ])
  });

  it('findAvailableSpots pos [3, 0]', () => {
    const matrix = [
      [-1, -1, -1, -1],
      [-1, -1, -1, -1],
      [-1, -1, -1, -1],
      [4, -1, -1, -1]
    ];
    const availableSpots = new Game().findAvailableSpots(matrix);
    expect(availableSpots).to.eql([
      [{x: 0, y: 0}],
      [{x: 0, y: 1}],
      [{x: 0, y: 2}],
      [{x: 0, y: 3}],
      [{x: 1, y: 0}],
      [{x: 1, y: 1}],
      [{x: 1, y: 2}],
      [{x: 1, y: 3}],
      [{x: 2, y: 0}],
      [{x: 2, y: 1}],
      [{x: 2, y: 2}],
      [{x: 2, y: 3}],
      [{x: 3, y: 1}],
      [{x: 3, y: 2}],
      [{x: 3, y: 3}],
    ])
  });

  it('findAvailableSpots pos [1, 2]', () => {
    const matrix = [
      [-1, -1, -1, -1],
      [-1, -1, 6, -1],
      [-1, -1, -1, -1],
      [-1, -1, -1, -1]
    ];
    const availableSpots = new Game().findAvailableSpots(matrix);
    expect(availableSpots).to.eql([
      [{x: 0, y: 0}],
      [{x: 0, y: 1}],
      [{x: 0, y: 2}],
      [{x: 0, y: 3}],
      [{x: 1, y: 0}],
      [{x: 1, y: 1}],
      [{x: 1, y: 3}],
      [{x: 2, y: 0}],
      [{x: 2, y: 1}],
      [{x: 2, y: 2}],
      [{x: 2, y: 3}],
      [{x: 3, y: 0}],
      [{x: 3, y: 1}],
      [{x: 3, y: 2}],
      [{x: 3, y: 3}],
    ])
  });


});
