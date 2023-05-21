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

const setScore = (score, handArr) => {
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

  return score;
};

const deal = (deck, handArr, hand) => {
  const newCard = getCard(deck);
  let score = 0;

  deck = deck.filter((item) => item !== newCard);

  handArr.push(newCard);

  const cardContainer = document.createElement("div");
  cardContainer.innerHTML = newCard.name + " " + newCard.suit;
  hand.appendChild(cardContainer);

  return score;
};

const setScoreBoard = (newScore, scoreBoard) => {
  let gameEnd;
  if (newScore === 21) {
    scoreBoard.innerHTML = "You Win!";
    gameEnd = {
      gameOver: true,
      win: true,
    };
  } else if (newScore >= 21) {
    scoreBoard.innerHTML = "Bust!";
    gameEnd = {
      gameOver: true,
      win: false,
    };
  } else {
    scoreBoard.innerHTML = newScore;
    gameEnd = {
      gameOver: false,
      win: false,
    };
  }
  return gameEnd;
};

const loadDeck = () => {
  let deck;
  window.onload = deck = createDeck(suits, cards, card);
  return deck;
};

const init = () => {
  document.addEventListener("DOMContentLoaded", () => {
    let deck = loadDeck();

    let handArr = [];
    const wins = document.getElementById("wins");
    const losses = document.getElementById("losses");
    const scoreBoard = document.getElementById("score");
    const hand = document.getElementById("hand");

    scoreBoard.innerHTML = 0;
    wins.innerHTML = 0;
    losses.innerHTML = 0;

    let winsNum = 0;
    let lossesNum = 0;

    const dealBtn = document.getElementById("deal");
    const resetBtn = document.getElementById("reset");
    dealBtn.innerHTML = "Deal";
    dealBtn.addEventListener("click", () => {
      const currentHand = deal(deck, handArr, hand);
      const newScore = setScore(currentHand, handArr);
      const gameEnd = setScoreBoard(newScore, scoreBoard);

      if (gameEnd.gameOver) {
        dealBtn.classList.remove("active");
        dealBtn.classList.add("hidden");

        resetBtn.classList.remove("hidden");
        resetBtn.classList.add("active");

        if (gameEnd.win === true) {
          winsNum += 1;
          wins.innerHTML = winsNum;
        } else if (gameEnd.win === false) {
          lossesNum += 1;
          losses.innerHTML = lossesNum;
        }
      }
    });

    resetBtn.addEventListener("click", () => {
      dealBtn.classList.remove("hidden");
      dealBtn.classList.add("active");

      resetBtn.classList.remove("active");
      resetBtn.classList.add("hidden");

      handArr = [];
      deck = loadDeck();
      hand.innerHTML = "";
      scoreBoard.innerHTML = 0;
    });
  });
};

init();
