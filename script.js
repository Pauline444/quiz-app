'use strict';

// spara användarens namn
// när användaren klickar på play så ska sparade namnet skrivas ut på quiz sidan
// använd litteral strings för att skriva ut ny textContent

// Användaren ska utöver att besvara frågor för quizet, även kunna byta utseende på sidan mellan dark mode (dvs mörk bakgrundsfärg med ljus text) och light mode (ljus bakgrundsfärg med mörk text).

// skapa en array med flera objekt med frågor och svar
// loopa igenom frågor och svar från array med objekt
// spara användarens val och räkna ihop totalen
// användaren ska kunna se exakt vilka frågor hen besvarat rätt och/eller felaktigt när resultatet visas.


const themeBtn = document.querySelector('.toggle-theme');
const container = document.querySelector('.container');
const logo = document.querySelector('.fa-battle-net');

themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    container.classList.toggle('dark');
    logo.classList.toggle('dark');
})



document.addEventListener('DOMContentLoaded', () => {
    let addName = document.querySelector('.add-header');
    let savedName = localStorage.getItem('playerName');

    console.log(savedName);
    addName.textContent = `${savedName}'s QUIZ`;
})




let quizContainer = document.querySelector('.quiz-container');
let nextBtn = document.querySelector('.next');

let question = document.getElementById('question');
let answere = document.querySelector('.answere');

let currentQuestion = {};
let score = 0;
let questionCounter = 0;
let availableQuestions = [];


const questions = [
    {
        question: "Vad står AI för?",
        option1: "Artificial Intelligence",
        option2: "Automated Integration",
        option3: "Advanced Interface",
        option4: "Active Input",
        correctAnswer: "Artificial Intelligence"
    },
    {
        question: "Vilket programmeringsspråk används ofta för maskininlärning?",
        option1: "Python",
        option2: "PHP",
        option3: "Swift",
        option4: "Ruby",
        correctAnswer: "Python"
    },
    {
        question: "Vad är ett neuralt nätverk inspirerat av?",
        option1: "Solsystemet",
        option2: "Mänskliga hjärnan",
        option3: "Internetkablar",
        option4: "DNA",
        correctAnswer: "Mänskliga hjärnan"
    },
    {
        question: "Vilket företag utvecklade ChatGPT?",
        option1: "Google",
        option2: "Meta",
        option3: "OpenAI",
        option4: "Amazon",
        correctAnswer: "OpenAI"
    },
    {
        question: "Vad är en GPU särskilt bra på?",
        option1: "Kryptering",
        option2: "3D-visualisering och parallella beräkningar",
        option3: "Databashantering",
        option4: "Webbdesign",
        correctAnswer: "3D-visualisering och parallella beräkningar"
    },
    {
        question: "Vad betyder 'Machine Learning'?",
        option1: "Datorer som skriver musik",
        option2: "Datorer som lär av data",
        option3: "Datorer som ritar bilder",
        option4: "Datorer som lagrar information",
        correctAnswer: "Datorer som lär av data"
    },
    {
        question: "Vad är en algoritm?",
        option1: "En samling HTML-element",
        option2: "En sekvens instruktioner för att lösa ett problem",
        option3: "En typ av virus",
        option4: "Ett AI-verktyg",
        correctAnswer: "En sekvens instruktioner för att lösa ett problem"
    },
    {
        question: "Vilken av följande AI-modeller är mest känd för bildgenerering?",
        option1: "DALL·E",
        option2: "MySQL",
        option3: "React",
        option4: "TensorFlow DB",
        correctAnswer: "DALL·E"
    },
    {
        question: "Vad lagrar ett neuralt nätverks 'vikter'?",
        option1: "CSS-varianter",
        option2: "Nodenheter",
        option3: "Modellens inlärda kunskap",
        option4: "Webbsidans typsnitt",
        correctAnswer: "Modellens inlärda kunskap"
    },
    {
        question: "Vad är en API?",
        option1: "Ett sätt för program att kommunicera",
        option2: "En webbserver",
        option3: "En processor",
        option4: "Ett filformat",
        correctAnswer: "Ett sätt för program att kommunicera"
    }
]



