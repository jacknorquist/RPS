let playerScore = 0;
function resetPlayerScore(){
    playerScore = 0;
}
let compScore = 0;
function resetCompScore(){
    compScore = 0;
}

function getComputerSelection() {
    const options = ["Rock", "Paper", "Scissors"];
    comp = options[Math.floor(Math.random() * options.length)];
}

let comp = "";
let playerSelection="";

function playRound(){

    if (comp === "Paper" && playerSelection === "Scissors" || comp === "Rock" && playerSelection === "Paper" || comp === "Scissors" && playerSelection === "Rock"){
        alert("You Win The Round");
        playerScore++;
        console.log(playerSelection);
    }    
    else if (comp === "Rock" && playerSelection === "Scissors" || comp === "Paper" && playerSelection === "Scissors" || comp === "Scissors" && playerSelection === "Paper" || comp === "Paper" && playerSelection === "Rock"){
        alert("You Lose The Round");
        compScore++;
        console.log(playerSelection);
        
      
    }
    else if (comp === "Paper" && playerSelection === "Paper" || comp === "Rock" && playerSelection === "Rock" || comp === "Scissors" && playerSelection === "Scissors"){
        alert("Tie");
    }    
    else{
        console.log("Play the game Dummy")
    }
}
let roundsPlayed = 1;
function getRoundsPlayed(){
    roundsPlayed++;
}
function resetRoundsPlayed(){
    roundsPlayed = 1;
}



const rockB = document.querySelector('#rockb')
const paperB = document.querySelector('#paperb')
const scissorsB = document.querySelector('#scissorsb')

function rock(){
    playerSelection = "Rock";
    console.log(playerSelection);
    getComputerSelection();
    playRound();
    game();
}

rockB.addEventListener('click', rock)

function paper(){
    playerSelection = "Paper";
    getComputerSelection();
    playRound();
    game();
   
}
paperB.addEventListener('click', paper)

function scissors(){
    playerSelection = "Scissors";
    getComputerSelection();
    playRound();
    game();
}
scissorsB.addEventListener('click', scissors)


function game () {
    if (roundsPlayed <= 4 ){
        getRoundsPlayed();
    } else if (roundsPlayed == 5){
        if(playerScore > compScore) {
            alert("You Win The Game")
            alert(playerScore);
            alert("to");
            alert(compScore);
            resetRoundsPlayed();
            resetPlayerScore ();
            resetCompScore();
        } else if (playerScore < compScore){
            alert("You Lose The Game")
            alert(compScore);
            alert("to");
            alert(playerScore);
            resetRoundsPlayed();
            resetPlayerScore(); 
            resetCompScore();       
        } else if (playerScore == compScore){
            alert("Tie Game!");
            resetRoundsPlayed();
            resetPlayerScore();
            resetCompScore();
        }
    }
    
}
