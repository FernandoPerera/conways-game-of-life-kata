import { describe, it, expect, vitest } from "vitest";

describe("Cell", () => {

  it("with fewer than two live neighbors dies by underpopulation", () => {
    const cell = {
      nextGeneration: vitest.fn()
    };

    const isAlive = cell.nextGeneration([true, false, false, false, false, false, false, false]);

    expect(isAlive).toBe(false);
  });

});
