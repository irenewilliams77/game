var choices = ['paper','rock', 'scissors']
var i = Math.floor(Math.random() * 3);
var computerChoice = choices[i];
var userPoints = 0;
var computerPoints = 0;
function score () {
var score_div = document.getElementById("score-board");
}

setInterval(score, 50);



function game(userChoice){
    var box = document.getElementById("challenge");
   box.style.display = "inline-flex";
var userDiv = document.getElementById("yourObjective");
userDiv.innterHTML = convert(userChoice);
var comDiv = document.getElementById("comObjective");
comDiv.innterHTML = convert(comChoice);
 
if(userChoice === "paper" && computerChoice === "rock" || userChoice === "rock" && computerChoice === "scissors" || userChoice === "scissors" && computerChoice === "paper"){
    win();
} else if (userChoice === computerChoice){
    draw();
} else {
    lose();
}
}


function continueGame (){
    i = Math.floor(Math.random() * 3);
    computerChoise = choices[i];
     
}


function win (selection) {
    userPoints++;
    document.getElementById("me").innerHTML = "You win...yahhh"
}
function draw (selection) {
    document.getElementById("results").innerHTML = "Draw....try again"
}
function lose (selection) {
    computerPoints++;
    document.getElementById("results").innerHTML = "You lose...so sad"
}











/* let userScore = 0;
let computerScore =0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const score_div = document.querySelector(".score");
const results_p = document.querySelector(".results > p");
const paper_div = document.getElementById("p");
const rock_div = document.getElementById("r");
const scissors_div = document.getElementById("s");

function getComputerChoice(){
    const choices = ['r','p','s'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function convertToWord(words) {
    if(words === "r") return "Rock";
    if(words === "p") return "Paper";
    return "Scissors"
}


function win (userChoice, computerChoice) {
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice);
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
   
    results_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} beats ${convertToWord(computerChoice)}${smallCompWord} + You win!`;
console.log("You win!!!!!")
}


function lose (userChoice, computerChoice) {
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice);
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    results_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} loses to ${convertToWord(computerChoice)}${smallCompWord} + You lost!`;
console.log("You lose, so sorry!")
}
function draw (userChoice, computerChoice) {
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice);
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    results_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} equals to ${convertToWord(computerChoice)}${smallCompWord} + It's a draw!`;
    console.log("Draw")
}

function game(userChoice) {
    const getComputerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
        win(userChoice, computerChoice);
        break;
        case "rp":
        case "ps":
        case "sr":
        lose(userChoice, computerChoice);
        break;
        case "rr":
        case "ss":
        case "pp":
            draw(userChoice, computerChoice);
            break;
    }
}

function main() {
    rock_div.addEventListener('click', () => game("r") );
   paper_div.addEventListener('click', () => game("p") );
    scissors_div.addEventListener('click', () => game("s"));
}
main();/*/