"use strict";

const controlButtons = document.querySelectorAll(".controlButton");
const drawingBoardDiv = document.querySelector(
    ".main-container__drawing-board"
);
const colorPicker = document.getElementById("colorPicker");
// const pixel = document.querySelector(".pixel");
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
    const pixels = document.querySelectorAll(".pixel");
    pixels.forEach((pixel) => {
        pixel.addEventListener("click", handleColorChange);
        pixel.addEventListener("mousemove", handleColorChange);
    });

    function handleColorChange() {
        const selectedColor = colorPicker.value;
        document.documentElement.style.setProperty("--pixel", selectedColor);
        this.style.backgroundColor = selectedColor;
    }
}

controlButtons.forEach((button) => {
    button.addEventListener("click", whenButtonClicked);
});

function whenButtonClicked() {
    controlButtons.forEach((button) => {
        button.classList.remove("active");
    });

    let selectedMode = document.getElementById(`${this.id}`);

    if (this.id !== "buttonReset") {
        selectedMode.classList.add("active");
    }

    colorPicker.addEventListener("change", chooseColor);

    function chooseColor(e) {
        console.log(e.target.value);
    }

    // let sketchMode = null;

    if (this.id == "buttonColor") {
    } else if (this.id == "buttonRainbow") {
        sketchMode = "rainbow";
        console.log(sketchMode);
    } else if (this.id == "buttonEraser") {
        sketchMode = "erase";
        console.log(sketchMode);
    }
    // 1. Depending on the ID of the button clicked set mode to coloring/rainbow/eraser
    // 2. If ID is #buttonReset set every pixel to default color
    // 3 .If ID is #buttonColor then get color of #colorPicker and addEventListener
    //    to the grid to change the color of a pixel when the mouse is clicked/dragged
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

// const pixel = document.querySelector(".pixel");
