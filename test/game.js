//
//  2048
//
//  Created by Kavin Varnan on 2019-03-20
//

const assert = require('assert');
const Game = require("../src/game");
const { expect } = require('chai');


describe('Game test', function () {
  it('Test generateInitialMatrix', function () {
    const initialMatrix = new Game().generateInitialMatrix();
    expect(initialMatrix).to.eql([[-1, -1, -1, -1], [-1, -1, -1, -1], [-1, -1, -1, -1], [-1, -1, -1, -1]]);
  });
});
