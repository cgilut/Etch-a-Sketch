"use strict"

const controlButtons = document.querySelectorAll('.controlButton')
const drawingBoardDiv = document.querySelector('.main-container__drawing-board')
const colorPicker = document.getElementById('colorPicker')
const buttonColor = document.getElementById('buttonColor')
let isActive = false

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

controlButtons.forEach(button => {

    button.addEventListener('click', whenButtonClicked);

});

function whenButtonClicked() {

    controlButtons.forEach(button => {
        button.classList.remove('active'); // Remove .active class from all buttons
    });

    let selectedMode = document.getElementById(`${this.id}`)

    if (this.id !== 'buttonReset') {
        selectedMode.classList.add('active')
    }

}



colorPicker.addEventListener('click', () => {

    controlButtons.forEach(button => {
        button.classList.remove('active'); // Remove .active class from all buttons
    });

    buttonColor.classList.add('active')

});


