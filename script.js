"use strict"


const drawingBoardDiv = 
    document.querySelector('.main-container__drawing-board')

function createGrid(gridSize) {
    for (let i = 0; i <= gridSize - 1; i++) {
        const newDiv = document.createElement('div')
        newDiv.classList.add('row', `row-${i}`)
        drawingBoardDiv.appendChild(newDiv)
        const rowDiv = document.querySelector(`.row-${i}`)

        for (let k = 0; k <= gridSize - 1; k++) {
            const newDiv = document.createElement('div')
            newDiv.classList.add('pixel')
            rowDiv.appendChild(newDiv)
        }

    }
};

createGrid(8);