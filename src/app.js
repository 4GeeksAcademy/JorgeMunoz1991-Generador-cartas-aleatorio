/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function getRandomCard() {
  let suits = ["♦", "♥", "♠", "♣"];
  let ranks = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A"
  ];

  let randomSuit = suits[Math.floor(Math.random() * suits.length)];
  let randomRank = ranks[Math.floor(Math.random() * ranks.length)];

  let cardImageTop = document.getElementById("cardImage-top");
  let cardTitle = document.getElementById("cardTitle");
  let cardImageBot = document.getElementById("cardImage-bot");

  cardImageTop.textContent = randomSuit;
  cardTitle.textContent = randomRank;
  cardImageBot.textContent = randomSuit;

  cardContainer.classList.remove("red", "black");
  if (randomSuit === "♦" || randomSuit === "♥") {
    cardContainer.classList.add("red");
  } else {
    cardContainer.classList.add("black");
  }
}

getRandomCard();

let generateBtn = document.getElementById("generateBtn");
generateBtn.addEventListener("click", function() {
  getRandomCard();
});

setInterval(function() {
  getRandomCard();
}, 10000);

const form = document.getElementById("formulario");

form.addEventListener("submit", event => {
  event.preventDefault();

  const alturaInput = document.getElementById("heightInput");
  const anchuraInput = document.getElementById("widthInput");
  const cardContainer = document.getElementById("cardContainer");
  const cardImageTop = document.getElementById("cardImage-top");
  const cardTitle = document.getElementById("cardTitle");
  const cardImageBot = document.getElementById("cardImage-bot");

  const nuevaAltura = alturaInput.value;
  const nuevaAnchura = anchuraInput.value;

  cardContainer.style.height = `${nuevaAltura}px`;
  cardContainer.style.width = `${nuevaAnchura}px`;
  cardImageTop.style.fontSize = `${nuevaAltura}px`;
  cardTitle.style.fontSize = `${nuevaAltura}px`;
  cardImageBot.style.fontSize = `${nuevaAltura}px`;
});
