import { describe, it, expect } from "vitest";
import Cell from "./Cell.js";

describe("cell", () => {

  describe("live", () => {

    it("with fewer than two live neighbors dies by underpopulation", () => {
      const cell = Cell.live();

      const nextGeneration = cell.nextGeneration([true, false, false, false, false, false, false, false]);

      expect(nextGeneration.isItAlive()).toBe(false);
    });

    it("with two or three live neighbours lives on the next generation", () => {
      const cell = Cell.live();

      const nextGeneration = cell.nextGeneration([true, false, true, true, false, false, false, false]);

      expect(nextGeneration.isItAlive()).toBe(true);
    });

    it("with more than three live neighbors dies by overcrowding", () => {
      const cell = Cell.live();

      const nextGeneration = cell.nextGeneration([true, false, true, true, false, false, true, false]);

      expect(nextGeneration.isItAlive()).toBe(false);
    });

  })

});
