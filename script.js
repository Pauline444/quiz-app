'use strict';

// spara användarens namn
// när användaren klickar på play så ska sparade namnet skrivas ut på quiz sidan
// använd litteral strings för att skriva ut ny textContent

document.addEventListener('DOMContentLoaded', () => {
    let addName = document.querySelector('.add-header');
    let savedName = localStorage.getItem('playerName');

    console.log(savedName);
    addName.textContent = `${savedName}'s QUIZ`;
})


// skapa en array med flera objekt med frågor och svar
// loopa igenom frågor och svar från array med objekt
// spara användarens val och räkna ihop totalen


let quizContainer = document.querySelector('.quiz-container');
let nextBtn = document.querySelector('.next');

let question = document.getElementById('question');
let answereChecked = document.querySelector('[class=answere]:checked');
let answere = document.querySelector('.answere');





