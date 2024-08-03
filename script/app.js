//HTML References
const container = document.querySelector(".container");


// Create Grid
for(let i=0; i < 256; i++) {
    const gridBlock = document.createElement("div");
    gridBlock.style = "height: 50px; width: 50px; border: 1px solid black; box-sizing: border-box; user-select: none;";
    gridBlock.setAttribute('class', 'gridBlock');
    container.appendChild(gridBlock);
}

const allGridBlocks = document.querySelectorAll(".gridBlock");

// User Drawing Logic
allGridBlocks.forEach((grid) => {
    const blockColor = () => {
        grid.style = "height: 50px; width: 50px; border-color: transparent; background-color: black; user-select: none;";
    };

    // eventlistener on container activates mousedown on all blocks
    container.addEventListener("mousedown", () => {
            grid.addEventListener("mouseover", blockColor);
    });

    container.addEventListener("mouseup", () => {
        grid.removeEventListener("mouseover", blockColor);
    });
});

