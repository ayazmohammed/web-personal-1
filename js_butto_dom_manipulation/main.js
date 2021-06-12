const button = document.querySelector('button');
const container = document.querySelector('.container');
const close = document.querySelector('.popup-close');

button.addEventListener('click', () => {
    container.style.display = 'flex';
    button.style.display='none';
})

close.addEventListener('click', () => {
    container.style.display = 'none';
    button.style.display='block';
})


