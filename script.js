// Puts all buttons into an array called buttons
const buttons = document.querySelectorAll("button");

// puts .calcScreen into an array called display
const display = document.querySelector(".calcScreen");

// Iterates through buttons array and add and event listener (click) to each button.
buttons.forEach(function (button) {
  button.addEventListener("click", calculate);
});

// Calculate function
function calculate(event) {
  // Clicked button value
  const clickedButtonValue = event.target.value;

  if (clickedButtonValue === "=") {
    // Calculate if display is not empty
    if (display.value !== "") {
      // Calculate and display answer, eval is a security risk!
      display.value = eval(display.value);
    }
  } else if (clickedButtonValue === "C") {
    // Clear display when C is pressed
    display.value = "";
  } else {
    // Otherwise concatenate value to display
    display.value += clickedButtonValue;
  }
}
