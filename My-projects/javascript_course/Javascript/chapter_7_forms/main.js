///------------lesson 59 SUBMIT EVENTS------------

const form = document.querySelector('.signup-form');
const feedback = document.querySelector('.feedback');

// form.addEventListener('submit', e => {
//     e.preventDefault();
//     console.log(form.username.value);

///------------lesson 62 BASIC FORM VALIDATION------------

// const username = form.username.value;
// const usernamePattern = /^[a-zA-Z]{4,}$/;

// if(usernamePattern.test(username)){
//     feedback.textContent = 'that username is vaild';
// } else {
//     feedback.textContent = 'username must be 4 characters'
// }
// });


function validateEmail(email) 
{
    var re = /\\S+@\\S+/;
    return re.test(email);
}

function validate(phone) {
    var regex = /^\+(?:[0-9] ?){6,14}[0-9]$/;

    if (regex.test(phone)) {
        // Valid international phone number
    } else {
        // Invalid international phone number
    }
}

///------------own test------------


