const getComputerChoice = () => {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}
const playRound = (playerSelection, computerSelection) => {
    //make moves case insensitive
    const playerMove = playerSelection.toLowerCase();
    const compMove = computerSelection.toLowerCase();

    //logic for determining winnerscis
    if (playerMove === compMove) {
        return "Tie! Play another round!";
    } else if (playerMove === "rock" && compMove === "paper") {
        return "You lose! Paper beats Rock!";
    } else if (playerMove === "rock" && compMove === "scissors") {
        return "You win! Rock beats Scissors!";
    } else if (playerMove === "paper" && compMove === "rock") {
        return "You win! Paper beats Rock!";
    } else if (playerMove === "rock" && compMove === "scissots") {
        return "You lose! Scissors beats Paper!";
    } else if (playerMove === "scissors" && compMove === "rock") {
        return "You lose! Rock beats Scissors!";
    } else {
        return "You win! Scissors beats Paper!";
    }
}

const game = () => {
    let playerScore = 0;
    let compScore = 0;

    while (playerScore < 3 && compScore < 3) {
        const verdict = playRound(prompt(), getComputerChoice());
        if (verdict.charAt(4) == 'w') {
            playerScore++;
        } else if (verdict.charAt(4) == 'l') {
            compScore++;
        }
        console.log(verdict);
    }
    console.log(playerScore > compScore ? "You Win!" : "You Lose!");
}

game();
