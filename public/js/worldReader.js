import compareNeighbords from "./compareNeighbords.js";

const worldReader = (arrayToRead) => {
  arrayToRead.forEach((row, rowIndex) => {
    row.forEach((bacterium, columnIndex) => {
      bacterium.neighbordsAlive = compareNeighbords(
        arrayToRead,
        rowIndex,
        columnIndex
      );
    });
  });
};

export default worldReader;
