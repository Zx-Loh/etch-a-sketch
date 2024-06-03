const mainContainer = document.querySelector(".vertical-container")



for (let i=0; i<16; i++) {
    const rowDiv = document.createElement("div");
    rowDiv.classList.add("horizontal-container");

    for (let i=0; i<16; i++) {
        const columnDiv = document.createElement("div");
        columnDiv.classList.add("box")
        rowDiv.appendChild(columnDiv);
    }

    mainContainer.appendChild(rowDiv)
}