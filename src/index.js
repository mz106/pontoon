const suits = ["spades", "hearts", "clubs", "diamonds"];

const cards = [
  "ace",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
  "ten",
  "jack",
  "queen",
  "king",
];

function card(suit, name) {
  this.suit = suit;
  this.name = name;
}

const createDeck = (suits, cards, fn) => {
  const lenSuits = suits.length;
  const lenCards = cards.length;
  const deck = [];

  for (let i = 0; i < lenSuits; i++) {
    for (let j = 0; j < lenCards; j++) {
      deck.push(new fn(suits[i], cards[j]));
    }
  }
  return deck;
};

const getCard = (deck) => {
  const selectedCard = deck[Math.floor(Math.random() * deck.length)];
  return selectedCard;
};

const init = () => {
  document.addEventListener("DOMContentLoaded", () => {
    let deck;
    let score = 0;
    const handArr = [];
    console.log(score);
    const scoreBoard = document.getElementById("score");
    scoreBoard.innerHTML = score;
    window.onload = deck = createDeck(suits, cards, card);

    const dealBtn = document.getElementById("deal");

    dealBtn.addEventListener("click", () => {
      const newCard = getCard(deck);

      deck = deck.filter((item) => item !== newCard);

      handArr.push(newCard);
      console.log(handArr);
      const cardContainer = document.createElement("div");
      cardContainer.innerHTML = newCard.name + " " + newCard.suit;
      document.getElementById("hand").appendChild(cardContainer);

      score = 0;
      for (let i = 0; i < handArr.length; i++) {
        if (handArr[i].name === "ace") {
          score += 1;
        } else if (handArr[i].name === "two") {
          score += 2;
        } else if (handArr[i].name === "three") {
          score += 3;
        } else if (handArr[i].name === "four") {
          score += 4;
        } else if (handArr[i].name === "five") {
          score += 5;
        } else if (handArr[i].name === "six") {
          score += 6;
        } else if (handArr[i].name === "seven") {
          score += 7;
        } else if (handArr[i].name === "eight") {
          score += 8;
        } else if (handArr[i].name === "nine") {
          score += 9;
        } else if (handArr[i].name === "ten") {
          score += 10;
        } else {
          score += 10;
        }
      }
      scoreBoard.innerHTML = score;
      if (score === 21) {
        console.log("winner");
      } else if (score >= 21) {
        console.log("bust");
      }
    });
  });
};

init();
