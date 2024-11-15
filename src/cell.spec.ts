import { describe, it, expect, vitest } from "vitest";

class Cell {

  nextGeneration(neighbors: boolean[]): boolean {
    return neighbors.filter(Boolean).length >= 2;
  }

}

describe("cell", () => {

  describe("live", () => {

    it("with fewer than two live neighbors dies by underpopulation", () => {
      const cell = new Cell();

      const isAlive = cell.nextGeneration([true, false, false, false, false, false, false, false]);

      expect(isAlive).toBe(false);
    });

    it("with two or three live neighbours lives on the next generation", () => {
      const cell = new Cell();

      const isAlive = cell.nextGeneration([true, false, true, true, false, false, false, false]);

      expect(isAlive).toBe(true);
    });

    it("with more than three live neighbors dies by overcrowding", () => {
      const cell = new Cell();

      const isAlive = cell.nextGeneration([true, false, true, true, false, false, true, false]);

      expect(isAlive).toBe(false);
    });

  })

});
