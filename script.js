let bomb = document.querySelector(".bomb");

let wiresStatus = document.querySelector("#wires .status");
let keypadStatus = document.querySelector("#keypad .status");
let buttonStatus = document.querySelector("#button .status");
let souvenirStatus = document.querySelector("#souvenir .status");
let finStatus = document.querySelector("#forget-it-not .status");

let wiresRandom = (Math.floor((Math.random()) * 10)) % 5;

let buttonRandom = (Math.floor((Math.random()) * 10)) % 4;
let buttonTextRandom = (Math.floor((Math.random()) * 10)) % 4;
let buttonStripRandom = (Math.floor((Math.random()) * 10)) % 4;

let keypadRandom = Math.floor((Math.random()) * 10);

let finRandom = Math.floor((Math.random()) * 10);

let minHTML = document.querySelector(".minutes");
let secHTML = document.querySelector(".seconds");
let min = 5;
let sec = 0;

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
key2.innerHTML = keypadRandom;
keypadRandom = Math.floor((Math.random()) * 10);
key3.innerHTML = keypadRandom;
keypadRandom = Math.floor((Math.random()) * 10);
key4.innerHTML = keypadRandom;
keypadRandom = Math.floor((Math.random()) * 10);


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

function explode(){
    bomb.style.display = "none";
}

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
}, 1000);