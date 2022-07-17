import createWorld from "./createWorld.js";
import worldReader from "./worldReader.js";

const main = () => {
  const worldCreated = createWorld(5);
  worldReader(worldCreated);
};

main();
