//HTML References
const container = document.querySelector(".container");
const gridBlockAmountSubmit = document.querySelector("#grid-block-amount-submit");
const gridBlockAmount = document.querySelector("#grid-block-amount");
let allGridBlocks = document.querySelectorAll(".gridBlock");
const reset = document.querySelector("#reset");
const color = document.querySelector("#grid-block-colors");

let createGrid = (num) => {
    amount = num ** 2
    
    //removes previous grid
    while(container.hasChildNodes() == true) {
        allGridBlocks.forEach((grid) =>
        {
            container.removeChild(grid);
        });
    };

    for(let i=0; i < amount; i++) {
        const gridBlock = document.createElement("div");
        gridBlock.style = `aspect-ratio: 1/1; width: ${800 / num}px ; border: .1px solid #184E77; border-radius: 5px; box-sizing: border-box; user-select: none; `;
        gridBlock.setAttribute('class', 'gridBlock');
        container.appendChild(gridBlock);
    }
    
    allGridBlocks = document.querySelectorAll(".gridBlock");

    // User Drawing Logic
    allGridBlocks.forEach((grid) => {
        const blockColor = () => {
        grid.style = `aspect-ratio: 1/1; width: ${800 / num}px ;  min-width= 8px; border-color: transparent; background-color: ${color.value}; user-select: none;`;
    };
    
    grid.addEventListener('mousedown', blockColor);
    
    // eventlistener on container activates mousedown on all blocks
    container.addEventListener("mousedown", () => {
        grid.addEventListener("mouseover", blockColor);
    });
    
    container.addEventListener("mouseup", () => {
        grid.removeEventListener("mouseover", blockColor);
        });
    }); 
}


// Create Grid
createGrid(16)

// Keeps track of the current grid being used for resetting purposes.
let currentGridAmount = 16;

gridBlockAmountSubmit.addEventListener("click", () => {
    createGrid(gridBlockAmount.value);
    return currentGridAmount = gridBlockAmount.value;
});

reset.addEventListener("click", () => {
    createGrid(currentGridAmount);
})