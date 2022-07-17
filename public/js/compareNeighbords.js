/* eslint-disable prefer-const */

import checkUndefines from "./checkUndefines.js";

const compareRows = (array, row, column, originalRow) => {
  let checksOnLoop = 0;
  let columnChecker = column - 1;
  let aliveRowNeighbords = 0;

  do {
    if (checkUndefines(array, row, columnChecker)) {
      if (!(row === originalRow && column === columnChecker)) {
        aliveRowNeighbords += array[row][columnChecker].alive ? 1 : 0;
      }
    }
    columnChecker++;
    checksOnLoop++;
  } while (checksOnLoop < 3);

  return aliveRowNeighbords;
};

const compareNeighbords = (array, row, column) => {
  let rowsChecker = row - 1;
  let checksOnLoop = 0;
  let neighbordsColumnAlive = 0;
  let originalRow = row;
  do {
    neighbordsColumnAlive += compareRows(
      array,
      rowsChecker,
      column,
      originalRow
    );
    rowsChecker++;
    checksOnLoop++;
  } while (checksOnLoop < 3);

  return neighbordsColumnAlive;
};

export default compareNeighbords;
