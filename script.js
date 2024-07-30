let bomb = document.querySelector(".bomb");

let wiresStatus = document.querySelector("#wires .status");
let keypadStatus = document.querySelector("#keypad .status");
let buttonStatus = document.querySelector("#button .status");
let souvenirStatus = document.querySelector("#souvenir .status");
let finStatus = document.querySelector("#forget-it-not .status");
let timerStatus = document.querySelector(".timer .status");

//Переменные рандома и массивы
let wiresRandom = (Math.floor((Math.random()) * 10)) % 5;

let buttonRandom = (Math.floor((Math.random()) * 10)) % 4;
let buttonTextRandom = (Math.floor((Math.random()) * 10)) % 4;
let buttonStripRandom = (Math.floor((Math.random()) * 10)) % 4;
let isStripColored = false;

let keypadRandom = Math.floor((Math.random()) * 10);
let keypadArray = [keypadRandom];
let keySolves = 0;
let keypadRule = "";

let finRandom = Math.floor((Math.random()) * 10);
let finArray = [finRandom];
let finInputArray = [];
let finStage = 1;

let strikes = 0;
let solves = 0;

//Переменные для сувенира

let correctWire = 0;
let correctWireColor = "";

let buttonStripColor = "";

let correctKeypadOrder = [];

let finRandomQuestion = Math.floor((Math.random() * 10) % 4);
let finVariantsGuesses = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
let finAnswerRandom = -1;
let finGuess = -1;
let ifOutOfRangeFin = 0;


let wiresQuestionRandom = Math.floor((Math.random() * 10) % 2);
let keypadQuestionRandom = Math.floor((Math.random() * 10) % 4);


let questions = 0;

//Переменные таймера
let minHTML = document.querySelector(".minutes");
let dvoetochie = document.querySelector(".digits:nth-child(2)");
let secHTML = document.querySelector(".seconds");
let min = 7;
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

let finKey1 = document.querySelector(".fin1");
let finKey2 = document.querySelector(".fin2");
let finKey3 = document.querySelector(".fin3");
let finKey4 = document.querySelector(".fin4");
let finKey5 = document.querySelector(".fin5");
let finKey6 = document.querySelector(".fin6");
let finKey7 = document.querySelector(".fin7");
let finKey8 = document.querySelector(".fin8");
let finKey9 = document.querySelector(".fin9");
let finKey0 = document.querySelector(".fin0");
let stageHTML = document.querySelector(".stage");
let finDigit = document.querySelector(".number");

let question = document.querySelector(".question");
let answer1 = document.querySelector(".answer1");
let answer2 = document.querySelector(".answer2");
let answer3 = document.querySelector(".answer3");
let answer4 = document.querySelector(".answer4");
let answer5 = document.querySelector(".answer5");

let strike1 = document.querySelector(".strike1");
let strike2 = document.querySelector(".strike2");

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
stageHTML.innerHTML = "0" + (solves + 1);

question.innerHTML = "";
answer1.innerHTML = "";
answer2.innerHTML = "";
answer3.innerHTML = "";
answer4.innerHTML = "";
answer5.innerHTML = "";

