const createWorld = (numberOfColumns) => {
  const world = [];
  const column = [];
  let bacterium = [];
  let positionX = 0;
  let positionY = 0;
  let alive = false;

  for (let i = 0; i < numberOfColumns; i++) {
    bacterium.push(positionX, positionY, alive);
    positionX++;
    positionY++;
    column.push(bacterium);
    bacterium = [];
    world.push(column);
  }

  return world;
};
createWorld(5);
export default createWorld;
