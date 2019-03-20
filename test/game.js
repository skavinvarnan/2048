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
    expect(initialMatrix).to.eql([[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]]);
  });

  it('findAvailableSpots pos [0, 0]', () => {
    const matrix = [
      [5, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0]
    ];
    const availableSpots = new Game().findAvailableSpots(matrix);
    expect(availableSpots).to.eql([
      [0, 1],
      [0, 2],
      [0, 3],
      [1, 0],
      [1, 1],
      [1, 2],
      [1, 3],
      [2, 0],
      [2, 1],
      [2, 2],
      [2, 3],
      [3, 0],
      [3, 1],
      [3, 2],
      [3, 3],
    ])
  });

  it('findAvailableSpots pos [0, 2]', () => {
    const matrix = [
      [0, 0, 6, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0]
    ];
    const availableSpots = new Game().findAvailableSpots(matrix);
    expect(availableSpots).to.eql([
      [0, 0],
      [0, 1],
      [0, 3],
      [1, 0],
      [1, 1],
      [1, 2],
      [1, 3],
      [2, 0],
      [2, 1],
      [2, 2],
      [2, 3],
      [3, 0],
      [3, 1],
      [3, 2],
      [3, 3],
    ])
  });

  it('findAvailableSpots pos [1, 3]', () => {
    const matrix = [
      [0, 0, 0, 0],
      [0, 0, 0, 6],
      [0, 0, 0, 0],
      [0, 0, 0, 0]
    ];
    const availableSpots = new Game().findAvailableSpots(matrix);
    expect(availableSpots).to.eql([
      [0, 0],
      [0, 1],
      [0, 2],
      [0, 3],
      [1, 0],
      [1, 1],
      [1, 2],
      [2, 0],
      [2, 1],
      [2, 2],
      [2, 3],
      [3, 0],
      [3, 1],
      [3, 2],
      [3, 3],
    ])
  });

  it('findAvailableSpots pos [2, 1]', () => {
    const matrix = [
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 5, 0, 0],
      [0, 0, 0, 0]
    ];
    const availableSpots = new Game().findAvailableSpots(matrix);
    expect(availableSpots).to.eql([
      [0, 0],
      [0, 1],
      [0, 2],
      [0, 3],
      [1, 0],
      [1, 1],
      [1, 2],
      [1, 3],
      [2, 0],
      [2, 2],
      [2, 3],
      [3, 0],
      [3, 1],
      [3, 2],
      [3, 3],
    ])
  });

  it('findAvailableSpots pos [3, 0]', () => {
    const matrix = [
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [4, 0, 0, 0]
    ];
    const availableSpots = new Game().findAvailableSpots(matrix);
    expect(availableSpots).to.eql([
      [0, 0],
      [0, 1],
      [0, 2],
      [0, 3],
      [1, 0],
      [1, 1],
      [1, 2],
      [1, 3],
      [2, 0],
      [2, 1],
      [2, 2],
      [2, 3],
      [3, 1],
      [3, 2],
      [3, 3],
    ])
  });

  it('findAvailableSpots pos [1, 2]', () => {
    const matrix = [
      [0, 0, 0, 0],
      [0, 0, 6, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0]
    ];
    const availableSpots = new Game().findAvailableSpots(matrix);
    expect(availableSpots).to.eql([
      [0, 0],
      [0, 1],
      [0, 2],
      [0, 3],
      [1, 0],
      [1, 1],
      [1, 3],
      [2, 0],
      [2, 1],
      [2, 2],
      [2, 3],
      [3, 0],
      [3, 1],
      [3, 2],
      [3, 3],
    ])
  });

  it('getRandomSpot available [1, 2]', () => {
    const availableSpots = [
      [1, 2]
    ];
    const spot = new Game().getRandomSpot(availableSpots);
    expect(spot).to.eql([1, 2]);
  });

  it('getRandomSpot available [2, 3]', () => {
    const availableSpots = [
      [2, 3]
    ];
    const spot = new Game().getRandomSpot(availableSpots);
    expect(spot).to.eql([2, 3]);
  });

});
