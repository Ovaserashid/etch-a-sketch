
const inputBox = document.querySelector('.inputbox');
const errorMsg = document.createElement('p');
const button = document.querySelector('.btn');
const inputField = document.querySelector('.inputvalue');
const container = document.querySelector('.gridbox');
const gridContainer = document.createElement('div');
const radioBlackButton = document.querySelector('.bw');
const radioRgbButton = document.querySelector('.rgb');

let grid = [];
let inputValue;
let errorSignal = '';
let counter = 1;
let randomNumber;
let brightness = 0;

function designGridContainer(){
    gridContainer.style.width = "512px";
    gridContainer.style.height = "512px";
    gridContainer.style.display = "flex";
    gridContainer.style.flexWrap = "wrap";
}

function displayError(){
    errorMsg.textContent = "Please enter the value between 1 and 100 only";
    errorMsg.style.color = "red";
    errorMsg.style.fontStyle = "italic";
    inputBox.appendChild(errorMsg);
    errorSignal = 'error';
}

function getUserInput(){
    return inputField.value;
}

function appendGrid(input){
    const num = input*input;
    while(gridContainer.hasChildNodes()){
        gridContainer.removeChild(gridContainer.firstChild);
    }
    if(errorSignal === 'error'){
        inputBox.removeChild(errorMsg);
        errorSignal = 'resolved';
    }
    for(let i=0;i<num;i++){
        grid[i] = document.createElement('div');
        grid[i].setAttribute('class','grid'+i);
        grid[i].style.width = 512/input+"px";
        grid[i].style.height = 512/input+"px";
        grid[i].style.border = "1px solid lightgrey";
        gridContainer.appendChild(grid[i]);
        grid[i].addEventListener('mouseenter', (e)=>{
            if(radioRgbButton.checked){
                randomNumber = Math.floor(Math.random()*3);
                if(randomNumber === 0){
                    if(brightness === 1){
                        counter = 1;
                        brightness =0;
                    }
                    brightness = counter/10;
                    grid[i].style.backgroundColor = "red";
                    grid[i].style.opacity = brightness;
                    counter += 1;
                }else if(randomNumber === 1){
                    if(brightness === 1){
                        brightness = 0;
                        counter =1;
                    }
                    brightness = counter/10;
                    grid[i].style.backgroundColor = "green";
                    grid[i].style.opacity = brightness;
                    counter += 1;
                }else if(randomNumber === 2){
                    if(brightness === 1){
                        brightness = 0;
                        counter=1;
                    }
                    brightness = counter/10;
                    grid[i].style.backgroundColor = "blue";
                    grid[i].style.opacity = brightness;
                    counter += 1;
                }
            }else if(radioBlackButton.checked){
                if(brightness === 1){
                        counter = 1;
                        brightness =0;
                    }else {
                        brightness = counter/10;
                        grid[i].style.backgroundColor = "black";
                        grid[i].style.opacity = brightness;
                        counter += 1;
                    }
                } 
        });
    }
    container.appendChild(gridContainer);
}
designGridContainer();
radioBlackButton.addEventListener('click', ()=>{
    radioRgbButton.checked = false;
});
radioRgbButton.addEventListener('click', ()=>{
    radioBlackButton.checked = false;
});
button.addEventListener('click', ()=> {
    inputValue = +getUserInput();
    if(inputValue >= 1 && inputValue <= 100){
        brightness = 0;
        counter= 1;
        appendGrid(inputValue);
    }else {
        displayError();
    }
});