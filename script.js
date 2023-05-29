"use strict";

const submitBtn = document.querySelector(".submit--btn");
const dismissBtn = document.querySelector(".dismiss--btn");

const subBox = document.querySelector(".subscribe-box");
const subSuc = document.querySelector(".sub-success");

/* BUTTONS HANDLING */

submitBtn.addEventListener("click", function (e) {
  e.preventDefault();
});

dismissBtn.addEventListener("click", function () {
  window.location.reload();
});

/* EMAIL VALIDATION */

function validateEmailAddress(input) {
  let validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (!input.value.match(validRegex)) {
    /* CHANGING INPUT FIELD COLOR */

    document.getElementById("invalid-email").style.display = "inline-block";

    document.getElementById("email-input").style.borderColor =
      "hsl(4, 100%, 67%)";

    document.getElementById("email-input").style.color = "hsl(4, 100%, 67%)";

    document.getElementById("email-input").style.backgroundColor =
      "hsl(4, 100%, 67%,0.15)";
  } else {
    /* TOGGLE THE SUCCESS SCREEN */
    subBox.classList.toggle("hidden");
    subSuc.classList.toggle("hidden");
  }
}
