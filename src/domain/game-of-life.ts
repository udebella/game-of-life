export class GameOfLife {
  private readonly board: number[][];
  private readonly verticalSize: number;
  private readonly horizontalSize: number;

  constructor(board: number[][] = []) {
    this.board = board;
    this.verticalSize = this.board.length;
    this.horizontalSize = this.board[0].length;
  }

  public size(): [number, number] {
    return [this.verticalSize, this.horizontalSize];
  }

  public cell(x: number, y: number): number {
    return this.board[y][x];
  }

  public nextTick(): GameOfLife {
    const deadCells: number[][] = [];
    const birthCells: number[][] = [];
    for (let y = 0; y < this.verticalSize; y++) {
      for (let x = 0; x < this.horizontalSize; x++) {
        const aliveNeighbours = this.aliveNeighbours(x, y);
        if (
          this.board[y][x] === 1 &&
          (aliveNeighbours < 2 || aliveNeighbours > 3)
        ) {
          deadCells.push([x, y]);
        }
        if (this.board[y][x] === 0 && aliveNeighbours === 3) {
          birthCells.push([x, y]);
        }
      }
    }
    deadCells.forEach(([x, y]) => (this.board[y][x] = 0));
    birthCells.forEach(([x, y]) => (this.board[y][x] = 1));
    return this;
  }

  private aliveNeighbours(x: number, y: number): number {
    let count = 0;
    for (let i = -1; i <= 1; i++) {
      for (let j = -1; j <= 1; j++) {
        const newX = x + i;
        const newJ = y + j;
        if (
          newX > 0 &&
          newX < this.horizontalSize &&
          newJ > 0 &&
          newJ < this.verticalSize &&
          this.board[newJ][newX] === 1
        ) {
          count++;
        }
      }
    }
    return count;
  }
}
