const grid = document.querySelector (".grid");
const sizeBtn = document.querySelector ("button");

for (let i = 0; i < 256; i += 1) {
    const gridSquare = document.createElement ("gridSquare");
    grid.appendChild(gridSquare);

    gridSquare.addEventListener ("mouseenter", (e) => {
        gridSquare.style.background = "blue";
    });
}

sizeBtn.addEventListener ("click", () => {
    function getGridSize () {
        const gridSize = prompt ("Please enter the size of the grid.")
        if (gridSize > 100) {
            alert("The grid is too big!\nPlease choose a smaller number.");
            return getGridSize();
        }
        console.log(gridSize);
        while (grid.firstChild) {
            grid.removeChild(grid.firstChild);
        }
        return gridSize;
    }

    const userGridSize = getGridSize();
    console.log(userGridSize);

    for (let i = 0; i < userGridSize*userGridSize; i += 1) {

        const gridSquare = document.createElement ("gridSquare");
        grid.appendChild(gridSquare);
    
        gridSquare.addEventListener ("mouseenter", (e) => {
            gridSquare.style.background = "blue";
        });
    }
})
