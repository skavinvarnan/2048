//
//  2048
//
//  Created by Kavin Varnan on 2019-03-20
//

const assert = require('assert');
const Game = require("../src/game");
const { expect } = require('chai');


describe('Game tests', function () {
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

  it('pushRowToLeft [4, 4, 2, 2] -> [8, 4, 0, 0]', () => {
    const spot = new Game().pushRowToLeft([4, 4, 2, 2]);
    expect(spot).to.eql([8, 4, 0, 0]);
  });

  it('pushRowToLeft [4, 0, 2, 2] -> [4, 4, 0, 0]', () => {
    const spot = new Game().pushRowToLeft([4, 0, 2, 2]);
    expect(spot).to.eql([4, 4, 0, 0]);
  });

  it('pushRowToLeft [0, 2, 2, 0] -> [4, 0, 0, 0]', () => {
    const spot = new Game().pushRowToLeft([0, 2, 2, 0]);
    expect(spot).to.eql([4, 0, 0, 0]);
  });

  it('pushRowToLeft [2, 2, 4, 8] -> [4, 4, 8, 0]', () => {
    const spot = new Game().pushRowToLeft([2, 2, 4, 8]);
    expect(spot).to.eql([4, 4, 8, 0]);
  });

  it('pushRowToLeft [2, 0, 2, 0] -> [4, 0, 0, 0]', () => {
    const spot = new Game().pushRowToLeft([2, 0, 2, 0]);
    expect(spot).to.eql([4, 0, 0, 0]);
  });

  it('pushRowToLeft [0, 2, 4, 4] -> [2, 8, 0, 0]', () => {
    const spot = new Game().pushRowToLeft([0, 2, 4, 4]);
    expect(spot).to.eql([2, 8, 0, 0]);
  });

  it('pushRowToLeft [8, 2, 2, 8] -> [8, 4, 8, 0]', () => {
    const spot = new Game().pushRowToLeft([8, 2, 2, 8]);
    expect(spot).to.eql([8, 4, 8, 0]);
  });

  it('pushRowToLeft [0, 0, 2, 2] -> [4, 0, 0, 0]', () => {
    const spot = new Game().pushRowToLeft([0, 0, 2, 2]);
    expect(spot).to.eql([4, 0, 0, 0]);
  });

  it('pushRowToLeft [0, 8, 2, 4] -> [8, 2, 4, 0]', () => {
    const spot = new Game().pushRowToLeft([0, 8, 2, 4]);
    expect(spot).to.eql([8, 2, 4, 0]);
  });

  it('pushRowToLeft [2, 2, 4, 0] -> [4, 4, 0, 0]', () => {
    const spot = new Game().pushRowToLeft([2, 2, 4, 0]);
    expect(spot).to.eql([4, 4, 0, 0]);
  });

  it('pushRowToLeft [2, 2, 4, 4] -> [4, 8, 0, 0]', () => {
    const spot = new Game().pushRowToLeft([2, 2, 4, 4]);
    expect(spot).to.eql([4, 8, 0, 0]);
  });

  it('pushRowToLeft [0, 0, 2, 0] -> [2, 0, 0, 0]', () => {
    const spot = new Game().pushRowToLeft([0, 0, 2, 0]);
    expect(spot).to.eql([2, 0, 0, 0]);
  });

  it('slide zero', () => {
    const matrix = [[0, 0, 0, 0],
                    [0, 0, 0, 0],
                    [0, 0, 0, 0],
                    [0, 0, 0, 0]];
    const outputMatrix = new Game().slideLeft(matrix);
    const outputMatrixExpected = [[0, 0, 0, 0],
                                  [0, 0, 0, 0],
                                  [0, 0, 0, 0],
                                  [0, 0, 0, 0]];
    expect(outputMatrix).to.eql(outputMatrixExpected);
  });

  it('slideLeft test 1', () => {
    const matrix = [[0, 2, 0, 2],
                    [2, 0, 8, 0],
                    [0, 4, 4, 0],
                    [0, 0, 4, 2]];
    const outputMatrix = new Game().slideLeft(matrix);
    const outputMatrixExpected = [[4, 0, 0, 0],
                                  [2, 8, 0, 0],
                                  [8, 0, 0, 0],
                                  [4, 2, 0, 0]];
    expect(outputMatrix).to.eql(outputMatrixExpected);
  });

  it('slideLeft test 2', () => {
    const matrix = [[0, 2, 8, 4],
                    [0, 0, 4, 8],
                    [0, 4, 0, 0],
                    [0, 0, 0, 0]];
    const outputMatrix = new Game().slideLeft(matrix);
    const outputMatrixExpected = [[2, 8, 4, 0],
                                  [4, 8, 0, 0],
                                  [4, 0, 0, 0],
                                  [0, 0, 0, 0]];
    expect(outputMatrix).to.eql(outputMatrixExpected);
  });

  it('slideLeft test 3', () => {
    const matrix = [[0, 0, 2, 0],
                    [0, 0, 0, 4],
                    [0, 0, 0, 8],
                    [2, 0, 4, 2]];
    const outputMatrix = new Game().slideLeft(matrix);
    const outputMatrixExpected = [[2, 0, 0, 0],
                                  [4, 0, 0, 0],
                                  [8, 0, 0, 0],
                                  [2, 4, 2, 0]];
    expect(outputMatrix).to.eql(outputMatrixExpected);
  });

  it('slideRight test 1', () => {
    const matrix = [[0, 4, 0, 0],
                    [0, 8, 4, 0],
                    [0, 2, 2, 0],
                    [0, 8, 0, 0]];
    const outputMatrix = new Game().slideRight(matrix);
    const outputMatrixExpected = [[0, 0, 0, 4],
                                  [0, 0, 8, 4],
                                  [0, 0, 0, 4],
                                  [0, 0, 0, 8]];
    expect(outputMatrix).to.eql(outputMatrixExpected);
  });

  it('slideRight test 2', () => {
    const matrix = [[2, 0, 0, 0],
                    [4, 0, 0, 0],
                    [8, 0, 0, 0],
                    [2, 4, 2, 2]];
    const outputMatrix = new Game().slideRight(matrix);
    const outputMatrixExpected = [[0, 0, 0, 2],
                                  [0, 0, 0, 4],
                                  [0, 0, 0, 8],
                                  [0, 2, 4, 4]];
    expect(outputMatrix).to.eql(outputMatrixExpected);
  });

  it('slideRight test 3', () => {
    const matrix = [[0, 4, 0, 0],
                    [0, 0, 2, 0],
                    [8, 2, 0, 4],
                    [4, 4, 2, 0]];
    const outputMatrix = new Game().slideRight(matrix);
    const outputMatrixExpected = [[0, 0, 0, 4],
                                  [0, 0, 0, 2],
                                  [0, 8, 2, 4],
                                  [0, 0, 8, 2]];
    expect(outputMatrix).to.eql(outputMatrixExpected);
  });

  it('slideUp test 1', () => {
    const matrix = [[2, 0, 0, 0],
                    [0, 0, 0, 0],
                    [0, 8, 2, 4],
                    [0, 0, 8, 2]];
    const outputMatrix = new Game().slideUp(matrix);
    const outputMatrixExpected = [[2, 8, 2, 4],
                                  [0, 0, 8, 2],
                                  [0, 0, 0, 0],
                                  [0, 0, 0, 0]];
    expect(outputMatrix).to.eql(outputMatrixExpected);
  });

  it('slideUp test 2', () => {
    const matrix = [[0, 0, 2, 0],
                    [2, 4, 0, 0],
                    [2, 0, 0, 0],
                    [4, 4, 0, 0]];
    const outputMatrix = new Game().slideUp(matrix);
    const outputMatrixExpected = [[4, 8, 2, 0],
                                  [4, 0, 0, 0],
                                  [0, 0, 0, 0],
                                  [0, 0, 0, 0]];
    expect(outputMatrix).to.eql(outputMatrixExpected);
  });

  it('slideUp test 3', () => {
    const matrix = [[0, 0, 0, 0],
                    [0, 0, 0, 0],
                    [8, 0, 0, 2],
                    [2, 8, 2, 0]];
    const outputMatrix = new Game().slideUp(matrix);
    const outputMatrixExpected = [[8, 8, 2, 2],
                                  [2, 0, 0, 0],
                                  [0, 0, 0, 0],
                                  [0, 0, 0, 0]];
    expect(outputMatrix).to.eql(outputMatrixExpected);
  });

  it('slideDown test 1', () => {
    const matrix = [[8, 8, 2, 2],
                    [2, 0, 0, 0],
                    [0, 0, 0, 0],
                    [0, 0, 0, 2]];
    const outputMatrix = new Game().slideDown(matrix);
    const outputMatrixExpected = [[0, 0, 0, 0],
                                  [0, 0, 0, 0],
                                  [8, 0, 0, 0],
                                  [2, 8, 2, 4]];
    expect(outputMatrix).to.eql(outputMatrixExpected);
  });

  it('slideDown test 2', () => {
    const matrix = [[8, 8, 2, 2],
                    [2, 0, 0, 4],
                    [0, 0, 0, 0],
                    [2, 0, 0, 0]];
    const outputMatrix = new Game().slideDown(matrix);
    const outputMatrixExpected = [[0, 0, 0, 0],
                                  [0, 0, 0, 0],
                                  [8, 0, 0, 2],
                                  [4, 8, 2, 4]];
    expect(outputMatrix).to.eql(outputMatrixExpected);
  });

  it('slideDown test 3', () => {
    const matrix = [[2, 8, 2, 2],
                    [8, 2, 0, 4],
                    [4, 0, 0, 0],
                    [0, 0, 0, 0]];
    const outputMatrix = new Game().slideDown(matrix);
    const outputMatrixExpected = [[0, 0, 0, 0],
                                  [2, 0, 0, 0],
                                  [8, 8, 0, 2],
                                  [4, 2, 2, 4]];
    expect(outputMatrix).to.eql(outputMatrixExpected);
  });


});
