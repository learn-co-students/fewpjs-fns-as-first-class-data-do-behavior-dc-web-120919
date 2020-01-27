/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
 
// one argument, a String which specifies the 24-hour time in the format HH:
// if the tie is earlier than 12pm 
// return good morning 
// 12pm and 5pm, return "Good Afternoon"
// later than 5pm, return "Good Evening".

function greet(time){
  const hour = parseInt(time, 10);
  if (hour > 17 ) return "Good Evening"
  if (hour < 12) return "Good Morning"
  return "Good Afternoon"
}
/* Write your implementation of displayMessage() */
 function displayMessage(string){
   document.getElementById("greeting").innerText = string;
 }