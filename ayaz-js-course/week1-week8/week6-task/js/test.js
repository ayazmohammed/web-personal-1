// function addToList (name, age){
//     console.log('my name is ' + name + ' and my age is ' + age );
// }
// addToList( 'ayaz', 30);

// let people = ['ayaz', 'olly', 'jack', 'dave'];

// function outputName (people){
//     console.log('this person name is ' + people );
// }
// // outputName(people[2]);

// for (let i = 0; i < people.length; i++){
//     outputName(people[i]);
// }



let cars = [
    {
    'make' : 'bmw',
    'model' : 'z4',
    'colour' : 'blue'
},
{
    'make' : 'ford',
    'model' : 'feista',
    'colour' : 'black'
},
{
    'make' : 'vw',
    'model' : 'golf',
    'colour' : 'yellow'
}
]

function car (carObject){
    console.log('this person has' + cars[1].make )
 }

for (let i = 0; i < cars.length; i++){
    
    car(cars);
}

let list = document.getElementsByClassName('.carlistLI');

list.innerHTML = '

'


