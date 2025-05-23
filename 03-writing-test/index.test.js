import { describe, it } from "node:test";
import assert from "node:assert";
import { sum } from "./index.js";

describe("sum function", () => {
  it("mengembalikan penjumlahan", () => {
    const actual = sum(1, 2);
    const expected = 3;
    assert.equal(actual, expected);
  });
});
