
const computerSelection = function getComputerSelection(){
    const options = ["Rock", "Paper", "Scissors"];
    const computerSelection = options[Math.floor(Math.random() * options.length)]
    console.log(computerSelection);
    return computerSelection;
}

const playerSelection = function getPlayerSelection(){
    const playerSelection = document.getElementById("myInput").value;
    console.log(playerSelection);
    return playerSelection;
}

function playRound(computerSelection, playerSelection){
    if (computerSelection() == "Rock" && playerSelection() == "Paper"){
        console.log("You Win!");
    }else {
        console.log("You Lose");
    }
}
