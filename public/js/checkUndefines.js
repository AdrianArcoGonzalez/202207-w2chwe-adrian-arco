const checkUndefines = (array, row, column) => {
  if (row < 0 || column < 0 || column >= array.length || row >= array.length) {
    return false;
  }

  return true;
};

export default checkUndefines;
