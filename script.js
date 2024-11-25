// script.js
let gilCount = 1000;
let currentBet = 0;

const gilCountEl = document.getElementById('gil-count');
const currentBetEl = document.getElementById('current-bet');
const betInput = document.getElementById('bet-input');
const placeBetBtn = document.getElementById('place-bet');
const dealBtn = document.getElementById('deal');
const messageEl = document.getElementById('message');

placeBetBtn.addEventListener('click', () => {
    const bet = parseInt(betInput.value);
    if (bet > 0 && bet <= gilCount) {
        currentBet = bet;
        gilCount -= bet;
        gilCountEl.textContent = gilCount;
        currentBetEl.textContent = currentBet;
        messageEl.textContent = "Pari placé ! Cliquez sur 'Distribuer' pour commencer.";
    } else {
        messageEl.textContent = "Pari invalide. Assurez-vous de parier une somme correcte.";
    }
});

dealBtn.addEventListener('click', () => {
    if (currentBet === 0) {
        messageEl.textContent = "Placez un pari avant de jouer.";
        return;
    }
    // Simule la distribution des cartes
    const playerScore = Math.floor(Math.random() * 21) + 1;
    const dealerScore = Math.floor(Math.random() * 21) + 1;

    document.getElementById('player-score').textContent = playerScore;
    document.getElementById('dealer-score').textContent = dealerScore;

    if (playerScore > 21) {
        messageEl.textContent = "Vous avez dépassé 21 ! Vous perdez.";
    } else if (dealerScore > 21 || playerScore > dealerScore) {
        gilCount += currentBet * 2;
        messageEl.textContent = "Vous gagnez !";
    } else {
        messageEl.textContent = "Le Neon Pulse gagne. Vous perdez.";
    }

    gilCountEl.textContent = gilCount;
    currentBet = 0;
    currentBetEl.textContent = currentBet;
});
