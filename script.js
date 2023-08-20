const root = document.querySelector("#root");

//appends buttons to root
const buttonContainer = document.createElement('div');

buttonContainer.classList.add('buttonContainer');
buttonContainer.classList.add('load');

const rock = document.createElement('img');
rock.src = "images/rock.png";
rock.alt = "Image of a rock";

const paper = document.createElement('img');
paper.src = "images/paper.png";
paper.alt = "Image of a paper";

const scissors = document.createElement('img');
scissors.src = "images/scissors.png";
scissors.alt = "Image of scissors";

const moveSelection = [rock, scissors, paper];

rock.textContent = 'Rock';
scissors.textContent = 'Scissors';
paper.textContent = 'Paper'

moveSelection.forEach((move) => {
    buttonContainer.appendChild(move);
})

root.appendChild(buttonContainer);

// int representations of player scores
let playerScore = 0;
let compScore = 0;

// node that contains the scores
const scoreKeeper = document.createElement('div');
scoreKeeper.classList.add("scoreBox");
scoreKeeper.classList.add("load");

// nodes that represent player and comp scores
const trackPlayer = document.createElement('p');
const trackComp = document.createElement('p');

// shows the scores as an initial zero
trackPlayer.textContent = "Player: " + playerScore.toString();
trackComp.textContent = "Computer: " + compScore.toString();

//append the player and comp scores as children to scoreKeeper container node
scoreKeeper.appendChild(trackPlayer);
scoreKeeper.appendChild(trackComp);

//append score container to root container
root.appendChild(scoreKeeper);

const verdictMessage = document.createElement('p');

verdictMessage.textContent = 'First to five points wins! Are you ready? Make a move to start!';
verdictMessage.id = "verdictMessage";
verdictMessage.classList.add('load');

root.insertBefore(verdictMessage, buttonContainer);

moveSelection.forEach((move) => {
    move.addEventListener('click', function (e) {
        const verdict = playRound(e.target.textContent, getComputerChoice());

        if (verdict.charAt(4) == 'w') {
            playerScore++;
            trackPlayer.textContent = "Player: " + playerScore.toString();
            verdictMessage.textContent = "You won this round!";
            checkWinner()
        } else if (verdict.charAt(4) == 'l') {
            compScore++;
            trackComp.textContent = "Computer: " + compScore.toString();
            verdictMessage.textContent = "You lost this round!";
            checkWinner();
       } else {
            verdictMessage.textContent = "It's a tie! Make another move!";
       }

    });
});

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

//return string for verdict message
const checkWinner = () => {
    if (playerScore == 5) {
        verdictMessage.textContent = "You won the game! Refresh to play another!";
        disableButtons();
    } else if (compScore == 5) {
        verdictMessage.textContent = "You lost the game! Refresh to play another!";
        disableButtons();
    }
}

//disable buttons
const disableButtons = () => {
    const buttons = document.querySelectorAll('img');
    buttons.forEach((button) => {
        button.setAttribute('style', 'pointer-events: none;');
    })
}

const enableButtons = () => {
    const buttons = document.querySelectorAll('img');
    buttons.forEach((button) => {
        button.setAttribute('style', 'pointer-events: auto;');
    })
}
