const grid = document.querySelector (".grid");
const sizeBtn = document.querySelector ("button");

for (let i = 0; i < 16; i += 1) {
    const gridSquare = document.createElement ("gridSquare");
    grid.appendChild(gridSquare);

    gridSquare.addEventListener ("mouseenter", (e) => {
        gridSquare.style.background = "blue";
    });
}

sizeBtn.addEventListener ("click", (e) => {
    const gridSize = prompt ("Please enter the size of the grid.")
    console.log(gridSize);
})

/* Create grid by user input
try to use a loop in a function
to create new elements via js
*/