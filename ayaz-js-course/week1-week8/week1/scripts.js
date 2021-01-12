// Javascript

"http:// - https://" // Protocol
"google.com" - // Hostname
"/games/dav-vinci/" // URL Path
"?gameid=1" // Query String

Console
console.log("Hello World"); // MDN - https://developer.mozilla.org/en-US/docs/Web/API/Console

// One line comment
/* Multi
Line
Connemt */

//Primitive Data Types
true; // Boolean
'Hello'; // String are always in speechmarks or inverted commas 
233; // Number
null; // Null
undefined; // undefined
//Symbol & object

var name = 'Ollie'; // Can newly declared in the same scope
console.log(name);
name = 'Jeff';
console.log(name);

var myVariable; // Initilizing variable without value - undefined

let name2 = 'Ollie'; // Only exists in current scope 
console.log(name);

const name3 = 'Ollie'; // Can't be changed

var myVariableName = "this"; // Use camel case to name

// Variable names can't start with numbers
// Reserver keywords - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#Keywords

MATHs
let myAge = 30; // Variable set
console.log(myAge);
myAge = myAge + 5; // Math Addition (30 + 5)
console.log(myAge);
myAge = myAge - 5; // Math subtraction (35 - 5)
console.log(myAge);
myAge = myAge * 3; // Math multiply (30 x 3)
console.log(myAge);
myAge = myAge / 3; // Math divide (90 / 3)
console.log(myAge);
myAge = myAge % 3; // Math remainders (30 / 3) = 0
console.log(myAge);

//Short hand version of maths
let newAge = 30;
console.log(newAge);
newAge += 5; // Same as writing newAge = newAge + 5;
console.log(newAge);
newAge -= 5; // Same as writing newAge = newAge - 5;
console.log(newAge);
newAge *= 5; // Same as writing newAge = newAge * 5;
console.log(newAge);
newAge /= 5; // Same as writing newAge = newAge / 5;
console.log(newAge);
newAge++; // Same as writing newAge += 1;
console.log(newAge);
newAge--; // Same as writing newAge -= 1;
console.log(newAge);

//Math built in object - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
console.log(Math.round()); // Returns a random number between 0 & 1
console.log(Math.random() * 10); //Returns a random number between 0 & 10
console.log(Math.round(Math.random() * 10)); //Returns a random number between 0 & 10 and rounds it up to the neares number

//Number built in object
let num = "2.5";
console.log(Number.isInteger(num));
console.log(Number.parseFloat(num));

console.log(typeof num); // Tells you the datatype of your property

let olliesAge = 30;
let olliesName = "Ollie";

var concat = "Hello, my name is " + olliesName + " and my age is " + olliesAge; // Concatentation
console.log(concat);
var newConcat = `Hello, my name is ${olliesName} and my age is ${olliesAge}`; // Modern concatenation- String Interpolation
console.log(newConcat);

//String properties - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#
let myStr = "This is my amazing string";
console.log(myStr);
console.log(myStr.length); // Get characters in string
console.log(myStr.toUpperCase()); //Convert to uppercase
console.log(myStr.toLowerCase()); //Convert to lowercase
console.log(myStr.trim()); //Remove whitespace
console.log(myStr.startsWith('T')); //Check if string starts with argument
console.log(myStr.replace("amazing", "fanstastic")); //replace words in sentence



//If condistion statement - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else
if (5 + 5 === 10) { // Condition goes in brackets, code goes in braces
    console.log("5 + 5 does equal 10");
}


//Comparison operators
// one = - sets a value - THIS IS ONLY FOR SETTING VALUES NOT FOR CHECKING CONDITIONS
// two == - checks a value matches
// three === - checks a value match and also check that the data types same
// !== - is NOT equal to

if (5 !== 6) {
    console.log("6 does not equal 6 6");
}

if (6 <= 6) {
    console.log("5 is less than 6");
}

// < - less than
// > - more than
// <= - less than or equal to
// >= - more than or equeal to

//Logical operators
// && - means AND 
let numberToCheck = 7;
if (numberToCheck < 10 && numberToCheck > 6) {
    console.log("Success");
}

// || - means OR
let numberToChec = 7;
if (numberToChec < 5 || numberToCheck > 6) {
    console.log("Success");
}

// Truth & Falsy
//Returns false if person is null, undefined, NaN (Not a Number), and empty string
if (true) {
    //It'll run
}

let person = null;

if (person !== null) {
    // Write stuff out about person
}

if (person) { // if person is not null
    // Action if person is not null
}

if (!person) { //If person is false do this or null
    //Do this action
}

//Ternary operators - if condition in shorthand

let person = {
    "name": "Jess",
    "age": 25
};

//Orginal version
let name;

if (person.name === "Jess") {
    name = person.name;
}

// Shorthand version condition followed by question mark, followed by colon for else statement
let name = person.name === "Jess" ? person.Name : "Brad";

// if/ else/ else if = you can use multiple conditions to check different things in else if()
if (2 === 4) {
    // Do this
} else if (2 === 3) {
    // Then do this 
} else {
    // Then do this as a fallback
}

let menuChoice = "Steak";
let price;

if (menuChoice === "Steak") {
    price = "£15";
} else if (menuChoice === "Burger") {
    price = "£10";
}

// Switch statement - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch

let price;

switch (price) {
    case "Steak":

        price = "£15";

        break;
    case "Burger":

        price = "£10";

        break;
    case "Salad":
    case "Mushrooms":
        price = "£4";
        break;
    default:
        //Fallback price here
        price = "£25";
        break;
}

console.log(price);

/* TASK 1 = CALCULATE THE FOLLOWING PEOPLE'S AGES IN DOG YEARS

For the first 2 years of a dogs life, their age is equivalent to 10.5 years of a human
For every year after that, the year is equivalent of 4 human years.

Given the conditions above, calclate the ages of these people in dog years, based on their current age

*/

let ayaz = 30;
let anne = 62;
let rebecca = 21;
let robyn = 6;
let stan = 8;

/* TASK 2 = MAGIC 8 BALL GAME

Randomise a selection from the amount of options below. Pick that options and log it to the console with the 8 ball prediction. Add some sentences arounf the answer to display to display it like a real ball. 

*/

let option1 = "Death";
let option2 = "Lottery";
let option3 = "Buy House";
let option4 = "Famouse";
let option5 = "Illness";
let option6 = "Embarrasment";
let option7 = "Power";
let option8 = "Better looking"


/* TASK 3 - THE DICE GAME

The game is to see who will roll the highest total of dice. 

Randomise dice throws, for 4 people playing the game. The 4 people get to roll the dice 3 times in a row, and the winner is the one with the highest total of their 3 throws.

Show all players rolls, then show all player's total, then show the winner of the game.

*/