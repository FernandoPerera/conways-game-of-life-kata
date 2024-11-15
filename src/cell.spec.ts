import { describe, expect, it } from "vitest";
import Cell from "./Cell.js";

describe("cell", () => {

  describe("live", () => {

    it("with fewer than two live neighbors dies by underpopulation", () => {
      const cell = Cell.live();
      const neighbors = generatingLivingNeighbors(1);

      const nextGeneration = cell.nextGeneration(neighbors);

      expect(nextGeneration.isItAlive()).toBe(false);
    });

    it("with two or three live neighbours lives on the next generation", () => {
      const cell = Cell.live();
      const neighbors = generatingLivingNeighbors(3);

      const nextGeneration = cell.nextGeneration(neighbors);

      expect(nextGeneration.isItAlive()).toBe(true);
    });

    it("with more than three live neighbors dies by overcrowding", () => {
      const cell = Cell.live();
      const neighbors = generatingLivingNeighbors(4);

      const nextGeneration = cell.nextGeneration(neighbors);

      expect(nextGeneration.isItAlive()).toBe(false);
    });
  });

  const generatingLivingNeighbors = (haveLive: number) => {
    const cells = [];

    for (let i = 0; i < 8; i++) {
      if (i < haveLive) {
        cells.push(Cell.live());
      } else {
        cells.push(Cell.dead());
      }
    }

    return cells;
  };

});
