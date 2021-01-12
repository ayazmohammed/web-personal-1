/*

    TASK - Create Rock, Paper, Scissors game.

    - Two players
    - Randomise their selections
    - Declare the winner after each round
    - 1 point per round win
    - 5 rounds total

    Rock beats scissors, scissors beats paper, paper beats rock.

    - Console
    - Variables
    - Generic maths (arithmetic operators)
    - Built in objects - Math, Number, String etc and their functions
    - If statements
    - Switch statements
*/

/*

1)name the players.
2)asign rock, paper, scissors is a variable.
3)create a randomise 1-3.
4)if statement for player 1 - asign output number to the variable - rock, paper, scissors.     rock = 1 paper = 2 scissors = 3
5)do the same for player 2 as step 4.
6)create if statemnt with all the possiable outputs, put score in the output and colse.log it out.
7)total the scores
8)do this for the next 4 rounds.
9)add the total and log out both reults

*/



///steps 1 - name 2 players

let playerOneName = 'Ayaz';
let playerTwoName = 'Ollie';

///step 2 - create rock, paper, scissors

let rock = 'rock';
let paper = 'paper';
let scissors = 'scissors'

// step 3 - Randomise the outcome, do that for both players / only 3 poss outcomes 

console.log(`ROUND 1`)

let playerSelection1 = Math.floor(Math.random() * 3) +1;
let playerSelection2 = Math.floor(Math.random() * 3) +1;


/// step 4 - assigning the number/outcome to the poss results rock = 1 paper = 2 scissors = 3


switch (playerSelection1) {
    case 1: 
    console.log(`${playerOneName}'s selection is a rock`);
    break;
    case 2: 
    console.log(`${playerOneName}'s selection is a paper`);
    break;
    case 3:    
    console.log(`${playerOneName}'s selection is a scissors`);
    break;
    default:
    options = console.log("something went wrong");
}


// step 4 - assigning the number/outcome to the poss results rock = 1 paper = 2 scissors = 3
switch (playerSelection2) {
    case 1: 
    console.log(`${playerTwoName}'s selection is a rock`);
    break;
    case 2: 
    console.log(`${playerTwoName}'s selection is a paper`);
    break;
    case 3:    
    console.log(`${playerTwoName}'s selection is a scissors`);
    break;
    default:
    options = console.log("something went wrong");
}


/* 

step 5 all the possiable out comes  

rock = 1 paper = 2 scissors = 3

1) rock & rock 
2) rock & paper
3) rock & scissors
4) paper & paper
5) paper & rock
6) paper & scissors
7) scissors & scissors
8) scissors & rock
9) scissors & paper

*/


let p1roundOneScore= 0;
let p2roundOneScore=0;

// head to head resultss

if (playerSelection1 == 1 && playerSelection2 == 1) {
    console.log(`draw please try again`.toUpperCase());
}   else if (playerSelection1 == 1 && playerSelection2 == 2) {
        p2roundOneScore += 1;
        console.log(`${playerTwoName} wins paper beats rock`.toUpperCase());

} else if (playerSelection1 == 1 && playerSelection2 == 3) {
    p1roundOneScore += 1;
        console.log(`${playerOneName} wins rock beats scissors`.toUpperCase());

} else if (playerSelection1 == 2 && playerSelection2 == 2) {
        console.log(`draw please try again`.toUpperCase());

} else if (playerSelection1 == 2 && playerSelection2 == 1) {
    p1roundOneScore += 1;
    console.log(`${playerOneName}' wins paper beats rock`.toUpperCase());

} else if (playerSelection1 == 2 && playerSelection2 == 3) {
    p2roundOneScore += 1;
    console.log(`${playerTwoName} wins scissors beats paper`.toUpperCase());

} else if (playerSelection1 == 3 && playerSelection2 == 3) {
    console.log(`draw please try again`.toUpperCase());

} else if (playerSelection1 == 3 && playerSelection2 == 1) {
    p2roundOneScore += 1;
    console.log(`${playerTwoName} wins rock beats scissors`.toUpperCase());

} else if (playerSelection1 == 3 && playerSelection2 == 2) {
    p1roundOneScore += 1;
    console.log(`${playerOneName}' wins scissors beats paper`.toUpperCase());
} 



