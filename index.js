'use strict';

document.addEventListener('DOMContentLoaded', () => {
    let playBtn = document.querySelector('.play');
    let nameInput = document.querySelector('#name');

    playBtn.addEventListener('click', () => {
        let userName = nameInput.value.trim()

        if (userName === '') userName = 'Spelaren';
        userName = userName.toUpperCase();

        localStorage.setItem('playerName', userName);
    })
})
