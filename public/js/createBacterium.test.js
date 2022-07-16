import createBacterium from "./createBacterium.js";

describe("Given a createBacterium function", () => {
  describe("When its called", () => {
    test("Then it should return an object with the preoperty status:false ", () => {
      const expectedReturn = { alive: false };

      const realReturn = createBacterium();

      expect(expectedReturn).toStrictEqual(realReturn);
    });
  });
});
