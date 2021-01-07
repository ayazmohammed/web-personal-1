let titleOne =document.querySelector(".title");
let titleTwo =document.querySelector(".t2");
let pTag = document.querySelector("p");
let cta = document.getElementById("bcta");

/////CHANGE CSS/////

// titleOne.style.color = 'red';
// titleOne.style.fontSize = '80px';

/////CHANGE HTML/////

// titleTwo.innerText= 'HELLLLO 2 test test text';

// titleTwo.classList.add('t2');


// titleTwo.innerHTML = `<h2>h123</h2>
//                     <p>testestestest</p>
//                     <p class="test">testestestest</p>                    
// `

// console.log(titleOne);

let names = [' ayaz',' musa',' shabnam', ' yusuf'];

console.log("people living at 3 weston are" + names[0] + " and" + names[1])


for (i = 0; i < names.length; i++) {
    console.log("people living at 3 weston are" + names[i])
    addNames()
  } 


function addNames(){
    titleOne.innerHTML = "people living at 3 weston are" + names[i];
}

/////OBJECT/////

let people =[
    {
    name : 'ayaz',
    age : 30,
    gender : 'male'
    }, 
    {
    name : 'musa',
    age : 1,
    gender : 'male'
    },
    {
    name : 'shabnam',
    age : 29,
    gender : 'female'
    },
    {
    name : 'yusuf',
    age : 12,
    gender : 'male'
    },
    {
    name : 'sehar',
    age : 14,
    gender : 'female',
    }

];

//ADD ANOTHER PERSON TO THE OBJECT

people.push( "testName", 13, "male");
people.push( "123Name", 10, "female");

console.log(people);


// CHANGE NAME IN THE OBJECT
// people[1].name = 'test';
// console.log(people);

function under15(){
    if(people[i].age <15){
        pTag.innerHTML = `people below the age of 15 are ` + people[i].name;
        //console.log(`people below the age of 15 are ` + people[i].name)
    }
}

for (i = 0; i< people.length; i++){
    under15();
};


/////ARRAYS/////

let points = [5, 15, 6, 40, [5, 90], 70, 60, 99];
console.log(points.sort());


//CTA  addEventListener//

console.log(cta);

cta.addEventListener("click", function(){
    pTag.innerHTML = `CTA WAS PRESSED`
});



////

fetch('data.json')
.then(response =>{
    return response.json();
}).then(data =>{
    console.log(data);

    let dataName  = 'this persons name is ' + [data[3].name];
    console.log(dataName);

})


