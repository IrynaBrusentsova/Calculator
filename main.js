"use strict";

let display = document.querySelector(".display");
console.log(display);

let buttons = Array.from(document.querySelectorAll(".button"));
console.log(buttons);
buttons.map((button) => {
  button.addEventListener("click", (e) => {
    switch (e.target.innerText) {
      case "AC":
        display.innerText = "0";
        break;
      case "=":
        display.innerText = eval(display.innerText);
        break;
      case "%":
        display.innerText = display.innerText / 100;
        break;
      case "+/-":
        display.innerText = "-";
        break;

      default:
        if (display.innerText === "0" && e.target.innerText !== ".") {
          display.innerText = e.target.innerText;
        } else {
          display.innerText += e.target.innerText;
        }
    }
  });
});
