///------------lesson 7 VARIABLES, CONSTANTS------------

// let age = 30;
// let year = 2020;
// console.log (age,year);

// age = 31;
// console.log(age);

// const points = 100;

// var score = 75;
// console.log(score);

///------------lesson 9 STRINGS------------

//strings
// console.log('hello, world 123');

// let email = 'ayazm@activewin.co.uk'
// console.log(email);


// //string concatenation
// let firstName = 'Ayaz';
// let lastName = 'Mohammed';
// let fullName = firstName + ' ' + lastName;
// console.log(fullName);

// //getting characters
// console.log(fullName[3]);

// //string length
// console.log(fullName.length);

// //string methods
// console.log(fullName.toUpperCase());
// let result = fullName.toLowerCase();
// console.log(result, fullName);

///------------lesson 10 COMMON STRING METHODSS------------

// common string methods
//let email = 'ayazm@activewin.co.uk';
//let result = email.lastIndexOf('m');
//let result = email.slice(2.5);
//let result = email.substr(4,5);
//let result = email.replace('m', 'w');
//console.log(result);

///------------lesson 11 NUMBERS------------

//order of operation - B I D M A S

// let result = 5 * (10-3)**2;
// console.log(result);

// let likes = 10;
// likes = likes+1;
// let result = 'the blog has ' + likes + ' likes';
// console.log(result);

///------------lesson 12 TEPLATE STRINGS------------

// template strings
// const title = 'Best reads of 2020';
// const author = 'Ayaz';
// const likes = 30;

//template string way
// let result = `The blog called ${title} by ${author} has ${likes} likes`;
// console.log(result);

//creating html template
// let html = `
//             <h2>${title}</h2>
//             <p>By ${author}</p>
//             <span>This blog has ${likes} likes</span>`
// console.log(html);

///------------lesson 13 ARRAY------------

//let ninjas = ['shaun', 'ryu', 'chunli'];
// ninjas[1] = 'ken';
// console.log(ninjas[1]);

// let ages = [20,25,30,35];
// console.log(ages[2]);

// let random = ['shaun', 'crystal', 30, 20];
// console.log(random);

// console.log(ninjas.length);

//Array Methods

// let result = ninjas.join(',');
// let result = ninjas.indexOf('chun-li');
//let result = ninjas.concat(['ken', 'crystal'])
//let result = ninjas.push('ken')
//let result = ninjas.pop('')
//console.log(result);


///------------lesson 15 BOONLEANS AND COMPARISONS------------

//booleans & comparisons
// console.log(true, false,);

//methods can return booleans
// let email = 'ayazm@activewin.co.uk';
// let names = ['mario', 'luigi', 'toad'];

//let result = email.includes('@');
// let result = names.includes('luigi');
// console.log(result);

//comparison operators
// let age =  25;

// console.log(age == 25);
// console.log(age == 30);
// console.log(age != 30);
// console.log(age > 20);
// console.log(age < 20);
// console.log(age <= 25);
// console.log(age >= 25);

// let names = 'shaun';

// console.log(name == 'shaun');
// console.log(name == 'Shaun');
// console.log(name > 'crystal');
// console.log(name > 'Shaun');
// console.log(name > 'Crystal');

///------------lesson 17 BOONLEANS AND COMPARISONS------------

// let score = '100';
// score = Number(score);
// console.log(score + 1);

///------------lesson 19 FOR LOOP------------

//for loops
// for(let i = 0; i < 5; i++){
//     console.log('in loop:', i)
// }

// console.log('loop finished');

///------------lesson 20 WHILE LOOP------------

// let i = 0

// while(i<5){
//     console.log('in loop:',i);
//     i++;
// }

///------------lesson 21 DO WHILE LOOP------------

// let i = 5;

// do{
//     console.log('val of i is: ', i);
//     i++
// } while(i<5);


///------------lesson 22 IF STATEMENTS------------
// const age = 25;

// if(age > 20){
//     console.log("your are over 20 years old");
// }

// const ninjas = ['shaun', 'ryu', 'chun-li', 'yushi'];

// if (ninjas.length>3){
//     console.log("that's alot of ninjas");
// }

// const password = 'pass';

// if (password.length >= 3){
//     console.log('that password is long enough!');
// }

///------------lesson 23 ELSE & ELSE IF -----------

// const password = 'pas';

// if(password.length >=12){
//     console.log('that password is realy strong');
// } else if(password.length >=8){
//     console.log('that passowrd is long enought!');
// } else{
//     console.log('password is not long enough');
// }

///------------lesson 24 Logical Operatores -----------

// const password = 'p@ssword234';

// if(password.length >=12 &&password.includes('@')){
//     console.log('that password is realy strong');
// } else if(password.length >=8 || password.includes('@')){
//     console.log('that passowrd is long enought!');
// } else{
//     console.log('password is not long enough');
//  }

///------------lesson 25 LOGICAL NOT -----------

// let user = false;

// if(!user){
//     console.log('you must ne logged in to continue')
// }


///------------lesson 26 BREAK AND CONTINUE -----------

// const scores = [50, 25, 0, 100, 30, 10];

// for(let i = 0; i < scores.length; i++){

//     console.log('your score: ', scores[i]);

//     if(scores[i] === 100){
//         console.log('congrats, you got the top score!')
//         break;
//     }

// }


///------------lesson 27 SWITCH -----------

// const grade = 'B';

// switch(grade){
//     case 'A':
//         console.log('you got an A!');
//         break;
    
//     case 'B':
//         console.log('you got an B!');
//         break;

//     case 'C':
//         console.log('you got an C!');
//         break;

// }

///------------lesson 30 FUNCTION DECLARATION & EXPRESSION-----------

//function declaration
// function greet(){
//     console.log('hello there');
// }
// greet();

//funcation expression
// const speak = function(){
// console.log('good day!');
// };
// speak();

///------------lesson 31 ARGUMENTS & PARAMETERS-----------

// const speak = function(name, time){
//     console.log(`good ${time} ${name}`);
// };
// speak('mario', 'morning');

///------------lesson 34 FUNCTION VS METHODS-----------
// const name = 'shaun';

// functions
// const greet = () => 'hello';
// let resultOne = greet();
// console.log(resultOne);

//methods
// let resultTwo = name.toUpperCase();
// console.log(resultTwo);

///------------lesson 35 FOREACH METHOD AND CALLBACKS-----------

// let people =['mario', 'luigi', 'ryu', 'shaun']
// const logPerson = (person, index) => {
//     console.log(`${index} - hello ${person}`);
// };

// people.forEach(logPerson);

///------------lesson 36 CALLBACK FUNCATION IN ACTION-----------

// const ul = document.querySelector('.people');

// const people = ['mario', 'luigi', 'ryu', 'shaun'];

// let html = ``;

// people.forEach(function(person){
//     ///create html template
//     html += `<li style="color: purple">${person}</li>`
// });

// console.log(html);
// ul.innerHTML = html;

///------------lesson 38 CREATING AN OBJECT-----------

// let user = {
//     name: 'ayaz',
//     age: 30,
//     email: 'ayazm@activewin.co.uk',
//     location: 'rochdale',
//     blog: ['blog 1 html/css'] ['blog 2 js']
// };

// console.log(user);


///------------lesson 41 OBJECTS IN ARRAYS-----------

// const blogs = [
//     { title: 'blog 1', likes:30},
//     { title: 'blog2', likes:15}
// ];

// console.log(blogs);
