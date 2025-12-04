'use strict';

let playBtn = document.querySelector('.play');
let nameInput = document.querySelector('#name');

playBtn.addEventListener('click', (e) => {
    username = nameInput.value.trim()
    if (userName = '') userName = 'Spelaren';
    userName = userName.toUpperCase();

    console.log(userName);

    localStorage.setItem('playerName', userName);
})
