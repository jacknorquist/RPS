let playerScore = 0;
function resetPlayerScore(){
    score = 0;
}
let compScore = 0;
function resetCompScore(){
    compScore = 0;
}

function getComputerSelection() {
    const options = ["Rock", "Paper", "Scissors"];
    const computerSelection = options[Math.floor(Math.random() * options.length)];
    console.log(computerSelection);
    return computerSelection;
}


function getPlayerSelection() {
    const playerSelection = document.getElementById("myInput").value;
    console.log(playerSelection);
    return playerSelection;
}


function playRound(){
    const comp = getComputerSelection();
    const player = getPlayerSelection();


    if (comp === "Paper" && player === "Scissors" || comp === "Rock" && player === "Paper" || comp === "Scissors" && player === "Rock"){
        console.log("You Win The Round");
        playerScore++;
        console.log(playerScore);
        console.log(compScore);
    }
    else if (comp === "Rock" && player === "Scissors" || comp === "Paper" && player === "Scissors" || comp === "Scissors" && player === "Paper" || comp === "Paper" && player === "Rock"){
        console.log("You Lose The Round");
        compScore++;
        console.log(playerScore);
        console.log(compScore);
    }
    else if (comp === "Paper" && player === "Paper" || comp === "Rock" && player === "Rock" || comp === "Scissors" && player === "Scissors"){
        console.log("Tie");
        console.log(playerScore);
        console.log(compScore);
    }
    else{
        console.log("Play the game Dummy")
    }
}
let roundsPlayed = 0;
function getRoundsPlayed(){
    roundsPlayed++;
    console.log(roundsPlayed);
}
function resetRoundsPlayed(){
    roundsPlayed = 0;
}
function game () {
    if (roundsPlayed <= 4 ){
        playRound();
        getRoundsPlayed();
    } else if (roundsPlayed == 5){
        if(playerScore > compScore) {
            console.log("You Win The Game")
            resetRoundsPlayed();
            resetPlayerScore ();
            resetCompScore;
        } else if (playerScore < compScore){
            console.log("You Lose The Game")
            resetRoundsPlayed();
            resetPlayerScore(); 
            resetCompScore();       
        } else if (playerScore == compScore){
            console.log("Tie Game!")
            resetRoundsPlayed();
            resetPlayerScore();
            resetCompScore();
        }
    }
    
}
