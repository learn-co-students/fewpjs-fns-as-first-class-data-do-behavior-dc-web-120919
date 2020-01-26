/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(time) {
const hours = parseInt(time, 10);
if (hours < 12) return "Good Morning"
if (hours > 17) return "Good Evening"
return "Good Afternoon"
}
/* Write your implementation of displayMessage() */
function displayMessage(message) {
document.getElementById("greeting").innerText = message;
}