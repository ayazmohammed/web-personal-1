let users = [
    { name:'Ayaz', age:15, gender:'Female', vegetarian: true},
    { name:'Jack', age:20, gender:'Female', vegetarian: true},
    { name:'Olly', age:10, gender:'Male', vegetarian: false },
    { name:'Olivia', age:25, gender:'Female', vegetarian: true},
    { name:'Julia', age:40, gender:'Male', vegetarian: false},
    { name:'Jenny', age:20, gender:'Female', vegetarian: true}
]


// AGE ///////
let ofAgeDrinking = [];
let genderMale = [];
let genderFemale = [];
let vegetarian = [];

for( var i = 0 ; i < users.length; i++){
    var user = users[i];

    if (user.age >= 18 ){
        ofAgeDrinking.push(user);
    }    

    if (user.gender === 'Male'){
        genderMale.push(user);
    }

    if (user.gender === 'Female'){
        genderFemale.push(user);
    }

    if (user.vegetarian == true){
        vegetarian.push(user);
    }

}


// output to the html

let results = document.querySelector('.totalAmount');
// let result1 = results[6];
results.innerHTML = users.length;

let eighteenPlus = document.querySelector('.allowedToDrink');
eighteenPlus.innerHTML = ofAgeDrinking.length;

let genderMa = document.querySelector('.genderM');
genderMa.innerHTML = genderMale.length;

let genderFe = document.querySelector('.genderFm');
genderFe.innerHTML = genderFemale.length;

let veg = document.querySelector('.veg');
veg.innerHTML = vegetarian.length;