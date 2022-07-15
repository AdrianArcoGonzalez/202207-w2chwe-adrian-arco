const createWorld = (numberOfColumns) => {
  const world = [];
  const column = [];
  let bacterium = [];
  let positionX = 0;
  let positionY = 0;
  const alive = false;

  for (let i = 0; i < numberOfColumns; i++) {
    bacterium.push(positionX, positionY, alive);
    positionX++;
    positionY++;
    column.push(bacterium);
    bacterium = [];
  }

  return world;
};

export default createWorld;
