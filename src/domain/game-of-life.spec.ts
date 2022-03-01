import { expect } from "chai";

class GameOfLife {
  public nextTick(): GameOfLife {
    return this;
  }
}

describe("GameOfLife", () => {
  it("changes nothing for empty board", () => {
    const gameOfLife = new GameOfLife().nextTick();

    expect(gameOfLife).to.deep.equal(new GameOfLife());
  });
});
