// Create a digital clock that shows hours, minutes and seconds
// that updates like a real clock. Map out the logical steps you need to take 
// in order to get the date and then format it to update the UI. 

// The UI is already done for you, and you should not require any changes to the HTML
// or CSS. Everything should be achieved from this one file. You may use the following resource
// to help you - https://www.w3schools.com/js/. This is to look up methods or features of JS that
// you don't know off the top of your head. 

// Don't try to Google "How to make a clock in javascript" or anything similar as the likely hood
// is you will find the answer and not understand the implementation. This task is about taking logical steps
// to complete the task so that you understand each step of the process. This project will be reviewed by me or 
// Jack on a weekly basis. Use those sessions to show your progress and ask questions on things you are struggling with.


// function cta(){
//   document.getElementById("clock").classList.toggle("active")
// };



// clock 1
var clocks = document.querySelectorAll('.clock');
// var totalClocks = clocks.length;
var clock1 = clocks[0]; //used the clocks to get the classes and then can chose which class to target [o] - first one.
var clock2 = clocks[1];
var clock3 = clocks[2];


function startClock1() {
  var date = new Date(); //creates a new date object with the current date and time.

  var seconds = date.getSeconds(); //0-59.

  var minutes = date.getMinutes(); //0-59.

  var hours = date.getHours()-5; //0-23.

  clock1.innerHTML = hours + ":" + minutes + ":" + seconds;

}


function startClock2() {
  var date = new Date(); //creates a new date object with the current date and time.

  var seconds = date.getSeconds(); //0-59.

  var minutes = date.getMinutes(); //0-59.

  var hours = date.getHours(); //0-23.

  clock2.innerHTML = hours + ":" + minutes + ":" + seconds;

}

function startClock3() {
  var date = new Date(); //creates a new date object with the current date and time.

  var seconds = date.getSeconds(); //0-59.

  var minutes = date.getMinutes(); //0-59.

  var hours = date.getHours()+8; //0-23.

  clock3.innerHTML = hours + ":" + minutes + ":" + seconds;

}

setInterval(startClock1, 1000); //1000 ms = 1 second.
setInterval(startClock2, 1000); //1000 ms = 1 second.
setInterval(startClock3, 1000); //1000 ms = 1 second.