
const rockB = document.querySelector('#rockb');
const paperB = document.querySelector('#paperb');
const scissorsB = document.querySelector('#scissorsb');
const result = document.querySelector('#result');
let playerScreenScore = document.querySelector("#players");
let compScreenScore = document.querySelector("#comps");
rockB.addEventListener('click', rock);
paperB.addEventListener('click', paper);
scissorsB.addEventListener('click', scissors);

let playerSelection="";
let comp = "";

function rock(){
    playerSelection = "Rock";
    console.log(playerSelection);
    getComputerSelection();
    playRound();
    game();
}

function paper(){
    playerSelection = "Paper";
    getComputerSelection();
    playRound();
    game();
   
}

function scissors(){
    playerSelection = "Scissors";
    getComputerSelection();
    playRound();
    game();
}


function getComputerSelection() { 
    const options = ["Rock", "Paper", "Scissors"];
    comp = options[Math.floor(Math.random() * options.length)];
}

//Determines winner of round and keeps score for the game.
function playRound(){

    if (comp === "Paper" && playerSelection === "Scissors" || comp === "Rock" && playerSelection === "Paper" || comp === "Scissors" && playerSelection === "Rock"){
        result.textContent = "You Win The Round!";
        playerScore++;
        playerScreenScore.textContent = playerScore;
        
    }    
    else if (comp === "Rock" && playerSelection === "Scissors" || comp === "Paper" && playerSelection === "Scissors" || comp === "Scissors" && playerSelection === "Paper" || comp === "Paper" && playerSelection === "Rock"){
        result.textContent = "You Lose The Round!";
        compScore++;
        compScreenScore.textContent = compScore;
        
        
      
    }
    else if (comp === "Paper" && playerSelection === "Paper" || comp === "Rock" && playerSelection === "Rock" || comp === "Scissors" && playerSelection === "Scissors"){
        
        result.textContent = "Tie";
    }    
    else{
        console.log("Play the game Dummy")
    }
}


let roundsPlayed = 1;
let playerScore = 0;
let compScore = 0;

//Determines number rounds played and determines winner after 5 rounds
function game () { 
    if (roundsPlayed <= 4 ){
        roundsPlayed++;
    } else if (roundsPlayed == 5){
        if(playerScore > compScore) {
           openThePopupWin();
            playerScore.textContent = playerScore;
            compScreenScore.textContent = compScore;

        } else if (playerScore < compScore){
            openThePopupLose();
            playerScreenScore.textContent = playerScore;
            compScreenScore.textContent = compScore;      
        } else if (playerScore == compScore){
            openThePopupTie();
            playerScreenScore.textContent = playerScore;
            compScreenScore.textContent = compScore; 
        }
    }
    
}
const popupW = document.getElementById("popupW");
const popupL = document.getElementById("popupL");
const popupT = document.getElementById("popupL");
const resetButton = document.getElementById('reset');
const resetButtonL = document.getElementById('resetL');
const resetButtonT = document.getElementById('resetT');


function openThePopupWin(){
   const scoreP = document.getElementById("popp");
   const scoreC = document.getElementById("popc");
   scoreP.textContent = playerScore;
   scoreC.textContent = compScore;
   popupW.style.display = "block";

}
function openThePopupLose(){
    const scoreP = document.getElementById("poppl");
    const scoreC = document.getElementById("popcl");
    scoreP.textContent = playerScore;
    scoreC.textContent = compScore;
    popupL.style.display = "block";
 
 }
 function openThePopupTie(){
    const scoreP = document.getElementById("poppT");
    const scoreC = document.getElementById("popcT");
    scoreP.textContent = playerScore;
    scoreC.textContent = compScore;
    popupT.style.display = "block";
 
 }

resetButton.addEventListener('click', resetGame);
resetButtonL.addEventListener('click', resetGame);
resetButtonT.addEventListener('click', resetGame);



function resetGame(){

    roundsPlayed=1;
    playerScore=0;
    compScore=0;
    result.textContent = "0;"
    playerScreenScore.textContent = "0";
    compScreenScore.textContent = "0";
    popupW.style.display = "none";
    popupL.style.display = "none";
    

}
