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
      }
      cellHouse.setAttribute("id", "bacteriumDead");
    });
  });
};

export default createWorldHtml;
