"use strict";

const controlButtons = document.querySelectorAll(".controlButton");
const drawingBoardDiv = document.querySelector(
    ".main-container__drawing-board"
);
const colorPicker = document.getElementById("colorPicker");
const buttonColor = document.getElementById("buttonColor");
const gridSizeText = document.querySelector(".gridSize");
const gridSizeSlider = document.querySelector(".gridSizeSlider");

function createGrid(gridSize) {
    while (drawingBoardDiv.firstChild) {
        drawingBoardDiv.removeChild(drawingBoardDiv.firstChild);
    }

    for (let i = 0; i <= gridSize - 1; i++) {
        const newDiv = document.createElement("div");
        newDiv.classList.add("row", `row-${i}`);
        drawingBoardDiv.appendChild(newDiv);
        const rowDiv = document.querySelector(`.row-${i}`);

        for (let k = 0; k <= gridSize - 1; k++) {
            const newDiv = document.createElement("div");
            newDiv.classList.add("pixel");
            rowDiv.appendChild(newDiv);
        }
    }
}

controlButtons.forEach((button) => {
    button.addEventListener("click", whenButtonClicked);
});

function whenButtonClicked() {
    controlButtons.forEach((button) => {
        button.classList.remove("active"); // Remove .active class from all buttons
    });

    let selectedMode = document.getElementById(`${this.id}`);

    if (this.id !== "buttonReset") {
        selectedMode.classList.add("active");
    }

    // 1. Depending on the ID of the button clicked set mode to coloring/rainbow/eraser
    // 2. If ID is #buttonReset set every pixel to default color
    // 3 .If ID is #buttonColor then get color of #colorPicker and addEventListener
    //    to the grid to change the color of a pixel when the mouse is clicked/dragged
}

colorPicker.addEventListener("change", chooseColor);

function chooseColor(e) {
    console.log(e.target.value);
}

colorPicker.addEventListener("click", () => {
    controlButtons.forEach((button) => {
        button.classList.remove("active"); // Remove .active class from all buttons
    });

    buttonColor.classList.add("active");
});

function updateGridSizeText() {
    gridSizeText.textContent = `${gridSizeSlider.value} x ${gridSizeSlider.value}`;
}

gridSizeSlider.addEventListener("input", () => {
    updateGridSizeText(gridSizeSlider.value);
    createGrid(gridSizeSlider.value);
});

updateGridSizeText();
createGrid(gridSizeSlider.value);
