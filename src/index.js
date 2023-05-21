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
  const handArr = [];
  document.addEventListener("DOMContentLoaded", () => {
    let deck;
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
    });
  });
};

init();
