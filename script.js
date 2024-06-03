const mainContainer = document.querySelector(".vertical-container")
const button = document.querySelector("button")


function createGrid(x) {
    for (let i=0; i<x; i++) {
        const rowDiv = document.createElement("div");
        rowDiv.classList.add("horizontal-container");

        for (let i=0; i<x; i++) {
            const columnDiv = document.createElement("div");
            columnDiv.classList.add("box");

            columnDiv.addEventListener("mouseover", () => {
                columnDiv.style.cssText = "background: black;";
            });


            rowDiv.appendChild(columnDiv);
        }

        mainContainer.appendChild(rowDiv)
    }
}



function refreshGrid() {
    while (mainContainer.firstChild) {
        mainContainer.removeChild(mainContainer.lastChild);
    }

    let gridDimension = 101
    while (gridDimension>100) {
        gridDimension = prompt("Enter a value <100 for the size of the grid")
    }

    createGrid(gridDimension)
}




createGrid(16)