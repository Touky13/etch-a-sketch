const grid = document.querySelector (".grid");
const sizeBtn = document.querySelector ("button");

for (let i = 0; i < 256; i += 1) {
    const gridSquare = document.createElement ("gridSquare");
    let squareWidth = 480 / 16;
    gridSquare.style.height = `${squareWidth}px`;
    gridSquare.style.width = `${squareWidth}px`;
    grid.appendChild(gridSquare);

    gridSquare.addEventListener ("mouseenter", (e) => {
        gridSquare.style.background = "black";
    });
}

sizeBtn.addEventListener ("click", () => {
    function getGridSize () {
        const gridSize = prompt ("Please enter the size of the grid (below 100 squares).")
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

    for (let i = 0; i < userGridSize** 2; i += 1) {
        const gridSquare = document.createElement ("gridSquare");
        let squareWidth = 480 / userGridSize;
        gridSquare.style.height = `${squareWidth}px`;
        gridSquare.style.width = `${squareWidth}px`;    
        grid.appendChild(gridSquare);
    
        gridSquare.addEventListener ("mouseenter", (e) => {
            gridSquare.style.background = "black";
        });
    }
})
