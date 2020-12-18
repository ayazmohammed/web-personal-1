// Question1
let answer1 = document.querySelectorAll(".answer1");
let answer1Value=function(){
    let answer=this.getAttribute("data-value");
    // store the result/button clicked.
    document.getElementById('q1_answer').value=answer;
    // show the next question.
    document.getElementById('q1').style.display="none";
    document.getElementById('q2').style.display="flex";
}

// for loop keep checking until the button is cliecked.
for(var i=0; i<answer1.length; i++){
    answer1[i].addEventListener('click', answer1Value,false);
}


// Question2
let answer2 = document.querySelectorAll(".answer2");
    //  collecting data.
let answer2Value=function(){
    let answer=this.getAttribute("data-value");
    // store the result/button clicked.
    document.getElementById('q2_answer').value=answer;
    // show the next question.
    document.getElementById('q2').style.display="none";
    document.getElementById('q3').style.display="flex";
}
// for loop keep checking until the button is cliecked.
for(var i=0; i<answer2.length; i++){
    answer2[i].addEventListener('click', answer2Value,false);
}


// Question3
let answer3 = document.querySelectorAll(".answer3");
    //  collecting data.
let answer3Value=function(){
    let answer=this.getAttribute("data-value");
    // store the result/button clicked.
    document.getElementById('q3_answer').value=answer;
    // show the next question.
    document.getElementById('q3').style.display="none";
    document.getElementById('q4').style.display="flex";
}
// for loop keep checking until the button is cliecked.
for(var i=0; i<answer3.length; i++){
    answer3[i].addEventListener('click', answer3Value,false);
}

// Question4
let answer4 = document.querySelectorAll(".answer4");
    //  collecting data.
let answer4Value=function(){
    let answer=this.getAttribute("data-value");
    // store the result/button clicked.
    document.getElementById('q4_answer').value=answer;
    // show the next question.
    document.getElementById('q4').style.display="none";
    document.getElementById('q5').style.display="flex";
}
// for loop keep checking until the button is cliecked.
for(var i=0; i<answer4.length; i++){
    answer4[i].addEventListener('click', answer4Value,false);
}


// Question5
let answer5 = document.querySelectorAll(".answer5");
    //  collecting data.
let answer5Value=function(){
    let answer=this.getAttribute("data-value");
    // store the result/button clicked.
    document.getElementById('q5_answer').value=answer;
    // show the next question.
    document.getElementById('q5').style.display="none";
    document.getElementById('q6').style.display="flex";
    document.getElementById('formCustomerDetails').style.display="flex";
}
// for loop keep checking until the button is cliecked.
for(var i=0; i<answer5.length; i++){
    answer5[i].addEventListener('click', answer5Value,false);
}




// contact details
const form = document.getElementById('formCustomerDetails');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    checkInputs();
    
})

function setSuccessFor(input) {
    const formBox = input.parentElement;
    formBox.className = 'formBox success';
}


function checkInputs() {
    const firstName = document.getElementById('firstName');
    const lastName = document.getElementById('lastName');
    const eMail = document.getElementById('eMail');
    const phoneNumber = document.getElementById('phoneNumber');
        // get the values from the inputs - trim removes space
        const firstNameValue = firstName.value.trim();
        const lastNameValue = lastName.value.trim();
        const eMailValue = eMail.value.trim();
        const phoneNumberValue = phoneNumber.value.trim();
        if(firstNameValue === '') {
            // show error
            // add error class
            let message = "First Name cannot be blank";
            setErrorFor(firstName, message);

        } else{
            firstName.parentElement.className = '';
            setSuccessFor(firstName);
        }
        if(lastNameValue === '') {
            // show error
             // add error class
             let message = "Last Name cannot be blank";
            setErrorFor(lastName, message);

        } else{
            lastName.parentElement.className = '';
            setSuccessFor(lastName);
        }
        if (eMailValue === ''){
            let message = "Email cannot be blank";
            setErrorFor(eMail, message);
        } else{
            eMail.parentElement.className = '';
            setSuccessFor(eMail);
        }
        let phoneValid = false;
        if (phoneNumberValue === ''){
        let message = "Enter a valid phone number ";
        setErrorFor(phoneNumber, message);
        }else{
            if (phoneValidate(phoneNumberValue)){
                phoneValid = true;
                phoneNumber.parentElement.className = '';
                setSuccessFor(phoneNumber);
            }else{
                let message = "Enter a valid phone number ";
                setErrorFor(phoneNumber, message);
            }
        }

        if (eMailValue !== '' && firstNameValue !== '' && lastNameValue !== '' && phoneValid == true) {
            // add success class
            setSuccessFor(firstName);
            setSuccessFor(lastName);
            setSuccessFor(eMail);
            setSuccessFor(phoneNumber);
            successMessage();
        }
    }

    // check validation for nummber
    function phoneValidate(number) {
        var phoneno = /^\d{11}$/;
        if(number.match(phoneno)){
            return true;
        }
        else {
             return false;
        }
      }


function setErrorFor(input, message) {
    const formBox = input.parentElement;
    const errorMessage = formBox.querySelector('.errorMessage');
    //  add error message
    console.log(errorMessage);
    errorMessage.innerText = message;
    // add error class
    formBox.className = 'formBox error';
}


function successMessage(){
    document.getElementById('q6').style.display="none";
    document.getElementById('successMessage').style.display="flex";
}
