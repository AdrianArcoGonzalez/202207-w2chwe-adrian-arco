import randomNumber from "./randomNumber.js";

const createBacterium = () => {
  const bacterium = {
    alive: false,
    neighbordsAlive: 0,
  };
  if (randomNumber() === 1) {
    bacterium.alive = true;
  }
  return bacterium;
};
export default createBacterium;
