export class GameOfLife {
  private readonly board: number[][];
  private readonly verticalSize: number;
  private readonly horizontalSize: number;

  constructor(board: number[][] = []) {
    this.board = board;
    this.verticalSize = this.board.length;
    this.horizontalSize = this.board[0]?.length ?? 0;
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
    const minX = x - 1 > 0 ? x - 1 : 0;
    const maxX = x + 1 < this.horizontalSize ? x + 1 : this.horizontalSize - 1;
    const minY = y - 1 > 0 ? y - 1 : 0;
    const maxY = y + 1 < this.verticalSize ? y + 1 : this.verticalSize - 1;
    for (let i = minX; i <= maxX; i++) {
      for (let j = minY; j <= maxY; j++) {
        count += this.board[j][i];
      }
    }
    return count - this.board[y][x];
  }
}
