class Cell {
  private constructor(private readonly isAlive: boolean) {}

  static live() {
    return new Cell(true);
  }

  static dead() {
    return new Cell(false);
  }

  nextGeneration(neighbors: boolean[]): Cell {
    const liveNeighbors = neighbors.filter(Boolean).length;

    if (liveNeighbors > 3) return Cell.dead();
    return liveNeighbors >= 2
      ? Cell.live()
      : Cell.dead();
  }

  isItAlive(): boolean {
    return this.isAlive;
  }

}

export default Cell;
