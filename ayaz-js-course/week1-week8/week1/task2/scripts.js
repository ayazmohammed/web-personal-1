/* TASK 2 = MAGIC 8 BALL GAME

Randomise a selection from the amount of options below. Pick that options and log it to the console with the 8 ball prediction. Add some sentences arounf the answer to display to display it like a real ball. 

*/

let dice;
let i = 1;

let option1 = "Death";
let option2 = "Lottery";
let option3 = "Buy House";
let option4 = "Famouse";
let option5 = "Illness";
let option6 = "Embarrasment";
let option7 = "Power";
let option8 = "Better looking";



dice = (i >= 1 && Math.round(Math.random() * 8));



if (dice === 1) {
    console.log(`${option1} to star wars`);
} else if (dice === 2) {
    console.log(`you are a ${option2} winner`);
} else if (dice === 3) {
    console.log(`${option3} for £5.00`);
}else if (dice === 4) {
    console.log(`you will be ${option4}`);
}else if (dice === 5) {
    console.log(`${option5} is a curel part of life`);
}else if (dice === 6) {
    console.log(`${option6} is being an asian and not being a doctor`);
}else if (dice === 7) {
    console.log(`with great ${option7} comes great responsibility`);
}else if (dice === 8) {
    console.log(`${option8} people all around.`);
}
