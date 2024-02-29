"use strict";

const controlButtons = document.querySelectorAll(".controlButton");
const drawingBoardDiv = document.querySelector(
    ".main-container__drawing-board"
);
const colorPicker = document.getElementById("colorPicker");
const buttonColor = document.getElementById("buttonColor");
const gridSizeText = document.querySelector(".gridSize");
const gridSizeSlider = document.querySelector(".gridSizeSlider");
const buttonReset = document.getElementById("buttonReset");

let sketchMode = "color";

function createGrid(gridSize) {
    // deletes everything in the grid to avoid overlapping of pixels
    drawingBoardDiv.innerHTML = "";

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

function updateGridSizeText() {
    gridSizeText.textContent = `${gridSizeSlider.value} x ${gridSizeSlider.value}`;
}

function whenButtonClicked(event) {
    controlButtons.forEach((button) => {
        button.classList.remove("active");
    });
    event.target.classList.add("active");
    // if (event.target.id !== "buttonReset") {
    //     event.target.classList.add("active");
    // }

    if (event.target.id === "buttonColor") {
        sketchMode = "color";
        console.log(sketchMode);
    } else if (event.target.id === "buttonRainbow") {
        sketchMode = "rainbow";
        console.log(sketchMode);
    } else if (event.target.id === "buttonEraser") {
        sketchMode = "erase";
        console.log(sketchMode);
    }
}

function handlePixelClick(event) {
    if (sketchMode === "color") {
        event.target.style.backgroundColor = colorPicker.value;
    } else if (sketchMode === "erase") {
        event.target.style.backgroundColor = "#fff";
    } else if (sketchMode === "rainbow") {
        // rainbow mode code
    }
}

controlButtons.forEach((button) => {
    button.addEventListener("click", whenButtonClicked);
});

colorPicker.addEventListener("click", () => {
    controlButtons.forEach((button) => {
        // ensure only one button is active at a time
        // because colorPicker is not in the controlButtons class
        button.classList.remove("active");
    });

    sketchMode = "color";
    buttonColor.classList.add("active");
    console.log(sketchMode);
});

buttonReset.addEventListener("click", () => {
    createGrid(gridSizeSlider.value);
});

gridSizeSlider.addEventListener("input", () => {
    updateGridSizeText(gridSizeSlider.value);
    createGrid(gridSizeSlider.value);
});

drawingBoardDiv.addEventListener("mousedown", (event) => {
    event.preventDefault();
    handlePixelClick(event);
    drawingBoardDiv.addEventListener("mouseover", handlePixelClick);
});

drawingBoardDiv.addEventListener("mouseup", () => {
    drawingBoardDiv.removeEventListener("mouseover", handlePixelClick);
});

updateGridSizeText();
createGrid(gridSizeSlider.value);
