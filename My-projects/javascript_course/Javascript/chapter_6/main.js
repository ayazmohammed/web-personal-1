///------------lesson 46 QUERY SELECTOR DOM------------
// const para = document.querySelector('p');
// console.log(para);

// const classP = document.querySelector('div.error');
// console.log(classP);

///------------lesson 47 OTHER WAYS QUERY SELECTOR DOM------------

// get an element by ID
// const title = document.getElementById('page-title');
// console.log(title);

// get an element by their class name
// const errors = document.getElementsByClassName('error');
// console.log(errors);
// console.log(errors[1])

///------------lesson 48 CHANGING PAGE CONTENT------------

// const para = document.querySelector('p');

// console.log(para.innerText)
// para.innerText = 'the new text will show';

///------------lesson 49 GETTING & SETTING ATTRIBUTES - CHANGE LINK IN HTML------------

// const link = document.querySelector('a');

// console.log(link.getAttribute('href'));
// link.setAttribute('href', 'http//www.bbc.co.uk');
// link.innerText = 'the link will show BBC';

///------------lesson 50 CHANGE CSS STYLES------------

// const changeCssStyle = document.querySelector('h2');
// console.log(changeCssStyle.style)

// changeCssStyle.style.color = 'red';
// changeCssStyle.style.fontSize = '40px';

///------------lesson 51 ADDING AND REMOVING CLASSES------------

// const content = document.querySelector('p');
// console.log(content.classList);
// content.classList.add('error');
// content.classList.remove('error');

// example in if wanna select on paragarph - if it has the word error or success in the paragrph will show

// const paras = document.querySelectorAll('p');

// paras.forEach(p => {
//     if(p.innerText.includes('error')){
//         p.classList.add('error');
//     }
//     if(p.innerText.includes('success')){
//         p.classList.add('sucess');
//     }
// });

///------------lesson 53 EVENT BASICS EventListener------------

// const button = document.querySelector('button');
// button.addEventListener('click', () => {
//     console.log('you clicked me');
// });

///------------lesson 54 ADD AND REMOVE EventListener------------



// const item = document.querySelectorAll('li');

// item.forEach(item => {
//     item.addEventListener('click', e => {
//         e.target.remove();
//     });
// });

///------------lesson 56 COPY TEXT SHOWS IN CONSOLE------------

// const copy = document.querySelector('.copyme');

// copy.addEventListener('copy', () => {
//     console.log ('OI!, Thats my content');
// });

