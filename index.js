/*const grid1 = document.createElement(grid1);
const grid2 = document.createElement(grid2);
const grid3 = document.createElement(grid3);
const grid4 = document.createElement(grid4);
const grid5 = document.createElement(grid5);
const grid6 = document.createElement(grid6);
const grid7 = document.createElement(grid7);
const grid8 = document.createElement(grid8);
const grid9 = document.createElement(grid9);
const grid10 = document.createElement(grid10);
const grid11 = document.createElement(grid11);
const grid12 = document.createElement(grid12);
const grid13 = document.createElement(grid13);
const grid14 = document.createElement(grid14);
const grid15 = document.createElement(grid15);
const grid16 = document.createElement(grid16);
*/

const grid = document.querySelector (".grid");

for (let i = 0; i < 16; i += 1) {
    let gridSquare = document.createElement ("gridSquare");
    grid.appendChild(gridSquare);
}



/* Create grid by user input
try to use a loop in a function
to create new elements via js
*/