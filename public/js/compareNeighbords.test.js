import compareNeighbords from "./compareNeighbords.js";

describe("Given a compareNeighBords function that check for an object status as alive", () => {
  describe("When its called with a testArray column as 1 and row as 2", () => {
    test("Then it should return the number of neighbords with property status:alive", () => {
      const expectedReturn = 3;
      const testArray = [
        [{ alive: false }, { alive: false }, { alive: true }, { alive: false }],
        [{ alive: true }, { alive: true }, { alive: false }, { alive: true }],
        [{ alive: true }, { alive: false }, { alive: false }, { alive: false }],
        [{ alive: false }, { alive: false }, { alive: true }, { alive: false }],
        [{ alive: false }, { alive: false }, { alive: true }, { alive: false }],
      ];

      const rowToCheck = 1;
      const columnToCheck = 2;

      const realReturnResult = compareNeighbords(
        testArray,
        rowToCheck,
        columnToCheck
      );

      expect(expectedReturn).toEqual(realReturnResult);
    });
  });
});
