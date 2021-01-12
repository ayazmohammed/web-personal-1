// 7 data types
/*
1 - string
2 - number
3 - boolean
4 - null
5 - undefined
6 - symbol
7 - object

3 variable types - let, const, var

*/

/* 
    string method
*/

var string = 'my name is';
var name = ' ayaz';
let together = string + name + 'im 31 today';
console.log(together.toUpperCase());

/* 
    maths - BIDMAS

    >greather then
    <less then
    <= less then or equal
    >= greather then
    == check same
    === chack exactly the same
    !== not equal to
*/
let age = 30;
age = age + 10;
console.log(age)
// shorthand
age += 20;
console.log(age)
// math object
let livingRoom = 2.3;
livingRoom  = Math.floor(livingRoom);
livingRoom = Math.round(Math.random() * 100);
console.log(livingRoom);


/* 
    function
*/
function userName(firstName) {
    console.log('hi my name is' + firstName)
}
userName(' AyazM');

/* 
    array
*/

let employees = ['josh', 'kim', 'olly', 'dave'];

// change the name
employees[1] = 'jess';
console.log(employees)

// ouput array with employees of the month string
function employeesOFTheYear(){
    console.log(employees[i] + ' is employee of the month')
}

for(i=0; i < employees.length; i++){
    employeesOFTheYear();
}

// output scores above 5
let scores = [10, 6, 3, 8, 9, 2, 3]

console.log(scores);

function scoresAboveFive(){
    if(scores[i] > 5){
        console.log(scores[i])
    }
}

for(i = 0; i < scores.length; i++){
    scoresAboveFive()
}


//objects inside array
let students = 
    [
        {
            name: 'josh',
            age: 27,
            test: 'passed'
        },
        {
            name: 'kim', 
            age: 23,
            test: 'failed'
        },
        {
            name: 'olly', 
            age: 28,
            test: 'failed'
        },
        {
            name: 'dave',
            age: 20,
            test: 'passed'
        }
    ];

/// CHANGE NAME OF KIM TO JESS

students[1].name = 'jess';

/// OUPUT EVERYONE OVER 25

function age25(){
    if(students[i].age >= 25){
        console.log(students[i].name + ' is ' + students[i].age + ' years old')
    }

}

for(i=0; i < students.length; i++){
    age25();
}

/// OUTPUT EVERYONE PASSED

function studentsPassed(){
    if(students[i].test === 'passed') {
        console.log(students[i].name + ' pased the test');
    }
 }
 
 for(i = 0; i < students.length; i++){
     studentsPassed()
 }


 fetch("data.json")
.then(response => {
    return response.json();
}).then(data => {
    console.log(data)

    let listOutput = document.getElementById("list");

    function bmw(){
        if(data[i].car === 'bmw')
        console.log(data[i].car + ' was sold today in the colour ' + data[i].colour + ' at the price of ' + data[i].price);

        listOutput.innerHTML = `<p>` + (data[i].car + ` was sold today in the colour ` + data[i].colour + ` at the price of ` + data[i].price)  +`</p>`;
    }

    for(i=0; i < data.length; i++){
        bmw();
    }
    // listOutput.innerHTML = `Hi`;

})
