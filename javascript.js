
const container = document.querySelector('#container');
let grid = [];
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
// styleGrid();
appendGrid();