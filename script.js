'use strict';


// loopa igenom frågor och svar från array med objekt
// spara användarens val och räkna ihop totala poängen
// skriv ut poängen till användaren
// användaren ska kunna se exakt vilka frågor hen besvarat rätt och/eller felaktigt när resultatet visas.



// TOGGLE DARK MODE
const themeBtn = document.querySelector('.toggle-theme');
const container = document.querySelector('.container');
const logo = document.querySelector('.fa-battle-net');

themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    container.classList.toggle('dark');
    logo.classList.toggle('dark');
})



// ANVÄNDARENS NAMN FRÅN localStorage
document.addEventListener('DOMContentLoaded', () => {
    let addName = document.querySelector('.add-header');
    let savedName = localStorage.getItem('playerName');

    console.log(savedName);
    addName.textContent = `${savedName}'s QUIZ`;
})




// QUIZ QUESTIONS
const questions = [
    {
        question: "Vad står AI för?",
        option1: "Artificial Intelligence",
        option2: "Automated Integration",
        option3: "Advanced Interface",
        option4: "Active Input",
        correctAnswer: 1
    },
    {
        question: "Vilket programmeringsspråk används ofta för maskininlärning?",
        option1: "Python",
        option2: "PHP",
        option3: "Swift",
        option4: "Ruby",
        correctAnswer: 1
    },
    {
        question: "Vad är ett neuralt nätverk inspirerat av?",
        option1: "Solsystemet",
        option2: "Mänskliga hjärnan",
        option3: "Internetkablar",
        option4: "DNA",
        correctAnswer: 2
    },
    {
        question: "Vilket företag utvecklade ChatGPT?",
        option1: "Google",
        option2: "Meta",
        option3: "OpenAI",
        option4: "Amazon",
        correctAnswer: 3
    },
    {
        question: "Vad är en GPU särskilt bra på?",
        option1: "Kryptering",
        option2: "3D-visualisering och parallella beräkningar",
        option3: "Databashantering",
        option4: "Webbdesign",
        correctAnswer: 2
    },
    {
        question: "Vad betyder 'Machine Learning'?",
        option1: "Datorer som skriver musik",
        option2: "Datorer som lär av data",
        option3: "Datorer som ritar bilder",
        option4: "Datorer som lagrar information",
        correctAnswer: 2
    },
    {
        question: "Vad är en algoritm?",
        option1: "En samling HTML-element",
        option2: "En sekvens instruktioner för att lösa ett problem",
        option3: "En typ av virus",
        option4: "Ett AI-verktyg",
        correctAnswer: 2
    },
    {
        question: "Vilken av följande AI-modeller är mest känd för bildgenerering?",
        option1: "DALL·E",
        option2: "MySQL",
        option3: "React",
        option4: "TensorFlow DB",
        correctAnswer: 1
    },
    {
        question: "Vad lagrar ett neuralt nätverks 'vikter'?",
        option1: "CSS-varianter",
        option2: "Nodenheter",
        option3: "Modellens inlärda kunskap",
        option4: "Webbsidans typsnitt",
        correctAnswer: 3
    },
    {
        question: "Vad är en API?",
        option1: "Ett sätt för program att kommunicera",
        option2: "En webbserver",
        option3: "En processor",
        option4: "Ett filformat",
        correctAnswer: 1
    }
]

const quizContainer = document.querySelector('.quiz-container');
const questionElement = document.getElementById('question');
const nextBtn = document.querySelector('.next');
const scoreDisplay = document.createElement('div');

let answere = document.querySelector('.answere');

let currentQuestionIndex = 0;
let score = 0;
const maxQ = questions.length;


const startGame = () => {
    currentQuestionIndex = 0;
    score = 0;
    getNewQuestion();
}

const getNewQuestion = () => {
    let q = questions[currentQuestionIndex];
    questionElement.innerText = q.question;
}

nextBtn.addEventListener('click', () => {
    currentQuestionIndex++;
    showQuestion();
})


startGame();

