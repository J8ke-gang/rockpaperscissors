// rock paper scissors

const choices = ["rock","paper","scissors"];
const playerdisplay = document.getElementById("playerdisplay");
const computerdisplay = document.getElementById("computerdisplay");
const resultdisplay = document.getElementById("resultdisplay");
const playerscoredisplay = document.getElementById("playerscoredisplay");
const computerscoredisplay = document.getElementById("computerscoredisplay");
let playerscore =0;
let computerscore = 0;


function playgame(playerchoice){

    const computerchoice = choices[Math.floor(Math.random() * 3)];
    let result = "";

    if(playerchoice === computerchoice){
        result = "ITS A TIE";
    }
    else{
        switch(playerchoice){
            case "rock":
            result = (computerchoice === "scissors") ? "YOU WIN": "YOU LOSE";
            break;
        case "paper":
            result = (computerchoice === "rock") ? "YOU WIN": "YOU LOSE";
            break;
        case "scissors":
            result = (computerchoice === "paper") ? "YOU WIN": "YOU LOSE";
            break;
        }
    }

    playerdisplay.textContent = `YOU: ${playerchoice}`;
    computerdisplay.textContent = `COMPUTER: ${computerchoice}`;
    resultdisplay.textContent = result;

    resultdisplay.classList.remove ("greentext","redtext");

    switch(result){
        case "YOU WIN":
            playerscore++;
            playerscoredisplay.textContent = playerscore;
        resultdisplay.classList.add("greentext");
        break;
        case "YOU LOSE":
            computerscore++;
            computerscoredisplay.textContent = computerscore
        resultdisplay.classList.add("redtext");
        break;
    }
    }