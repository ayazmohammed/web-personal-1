
/*
1) create number randomise between number - 1-10
2) display first number ask if its 'H or L' then show number 2
3) if the answer is wrong show 'sorry text'. if right show another number.
4)repeat step 2.




/Possiable results for the if statement
// button clicked high and currentNumber is greater then randomNumberGen 'sucess'
// button clicked high and currentNumber is less then randomNumberGen 'sorry'
// button clicked low and currentNumber is less then randomNumberGen 'sucess'
// button clicked low and currentNumber is greater then randomNumberGen 'sorry'
*/


// 1st number 
function randomNumber (){
    return(Math.floor(Math.random() * 10) + 1)  
}
let randomNumber1 = randomNumber();
console.log(randomNumber1)

// 2nd number 
function randomNumber (){
    return(Math.floor(Math.random() * 10) + 1)  
}
let randomNumber2 = randomNumber();
// console.log(randomNumber2)



//random number 3

function randomNumber (){
    return(Math.floor(Math.random() * 10) + 1)  
}
let randomNumber3 = randomNumber();

//promt make person enter a input - like alart
let choice = prompt('H or l?');
         

function results(){
    if(choice === 'H' &&  randomNumber1 <= randomNumber2){
        console.log(`you win`)
    }else if (choice === 'H' &&  randomNumber1 >= randomNumber2){
        console.log(`you Lose`)
    }else if (choice === 'L' &&  randomNumber1 >= randomNumber2){
        console.log(`you win`)
    }else if (choice === 'L' &&  randomNumber1 <= randomNumber2){
        console.log(`you Lose`)
        }
}

results();


console.log(`random number was ${randomNumber2}`)



