/* 
Javascript 

-User will input their choice of either, rock, paper, or scissors
-computer will return it's random choice of either rock, paper, or scissors
-both the user's choice and the computer's choice will be compared to determine a winner
-the determined winner will be output to the screen


*/

let userPlay = "";
let computerPlay = "";
let userWon = "";
let computerWon = "";
let noWinner = "";
let run = "true"
const choice = ["rock","paper","scissors"]


function populateResults(){
    userWon = "You Picked: "+ userPlay.toUpperCase() + "\nComputer Picked: "+ computerPlay.toUpperCase() + "\nYou Won! " + userPlay.toUpperCase() + " beats " +  computerPlay.toUpperCase()+"!";
    computerWon = "You Picked: "+ userPlay.toUpperCase() + "\nComputer Picked: "+ computerPlay.toUpperCase() + "\nYou Lost! " + computerPlay.toUpperCase() + " beats " + userPlay.toUpperCase()+"!";
    noWinner = "You Picked: "+ userPlay.toUpperCase() + "\nComputer Picked: "+ computerPlay.toUpperCase() + "\nYou both picked " + userPlay.toUpperCase() + " Try again!"
}

function randomRange(min, max){
    return Math.floor(Math.random()*(max-min+1)+min)
}

function computerChoice(){
    return randomRange(0,2)
}


function determineWinner(){
    if (userPlay === computerPlay){
        alert(noWinner)
    } else if (userPlay === "rock" && computerPlay === "paper"){
        alert(computerWon)
    } else if (userPlay === "rock" && computerPlay === "scissors"){
        alert(userWon)
    } else if (userPlay === "paper" && computerPlay === "rock"){
        alert(userWon)
    } else if (userPlay === "paper" && computerPlay === "scissors"){
        alert(computerWon)
    } else if (userPlay === "scissors" && computerPlay === "rock"){
        alert(computerWon)
    } else if (userPlay === "scissors" && computerPlay === "paper"){
        alert(userWon)
    }
}


while (run === "true"){
    userPlay = window.prompt("What do you play... Rock, Paper, or Scissors?").toLowerCase();
    computerPlay = choice[computerChoice()];
    console.log(userPlay);
    console.log(computerPlay);
    populateResults();
    determineWinner();

}





