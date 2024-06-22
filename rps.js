const resultDiv = document.getElementById('result');
const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors');
const userChoiceDiv = document.getElementById('user-choice');
const computerChoiceDiv = document.getElementById('computer-choice');
const userScoreSpan = document.getElementById('user-score');
const computerScoreSpan = document.getElementById('computer-score');
const resetButton = document.getElementById('reset');

let userScore = 0;
let computerScore = 0;

rockButton.addEventListener('click', () => playGame('rock'));
paperButton.addEventListener('click', () => playGame('paper'));
scissorsButton.addEventListener('click', () => playGame('scissors'));
resetButton.addEventListener('click', resetGame);

function playGame(userChoice) {
    const computerChoice = getComputerChoice();
    displayChoices(userChoice, computerChoice);
    const winner = determineWinner(userChoice, computerChoice);
    displayResult(userChoice, computerChoice, winner);
    updateScore(winner);
    shakeHands();
}

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function displayChoices(userChoice, computerChoice) {
    userChoiceDiv.innerHTML = `<img src="${userChoice}.png" alt="${userChoice}">`;
    computerChoiceDiv.innerHTML = `<img src="${computerChoice}.png" alt="${computerChoice}">`;
}

function determineWinner(user, computer) {
    if (user === computer) {
        return 'draw';
    } else if (
        (user === 'rock' && computer === 'scissors') ||
        (user === 'paper' && computer === 'rock') ||
        (user === 'scissors' && computer === 'paper')
    ) {
        return 'user';
    } else {
        return 'computer';
    }
}

function displayResult(user, computer, winner) {
    if (winner === 'draw') {
        resultDiv.textContent = `Parehas kayo! Parehas kayo na ${user}.`;
    } else if (winner === 'user') {
        resultDiv.textContent = `Panalo ka! ${capitalize(user)} ay panalo sa ${computer}.`;
    } else {
        resultDiv.textContent = `Talo ka! ${capitalize(computer)} ay panalo sa ${user}.`;
    }
}

function updateScore(winner) {
    if (winner === 'user') {
        userScore++;
    } else if (winner === 'computer') {
        computerScore++;
    }
    userScoreSpan.textContent = userScore;
    computerScoreSpan.textContent = computerScore;
}

function resetGame() {
    userScore = 0;
    computerScore = 0;
    userScoreSpan.textContent = userScore;
    computerScoreSpan.textContent = computerScore;
    resultDiv.textContent = "Laro tayo!";
    userChoiceDiv.innerHTML = '';
    computerChoiceDiv.innerHTML = '';
}

function shakeHands() {
    userChoiceDiv.classList.add('shake');
    computerChoiceDiv.classList.add('shake');
    setTimeout(() => {
        userChoiceDiv.classList.remove('shake');
        computerChoiceDiv.classList.remove('shake');
    }, 500);
}

function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}
