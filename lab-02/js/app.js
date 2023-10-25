"use strict";

let visitorName = getName();

for (let i = 0; i < 2; i++) {
  if (visitorName === null || visitorName === "") {
    visitorName = prompt(
      "C'mon, give me your name for a customized experience!"
    );
  }
}

if (visitorName === null || visitorName === "") {
  alert(`Welcome to my page, friend`);
} else {
  alert(`Welcome to my page, ${visitorName}!`);
}

let sportResp = prompt("Did Rhett Play soccer? (Yes/No)")
  .charAt(0)
  .toUpperCase();

// console.log(sportResp);

if (sportResp === "Y") {
  alert("That's correct, she did play soccer!");
  //   console.log('That\'s correct, she did play soccer!');
} else {
  alert("Actually, that's incorrect, she did play soccer.");
  //   console.log('Actually, that\'s incorrect, she did play soccer.');
}

let schoolResp = prompt("Did Rhett go to school for engineering? (Yes/No)")
  .charAt(0)
  .toUpperCase();

if (schoolResp === "N") {
  alert("That's correct, she didn't study engineering.");
  // console.log("That's correct, she didn't study engineering.");
} else {
  alert("Actually, that's incorrect, she did not study engineering.");
  // console.log("Actually, that's incorrect, she did not study engineering.");
}

let militaryResp = prompt("Did Rhett service in the military? (Yes/No)")
  .charAt(0)
  .toUpperCase();

if (militaryResp === "Y") {
  alert("That's correct, she did serve in the Air Force!");
  // console.log("That's correct, she did serve in the Air Force!");
} else {
  alert("Actually, that's incorrect, she did serve in the military.");
  // console.log("Actually, that's incorrect, she did serve in the military.");
}

let oceanResp = prompt("Does Rhett enjoy the ocean? (Yes/No)")
  .charAt(0)
  .toUpperCase();

if (oceanResp === "Y") {
  alert("That's correct, she absolutely loves the ocean!");
  // console.log("That's correct, she absolutely loves the ocean!");
} else {
  alert("Actually, that's incorrect, she does love the ocean");
  // console.log("Actually, that's incorrect, she does love the ocean");
}

let hometownResp = prompt("Was Rhett's hometown Detroit? (Yes/No)")
  .charAt(0)
  .toUpperCase();

if (hometownResp === "N") {
  alert("That's correct, she's not from Detroit, she's from San Diego.");
  // console.log("That's correct, she's not from Detroit, she's from San Diego.");
} else {
  alert(
    "Actually, that's incorrect, she's not from Detroit, she's from San Diego."
  );
  // console.log("Actually, that's incorrect, she's not from Detroit, she's from San Diego.");
}

function getName() {
  let userName = prompt("Hi, what is your name?");
  return userName;
}

if (visitorName === null || visitorName === "") {
  alert(`Thanks for playing, friend`);
} else {
  alert(`Thanks for playing, ${visitorName}!`);
}
