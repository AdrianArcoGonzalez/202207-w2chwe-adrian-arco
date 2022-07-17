import createBacterium from "./createBacterium.js";

describe("Given a createBacterium function", () => {
  describe("When its called", () => {
    test("Then it should return an object with the preopertys status:false neighbordsAlive:0", () => {
      const expectedReturn = { alive: false, neighbordsAlive: 0 };

      const realReturn = createBacterium();

      expect(expectedReturn).toEqual(realReturn);
    });
  });
});
