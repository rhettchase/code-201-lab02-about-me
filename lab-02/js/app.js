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

// stretch goals
const bioAnswers = [
  ["Did Rhett Play soccer? (Yes/No)", "Y"],
  ["Did Rhett go to school for engineering? (Yes/No)", "N"],
  ["Did Rhett service in the military? (Yes/No)", "Y"],
  ["Does Rhett enjoy the ocean? (Yes/No)", "Y"],
  ["Was Rhett's hometown Detroit? (Yes/No)", "N"]
];

// question 1
let sportResp = prompt(bioAnswers[0][0])
  .charAt(0)
  .toUpperCase();

if (sportResp === bioAnswers[0][1]) {
  alert("That's correct, she did play soccer!");
  correctAnswerCount++;
  //   console.log('That\'s correct, she did play soccer!');
} else {
  alert("Actually, that's incorrect, she did play soccer.");
  //   console.log('Actually, that\'s incorrect, she did play soccer.');
}

bioAnswers[0].push(sportResp);


// question 2
let schoolResp = prompt(bioAnswers[1][0])
  .charAt(0)
  .toUpperCase();

if (schoolResp === bioAnswers[1][1]) {
  alert("That's correct, she didn't study engineering.");
  correctAnswerCount++;
  // console.log("That's correct, she didn't study engineering.");
} else {
  alert("Actually, that's incorrect, she did not study engineering.");
  // console.log("Actually, that's incorrect, she did not study engineering.");
}

bioAnswers[1].push(schoolResp);

// question 3
let militaryResp = prompt(bioAnswers[2][0])
  .charAt(0)
  .toUpperCase();

if (militaryResp === bioAnswers[2][1]) {
  alert("That's correct, she did serve in the Air Force!");
  correctAnswerCount++;
  // console.log("That's correct, she did serve in the Air Force!");
} else {
  alert("Actually, that's incorrect, she did serve in the military.");
  // console.log("Actually, that's incorrect, she did serve in the military.");
}

bioAnswers[2].push(schoolResp);

// question 4
let oceanResp = prompt(bioAnswers[3][0])
  .charAt(0)
  .toUpperCase();

if (oceanResp === bioAnswers[3][1]) {
  alert("That's correct, she absolutely loves the ocean!");
  correctAnswerCount++;
  // console.log("That's correct, she absolutely loves the ocean!");
} else {
  alert("Actually, that's incorrect, she does love the ocean");
  // console.log("Actually, that's incorrect, she does love the ocean");
}

bioAnswers[3].push(schoolResp);

// question 5
let hometownResp = prompt(bioAnswers[4][0])
  .charAt(0)
  .toUpperCase();

if (hometownResp === bioAnswers[4][1]) {
  alert("That's correct, she's not from Detroit, she's from San Diego.");
  correctAnswerCount++;
  // console.log("That's correct, she's not from Detroit, she's from San Diego.");
} else {
  alert(
    "Actually, that's incorrect, she's not from Detroit, she's from San Diego."
  );
  // console.log("Actually, that's incorrect, she's not from Detroit, she's from San Diego.");
}

bioAnswers[4].push(schoolResp);


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
  } else if (numberGuess > answer) {
    alert("You're too high");
  } else {
    alert("Please make sure to enter a number");
  }
  // console.log(attempt);
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
