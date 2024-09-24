// define initial counter value
let count = 0;

// select elements
const counterDisplay = document.getElementById("counter");
const addNum = document.getElementById("addBtn");
const subtractNum = document.getElementById("subtractBtn");

//function to update display
function updateDisplay() {
  counterDisplay.textContent = count;
}

// function to add 1 to the counter
function add() {
  count++;
  updateDisplay();
}

function subtract() {
  count--;
  updateDisplay();
}

updateDisplay();
