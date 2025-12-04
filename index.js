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

const themeBtn = document.querySelector('.toggle-theme');
const container = document.querySelector('.container');
const logo = document.querySelector('.fa-battle-net');

themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    container.classList.toggle('dark');
    logo.classList.toggle('dark');
})
