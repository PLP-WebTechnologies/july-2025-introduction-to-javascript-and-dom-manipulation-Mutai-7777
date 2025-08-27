// ============================
// Part 1: Basics
// ============================

// Variables and conditionals
let userName = prompt("Enter your name:");
let hour = new Date().getHours();
let greeting = "";

if (hour < 12) {
  greeting = "Good morning";
} else if (hour < 18) {
  greeting = "Good afternoon";
} else {
  greeting = "Good evening";
}

// Output to the webpage
document.getElementById("greeting").textContent = `${greeting}, ${userName}!`;


// Part 2: Functions (Updated)
// ============================

// Function to multiply two numbers
function multiplyNumbers(a, b) {
  return a * b;
}

// Function to read inputs and display result
function showTotal() {
  let n1 = parseFloat(document.getElementById("num1").value);
  let n2 = parseFloat(document.getElementById("num2").value);

  if (isNaN(n1) || isNaN(n2)) {
    document.getElementById("totalResult").textContent = "⚠️ Please enter valid numbers!";
  } else {
    let result = multiplyNumbers(n1, n2);
    document.getElementById("totalResult").textContent = `${n1} × ${n2} = ${result}`;
  }
}



// ============================
// Part 3: Loops
// ============================

// Loop example: countdown
function showCountdown() {
  let list = document.getElementById("countdownList");
  list.innerHTML = ""; // clear before starting

  for (let i = 5; i >= 1; i--) {
    let li = document.createElement("li");
    li.textContent = i;
    list.appendChild(li);
  }
}


// ============================
// Part 4: DOM Manipulation
// ============================

// Toggle highlight class on text
document.getElementById("toggleBtn").addEventListener("click", function() {
  document.getElementById("toggleText").classList.toggle("highlight");
});