/////////////// Round 2


console.log(`ROUND 2`);

let playerSelection1Round2 = Math.floor(Math.random() * 3) +1;
let playerSelection2Round2 = Math.floor(Math.random() * 3) +1;

/// Player 1 results
switch (playerSelection1Round2) {
    case 1: 
    console.log(`${playerOneName}'s selection is a rock`);
    break;
    case 2: 
    console.log(`${playerOneName}'s selection is a paper`);
    break;
    case 3:    
    console.log(`${playerOneName}'s selection is a scissors`);
    break;
    default:
    options = console.log("something went wrong");
}


/// Player 2 results
switch (playerSelection2Round2) {
    case 1: 
    console.log(`${playerTwoName}'s selection is a rock`);
    break;
    case 2: 
    console.log(`${playerTwoName}'s selection is a paper`);
    break;
    case 3:    
    console.log(`${playerTwoName}'s selection is a scissors`);
    break;
    default:
    options = console.log("something went wrong");
}


let p1roundTwoScore= 0;
let p2roundTwoScore=0;

// head to head results
if (playerSelection1Round2 == 1 && playerSelection2Round2 == 1) {
    console.log(`draw please try again`.toUpperCase());
}   else if (playerSelection1Round2 == 1 && playerSelection2Round2 == 2) {
        p2roundOneScore += 1;
        console.log(`${playerTwoName} wins paper beats rock`.toUpperCase());

} else if (playerSelection1Round2 == 1 && playerSelection2Round2 == 3) {
    p1roundOneScore += 1;
        console.log(`${playerOneName} wins rock beats scissors`.toUpperCase());

} else if (playerSelection1Round2 == 2 && playerSelection2Round2 == 2) {
        console.log(`draw please try again`.toUpperCase());

} else if (playerSelection1Round2 == 2 && playerSelection2Round2 == 1) {
    p1roundOneScore += 1;
    console.log(`${playerOneName}' wins paper beats rock`.toUpperCase());

} else if (playerSelection1Round2 == 2 && playerSelection2Round2 == 3) {
    p2roundOneScore += 1;
    console.log(`${playerTwoName} wins scissors beats paper`.toUpperCase());

} else if (playerSelection1Round2 == 3 && playerSelection2Round2 == 3) {
    console.log(`draw please try again`.toUpperCase());

} else if (playerSelection1Round2 == 3 && playerSelection2Round2 == 1) {
    p2roundOneScore += 1;
    console.log(`${playerTwoName} wins rock beats scissors`.toUpperCase());

} else if (playerSelection1Round2 == 3 && playerSelection2Round2 == 2) {
    p1roundOneScore += 1;
    console.log(`${playerOneName}' wins scissors beats paper`.toUpperCase());
} 


/////////////// Round 3

console.log(`ROUND 3`);

let playerSelection1Round3 = Math.floor(Math.random() * 3) +1;
let playerSelection2Round3 = Math.floor(Math.random() * 3) +1;


/// Player 1 results
switch (playerSelection1Round3) {
    case 1: 
    console.log(`${playerOneName}'s selection is a rock`);
    break;
    case 2: 
    console.log(`${playerOneName}'s selection is a paper`);
    break;
    case 3:    
    console.log(`${playerOneName}'s selection is a scissors`);
    break;
    default:
    options = console.log("something went wrong");
}


/// Player 2 results
switch (playerSelection2Round3) {
    case 1: 
    console.log(`${playerTwoName}'s selection is a rock`);
    break;
    case 2: 
    console.log(`${playerTwoName}'s selection is a paper`);
    break;
    case 3:    
    console.log(`${playerTwoName}'s selection is a scissors`);
    break;
    default:
    options = console.log("something went wrong");
}


