import createWorld from "./createWorld.js";
import killAndRevive from "./killAndRevive.js";
import worldReader from "./worldReader.js";
import createWorldHtml from "./createBacteriumDiv.js";

const main = () => {
  const worldCreated = createWorld(45);
  worldReader(worldCreated);
  createWorldHtml(worldCreated);
  killAndRevive(worldCreated);
  createWorld(worldCreated);
};

main();
