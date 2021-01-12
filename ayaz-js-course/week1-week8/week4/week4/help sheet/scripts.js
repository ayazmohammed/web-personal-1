
// NEW WAY

// var options = ['rock', 'paper', 'scissors'];

// var playerOneScore = 0;
// var playerTwoScore = 0;

// var numOfRounds = 5;

// for (var i = 1; i < numOfRounds + 1; i++) {

//     console.log('Starting round ' + i);

//     var playerOneSelection = options[Math.floor(Math.random() * 3) + 1];
//     var playerTwoSelection = options[Math.floor(Math.random() * 3) + 1];

//     if (playerOneSelection == playerOneSelection) {
//         // No winners
//     }

//     // IF statement here

//     playerOneScore++;

// }

// //Toatl of each round
// console.log(`TOTAL`)
// console.log(`TOTAL SCORE PLAYER ONE ${playerOneScore}`)
// console.log(`TOTAL SCORE PLAYER ONE ${playerTwoScore}`)


// Functions

function addNumbers(number1, number2) {
    return number1 + number2;
}

let total = addNumbers(5, 2);

console.log(total);

let person = function(name, age) {
    console.log(`${name} age is ${age}`);
}

person('ollie',30);

function personSentence(name, age) {
    return `${name}'s age is ${age}`;
}

var sentence = personSentence('ollie', 30);

console.log(sentence);

// Objects

let person1 = {
    name: 'Ayaz',
    age: 30,
    hair: 'black'
}

person1.name = 'Ollie';

console.log(person1.name);

person1.age += 10;

console.log(person1.age);

// Arrays

let car = [
    {
        type: 'Ford',
        year: 2015,
        color: 'black'
    },
    {
        type: 'Rover',
        year: 2008,
        color: 'purple'
    }
]

console.log(car[1].type);

let myArr = []; // Empty array/list

console.log(myArr[0]);

// let people = [
//     'ollie', 
//     'jack', 
//     'dave', 
//     'ayaz'
// ]

let ages = [
    30,
    30,
    50,
    30
]

let people = [
    2012,
    {
        name: 'Ollie',
        age: 30
    },
    {
        name: 'Ayaz',
        age: 30
    },
    {
        name: 'Jack',
        age: 30
    },
    {
        name: 'Dave',
        age: 50
    }
];

function randomPerson() {
    let randomiser = Math.floor(Math.random() * 3) + 1;

    var person = people[randomiser];

    
    
    //console.log(person);

}

randomPerson();

var choirce = prompt('Higher or lower?');

console.log(choirce);