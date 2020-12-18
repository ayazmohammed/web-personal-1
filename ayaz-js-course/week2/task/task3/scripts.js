/* TASK 3 - THE DICE GAME

The game is to see who will roll the highest total of dice. 

Randomise dice throws, for 4 people playing the game. The 4 people get to roll the dice 3 times in a row, and the winner is the one with the highest total of their 3 throws.

Show all players rolls, then show all player's total, then show the winner of the game.

*/



/*let player1 = "james";
roundUp1 = Math.ceil(1); // rounds up

p1Dice1 = (Math.floor(Math.random() * 6)) + 1;
p1Dice2 = (Math.floor(Math.random() * 6)) + 1;
p1Dice3 = (Math.floor(Math.random() * 6)) + 1;
p1Total = p1Dice1 + p1Dice2 + p1Dice3;
console.log(p1Dice1, p1Dice2, p1Dice3);

let person1 = `${player1} rolled ${p1Total}`;
console.log(person1);

// PLAYER 2

let player2 = "tom";

p2Dice1 = roundUp1  + (Math.round(Math.random() * 6));
p2Dice2 = roundUp1  + (Math.round(Math.random() * 6));
p2Dice3 = roundUp1  + (Math.round(Math.random() * 6));
p2Total = p2Dice1 + p2Dice2 + p2Dice3;
console.log(p2Dice1, p2Dice2, p2Dice3);

let person2 = `${player2} rolled ${p2Total}`;
console.log(person2);


// PLAYER 3

let player3 = "luke";

p3Dice1 = (Math.round(Math.random() * 6));
p3Dice2 = (Math.round(Math.random() * 6));
p3Dice3 = (Math.round(Math.random() * 6));
p3Total = p3Dice1 + p3Dice2 + p3Dice3;
console.log(p3Dice1, p3Dice2, p3Dice3);

let person3 = `${player3} rolled ${p3Total}`;
console.log(person3);


// PLAYER 4

let player4 = "adam";

p4Dice1 = (Math.round(Math.random() * 6));
p4Dice2 = (Math.round(Math.random() * 6));
p4Dice3 = (Math.round(Math.random() * 6));
p4Total = p4Dice1 + p4Dice2 + p4Dice3;
console.log(p4Dice1, p4Dice2, p4Dice3);

let person4 = `${player4} rolled ${p4Total}`;
console.log(person4);

// GAME WINNER


if (p1Total > p2Total && p3Total && p4Total) {
    console.log(`${player1} is the winner`);
} else if (p2Total > p1Total &&  p3Total && p4Total) {
    console.log(`${player2} is the winner`);
}else if (p3Total > p4Total) {
    console.log(`${player3} is the winner`);
}else if (p4Total) {
    console.log(`${player4} is the winner`);
}


// let test = 'winner';
// switch(test){
//     case p1Total > p2Total && p3Total && p4Total:
//         console.log(`${player1} 1 is the winner`);
//         break;
//     case p2Total > p1Total && p3Total && p4Total:
//         console.log(`${player2} 2 is the winner`);
//         break;
//     case p3Total > p1Total && p2Total && p4Total:
//         console.log(`${player3} 3 is the winner`);
//         break;
//     default:
//         console.log(`${player4} 4 is the winner`);
// }


/* TASK 3 - THE DICE GAME

The game is to see who will roll the highest total of dice. 

Randomise dice throws, for 4 people playing the game. The 4 people get to roll the dice 3 times in a row, and the winner is the one with the highest total of their 3 throws.

Show all players rolls, then show all player's total, then show the winner of the game.

THIS TIME = Write three functions, one that randomises a dice roll and returns the number. Secondly, write another function that totals a players rolls and a third function that creates the output and displays it in the console. 

-----------------

var score = {
    dice: function (){
    console.log(Math.floor(Math.random() * 6) +1)*3 ;
}
}
score *=3;
console.log(score)
*/

/*
function dice(){
    var dice1=(Math.floor(Math.random() * 6) +1) ;
    var dice2=(Math.floor(Math.random() * 6) +1) ;
    var dice3=(Math.floor(Math.random() * 6) +1) ;
    console.log(dice1,dice2,dice3);

    //variable to add all 3 dices
    var total = dice1 + dice2 + dice3;
    console.log(total)

}

dice();
*/


var people = [
    {
        'name': ['ayaz', 'anna', 'rebecca',  'robyn', 'stan']
    }

]

function dice(){
    let dice1 = Math.floor(Math.random() * 6) +1;
    let dice2 = Math.floor(Math.random() * 6) +1;
    let dice3 = Math.floor(Math.random() * 6) +1;
    let total = dice1 + dice2 + dice3;
    console.log(total);
}

dice();




for(i=0; i < people.length; i++){


        console.log(`Hello, my name is ` + people[i].name + 'and my total score is' + dice)
    }
        
    



    
   






