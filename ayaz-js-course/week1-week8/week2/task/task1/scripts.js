

/* TASK 2 = CALCULATE THE FOLLOWING PEOPLE'S AGES IN DOG YEARS

For the first 2 years of a dogs life, their age is equivalent to 10.5 years of a human
For every year after that, the year is equivalent of 4 human years.

Given the conditions above, calclate the ages of these people in dog years, based on their current age

THIS TIME - Write a utility function that will calulate a person's age in dog years. The function should not rely a specific person or a specific age in order to return it's values

Use this data for the new task:
*/


// so want to run one bit of code that will give all the outputs.


//funcation declaration - get a understanding
/*
    function greet(){
    console.log('hello')
    }
    greet();
*/

// funcation expression
/*
    let speak = function(){
    console.log('good day!');
    };
    speak();
*/



// arguments & parameters - data type can be added in brakets

/*
    let people = function(Name, Age){
    let dogAge = ((Age - 2) * 4 +21);
    console.log(`Hello, my name is ${Name} and my age is ${dogAge} in dog lifes.`);
    };

    people('ayaz', 30);
    people('anne', 62);
    people('rebecca', 21);
    people('robyn', 6);
    people('stan', 8);
/*


//got this to work but would like to call people using 1 function

/*
const people = [ 
    {name:'ayaz', age:30},
    {name:'anne', age:40},
    {name:'rebecca', age:50},
    {name:'robyn', age:60},
    {name:'stan', age:70},
];


let test = function(people.name, people.age){
    let dogAge = ((people.age - 2) * 4 +21);
console.log(`Hello, my name is ${people.name} and my age is ${dogAge} in dog lifes.`);
}
*/



///////////////// https://www.youtube.com/watch?v=FioqUnOGlq8


//Example of return
/*
    function age(humanAge) {
        return (humanAge -2) *4 +21;
        }
    let dogAge = age(30);

    console.log(`age is ${dogAge} in dog lifes.`);
*/


// thinking need to create a list maybe array with name and age  - /*


// let people = [ 
//         {name:'ayaz'},
//         {name:'anne'},
//         {name:'rebecca'},
//         {name:'robyn'},
//         {name:'stan'}
//     ];



//https://www.youtube.com/watch?v=FLGzeTHAbqQ&t=293s
//https://www.youtube.com/watch?v=RxjQgIhEPWE&t=117s

var car = {
    color: "red",
    speed: 200,
    drive: function (){return "drive";}
    
};

console.log(car);

var shoppingList = [
    "apple",
    "milk",
    "fruit",
];

console.log(shoppingList);



var cars = [
    {
        make: "honda",
        model: "civic",
        year: 2014,
        colour: "blue"
    },
    {
        make: "toyota",
        model: "camry",
        year: 2000,
        colour: "red"
    },
    {
        make: "ford",
        model: "mustang",
        year: 2005,
        colour: "black"
    }

]
for(i=0; i < cars.length; i++){
    if(cars[i].year < 2010) {
        console.log(cars[i].make + "," + cars[i].model)
    }
}

/* -------------------------- */


let people = [
    {
        name: "ayaz",
        age: 30,
    },
    {
        name: "anna",
        age: 62,
    },
    {
        name: "rebecca",
        age: 21,
    },
    {
        name: "robyn",
        age: 6,
    },
    {
        name: "stan",
        age: 8,
    }
]
    

for(i=0; i < people.length; i++){

    let dogAge = ((people[i].age  - 2) * 4 +21);
    console.log(dogAge)
        console.log(`Hello, my name is ` + people[i].name  + ` and my age is ` + people[i].age + ` in dog lifes.`) //${dogAge} but its not working
    }




