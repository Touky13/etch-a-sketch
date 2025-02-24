const grid = document.querySelector (".grid");

for (let i = 0; i < 16; i += 1) {
    const gridSquare = document.createElement ("gridSquare");
    grid.appendChild(gridSquare);

    gridSquare.addEventListener ("mouseenter", (e) => {
        gridSquare.style.background = "blue";
        console.log(e.target);
    });
}

/* Create grid by user input
try to use a loop in a function
to create new elements via js
*/