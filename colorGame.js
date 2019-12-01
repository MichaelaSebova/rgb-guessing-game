// variables are defined here

let numSq = 6;
let colors = generateRandomColors(numSq);
let squares = document.querySelectorAll(".square");
let pickedColor = pickColor();
let responseArea = document.getElementById("response");
let header = document.querySelector("header");
let resetButton = document.querySelector("#reset");
let modeButtons = document.querySelectorAll(".mode");

// code steps here

init()

// functions are defined here

function init() {
    for (let i = 0; i < modeButtons.length; i++) {
    modeButtons[i].addEventListener("click", function() {
        modeButtons[0].classList.remove("selected");
        modeButtons[1].classList.remove("selected");
        this.classList.add("selected");
        this.textContent == "EASY" ? numSq = 3: numSq = 6;
        resetF();
    });
}
    for (let i = 0; i < squares.length; i++) {
        // add initial colors to squares
        squares[i].style.backgroundColor = colors[i];
        // add event listeners to squares
        squares[i].addEventListener("click", function() {
        // get square color value
        let clickedColor = this.style.backgroundColor;
        // compare square color value to value which we are     looking for
        if (clickedColor === pickedColor) {
            responseArea.textContent = "Correct!";
            // change color of header to picked color if correct
            header.style.backgroundColor = pickedColor;
            // change color of other squares to picked color if correct
            changeColor();
            reset.textContent = "PLAY AGAIN";
        }
        else {
            this.style.backgroundColor = "#232323";
            responseArea.textContent = "Try Again.";
        }
        });
    }
    document.querySelector("#picked-color").textContent = pickedColor;
    resetButton.addEventListener("click", function() {
    resetF();
});
}

function resetF() {
    // change header color back to default
    header.style.backgroundColor = "steelblue";  
    // generate new colors
    colors = generateRandomColors(numSq);
    // pick new random colors from array
    pickedColor = pickColor();
    document.querySelector("#picked-color").textContent = pickedColor;
    // change colors of squares
    for (let i = 0; i < squares.length; i++) {
    // add initial colors to squares
        if(colors[i]) {
            squares[i].style.backgroundColor = colors[i];
            squares[i].style.display = "block";
        } else {
            squares[i].style.display = "none";
        }
    };
    responseArea.textContent = "";
    reset.textContent = "NEW COLORS";
}

function changeColor() {
    for (let i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = pickedColor;
            }
}

function pickColor() {
    var random = Math.floor(Math.random()*colors.length);
    return colors[random];
}

function generateRandomColors(numberOfColors) {
    // make an array
    let colorsArray = [];
    // add random collors to array
    for (let i = 0; i <numberOfColors; i++) {
        // get random color and push into array
        colorsArray.push(randomColor());
    }
    
    // return array
    return colorsArray;
}

function randomColor() {
    var r = Math.floor(Math.random()*255+1);
    var g = Math.floor(Math.random()*255+1);
    var b = Math.floor(Math.random()*255+1);
    let generatedColor = `rgb(${r}, ${g}, ${b})`;
    return generatedColor;
}