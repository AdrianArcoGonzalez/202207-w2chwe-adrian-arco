const killAndRevive = (arrayToRead) => {
  arrayToRead.forEach((row) => {
    row.forEach((bacterium) => {
      if (bacterium.neighbordsAlive < 2) {
        bacterium.alive = false; /* eslint-disable-line no-param-reassign */
      }
      if (bacterium.neighbordsAlive === 2 || bacterium.neighbordsAlive === 3) {
        bacterium.alive = true; /* eslint-disable-line no-param-reassign */
      }
      if (bacterium.neighbordsAlive > 3) {
        bacterium.alive = false; /* eslint-disable-line no-param-reassign */
      }
      if (bacterium.neighbordsAlive === 3) {
        bacterium.alive = true; /* eslint-disable-line no-param-reassign */
      }
    });
  });
};

export default killAndRevive;
