/* TASK 2 = MAGIC 8 BALL GAME

Randomise a selection from the amount of options below. Pick that options and log it to the console with the 8 ball prediction. Add some sentences arounf the answer to display to display it like a real ball. 

THIS TIME - Write two functions, one that randomises an 8 ball shake and returns the number. Secondly, write another function that uses a switch statement to return the completed result (sentencs). Then output this sentend separately from the function. 




let option1 = "Death";
let option2 = "Lottery";
let option3 = "Buy House";
let option4 = "Famouse";
let option5 = "Illness";
let option6 = "Embarrasment";
let option7 = "Power";
let option8 = "Better looking";

function ball(){
    ball1 = 1;
    console.log(ball1 = Math.floor(Math.random() * 8) +1);
}

ball();

*/

//https://www.w3schools.com/js/js_switch.asp




/* 
var magicBAll = [
    {
        option: "Death",
        
    },
    {
        option: "Lottery",
    },
    {
        option: "Buy House",
    },
    {
        option: "Famouse",
    },
    {
        option: "Illness",
    },
    {
        option: "Embarrasment",
    },
    {
        option: "Power",
    },
    {
        option: "Better looking",
    }
] */


// for(i=0; i < magicBAll.length; i++){

    // ball = Math.floor(Math.random() * 8) +1;

    //if statemnet was not asked but wanted to see if it worked.

    // if (ball === 1) {
    //     console.log(magicBAll[i].option1 + `to star wars`);
    // } else if (ball === 2) {
    //     console.log(`you are a ` + magicBAll[i].option2 + `winner`);
    // } else if (ball === 3) {
    //     console.log(magicBAll[i].option3 + `for £5.00`);
    // }else if (ball === 4) {
    //     console.log(`you will be` + magicBAll[i].option4);
    // }else if (ball === 5) {
    //     console.log(magicBAll[i].option5 + `is a curel part of life`);
    // }else if (ball === 6) {
    //     console.log(magicBAll[i].option6 + `s being an asian and not being a doctor`);
    // }else if (ball === 7) {
    //     console.log(`with great` + magicBAll[i].option7 + `comes great responsibility`);
    // }else if (ball === 8) {
    //     console.log(magicBAll[i].option8 + `people all around.`);
    // }


    ///using a string 

    var magicBAll = {
            'option': ['Death' , 'Lottery' , 'Buy House' , 'Famouse' , 'Illness' , 'Embarrasment' , 'Power' , 'Better looking']

        }

    
//https://www.youtube.com/watch?v=3mIDBqH2-6k

    let ball= Math.floor(Math.random() * 8) +1;

    console.log(ball)
    switch (ball){
        
        case 1: 
                console.log(magicBAll.option[0] + ` to star wars`);
            break;
        case 2: 
            console.log(`you are a ` + magicBAll.option[1] + ` winner`);
            break;
        case 3:    
            console.log(magicBAll.option[2] + ` for £5.00`);
            break;
        case 4: 
            console.log(`you will be ` + magicBAll.option[3]);
            break;
        case 5:     
            console.log(magicBAll.option[4] + ` is a curel part of life`);
            break;
        case 6:     
            console.log(magicBAll.option[5] + ` is being an asian and not being a doctor`);
            break;
        case 7:     
            console.log(`with great` + magicBAll.option[6] + ` comes great responsibility`);
            break;
        case 8:    
            options = console.log(magicBAll.option[7] + ` people all around.`);
            break;
        default:
            options = console.log("something went wrong");

    }


    ////using a array object

/*
    var magicBAll = [
        {
            option: "Death",
            
        },
        {
            option: "Lottery",
        },
        {
            option: "Buy House",
        },
        {
            option: "Famouse",
        },
        {
            option: "Illness",
        },
        {
            option: "Embarrasment",
        },
        {
            option: "Power",
        },
        {
            option: "Better looking",
        }
    ] 

    let ball= Math.floor(Math.random() * 8) +1;

    console.log(ball)
switch (ball){
        
    case 1: 
            console.log(magicBAll[ball].option  + ` to star wars`);
        break;
    case 2: 
        console.log(`you are a ` + magicBAll[ball].option  + ` winner`);
        break;
    case 3:    
        console.log(magicBAll[ball].option  + ` for £5.00`);
        break;
    case 4: 
        
        console.log(`you will be ` + magicBAll[ball].option);
        break;
    case 5:     
        
        console.log(magicBAll[ball].option + ` is a curel part of life`);
        break;
    case 6:     
        
        console.log(magicBAll[ball].option + ` is being an asian and not being a doctor`);
        break;
    case 7:     
        
        console.log(`with great` + magicBAll[ball].option + ` comes great responsibility`);
        break;
    case 8:     
        
        options = console.log(magicBAll[ball].option + ` people all around.`);
        break;
    default:
        options = console.log("something went wrong");

} */