//Определение решения
if(wire3.style.backgroundColor == wire4.style.backgroundColor){
    wire1.addEventListener("click", strikeWires);
    wire2.addEventListener("click", solveWires);
    wire3.addEventListener("click", strikeWires);
    wire4.addEventListener("click", strikeWires);
    correctWire = 2;
    correctWireColor = wire2.style.backgroundColor;
}
else if(wire1.style.backgroundColor != "rgb(255, 255, 255)" && wire2.style.backgroundColor != "rgb(255, 255, 255)" && wire3.style.backgroundColor != "rgb(255, 255, 255)" && wire4.style.backgroundColor != "rgb(255, 255, 255)"){
    wire1.addEventListener("click", solveWires);
    wire2.addEventListener("click", strikeWires);
    wire3.addEventListener("click", strikeWires);
    wire4.addEventListener("click", strikeWires);
    correctWire = 1;
    correctWireColor = wire1.style.backgroundColor;
}
else if(wire1.style.backgroundColor == "rgb(255, 0, 0)"){
    wire1.addEventListener("click", strikeWires);
    wire2.addEventListener("click", strikeWires);
    wire3.addEventListener("click", strikeWires);
    wire4.addEventListener("click", solveWires);
    correctWire = 4;
    correctWireColor = wire4.style.backgroundColor;
}
else{
    wire1.addEventListener("click", strikeWires);
    wire2.addEventListener("click", strikeWires);
    wire3.addEventListener("click", solveWires);
    wire4.addEventListener("click", strikeWires);
    correctWire = 3;
    correctWireColor = wire3.style.backgroundColor;
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

//Функции
function keypadMin(){
    if((keypadArray.indexOf(Math.min(...keypadArray)) + 1) == 1){
    key1.addEventListener("click", key1Solve);
    key2.addEventListener("click", strikeKeypad);
    key3.addEventListener("click", strikeKeypad);
    key4.addEventListener("click", strikeKeypad);
    keypadArray[0] = 10;
    correctKeypadOrder.push(1);
}
else if((keypadArray.indexOf(Math.min(...keypadArray)) + 1) == 2){
    key1.addEventListener("click", strikeKeypad);
    key2.addEventListener("click", key2Solve);
    key3.addEventListener("click", strikeKeypad);
    key4.addEventListener("click", strikeKeypad);
    keypadArray[1] = 10;
    correctKeypadOrder.push(2);
}
else if((keypadArray.indexOf(Math.min(...keypadArray)) + 1) == 3){
    key1.addEventListener("click", strikeKeypad);
    key2.addEventListener("click", strikeKeypad);
    key3.addEventListener("click", key3Solve);
    key4.addEventListener("click", strikeKeypad);
    keypadArray[2] = 10;
    correctKeypadOrder.push(3);
}
else if((keypadArray.indexOf(Math.min(...keypadArray)) + 1) == 4){
    key1.addEventListener("click", strikeKeypad);
    key2.addEventListener("click", strikeKeypad);
    key3.addEventListener("click", strikeKeypad);
    key4.addEventListener("click", key4Solve);
    keypadArray[3] = 10;
    correctKeypadOrder.push(4);
}
}
function keypadMax(){
if((keypadArray.indexOf(Math.max(...keypadArray)) + 1) == 1){
    key1.addEventListener("click", key1Solve);
    key2.addEventListener("click", strikeKeypad);
    key3.addEventListener("click", strikeKeypad);
    key4.addEventListener("click", strikeKeypad);
    keypadArray[0] = -1;
    correctKeypadOrder.push(1);
}
else if((keypadArray.indexOf(Math.max(...keypadArray)) + 1) == 2){
    key1.addEventListener("click", strikeKeypad);
    key2.addEventListener("click", key2Solve);
    key3.addEventListener("click", strikeKeypad);
    key4.addEventListener("click", strikeKeypad);
    keypadArray[1] = -1;
    correctKeypadOrder.push(2);
}
else if((keypadArray.indexOf(Math.max(...keypadArray)) + 1) == 3){
    key1.addEventListener("click", strikeKeypad);
    key2.addEventListener("click", strikeKeypad);
    key3.addEventListener("click", key3Solve);
    key4.addEventListener("click", strikeKeypad);
    keypadArray[2] = -1;
    correctKeypadOrder.push(3);
}
else if((keypadArray.indexOf(Math.max(...keypadArray)) + 1) == 4){
    key1.addEventListener("click", strikeKeypad);
    key2.addEventListener("click", strikeKeypad);
    key3.addEventListener("click", strikeKeypad);
    key4.addEventListener("click", key4Solve);
    keypadArray[3] = -1;
    correctKeypadOrder.push(4);
}
}
function keypadAny(){
    correctKeypadOrder.push(0);
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
    correctKeypadOrder.push(1);
}
else if(key2.style.backgroundColor == ""){
    key1.addEventListener("click", strikeKeypad);
    key2.addEventListener("click", key2Solve);
    key3.addEventListener("click", strikeKeypad);
    key4.addEventListener("click", strikeKeypad);
    correctKeypadOrder.push(2);
}
else if(key3.style.backgroundColor == ""){
    key1.addEventListener("click", strikeKeypad);
    key2.addEventListener("click", strikeKeypad);
    key3.addEventListener("click", key3Solve);
    key4.addEventListener("click", strikeKeypad);
    correctKeypadOrder.push(3);
}
else if(key4.style.backgroundColor == ""){
    key1.addEventListener("click", strikeKeypad);
    key2.addEventListener("click", strikeKeypad);
    key3.addEventListener("click", strikeKeypad);
    key4.addEventListener("click", key4Solve);
    correctKeypadOrder.push(4);
}
}

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
    button.removeEventListener("click", strikeButton);
    button.removeEventListener("click", buttonStrip);
    isStripColored = true;
    if(buttonStripRandom == 0){
        strip.style.backgroundColor = "#ff0000";
        buttonStripColor = "red";
    }
    if(buttonStripRandom == 1){
        strip.style.backgroundColor = "#ffff00";
        buttonStripColor = "yellow";
    }
    if(buttonStripRandom == 2){
        strip.style.backgroundColor = "#0000ff";
        buttonStripColor = "blue";
    }
    if(buttonStripRandom == 3){
        strip.style.backgroundColor = "#ffffff";
        buttonStripColor = "white";
    }
}

