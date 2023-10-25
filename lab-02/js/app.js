"use strict";

let correctAnswerCount = 0;


function getName() {
  let userName = prompt("Hi, what is your name?");
  return userName;
}

// get user name question
let visitorName = getName();

for (let i = 0; i < 2; i++) {
  if (visitorName === null || visitorName === "") {
    visitorName = prompt(
      "C'mon, give me your name for a customized game experience!"
    );
  }
}

if (visitorName === null || visitorName === "") {
  alert(`Welcome to my page, friend`);
} else {
  alert(`Welcome to my page, ${visitorName}!`);
}

// question 1
let sportResp = prompt("Did Rhett Play soccer? (Yes/No)")
  .charAt(0)
  .toUpperCase();

if (sportResp === "Y") {
  alert("That's correct, she did play soccer!");
  correctAnswerCount++;
  //   console.log('That\'s correct, she did play soccer!');
} else {
  alert("Actually, that's incorrect, she did play soccer.");
  //   console.log('Actually, that\'s incorrect, she did play soccer.');
}

// question 2
let schoolResp = prompt("Did Rhett go to school for engineering? (Yes/No)")
  .charAt(0)
  .toUpperCase();

if (schoolResp === "N") {
  alert("That's correct, she didn't study engineering.");
  correctAnswerCount++;
  // console.log("That's correct, she didn't study engineering.");
} else {
  alert("Actually, that's incorrect, she did not study engineering.");
  // console.log("Actually, that's incorrect, she did not study engineering.");
}

// question 3
let militaryResp = prompt("Did Rhett service in the military? (Yes/No)")
  .charAt(0)
  .toUpperCase();

if (militaryResp === "Y") {
  alert("That's correct, she did serve in the Air Force!");
  correctAnswerCount++;
  // console.log("That's correct, she did serve in the Air Force!");
} else {
  alert("Actually, that's incorrect, she did serve in the military.");
  // console.log("Actually, that's incorrect, she did serve in the military.");
}

// question 4
let oceanResp = prompt("Does Rhett enjoy the ocean? (Yes/No)")
  .charAt(0)
  .toUpperCase();

if (oceanResp === "Y") {
  alert("That's correct, she absolutely loves the ocean!");
  correctAnswerCount++;
  // console.log("That's correct, she absolutely loves the ocean!");
} else {
  alert("Actually, that's incorrect, she does love the ocean");
  // console.log("Actually, that's incorrect, she does love the ocean");
}

// question 5
let hometownResp = prompt("Was Rhett's hometown Detroit? (Yes/No)")
  .charAt(0)
  .toUpperCase();

if (hometownResp === "N") {
  alert("That's correct, she's not from Detroit, she's from San Diego.");
  correctAnswerCount++;
  // console.log("That's correct, she's not from Detroit, she's from San Diego.");
} else {
  alert(
    "Actually, that's incorrect, she's not from Detroit, she's from San Diego."
  );
  // console.log("Actually, that's incorrect, she's not from Detroit, she's from San Diego.");
}


// question 6 - guess a number
let answer = 7;
let attempt;
let numberGuess;

for (attempt = 1; attempt <= 4; attempt++) {
  numberGuess = parseInt(
    prompt("Let's play a game! Guess a number from 1 - 10")
  );
  if (numberGuess === answer) {
    alert("You guessed right, that's the correct answer!");
    correctAnswerCount++;
    break;
  } else if (numberGuess < answer) {
    alert("You're too low");
  } else alert("You're too high");
  console.log(attempt);
}

if (numberGuess === answer) {
  alert(`Congrats, you solved this in ${attempt} attempt(s). The correct answer was ${answer}`);
} else {
  alert(`The correct answer was ${answer}. Better luck next time!`);
}


// question 7 - multiple choice
let places = [
  ["a", "New Zealand"],
  ["b", "Thailand"],
  ["c", "Switzerland"],
  ["d", "Tanzania"],
  ["e", "Yellowstone"],
  ["f", "Australia"],
];
let placeGuess;
let placeAnswer = 'd';

for (let i = 1; i <= 6; i++) {
  placeGuess = prompt(
    "Which of the following places has Rhett NOT visited?" +
      " " +
      places[0][0] +
      ": " +
      places[0][1] +
      ", " +
      places[1][0] +
      ": " +
      places[1][1] +
      ", " +
      places[2][0] +
      ": " +
      places[2][1] +
      ", " +
      places[3][0] +
      ": " +
      places[3][1] +
      ", " +
      places[4][0] +
      ": " +
      places[4][1] +
      ", " +
      places[5][0] +
      ": " +
      places[5][1] +
      ". Select a - f."
  ).toLowerCase();
  if (placeGuess === placeAnswer) {
    alert("That's the correct answer, Rhett has never visited Tanzania");
    correctAnswerCount++;
    break;
  } else {
    alert("That's incorrect");
    // console.log(i);
  }
}

alert(`You have a total of ${correctAnswerCount} correct answers`);
console.log(`Number of correct answers: ${correctAnswerCount}`);



// say goodbye to user
if (visitorName === null || visitorName === "") {
  alert(`Thanks for playing, friend`);
} else {
  alert(`Thanks for playing, ${visitorName}!`);
}

