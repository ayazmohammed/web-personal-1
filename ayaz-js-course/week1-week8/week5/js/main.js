// Functions
// A set of instructions that you can call at any time within your application. It has a job (or a function) and doesn't rely on knowing the rest of your application.

// MDN - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions

function myFuncName() {

}

var name = "Ollie";
var age = 31;

function readOutUser(personName, personAge) {
    return personName + " is " + personAge;
}

var output = readOutUser(name, age);

console.log(output);

// Scope
// Global and local scope

// MDN - https://developer.mozilla.org/en-US/docs/Glossary/Scope

var globalVar = "Hello World";

function localScope() {
    var localScopeVar = "Hello local";

    console.log(globalVar);
    console.log(localScopeVar);
}

localScope();

// Arrays

// MDN - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

var myArray = [true, "Ayaz", 30];

console.log(myArray[2]);

myArray.push("Ollie");

console.log(myArray[3]);

console.log(myArray.length);

// For Loops

// LOOPS MDN - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration

// MDN - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for

for (var i = 0; i < myArray.length; i++) {

    console.log(myArray[i]);

}

// While loop

// MDN - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while

var count = 0;

while (count < myArray.length) {

    console.log(myArray[count]);

    count++;
}

// Objects

// MDN - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object

var person = {
    'name': 'Ayaz',
    'age': 30,
    'hair': 'black'
}

console.log(person.age);

person.hair = 'yellow';

console.log(person.hair);

var people = [ 
    {
        'name': 'Ayaz',
        'age': 30,
        'hair': 'black'
    },
    {
        'name': 'Ollie',
        'age': 31,
        'hair': 'brown'
    } 
];

console.log( people[1].name );

// DOM - Document Object Model

// MDN - https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model

// document object
// window object

//Event listerners

// MDN - https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events

document.addEventListener('click', function() {
    console.log("Document was clicked");
});

var button = document.getElementsByTagName('button')[0];

button.addEventListener('click', function() {
    console.log("Button was clicked");
});

// Requests

// MDN - https://developer.mozilla.org/en-US/docs/Web/API/Request

var peopleData;

var request = new XMLHttpRequest();
request.open('GET', '/people.json', true);

request.onload = function() {
  if (this.status >= 200 && this.status < 400) {
    // Success!
    var data = JSON.parse(this.response);

    peopleData = data;

    console.log(peopleData);
  } else {
    // We reached our target server, but it returned an error
  }
};

request.onerror = function() {
  // There was a connection error of some sort
};

request.send();

// TASK - Build a to do list app. 
// The app in the very least should do the following;

// - Show a list of items on the user's to do list
// - Allow the user to add, delete and edit items to the list
// - Allow the user to mark items as complete (different from delete) and add them to a second "Completed List"

// You can use any design you want for this as long as it is obvious how it can be used. Data does not persist (if the page is refreshed it can start again)
// but you can read up on local storage and cookies here - https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API 
// and https://developer.mozilla.org/en-US/docs/Web/API/Document/cookie and optionally try to keep the list in memory. It will help you with the next task.