function enter(){
    if(finInputArray.length == 4){
        if(finInputArray[0] == finArray[0] && finInputArray[1] == finArray[1] && finInputArray[2] == finArray[2] && finInputArray[3] == finArray[3]){
            solveFIN();
        }
        else{
            strikeFIN();
            finInputArray = [];
        }
    }
}
function enter1(){
    finInputArray.push(1);
    finDigit.innerHTML = finDigit.innerHTML + "" + 1;
    enter();
}
function enter2(){
    finInputArray.push(2);
    finDigit.innerHTML = finDigit.innerHTML + "" + 2;
    enter();
}
function enter3(){
    finInputArray.push(3);
    finDigit.innerHTML = finDigit.innerHTML + "" + 3;
    enter();
}
function enter4(){
    finInputArray.push(4);
    finDigit.innerHTML = finDigit.innerHTML + "" + 4;
    enter();
}
function enter5(){
    finInputArray.push(5);
    finDigit.innerHTML = finDigit.innerHTML + "" + 5;
    enter();
}
function enter6(){
    finInputArray.push(6);
    finDigit.innerHTML = finDigit.innerHTML + "" + 6;
    enter();
}
function enter7(){
    finInputArray.push(7);
    finDigit.innerHTML = finDigit.innerHTML + "" + 7;
    enter();
}
function enter8(){
    finInputArray.push(8);
    finDigit.innerHTML = finDigit.innerHTML + "" + 8;
    enter();
}
function enter9(){
    finInputArray.push(9);
    finDigit.innerHTML = finDigit.innerHTML + "" + 9;
    enter();
}
function enter0(){
    finInputArray.push(0);
    finDigit.innerHTML = finDigit.innerHTML + "" + 0;
    enter();
}
function finEnter(){
    stageHTML.innerHTML = "- -";
    finDigit.innerHTML = "";
    finKey1.addEventListener("click", enter1);
    finKey2.addEventListener("click", enter2);
    finKey3.addEventListener("click", enter3);
    finKey4.addEventListener("click", enter4);
    finKey5.addEventListener("click", enter5);
    finKey6.addEventListener("click", enter6);
    finKey7.addEventListener("click", enter7);
    finKey8.addEventListener("click", enter8);
    finKey9.addEventListener("click", enter9);
    finKey0.addEventListener("click", enter0);
}

