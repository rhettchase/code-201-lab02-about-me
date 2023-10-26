"use strict";

let correctAnswerCount = 0;

// const YesNo = ["Yes", "No"]

const places = [
  ["a", "New Zealand"],
  ["b", "Thailand"],
  ["c", "Switzerland"],
  ["d", "Tanzania"],
  ["e", "Yellowstone"],
  ["f", "Australia"],
];

function getName() {
  let userName = prompt("Hi, what is your name?");
  return userName;
}

function welcomeMessage() {
  for (let i = 0; i < 2; i++) {
    if (userName === null || userName === "") {
      userName = prompt(
        "C'mon, give me your name for a customized game experience!"
      );
    }
  }
  if (userName === null || userName === "") {
    alert(`Welcome to my page, friend`);
  } else {
    alert(`Welcome to my page, ${userName}!`);
  }
}



// bio question function

function bioQuestion(i) {
  let response = prompt(questions[i]).charAt(0).toUpperCase();

  if (response === answers[i]) {
    alert("That's correct!");
    correctAnswerCount++;
  } else {
    alert("Actually, that's incorrect.");
  }
  // console.log(answers[i]);
}
// stretch goals
const questions = [
  "Did Rhett Play soccer? (Yes/No)",
  "Did Rhett go to school for engineering? (Yes/No)",
  "Did Rhett service in the military? (Yes/No)",
  "Does Rhett enjoy the ocean? (Yes/No)",
  "Was Rhett's hometown Detroit? (Yes/No)",
  "Let's play a game! Guess a number from 1 - 10",
  "Which of the following places has Rhett NOT visited?",
];

const answers = ["Y", "N", "Y", "Y", "N", 7, "d"];

// ask user for name
let userName = getName();

// customized welcome message with user's name
welcomeMessage();

// yes/no questions based on bio

bioQuestion(0);
bioQuestion(1);
bioQuestion(2);
bioQuestion(3);
bioQuestion(4);

// number game function call
numberGame(5);

// multiple choice travel question call
favoriteTravel(6);

// say goodbye to user and give them number of correct answers
countAnswers();
goodbyeMessage();

// console.log(correctAnswerCount);

// question 6 - guess a number
function numberGame(i) {
  let attempt;
  let numberGuess;

  for (attempt = 1; attempt <= 4; attempt++) {
    numberGuess = parseInt(prompt(questions[i]));
    if (numberGuess === answers[i]) {
      alert("You guessed right, that's the correct answer!");
      correctAnswerCount++;
      break;
    } else if (numberGuess < answers[i]) {
      alert("You're too low");
    } else if (numberGuess > answers[i]) {
      alert("You're too high");
    } else {
      alert("Please make sure to enter a number");
    }
    // console.log(attempt);
  }

  if (numberGuess === answers[i]) {
    alert(
      `Congrats, you solved this in ${attempt} attempt(s). The correct answer was ${answers[i]}`
    );
  } else {
    alert(`The correct answer was ${answers[i]}. Better luck next time!`);
  }
}

// question 7 - multiple choice

function favoriteTravel(j) {
  let placeGuess;
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
    console.log(placeGuess);
    if (placeGuess === answers[j]) {
      alert("That's the correct answer, Rhett has never visited Tanzania");
      correctAnswerCount++;
      break;
    } else {
      alert("That's incorrect");
      console.log(i);
    }
  }
}

function countAnswers() {
  alert(`You have a total of ${correctAnswerCount} correct answers`);
}

// console.log(`Number of correct answers: ${correctAnswerCount}`);

// say goodbye to user

function goodbyeMessage() {
  if (userName === null || userName === "") {
    alert(`Thanks for playing, friend`);
  } else {
    alert(`Thanks for playing, ${userName}!`);
  }
}



/*---------------------- OLD CODE BELOW (REFACTORED INTO FUNCTIONS)
------------------------------------------------------------------ */

/*

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
let sportResp = prompt(bioAnswers[0][0]).charAt(0).toUpperCase();

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
let schoolResp = prompt(bioAnswers[1][0]).charAt(0).toUpperCase();

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
let militaryResp = prompt(bioAnswers[2][0]).charAt(0).toUpperCase();

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
let oceanResp = prompt(bioAnswers[3][0]).charAt(0).toUpperCase();

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
let hometownResp = prompt(bioAnswers[4][0]).charAt(0).toUpperCase();

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
let placeAnswer = "d";

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



*/
