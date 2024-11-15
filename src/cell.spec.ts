import { describe, it, expect, vitest } from "vitest";

class Cell {

  nextGeneration(neighbors: boolean[]): boolean {
    return false;
  }

}

describe("Cell", () => {

  it("with fewer than two live neighbors dies by underpopulation", () => {
    const cell = new Cell();

    const isAlive = cell.nextGeneration([true, false, false, false, false, false, false, false]);

    expect(isAlive).toBe(false);
  });

});
