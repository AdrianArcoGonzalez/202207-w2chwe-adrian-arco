import createWorld from "./createWorld.js";
import killAndRevive from "./killAndRevive.js";
import worldReader from "./worldReader.js";
import createWorldHtml from "./createBacteriumDiv.js";

const main = () => {
  const worldCreated = createWorld(5);
  createWorldHtml(worldCreated);
  worldReader(worldCreated);
  killAndRevive(worldCreated);
};

main();
