
const container = document.querySelector('#container');
let grid = [];
function userInputLayout(){
    const inputBox = document.createElement('div');
    const inputBoxChildDiv = document.createElement('div');
    const button = document.createElement('button');
    const inputField = document.createElement('form');
    const headingBox = document.createElement('h1');
    headingBox.textContent = 'Enter the grid value';
    inputBox.appendChild(headingBox);
    inputBoxChildDiv.style.display = "flex";
    button.textContent = 'Go';
    inputField.appendChild(inputBoxChildDiv);
    inputField.appendChild(button);
    inputBox.appendChild(inputField);
}
function getUserInput(){
    
}
function styleGrid(){
    grid.style.width = "16px";
    grid.style.height = "16px";
    grid.style.border = "2px solid black";
}
function appendGrid(){
    for(let i=0;i<256;i++){
        grid[i] = document.createElement('div');
        grid[i].setAttribute('class','grid'+i);
        grid[i].style.width = "32px";
        grid[i].style.height = "32px";
        grid[i].style.border = "1px solid black";
        container.appendChild(grid[i]);
    }
}
userInputLayout();
getUserInput();
appendGrid();