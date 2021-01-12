let global = 'outside';

function example(name){
    // let local = 'inside';
    console.log(`hello im ${name}`);
}

example('ollie');

var names = ['ayaz', 'jack', 'ollie', 'g', 'dave']

for (let i = 0; names.length > i ; i++){
    
}


/////


function example(name) {
	console.log("hello I'm " + name);
}


var people = ['ollie', 'jack', 'ayaz'];


for (var i = 0; i < people.length; i++) {

	example( people[i] );

}

// will not run until loop is finished

let ollie = {
	'hair': 'Black',
	'hands': 2,
}

let button = document.querySelector('button');

button.addEventListener('click', function() {

});

function addEventListener(event, thingToThenDo) {

}

button.addEventListener(
	'click',
	function () {
		// Do stuff here

	}
);

// DOM  - Document Object Model
// Source code converted to Document Object Model

// Lots of types of requests  - HTTP requests - 
// GET request - request information from server
// POST request - Send information to the server and get a response back

var request = new XMLHttpRequest();

request.open('GET', '/people.json', true);

request.onload = function() {
  if (this.status >= 200 && this.status < 400) {
    // Success!
	var data = JSON.parse(this.response);
	
  } else {
    // We reached our target server, but it returned an error

  }
};

request.onerror = function() {
  // There was a connection error of some sort
};

request.send();

// Fetch

var data = {
	email: 'olly@',
	password: 'mypassword'
}

const response = await fetch('/people.json', {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    headers: {
	  'Content-Type': 'application/json',
	  'Accept': 'application/json'
    },
    body: JSON.stringify(data) // body data type must match "Content-Type" header
});

var data = response.json();

{
	name: 'ollie'
}

console.log(data.name);



