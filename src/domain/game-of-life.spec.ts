import { expect } from "chai";

interface GameOfLifeConstructor {
  board: number[][];
}

class GameOfLife {
  private readonly board: number[][];

  constructor({ board }: GameOfLifeConstructor = { board: [] }) {
    this.board = board;
  }

  public nextTick(): GameOfLife {
    if (this.board[0]) {
      this.board[0].forEach((_, index) => {
        this.board[0][index] = 0;
      });
    }
    return this;
  }
}

describe("GameOfLife", () => {
  it("changes nothing for empty board", () => {
    const gameOfLife = new GameOfLife().nextTick();

    expect(gameOfLife).to.deep.equal(new GameOfLife());
  });

  describe("First rule", () => {
    it("dies when living cell is alone", () => {
      const gameOfLife = new GameOfLife({ board: [[1]] }).nextTick();

      expect(gameOfLife).to.deep.equal(new GameOfLife({ board: [[0]] }));
    });

    it("dies when two living cell are alone", () => {
      const gameOfLife = new GameOfLife({ board: [[1, 1]] }).nextTick();

      expect(gameOfLife).to.deep.equal(new GameOfLife({ board: [[0, 0]] }));
    });
  });
});
