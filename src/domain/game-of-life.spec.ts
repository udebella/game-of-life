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
    const deadCells: number[][] = [];
    if (this.board[0]) {
      for (let y = 0; y < this.board.length; y++) {
        for (let x = 0; x < this.board[y].length; x++) {
          if (this.aliveNeighbours(x, y) < 2) {
            deadCells.push([x, y]);
          }
        }
      }
    }
    deadCells.forEach(([x, y]) => (this.board[y][x] = 0));
    return this;
  }

  private aliveNeighbours(x: number, y: number): number {
    return [
      [x - 1, y],
      [x + 1, y],
      [x, y - 1],
      [x, y + 1],
    ]
      .filter(([, y]) => y >= 0)
      .filter(([, y]) => y < this.board.length)
      .filter(([x]) => x >= 0)
      .filter(([x, y]) => x < this.board[y].length)
      .filter(([x, y]) => this.board[y][x] === 1).length;
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

    it("only the middle cell survive when 3 cell aligned", () => {
      const gameOfLife = new GameOfLife({ board: [[1, 1, 1]] }).nextTick();

      expect(gameOfLife).to.deep.equal(new GameOfLife({ board: [[0, 1, 0]] }));
    });

    it("cell survive when having neighbours behind them", () => {
      const gameOfLife = new GameOfLife({
        board: [
          [1, 1],
          [1, 0],
        ],
      }).nextTick();

      expect(gameOfLife).to.deep.equal(
        new GameOfLife({
          board: [
            [1, 0],
            [0, 0],
          ],
        })
      );
    });
  });
});
