const cards = document.querySelectorAll('.memory-card');
const screenScore = document.getElementById("score");

let hasFlippedCard = false;
let firstCard;
let secondCard;
let lockBoard = false;
let score = 0;

function flipCard() {
  if (lockBoard) return;
  if (this === firstCard) return;
  this.classList.add('flip');
  if (!hasFlippedCard) {
    hasFlippedCard = true;
    firstCard = this;
    return;
  }
  secondCard = this;
  checkForCardsMatch();
}

function checkForCardsMatch() {
  if (firstCard.dataset.technology === secondCard.dataset.technology) {
    updateScore();
    disableCards();
    return;
  }
  unflipCards();
}

function disableCards() {
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);
  resetGame();
}

function unflipCards() {
  lockBoard = true;
  setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');
    resetGame();
  }, 1500);
}

function resetGame() {
  hasFlippedCard = false;
  lockBoard = false;
  firstCard = null;
  secondCard = null;
}

function shuffleCards() {
  cards.forEach(card => {
    let ramdomPosition = Math.floor(Math.random() * 20);
    card.style.order = ramdomPosition;
  });
}

function updateScore() {
  score++;
  screenScore.innerText = `${score}`;
}

shuffleCards();

cards.forEach(card => card.addEventListener('click', flipCard));