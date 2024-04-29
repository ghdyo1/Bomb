let wiresStatus = document.querySelector("#wires .status");
let keypadStatus = document.querySelector("#keypad .status");
let buttonStatus = document.querySelector("#button .status");
let simpletonStatus = document.querySelector("#simpleton .status");
let finStatus = document.querySelector("#forget-it-not .status");

let wiresRandom = (Math.floor((Math.random()) * 10)) % 5;

let buttonRandom = (Math.floor((Math.random()) * 10)) % 4;
let buttonStripRandom = (Math.floor((Math.random()) * 10)) % 4;

let keypadRandom = Math.floor((Math.random()) * 10);

let finRandom = Math.floor((Math.random()) * 10);

let wire1 = document.querySelector(".wire1");
let wire2 = document.querySelector(".wire2");
let wire3 = document.querySelector(".wire3");
let wire4 = document.querySelector(".wire4");

let key1 = document.querySelector(".key1");
let key2 = document.querySelector(".key2");
let key3 = document.querySelector(".key3");
let key4 = document.querySelector(".key4");

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
wiresRandom = (Math.floor((Math.random()) * 10)) % 5;


key1.innerHTML = keypadRandom;
keypadRandom = Math.floor((Math.random()) * 10);
key2.innerHTML = keypadRandom;
keypadRandom = Math.floor((Math.random()) * 10);
key3.innerHTML = keypadRandom;
keypadRandom = Math.floor((Math.random()) * 10);
key4.innerHTML = keypadRandom;
keypadRandom = Math.floor((Math.random()) * 10);