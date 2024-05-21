let deck = [];
const suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

let playerCards = [];
let dealerCards = [];
let playerScore = 0;
let dealerScore = 0;
let gameOver = false;

const playerCardsDiv = document.getElementById('player-cards');
const dealerCardsDiv = document.getElementById('dealer-cards');
const playerScoreDiv = document.getElementById('player-score');
const dealerScoreDiv = document.getElementById('dealer-score');
const gameMessage = document.getElementById('game-message');
const startGameButton = document.getElementById('start-game');
const hitButton = document.getElementById('hit');
const standButton = document.getElementById('stand');

function createDeck() {
    deck = [];
    for (let suit of suits) {
        for (let value of values) {
            deck.push({ suit, value });
        }
    }
}

function shuffleDeck() {
    for (let i = deck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]];
    }
}

function startGame() {
    console.log('Starting game...');
    gameOver = false;
    playerCards = [];
    dealerCards = [];
    playerScore = 0;
    dealerScore = 0;
    gameMessage.textContent = '';
    playerCardsDiv.innerHTML = '';
    dealerCardsDiv.innerHTML = '';

    createDeck();
    shuffleDeck();

    playerCards.push(deck.pop());
    playerCards.push(deck.pop());
    dealerCards.push(deck.pop());
    dealerCards.push(deck.pop());

    updateScores();
    updateUI();

    hitButton.disabled = false;
    standButton.disabled = false;
}

function hit() {
    if (!gameOver) {
        console.log('Player hits.');
        playerCards.push(deck.pop());
        updateScores();
        updateUI();
        checkGameOver();
    }
}

function stand() {
    if (!gameOver) {
        console.log('Player stands.');
        gameOver = true;
        while (dealerScore < 17) {
            dealerCards.push(deck.pop());
            updateScores();
            updateUI();
        }
        checkGameOver();
    }
}

function getCardValue(card) {
    if (card.value === 'A') return 11;
    if (['K', 'Q', 'J'].includes(card.value)) return 10;
    return parseInt(card.value);
}

function calculateScore(cards) {
    let score = 0;
    let hasAce = false;
    for (let card of cards) {
        score += getCardValue(card);
        if (card.value === 'A') hasAce = true;
    }
    if (score > 21 && hasAce) {
        score -= 10;
    }
    return score;
}

function updateScores() {
    playerScore = calculateScore(playerCards);
    dealerScore = calculateScore(dealerCards);
}

function updateUI() {
    playerCardsDiv.innerHTML = playerCards.map(card => `${card.value} ${card.suit}`).join(', ');
    dealerCardsDiv.innerHTML = dealerCards.map(card => `${card.value} ${card.suit}`).join(', ');
    playerScoreDiv.textContent = `Score: ${playerScore}`;
    dealerScoreDiv.textContent = `Score: ${dealerScore}`;
}

function checkGameOver() {
    if (playerScore > 21) {
        gameMessage.textContent = 'Player busts! Dealer wins.';
        gameOver = true;
    } else if (dealerScore > 21) {
        gameMessage.textContent = 'Dealer busts! Player wins.';
        gameOver = true;
    } else if (gameOver) {
        if (playerScore > dealerScore) {
            gameMessage.textContent = 'Player wins!';
        } else if (playerScore < dealerScore) {
            gameMessage.textContent = 'Dealer wins!';
        } else {
            gameMessage.textContent = 'It\'s a tie!';
        }
    }

    if (gameOver) {
        hitButton.disabled = true;
        standButton.disabled = true;
    }
}

startGameButton.addEventListener('click', startGame);
hitButton.addEventListener('click', hit);
standButton.addEventListener('click', stand);

window.onload = startGame;
