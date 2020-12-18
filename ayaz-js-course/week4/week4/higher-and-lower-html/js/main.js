
/*
1) number is dealt
2) choose if the next number will be higher or lower
3) the next number is shown
4) if guessed incorrectly, start again
5) if guessed correctly, show another number.
*/


///update the random number in html

const randomSelection = document.querySelector('h1');

// create random number

function pickRandomNumber (){
    return(Math.floor(Math.random() * 10) + 1)  
}

let currentNumber = pickRandomNumber();

randomSelection.innerHTML = currentNumber;

/// random number to compare with
function randomNumber (){
    return(Math.floor(Math.random() * 10) + 1)  
}

let randomNumberGen = randomNumber();

///update the result box in html

const resultBox = document.getElementById('outCome');

//// update the pop up in html 

const messagePopUp = document.querySelector('h2');


// reset button

const resetButton = document.getElementById('resetbutton')

resetButton.addEventListener('click', () => { 
    currentNumber = pickRandomNumber();
    randomSelection.innerHTML = currentNumber;
    randomNumberGen = randomNumber();
    console.log(`${currentNumber} this is the html number`)
    console.log(`${randomNumberGen} console number`);
    resultBox.style.display = 'none';
    resetButton.style.display = 'none';
    
})




/// update the higher button in html and also have if statement to show the popup.   
const btnHigh = document.getElementById('high');

btnHigh.addEventListener('click', function () {
    resultBox.style.display = 'flex';

    if(currentNumber <= randomNumberGen){
        messagePopUp.innerText = (`Congrats move on to the next round`);
        currentNumber = randomNumberGen;
        randomSelection.innerHTML = currentNumber;
        randomNumberGen = randomNumber();
        console.log(randomNumberGen)

    }else if(currentNumber >= randomNumberGen){
        messagePopUp.innerText = (`Sorry please try again`);
        resultBox.style.backgroundColor = '#c60909'; 
        resetButton.style.display = 'block';


    }
}
);




/// update the lower button in html and also have if statement to show the popup.  
const btnLow =  document.getElementById('low');

btnLow.addEventListener('click', function ()  {
    resultBox.style.display = 'flex';
    
    if(currentNumber >= randomNumberGen){
        messagePopUp.innerText = (`Congrats move on to the next round`);
        currentNumber = randomNumberGen;
        randomSelection.innerHTML = currentNumber;
        randomNumberGen = randomNumber();
        console.log(randomNumberGen)

    }else if(currentNumber <= randomNumberGen){
        messagePopUp.innerText = (`Sorry please try again`);
        resultBox.style.backgroundColor = '#c60909'; 
        resetButton.style.display = 'block';
    }
});


console.log(randomNumberGen)

//Possiable results for the if statement
// button clicked high and currentNumber is greater then randomNumberGen 'sucess'
// button clicked high and currentNumber is less then randomNumberGen 'sorry'
// button clicked low and currentNumber is less then randomNumberGen 'sucess'
// button clicked low and currentNumber is greater then randomNumberGen 'sorry'

// best of 3 rounds



// var numOfRounds = 3;
// for (var i = 1; i < numOfRounds + 1; i++) { }

// function checkResultsMatch(){
    
//     if(currentNumber <= randomNumberGen){
//         messagePopUp.innerText = (`congrats move on to the next round 1`);
//         // randomNumberGen
//     }else if(currentNumber >= randomNumberGen){
//         messagePopUp.innerText = (`sorry please try again 1`);
//     }else if(currentNumber >= randomNumberGen){
//         messagePopUp.innerText = (`congrats move on to the next round`);
//     }else if(currentNumber >= randomNumberGen){
//         messagePopUp.innerText = (`sorry please try again`);
//     }
//     }    


// checkResultsMatch(); 


