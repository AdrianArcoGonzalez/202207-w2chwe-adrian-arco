/* eslint-disable prefer-const */
const compareRows = (array, row, column) => {
  let checksOnLoop = 0;
  let columnChecker = column - 1;
  let aliveRowNeighbords = 0;
  do {
    aliveRowNeighbords += array[row][columnChecker].alive ? 1 : 0;

    columnChecker++;
    checksOnLoop++;
  } while (checksOnLoop < 3);

  return aliveRowNeighbords;
};

const compareNeighbords = (array, row, column) => {
  let rowsChecker = row - 1;
  let checksOnLoop = 0;
  let neighbordsColumnAlive = 0;

  do {
    neighbordsColumnAlive += compareRows(array, rowsChecker, column);
    rowsChecker++;
    checksOnLoop++;
  } while (checksOnLoop < 3);

  return neighbordsColumnAlive;
};

export default compareNeighbords;
