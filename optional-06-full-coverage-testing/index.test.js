import { describe, it } from "node:test";
import assert from "node:assert";
import sum from "./indexs.js";

describe("Fungsi sum", () => {
  it("should return sum of two positive numbers", () => {
    // Arrange
    const a = 3;
    const b = 4;

    // Action
    const actual = sum(a, b);

    // Assert
    const expected = 7;
    assert.equal(actual, expected);
  });

  it("should return 0 if either argument is not a number", () => {
    // Arrange
    const a = "3";
    const b = 4;

    // Action
    const actual = sum(a, b);

    // Assert
    const expected = 0;
    assert.equal(actual, expected);
  });

  it("should return 0 if either argument is negative", () => {
    // Arrange
    const a = -1;
    const b = 5;

    // Action
    const actual = sum(a, b);

    // Assert
    const expected = 0;
    assert.equal(actual, expected);
  });

  it("should return sum if arguments include zero and positive number", () => {
    // Arrange
    const a = 0;
    const b = 5;

    // Action
    const actual = sum(a, b);

    // Assert
    const expected = 5;
    assert.equal(actual, expected);
  });
});
