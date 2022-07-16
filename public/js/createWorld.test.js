import createWorld from "./createWorld.js";

describe("Given the function createWorld", () => {
  describe("When its called and have 5 as parameter", () => {
    test("Then it should return an array with 5 as length", () => {
      const numberOfRows = 5;
      const expectedLenght = 5;

      const returnFromFunction = createWorld(numberOfRows);
      const lengthReturned = returnFromFunction.length;

      expect(expectedLenght).toBe(lengthReturned);
    });
  });
});