function souvenirStart(){
    questions = questions + 1;
    question.innerHTML = "";
    answer1.innerHTML = "";
    answer2.innerHTML = "";
    answer3.innerHTML = "";
    answer4.innerHTML = "";
    answer5.innerHTML = "";
    answer1.removeEventListener("click", strikeSouvenir);
    answer2.removeEventListener("click", strikeSouvenir);
    answer3.removeEventListener("click", strikeSouvenir);
    answer4.removeEventListener("click", strikeSouvenir);
    answer5.removeEventListener("click", strikeSouvenir);
    answer1.removeEventListener("click", souvenirStart);
    answer2.removeEventListener("click", souvenirStart);
    answer3.removeEventListener("click", souvenirStart);
    answer4.removeEventListener("click", souvenirStart);
    answer5.removeEventListener("click", souvenirStart);
    if(questions == 1){
        if(wiresQuestionRandom == 0){
            question.innerHTML = "Какой провод верный на Проводах?";
            answer1.innerHTML = "1";
            answer2.innerHTML = "2";
            answer3.innerHTML = "3";
            answer4.innerHTML = "4";
            answer5.innerHTML = "";
            if(correctWire == 1){
                answer1.addEventListener("click", souvenirStart);
                answer2.addEventListener("click", strikeSouvenir);
                answer3.addEventListener("click", strikeSouvenir);
                answer4.addEventListener("click", strikeSouvenir);
            }
            else if(correctWire == 2){
                answer1.addEventListener("click", strikeSouvenir);
                answer2.addEventListener("click", souvenirStart);
                answer3.addEventListener("click", strikeSouvenir);
                answer4.addEventListener("click", strikeSouvenir);
            }
            else if(correctWire == 3){
                answer1.addEventListener("click", strikeSouvenir);
                answer2.addEventListener("click", strikeSouvenir);
                answer3.addEventListener("click", souvenirStart);
                answer4.addEventListener("click", strikeSouvenir);
            }
            else if(correctWire == 4){
                answer1.addEventListener("click", strikeSouvenir);
                answer2.addEventListener("click", strikeSouvenir);
                answer3.addEventListener("click", strikeSouvenir);
                answer4.addEventListener("click", souvenirStart);
            }
        }
        else if(wiresQuestionRandom == 1){
            question.innerHTML = "Какого цвета верный провод на Проводах?";
            answer1.innerHTML = "Красный";
            answer2.innerHTML = "Чёрный";
            answer3.innerHTML = "Белый";
            answer4.innerHTML = "Жёлтый";
            answer5.innerHTML = "Синий";
            if(correctWireColor == "rgb(255, 0, 0)"){
                answer1.addEventListener("click", souvenirStart);
                answer2.addEventListener("click", strikeSouvenir);
                answer3.addEventListener("click", strikeSouvenir);
                answer4.addEventListener("click", strikeSouvenir);
                answer5.addEventListener("click", strikeSouvenir);
            }
            else if(correctWireColor == "rgb(0, 0, 0)"){
                answer1.addEventListener("click", strikeSouvenir);
                answer2.addEventListener("click", souvenirStart);
                answer3.addEventListener("click", strikeSouvenir);
                answer4.addEventListener("click", strikeSouvenir);
                answer5.addEventListener("click", strikeSouvenir);
            }
            else if(correctWireColor == "rgb(255, 255, 255)"){
                answer1.addEventListener("click", strikeSouvenir);
                answer2.addEventListener("click", strikeSouvenir);
                answer3.addEventListener("click", souvenirStart);
                answer4.addEventListener("click", strikeSouvenir);
                answer5.addEventListener("click", strikeSouvenir);
            }
            else if(correctWireColor == "rgb(255, 255, 0)"){
                answer1.addEventListener("click", strikeSouvenir);
                answer2.addEventListener("click", strikeSouvenir);
                answer3.addEventListener("click", strikeSouvenir);
                answer4.addEventListener("click", souvenirStart);
                answer5.addEventListener("click", strikeSouvenir);
            }
            else if(correctWireColor == "rgb(0, 0, 255)"){
                answer1.addEventListener("click", strikeSouvenir);
                answer2.addEventListener("click", strikeSouvenir);
                answer3.addEventListener("click", strikeSouvenir);
                answer4.addEventListener("click", strikeSouvenir);
                answer5.addEventListener("click", souvenirStart);
            }
        }
    }
    else if(questions == 2){
        if(correctKeypadOrder[0] != 0){
            question.innerHTML = "Какая клавиша была нажата " + (keypadQuestionRandom + 1) + "-й на Клавиатуре?";
            answer1.innerHTML = "1";
            answer2.innerHTML = "2";
            answer3.innerHTML = "3";
            answer4.innerHTML = "4";
            answer5.innerHTML = "";
            if(correctKeypadOrder[keypadQuestionRandom] == 1){
                answer1.addEventListener("click", souvenirStart);
                answer2.addEventListener("click", strikeSouvenir);
                answer3.addEventListener("click", strikeSouvenir);
                answer4.addEventListener("click", strikeSouvenir);
            }
            else if(correctKeypadOrder[keypadQuestionRandom] == 2){
                answer1.addEventListener("click", strikeSouvenir);
                answer2.addEventListener("click", souvenirStart);
                answer3.addEventListener("click", strikeSouvenir);
                answer4.addEventListener("click", strikeSouvenir);
            }
            else if(correctKeypadOrder[keypadQuestionRandom] == 3){
                answer1.addEventListener("click", strikeSouvenir);
                answer2.addEventListener("click", strikeSouvenir);
                answer3.addEventListener("click", souvenirStart);
                answer4.addEventListener("click", strikeSouvenir);
            }
            else if(correctKeypadOrder[keypadQuestionRandom] == 4){
                answer1.addEventListener("click", strikeSouvenir);
                answer2.addEventListener("click", strikeSouvenir);
                answer3.addEventListener("click", strikeSouvenir);
                answer4.addEventListener("click", souvenirStart);
            }            
        }
        else{
            souvenirStart();
        }
    }
    else if(questions == 3){
        question.innerHTML = "Каким цветом горела полоска на Кнопке?";
        answer1.innerHTML = "Красным";
        answer2.innerHTML = "Жёлтым";
        answer3.innerHTML = "Синим";
        answer4.innerHTML = "Белым";
        answer5.innerHTML = "";
        if(buttonStripColor == "red"){
            answer1.addEventListener("click", souvenirStart);
            answer2.addEventListener("click", strikeSouvenir);
            answer3.addEventListener("click", strikeSouvenir);
            answer4.addEventListener("click", strikeSouvenir);
        }
        else if(buttonStripColor == "yellow"){
            answer1.addEventListener("click", strikeSouvenir);
            answer2.addEventListener("click", souvenirStart);
            answer3.addEventListener("click", strikeSouvenir);
            answer4.addEventListener("click", strikeSouvenir);
        }
        else if(buttonStripColor == "blue"){
            answer1.addEventListener("click", strikeSouvenir);
            answer2.addEventListener("click", strikeSouvenir);
            answer3.addEventListener("click", souvenirStart);
            answer4.addEventListener("click", strikeSouvenir);
        }
        else if(buttonStripColor == "white"){
            answer1.addEventListener("click", strikeSouvenir);
            answer2.addEventListener("click", strikeSouvenir);
            answer3.addEventListener("click", strikeSouvenir);
            answer4.addEventListener("click", souvenirStart);
        }           
    }
    else if(questions == 4){
        question.innerHTML = "Какая цифра отображалась на " + (finRandomQuestion + 1) + "-м этапе на Незабудке?";
        finVariantsGuesses.splice(finVariantsGuesses.indexOf(finArray[finRandomQuestion]));
        finAnswerRandom = Math.floor((Math.random() * 10) % 4);
        if(finAnswerRandom == 0){
            answer1.addEventListener("click", souvenirStart);
            answer2.addEventListener("click", strikeSouvenir);
            answer3.addEventListener("click", strikeSouvenir);
            answer4.addEventListener("click", strikeSouvenir);
            answer1.innerHTML = finArray[finRandomQuestion];
            finGuessNumber();
            answer2.innerHTML = finGuess;
            finGuessNumber();
            answer3.innerHTML = finGuess;
            finGuessNumber();
            answer4.innerHTML = finGuess;
        }
        else if(finAnswerRandom == 1){
            answer1.addEventListener("click", strikeSouvenir);
            answer2.addEventListener("click", souvenirStart);
            answer3.addEventListener("click", strikeSouvenir);
            answer4.addEventListener("click", strikeSouvenir);
            finGuessNumber();
            answer1.innerHTML = finGuess;
            answer2.innerHTML = finArray[finRandomQuestion];
            finGuessNumber();
            answer3.innerHTML = finGuess;
            finGuessNumber();
            answer4.innerHTML = finGuess;
        }
        else if(finAnswerRandom == 2){
            answer1.addEventListener("click", strikeSouvenir);
            answer2.addEventListener("click", strikeSouvenir);
            answer3.addEventListener("click", souvenirStart);
            answer4.addEventListener("click", strikeSouvenir);
            finGuessNumber();
            answer1.innerHTML = finGuess;
            finGuessNumber();
            answer2.innerHTML = finGuess;
            answer3.innerHTML = finArray[finRandomQuestion];
            finGuessNumber();
            answer4.innerHTML = finGuess;
        }
        else if(finAnswerRandom == 3){
            answer1.addEventListener("click", strikeSouvenir);
            answer2.addEventListener("click", strikeSouvenir);
            answer3.addEventListener("click", strikeSouvenir);
            answer4.addEventListener("click", souvenirStart);
            finGuessNumber();
            answer1.innerHTML = finGuess;
            finGuessNumber();
            answer2.innerHTML = finGuess;
            finGuessNumber();
            answer3.innerHTML = finGuess;
            answer4.innerHTML = finArray[finRandomQuestion];
        }
    }
    else if(questions == 5){
        solveSouvenir();
    }
}
function finGuessNumber(){
    ifOutOfRangeFin = Math.floor((Math.random() * 10)) % (finVariantsGuesses.length);
    if(ifOutOfRangeFin < 0){
        ifOutOfRangeFin = ifOutOfRangeFin + 4;
    }
    finGuess = finVariantsGuesses[ifOutOfRangeFin];
    finVariantsGuesses.splice(finVariantsGuesses.indexOf(finGuess), 0);
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
    solve();
}
function strikeWires(){
    wiresStatus.style.backgroundColor = "#ff0000";
    strike();
}

