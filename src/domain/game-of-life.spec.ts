import { expect } from "chai";
import { GameOfLife } from "@/domain/game-of-life";

describe("GameOfLife", () => {
  it("changes nothing for empty board", () => {
    const gameOfLife = new GameOfLife().nextTick();

    expect(gameOfLife).to.deep.equal(new GameOfLife());
  });

  describe("First rule", () => {
    it("dies when living cell is alone", () => {
      const gameOfLife = new GameOfLife([[1]]).nextTick();

      expect(gameOfLife).to.deep.equal(new GameOfLife([[0]]));
    });

    it("dies when two living cell are alone", () => {
      const gameOfLife = new GameOfLife([[1, 1]]).nextTick();

      expect(gameOfLife).to.deep.equal(new GameOfLife([[0, 0]]));
    });

    it("only the middle cell survive when 3 cell aligned", () => {
      const gameOfLife = new GameOfLife([[1, 1, 1]]).nextTick();

      expect(gameOfLife).to.deep.equal(new GameOfLife([[0, 1, 0]]));
    });

    it("cell survive when having neighbours behind them", () => {
      const gameOfLife = new GameOfLife([[1], [1], [1]]).nextTick();

      expect(gameOfLife).to.deep.equal(new GameOfLife([[0], [1], [0]]));
    });
  });

  describe("Second rule", () => {
    it("cell dies when having too much neighbours", () => {
      const gameOfLife = new GameOfLife([
        [1, 1, 1],
        [1, 1, 1],
        [1, 1, 1],
      ]).nextTick();

      expect(gameOfLife).to.deep.equal(
        new GameOfLife([
          [1, 0, 1],
          [0, 0, 0],
          [1, 0, 1],
        ])
      );
    });
  });

  describe("Fourth rule", () => {
    it("3 adjacent cells can give birth", () => {
      const gameOfLife = new GameOfLife([
        [1, 1],
        [1, 0],
      ]).nextTick();

      expect(gameOfLife).to.deep.equal(
        new GameOfLife([
          [1, 1],
          [1, 1],
        ])
      );
    });
  });
});
