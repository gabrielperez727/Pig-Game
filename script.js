//Score elements
const score0El = document.querySelector("#score--0");
const score1El = document.querySelector("#score--1");
const current0El = document.getElementById("current--0");
const current1El = document.getElementById("current--1");

//Score
let currentScore = 0;

//Dice element
const diceEL = document.querySelector(".dice");

//Buttons
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

//Starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEL.classList.add("hidden");

//Rolling dice functionality
btnRoll.addEventListener("click", function () {
  const dice = Math.trunc(Math.random() * 6) + 1;
  diceEL.classList.remove("hidden");
  diceEL.src = `dice-${dice} (1).png`;
  if (dice !== 1) {
    currentScore += dice;
    current0El.textContent = currentScore;
  }
});