function solveKeypad(){
    keypadStatus.style.backgroundColor = "#00ff00";
    solve();
}
function strikeKeypad(){
    keypadStatus.style.backgroundColor = "#ff0000";
    strike();
}

function solveButton(){
    buttonStatus.style.backgroundColor = "#00ff00";
    strip.style.backgroundColor = "#000000";
    solve();
}
function strikeButton(){
    buttonStatus.style.backgroundColor = "#ff0000";
    strike();
}

function solveFIN(){
    finStatus.style.backgroundColor = "#00ff00";
    souvenirStart();
    finKey1.removeEventListener("click", enter1);
    finKey2.removeEventListener("click", enter2);
    finKey3.removeEventListener("click", enter3);
    finKey4.removeEventListener("click", enter4);
    finKey5.removeEventListener("click", enter5);
    finKey6.removeEventListener("click", enter6);
    finKey7.removeEventListener("click", enter7);
    finKey8.removeEventListener("click", enter8);
    finKey9.removeEventListener("click", enter9);
    finKey0.removeEventListener("click", enter0);
    stageHTML.innerHTML = "- -";
    finDigit.innerHTML = "";
}
function strikeFIN(){
    finStatus.style.backgroundColor = "#ff0000";
    strike();
    finDigit.innerHTML = "";
}

