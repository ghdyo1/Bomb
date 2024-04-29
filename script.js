let bomb = document.querySelector(".bomb");

let wiresStatus = document.querySelector("#wires .status");
let keypadStatus = document.querySelector("#keypad .status");
let buttonStatus = document.querySelector("#button .status");
let souvenirStatus = document.querySelector("#souvenir .status");
let finStatus = document.querySelector("#forget-it-not .status");

//Переменные рандома и массивы
let wiresRandom = (Math.floor((Math.random()) * 10)) % 5;

let buttonRandom = (Math.floor((Math.random()) * 10)) % 4;
let buttonTextRandom = (Math.floor((Math.random()) * 10)) % 4;
let buttonStripRandom = (Math.floor((Math.random()) * 10)) % 4;

let keypadRandom = Math.floor((Math.random()) * 10);
let keypadArray = [keypadRandom];

let finRandom = Math.floor((Math.random()) * 10);
let finArray = [finRandom];

//Переменные таймера
let minHTML = document.querySelector(".minutes");
let secHTML = document.querySelector(".seconds");
let min = 5;
let sec = 0;

//Переменные html
let wire1 = document.querySelector(".wire1");
let wire2 = document.querySelector(".wire2");
let wire3 = document.querySelector(".wire3");
let wire4 = document.querySelector(".wire4");

let key1 = document.querySelector(".key1");
let key2 = document.querySelector(".key2");
let key3 = document.querySelector(".key3");
let key4 = document.querySelector(".key4");

let button = document.querySelector(".button");
let buttonText = document.querySelector(".button-text");
let strip = document.querySelector(".strip");

let stage = document.querySelector(".stage");
let finDigit = document.querySelector(".number");

let question = document.querySelector(".question")
let answer1 = document.querySelector(".answer1");
let answer2 = document.querySelector(".answer2");
let answer3 = document.querySelector(".answer3");
let answer4 = document.querySelector(".answer4");

//Рандомы
function wiresColors(){
    if(wiresRandom == 0){
        wiresRandom = "#ff0000";
    }
    if(wiresRandom == 1){
        wiresRandom = "#ffff00";
    }
    if(wiresRandom == 2){
        wiresRandom = "#0000ff";
    }
    if(wiresRandom == 3){
        wiresRandom = "#000000";
    }
    if(wiresRandom == 4){
        wiresRandom = "#ffffff";
    }
}

wiresColors()
wire1.style.backgroundColor = wiresRandom;
wiresRandom = (Math.floor((Math.random()) * 10)) % 5;
wiresColors()
wire2.style.backgroundColor = wiresRandom;
wiresRandom = (Math.floor((Math.random()) * 10)) % 5;
wiresColors()
wire3.style.backgroundColor = wiresRandom;
wiresRandom = (Math.floor((Math.random()) * 10)) % 5;
wiresColors()
wire4.style.backgroundColor = wiresRandom;


key1.innerHTML = keypadRandom;
keypadRandom = Math.floor((Math.random()) * 10);
keypadArray.push(keypadRandom);
key2.innerHTML = keypadRandom;
keypadRandom = Math.floor((Math.random()) * 10);
keypadArray.push(keypadRandom);
key3.innerHTML = keypadRandom;
keypadRandom = Math.floor((Math.random()) * 10);
keypadArray.push(keypadRandom);
key4.innerHTML = keypadRandom;


if(buttonRandom == 0){
    button.style.backgroundColor = "#ff0000";
}
if(buttonRandom == 1){
    button.style.backgroundColor = "#ffff00";
}
if(buttonRandom == 2){
    button.style.backgroundColor = "#0000ff";
}
if(buttonRandom == 3){
    button.style.backgroundColor = "#ffffff";
}

if(buttonTextRandom == 0){
    buttonText.innerHTML = "П р е р в а т ь";
}
if(buttonTextRandom == 1){
    buttonText.innerHTML = "В з о р в а т ь";
}
if(buttonTextRandom == 2){
    buttonText.innerHTML = ". Н а ж а т ь .";
}
if(buttonTextRandom == 3){
    buttonText.innerHTML = "Д е р ж а т ь .";
}

finRandom = Math.floor((Math.random()) * 10);
finArray.push(finRandom);
finRandom = Math.floor((Math.random()) * 10);
finArray.push(finRandom);
finRandom = Math.floor((Math.random()) * 10);
finArray.push(finRandom);
finDigit.innerHTML = finArray[0];

question.innerHTML = "";
answer1.innerHTML = "";
answer2.innerHTML = "";
answer3.innerHTML = "";
answer4.innerHTML = "";

//Определение решения
if(wire3.style.backgroundColor == wire4.style.backgroundColor){
    wire1.addEventListener("click", strikeWires);
    wire2.addEventListener("click", solveWires);
    wire3.addEventListener("click", strikeWires);
    wire4.addEventListener("click", strikeWires);
}
else if(wire1.style.backgroundColor != "rgb(255, 255, 255)" && wire2.style.backgroundColor != "rgb(255, 255, 255)" && wire3.style.backgroundColor != "rgb(255, 255, 255)" && wire4.style.backgroundColor != "rgb(255, 255, 255)"){
    wire1.addEventListener("click", solveWires);
    wire2.addEventListener("click", strikeWires);
    wire3.addEventListener("click", strikeWires);
    wire4.addEventListener("click", strikeWires);
}
else if(wire1.style.backgroundColor == "rgb(255, 0, 0)"){
    wire1.addEventListener("click", strikeWires);
    wire2.addEventListener("click", strikeWires);
    wire3.addEventListener("click", strikeWires);
    wire4.addEventListener("click", solveWires);
}
else{
    wire1.addEventListener("click", strikeWires);
    wire2.addEventListener("click", strikeWires);
    wire3.addEventListener("click", solveWires);
    wire4.addEventListener("click", strikeWires);
}

//Функции
function buttonStrip(){
    if(buttonStripRandom == 0){
        strip.style.backgroundColor = "#ff0000";
    }
    if(buttonStripRandom == 1){
        strip.style.backgroundColor = "#ffff00";
    }
    if(buttonStripRandom == 2){
        strip.style.backgroundColor = "#0000ff";
    }
    if(buttonStripRandom == 3){
        strip.style.backgroundColor = "#ffffff";
    }
}

function solveWires(){
    wiresStatus.style.backgroundColor = "#00ff00";
    wire1.removeEventListener("click", strikeWires);
    wire2.removeEventListener("click", strikeWires);
    wire3.removeEventListener("click", strikeWires);
    wire4.removeEventListener("click", strikeWires);
    wire1.removeEventListener("click", solveWires);
    wire2.removeEventListener("click", solveWires);
    wire3.removeEventListener("click", solveWires);
    wire4.removeEventListener("click", solveWires);
}

function strikeWires(){
    wiresStatus.style.backgroundColor = "#ff0000";
}

function explode(){
    bomb.style.display = "none";
}

//Таймер
setInterval(() => {
    if(sec <= 0){
        min = min - 1;
        sec = 60;
        if(min < 0){
            explode();
        }
    }
    sec = sec - 1;
    if(sec < 10){
        secHTML.innerHTML = "0" + sec;
    }
    else{
        secHTML.innerHTML = sec;        
    }
    if(min < 10){
        minHTML.innerHTML = "0" + min;
    }
    else{
        minHTML.innerHTML = min;
    }
}, 10000);