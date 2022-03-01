export class GameOfLife {
  private readonly board: number[][];

  constructor(board: number[][] = []) {
    this.board = board;
  }

  public nextTick(): GameOfLife {
    const deadCells: number[][] = [];
    const birthCells: number[][] = [];
    if (this.board[0]) {
      for (let y = 0; y < this.board.length; y++) {
        for (let x = 0; x < this.board[y].length; x++) {
          const aliveNeighbours = this.aliveNeighbours(x, y);
          if (aliveNeighbours < 2 || aliveNeighbours > 3) {
            deadCells.push([x, y]);
          }
          if (aliveNeighbours === 3) {
            birthCells.push([x, y]);
          }
        }
      }
    }
    deadCells.forEach(([x, y]) => (this.board[y][x] = 0));
    birthCells.forEach(([x, y]) => (this.board[y][x] = 1));
    return this;
  }

  private aliveNeighbours(x: number, y: number): number {
    return [
      [x - 1, y],
      [x + 1, y],
      [x, y - 1],
      [x, y + 1],
      [x - 1, y - 1],
      [x + 1, y - 1],
      [x - 1, y + 1],
      [x + 1, y + 1],
    ]
      .filter(([, y]) => y >= 0)
      .filter(([, y]) => y < this.board.length)
      .filter(([x]) => x >= 0)
      .filter(([x, y]) => x < this.board[y].length)
      .filter(([x, y]) => this.board[y][x] === 1).length;
  }
}