let p1round3Score= 0;
let p2round3Score=0;

// head to head results
if (playerSelection1Round3 == 1 && playerSelection2Round3 == 1) {
    console.log(`draw please try again`.toUpperCase());
}   else if (playerSelection1Round3 == 1 && playerSelection2Round3 == 2) {
        p2roundOneScore += 1;
        console.log(`${playerTwoName} wins paper beats rock`.toUpperCase());

} else if (playerSelection1Round3 == 1 && playerSelection2Round3 == 3) {
    p1roundOneScore += 1;
        console.log(`${playerOneName} wins rock beats scissors`.toUpperCase());

} else if (playerSelection1Round3 == 2 && playerSelection2Round3 == 2) {
        console.log(`draw please try again`.toUpperCase());

} else if (playerSelection1Round3 == 2 && playerSelection2Round3 == 1) {
    p1roundOneScore += 1;
    console.log(`${playerOneName}' wins paper beats rock`.toUpperCase());

} else if (playerSelection1Round3 == 2 && playerSelection2Round3 == 3) {
    p2roundOneScore += 1;
    console.log(`${playerTwoName} wins scissors beats paper`.toUpperCase());

} else if (playerSelection1Round3 == 3 && playerSelection2Round3 == 3) {
    console.log(`draw please try again`.toUpperCase());

} else if (playerSelection1Round3 == 3 && playerSelection2Round3 == 1) {
    p2roundOneScore += 1;
    console.log(`${playerTwoName} wins rock beats scissors`.toUpperCase());

} else if (playerSelection1Round3 == 3 && playerSelection2Round3 == 2) {
    p1roundOneScore += 1;
    console.log(`${playerOneName}' wins scissors beats paper`.toUpperCase());
} 


/////////////// Round 4

console.log(`ROUND 4`);

let playerSelection1Round4 = Math.floor(Math.random() * 3) +1;
let playerSelection2Round4 = Math.floor(Math.random() * 3) +1;


/// Player 1 results
switch (playerSelection1Round4) {
    case 1: 
    console.log(`${playerOneName}'s selection is a rock`);
    break;
    case 2: 
    console.log(`${playerOneName}'s selection is a paper`);
    break;
    case 3:    
    console.log(`${playerOneName}'s selection is a scissors`);
    break;
    default:
    options = console.log("something went wrong");
}


/// Player 2 results
switch (playerSelection2Round4) {
    case 1: 
    console.log(`${playerTwoName}'s selection is a rock`);
    break;
    case 2: 
    console.log(`${playerTwoName}'s selection is a paper`);
    break;
    case 3:    
    console.log(`${playerTwoName}'s selection is a scissors`);
    break;
    default:
    options = console.log("something went wrong");
}


let p1round4Score= 0;
let p2round4Score=0;

// head to head results
if (playerSelection1Round4 == 1 && playerSelection2Round4 == 1) {
    console.log(`draw please try again`);
}   else if (playerSelection1Round4 == 1 && playerSelection2Round4 == 2) {
        p2roundOneScore += 1;
        console.log(`${playerTwoName} wins paper beats rock`.toUpperCase());

} else if (playerSelection1Round4 == 1 && playerSelection2Round4 == 3) {
    p1roundOneScore += 1;
        console.log(`${playerOneName} wins rock beats scissors`.toUpperCase());

} else if (playerSelection1Round4 == 2 && playerSelection2Round4 == 2) {
        console.log(`draw please try again`.toUpperCase());

} else if (playerSelection1Round4 == 2 && playerSelection2Round4 == 1) {
    p1roundOneScore += 1;
    console.log(`${playerOneName}' wins paper beats rock`.toUpperCase());

} else if (playerSelection1Round4 == 2 && playerSelection2Round4 == 3) {
    p2roundOneScore += 1;
    console.log(`${playerTwoName} wins scissors beats paper`.toUpperCase());

} else if (playerSelection1Round4 == 3 && playerSelection2Round4 == 3) {
    console.log(`draw please try again`.toUpperCase());

} else if (playerSelection1Round4 == 3 && playerSelection2Round4 == 1) {
    p2roundOneScore += 1;
    console.log(`${playerTwoName} wins rock beats scissors`.toUpperCase());

} else if (playerSelection1Round4 == 3 && playerSelection2Round4 == 2) {
    p1roundOneScore += 1;
    console.log(`${playerOneName}' wins scissors beats paper`.toUpperCase());
} 



