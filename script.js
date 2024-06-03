const mainContainer = document.querySelector(".vertical-container")
const gridDefault = 16



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


createGrid(gridDefault)
