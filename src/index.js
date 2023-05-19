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

console.log(createDeck(suits, cards, card));
