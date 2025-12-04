'use strict';


let quizContainer = document.querySelector('.quiz-container');
let nextBtn = document.querySelector('.next');

let question = document.getElementById('question');
let answereChecked = document.querySelector('[class=answere]:checked');
let answere = document.querySelector('.answere');



let addName = document.querySelector('.add-header');
let savedName = localStorage.getItem('playerName');

if (savedName && addName) {
    savedName.innerHTML = `${savedName}'s QUIZ`;
}


