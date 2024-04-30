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
let keySolves = 0;
let keypadRule = "";

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

if(keypadArray[1] > keypadArray[0] && keypadArray[1] > keypadArray[2]){
    keypadRule = "min";
    keypadMin();
}
else if(keypadArray[1] == keypadArray[2]){
    keypadRule = "max";
    keypadMax();
}
else if(keypadArray[0] == 1){
    keypadRule = "any";
    keypadAny();
}
else{
    keypadRule = "read";
    keypadRead();
}
function keypadMin(){
        if((keypadArray.indexOf(Math.min(...keypadArray)) + 1) == 1){
        key1.addEventListener("click", key1Solve);
        key2.addEventListener("click", strikeKeypad);
        key3.addEventListener("click", strikeKeypad);
        key4.addEventListener("click", strikeKeypad);
        keypadArray[0] = 10;
    }
    else if((keypadArray.indexOf(Math.min(...keypadArray)) + 1) == 2){
        key1.addEventListener("click", strikeKeypad);
        key2.addEventListener("click", key2Solve);
        key3.addEventListener("click", strikeKeypad);
        key4.addEventListener("click", strikeKeypad);
        keypadArray[1] = 10;
    }
    else if((keypadArray.indexOf(Math.min(...keypadArray)) + 1) == 3){
        key1.addEventListener("click", strikeKeypad);
        key2.addEventListener("click", strikeKeypad);
        key3.addEventListener("click", key3Solve);
        key4.addEventListener("click", strikeKeypad);
        keypadArray[2] = 10;
    }
    else if((keypadArray.indexOf(Math.min(...keypadArray)) + 1) == 4){
        key1.addEventListener("click", strikeKeypad);
        key2.addEventListener("click", strikeKeypad);
        key3.addEventListener("click", strikeKeypad);
        key4.addEventListener("click", key4Solve);
        keypadArray[3] = 10;
    }
}
function keypadMax(){
    if((keypadArray.indexOf(Math.max(...keypadArray)) + 1) == 1){
        key1.addEventListener("click", key1Solve);
        key2.addEventListener("click", strikeKeypad);
        key3.addEventListener("click", strikeKeypad);
        key4.addEventListener("click", strikeKeypad);
        keypadArray[0] = -1;
    }
    else if((keypadArray.indexOf(Math.max(...keypadArray)) + 1) == 2){
        key1.addEventListener("click", strikeKeypad);
        key2.addEventListener("click", key2Solve);
        key3.addEventListener("click", strikeKeypad);
        key4.addEventListener("click", strikeKeypad);
        keypadArray[1] = -1;
    }
    else if((keypadArray.indexOf(Math.max(...keypadArray)) + 1) == 3){
        key1.addEventListener("click", strikeKeypad);
        key2.addEventListener("click", strikeKeypad);
        key3.addEventListener("click", key3Solve);
        key4.addEventListener("click", strikeKeypad);
        keypadArray[2] = -1;
    }
    else if((keypadArray.indexOf(Math.max(...keypadArray)) + 1) == 4){
        key1.addEventListener("click", strikeKeypad);
        key2.addEventListener("click", strikeKeypad);
        key3.addEventListener("click", strikeKeypad);
        key4.addEventListener("click", key4Solve);
        keypadArray[3] = -1;
    }
}
function keypadAny(){
    key1.addEventListener("click", key1Solve);
    key2.addEventListener("click", key2Solve);
    key3.addEventListener("click", key3Solve);
    key4.addEventListener("click", key4Solve);
    if(key1.style.backgroundColor == "rgb(0, 255, 0)"){
        key1.removeEventListener("click", key1Solve);
    }
    if(key2.style.backgroundColor == "rgb(0, 255, 0)"){
        key2.removeEventListener("click", key1Solve);
    }
    if(key3.style.backgroundColor == "rgb(0, 255, 0)"){
        key3.removeEventListener("click", key1Solve);
    }
    if(key4.style.backgroundColor == "rgb(0, 255, 0)"){
        key4.removeEventListener("click", key1Solve);
    }
}
function keypadRead(){
    if(key1.style.backgroundColor == ""){
        key1.addEventListener("click", key1Solve);
        key2.addEventListener("click", strikeKeypad);
        key3.addEventListener("click", strikeKeypad);
        key4.addEventListener("click", strikeKeypad);
    }
    else if(key2.style.backgroundColor == ""){
        key1.addEventListener("click", strikeKeypad);
        key2.addEventListener("click", key2Solve);
        key3.addEventListener("click", strikeKeypad);
        key4.addEventListener("click", strikeKeypad);
    }
    else if(key3.style.backgroundColor == ""){
        key1.addEventListener("click", strikeKeypad);
        key2.addEventListener("click", strikeKeypad);
        key3.addEventListener("click", key3Solve);
        key4.addEventListener("click", strikeKeypad);
    }
    else if(key4.style.backgroundColor == ""){
        key1.addEventListener("click", strikeKeypad);
        key2.addEventListener("click", strikeKeypad);
        key3.addEventListener("click", strikeKeypad);
        key4.addEventListener("click", key4Solve);
    }
}

//Функции

function key1Solve(){
    key1.style.backgroundColor = "#00ff00";
    plus1KeySolve();
}
function key2Solve(){
    key2.style.backgroundColor = "#00ff00";
    plus1KeySolve();
}
function key3Solve(){
    key3.style.backgroundColor = "#00ff00";
    plus1KeySolve();
}
function key4Solve(){
    key4.style.backgroundColor = "#00ff00";
    plus1KeySolve();
}
function plus1KeySolve(){
    key1.removeEventListener("click", key1Solve);
    key2.removeEventListener("click", key2Solve);
    key3.removeEventListener("click", key3Solve);
    key4.removeEventListener("click", key4Solve);
    key1.removeEventListener("click", strikeKeypad);
    key2.removeEventListener("click", strikeKeypad);
    key3.removeEventListener("click", strikeKeypad);
    key4.removeEventListener("click", strikeKeypad);
    keySolves = keySolves + 1;
    if(keySolves >= 4){
        solveKeypad();
    }
    else{
        if(keypadRule == "min"){
            keypadMin();
        }
        if(keypadRule == "max"){
            keypadMax();
        }
        if(keypadRule == "any"){
            keypadAny();
        }
        if(keypadRule == "read"){
            keypadRead();
        }
    }
}

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

function solveKeypad(){
    keypadStatus.style.backgroundColor = "#00ff00";
}
function strikeKeypad(){
    keypadStatus.style.backgroundColor = "#ff0000";
}

function explode(){
    bomb.style.display = "none";
}

//Таймер
let timerInterval = setInterval(() => {
    if(sec <= 0){
        min =     min - 1;
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