import createBacterium from "./createBacterium.js";

const createWorld = (numberOfRows) => {
  const world = [];
  let row = [];

  for (let i = 0; i < numberOfRows + 1; i++) {
    world.push(row);
    row = [];
    for (let j = 0; j < numberOfRows; j++) {
      row.push(createBacterium());
    }
  }
  world.shift();

  return world;
};
export default createWorld;
