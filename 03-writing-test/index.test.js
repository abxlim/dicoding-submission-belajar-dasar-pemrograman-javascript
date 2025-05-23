import { describe, it } from "node:test";
import assert from "node:assert";
import { sum } from "./indexs.js";

describe("sum function", () => {
  it("should return sum of two numbers", () => {
    const actual = sum(1, 2);
    const expected = 3;
    assert.equal(actual, expected);
  });
});
