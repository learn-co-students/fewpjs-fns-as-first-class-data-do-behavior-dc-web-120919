/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}
/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(timeInputString){
  
  let inputAsInteger = timeInputString.split(':');
  let greeting;
  // 8:40 should be [8, 40]
  // 24h clock 
  if (inputAsInteger[0] < 12) {
    greeting = "Good Morning";
  } else if (inputAsInteger[0] > 17) {
    greeting =  "Good Evening";
  } else {
    greeting = "Good Afternoon";
  }
  
  return greeting;
}

/* Write your implementation of displayMessage() */

function displayMessage(greetingMessage){
  document.getElementById('greeting').innerText = greetingMessage;
}