/////////////// Round 5

console.log(`ROUND 5`);

let playerSelection1Round5 = Math.floor(Math.random() * 3) +1;
let playerSelection2Round5 = Math.floor(Math.random() * 3) +1;


/// Player 1 results
switch (playerSelection1Round5) {
    case 1: 
    console.log(`${playerOneName}'s selection is a rock`);
    break;
    case 2: 
    console.log(`${playerOneName}'s selection is a paper`);
    break;
    case 3:    
    console.log(`${playerOneName}'s selection is a scissors`);
    break;
    default:
    options = console.log("something went wrong");
}


/// Player 2 results
switch (playerSelection2Round5) {
    case 1: 
    console.log(`${playerTwoName}'s selection is a rock`);
    break;
    case 2: 
    console.log(`${playerTwoName}'s selection is a paper`);
    break;
    case 3:    
    console.log(`${playerTwoName}'s selection is a scissors`);
    break;
    default:
    options = console.log("something went wrong");
}


let p1round5Score= 0;
let p2round5Score=0;

// head to head results
if (playerSelection1Round5 == 1 && playerSelection2Round5 == 1) {
    console.log(`draw please try again`.toUpperCase());
}   else if (playerSelection1Round5 == 1 && playerSelection2Round5 == 2) {
        p2roundOneScore += 1;
        console.log(`${playerTwoName} wins paper beats rock`.toUpperCase());

} else if (playerSelection1Round5 == 1 && playerSelection2Round5 == 3) {
    p1roundOneScore += 1;
        console.log(`${playerOneName} wins rock beats scissors`.toUpperCase());

} else if (playerSelection1Round5 == 2 && playerSelection2Round5 == 2) {
        console.log(`draw please try again`.toUpperCase());

} else if (playerSelection1Round5 == 2 && playerSelection2Round5 == 1) {
    p1roundOneScore += 1;
    console.log(`${playerOneName}' wins paper beats rock`.toUpperCase());

} else if (playerSelection1Round5 == 2 && playerSelection2Round5 == 3) {
    p2roundOneScore += 1;
    console.log(`${playerTwoName} wins scissors beats paper`.toUpperCase());

} else if (playerSelection1Round5 == 3 && playerSelection2Round5 == 3) {
    console.log(`draw please try again`.toUpperCase());

} else if (playerSelection1Round5 == 3 && playerSelection2Round5 == 1) {
    p2roundOneScore += 1;
    console.log(`${playerTwoName} wins rock beats scissors`.toUpperCase());

} else if (playerSelection1Round5 == 3 && playerSelection2Round5 == 2) {
    p1roundOneScore += 1;
    console.log(`${playerOneName}' wins scissors beats paper`.toUpperCase());
} 

//Toatl of each round
console.log(`TOTAL`)
let p1totalscore = p1roundOneScore + p1roundTwoScore + p1round3Score + p1round4Score + p1round5Score;
let p2totalscore = p2roundOneScore + p2roundTwoScore + p1round3Score + p1round4Score + p1round5Score;
console.log(`total score ${playerOneName} ${p1totalscore}`.toUpperCase())
console.log(`total score ${playerTwoName}  ${p2totalscore}`.toUpperCase())