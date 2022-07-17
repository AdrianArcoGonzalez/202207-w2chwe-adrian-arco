import createWorld from "./createWorld.js";
import killAndRevive from "./killAndRevive.js";
import worldReader from "./worldReader.js";

const createWorldHtml = (worldToGenerate) => {
  const divWorldContainer = document.createElement("div");
  divWorldContainer.setAttribute("id", "world-container");
  const bacteriumWorld = document.getElementById("bacterium-world");
  bacteriumWorld.appendChild(divWorldContainer);

  worldToGenerate.forEach((row) => {
    const rowWorld = document.createElement("div");
    divWorldContainer.appendChild(rowWorld);
    rowWorld.setAttribute("id", "rowContainer");

    row.forEach((bacteriumHouse) => {
      const cellHouse = document.createElement("div");
      rowWorld.appendChild(cellHouse);
      cellHouse.setAttribute("id", "bacteriumContainer");

      if (bacteriumHouse.alive === true) {
        cellHouse.setAttribute("id", "bacteriumAlive");
      } else if (bacteriumHouse.alive === false) {
        cellHouse.setAttribute("id", "bacteriumDead");
      }
    });
  });
};

const worldCreated = createWorld(45);
createWorldHtml(worldCreated);
const startCivilization = () => {
  setInterval(() => {
    worldReader(worldCreated);
    killAndRevive(worldCreated);
    const worldContainer = document.getElementById("world-container");
    worldContainer.remove();
    createWorldHtml(worldCreated);
  }, 1000);
};

const startGame = () => {
  const buttonStart = document.getElementById("button-start");
  buttonStart.addEventListener("click", startCivilization());
};
startGame();
