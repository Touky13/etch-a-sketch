const grid = document.querySelector (".grid");
const sizeBtn = document.querySelector ("#gridSize");

for (let i = 0; i < 256; i += 1) {
    const gridSquare = document.createElement ("gridSquare");
    let squareWidth = 480 / 16;
    gridSquare.style.height = `${squareWidth}px`;
    gridSquare.style.width = `${squareWidth}px`;
    grid.appendChild(gridSquare);

    const randColor = () => {
        let rgb = () => Math.floor(Math.random() * 255);
        return `rgb(${rgb()}, ${rgb()}, ${rgb()})`;
    }

    gridSquare.addEventListener ("mouseenter", (e) => {
        gridSquare.style.background = randColor();
        e.target.style.opacity = Math.min(+e.target.style.opacity + 0.1, 1.0);
    });
}

sizeBtn.addEventListener ("click", () => {
    function getGridSize () {
        const gridSize = parseInt(prompt ("Please enter the size of the grid (between 1-100 squares included)."))
        if (gridSize >= 1 && gridSize <= 100) {
        } else {
            alert("Input invalid!\nPlease choose a valid number.");
            return getGridSize();
        }
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

        const randColor = () => {
            let rgb = () => Math.floor(Math.random() * 255);
            return `rgb(${rgb()}, ${rgb()}, ${rgb()})`;
        }    

        gridSquare.addEventListener ("mouseenter", (e) => {
            gridSquare.style.background = randColor();
            e.target.style.opacity = Math.min(+e.target.style.opacity + 0.1, 1.0);
        });
    }
})

function randomRgb () {
    let rgb = () => Math.floor(Math.random() * 255);
    return `rgb(${rgb()}, ${rgb()}, ${rgb()})`;
}