function solveSouvenir(){
    souvenirStatus.style.backgroundColor = "#00ff00";
    timerStatus.style.backgroundColor = "#00ff00";
    clearInterval(timerInterval);
    minHTML.style.color = "#330000";
    dvoetochie.style.color = "#330000";
    secHTML.style.color = "#330000";
}
function strikeSouvenir(){
    souvenirStatus.style.backgroundColor = "#ff0000";
    strike();
}

function strike(){
    strikes = strikes + 1;
    if(strikes == 1){
        strike1.style.backgroundColor = "#ff0000";
    }
    if(strikes == 2){
        strike2.style.backgroundColor = "#ff0000";
    }
    if(strikes >= 3){
        explode();
    }
}
function solve(){
    solves = solves + 1;
    stageHTML.innerHTML = "0" + (solves + 1);
    finDigit.innerHTML = finArray[solves];
    if(solves == 3){
        stageHTML.addEventListener("click", finEnter);
    }
}

function explode(){
    bomb.style.display = "none";
}

//Таймер
let timerInterval = setInterval(() => {
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
    // кнопка
    button.addEventListener("click", strikeButton);
    if(isStripColored == true){
        if(buttonStripRandom == 0){
            if(sec % 10 == 7){
                button.removeEventListener("click", strikeButton);
                button.addEventListener("click", solveButton);
            }
            else{
                button.addEventListener("click", strikeButton);
                button.removeEventListener("click", solveButton);
            }
        }
        else if(buttonStripRandom == 3){
            if((sec % 10) == (Math.floor(sec / 10))){
                button.removeEventListener("click", strikeButton);
                button.addEventListener("click", solveButton);
            }
            else{
                button.addEventListener("click", strikeButton);
                button.removeEventListener("click", solveButton);
            }
        }
        else{
            button.removeEventListener("click", strikeButton);
            button.addEventListener("click", solveButton);
        }
    }
    else{
        if(button.style.backgroundColor == "rgb(255, 0, 0)" || button.style.backgroundColor == "rgb(255, 255, 0)"){
            if(sec % 10 == 6){
                button.removeEventListener("click", strikeButton);
                button.addEventListener("click", buttonStrip);
            }
            else{
                button.addEventListener("click", strikeButton);
                button.removeEventListener("click", buttonStrip);
            }
        }
        else if(buttonTextRandom == 3){
            if((sec % 10) + (Math.floor(sec / 10)) == 7){
                button.removeEventListener("click", strikeButton);
                button.addEventListener("click", buttonStrip);
            }
            else{
                button.addEventListener("click", strikeButton);
                button.removeEventListener("click", buttonStrip);
            }
        }
        else{
            button.removeEventListener("click", strikeButton);
            button.addEventListener("click", buttonStrip);
        }
    }
}, 1000);