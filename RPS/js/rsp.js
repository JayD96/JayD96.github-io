const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSORS = "SCISSORS";




function getResulttext(computerPick, playerPick){
    const TIE = "It's a tie!";
    const WIN = "You win!";
    const LOSE = "You lose!";

    if (computerPick == playerPick){
        return TIE;
    }
    if (computerPick == PAPER && playerPick == ROCK) {
    return LOSE;
} else if (computerPick == PAPER && playerPick == SCISSORS){
    return WIN;
}

if (computerPick == ROCK && playerPick == SCISSORS){
    return LOSE;
}else if (computerPick == ROCK && playerPick == PAPER){
    return WIN;
}

if (computerPick == SCISSORS && playerPick == PAPER){
    return LOSE;
}else if (computerPick == SCISSORS && playerPick == ROCK){
    return WIN;
}
}
