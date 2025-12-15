'use strict';


// TOGGLE DARK MODE
const themeBtn = document.querySelector('.toggle-theme');
const container = document.querySelector('.container');
const logo = document.querySelector('.fa-battle-net');

themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    container.classList.toggle('dark');
    logo.classList.toggle('dark');
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

let currentQuestionIndex = 0;
let score = 0;
let userAnsweres = [];




const startGame = () => {
    currentQuestionIndex = 0;
    score = 0;
    userAnsweres = [];
    getNewQuestion();
}



// LADDA HTML sen STARTA SPELET
document.addEventListener('DOMContentLoaded', () => {
    let addName = document.querySelector('.add-header');
    let savedName = localStorage.getItem('playerName');

    addName.innerHTML = `<h2>${savedName}'s<br> QUIZ</h2>`;

    startGame();
})




const getNewQuestion = () => {
    let q = questions[currentQuestionIndex];
    container.classList.remove('result-mode');

    if (!q) showResult();
    else {
        questionElement.innerText = `${currentQuestionIndex + 1}/${questions.length} ${q.question}`;

        document.querySelectorAll('.answere').forEach((label, i) => {
            label.innerText = q['option' + [i + 1]];
        })
        document.querySelectorAll('.input').forEach(input => input.checked = false);
    }
}



nextBtn.addEventListener('click', () => {
    let q = questions[currentQuestionIndex];
    const selected = document.querySelector('input[name="answere"]:checked');

    if (!selected) {
        alert('Välj ett alternativ!')
        return;
    }
    if (!q) showResult();
    else {
        userAnsweres.push({
            answere: selected.value
        })
    }
    if (parseInt(selected.value) === q.correctAnswer) {
        score++
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        getNewQuestion();
    } else {
        showResult();
    }
})


const showResult = () => {
    let resultHtml = '';
    container.classList.add('result-mode');

    let procenten = score / questions.length * 100;

    if (score >= 7) {
        resultHtml += `<div class="vg">${procenten}% - Bra Jobbat!!</div>`;
    } else if (score == 6 || score == 5) {
        resultHtml += `<div class="g">${procenten}% - Bra!</div>`;
    } else if (score <= 4) {
        resultHtml += `<div class="ig">${procenten}% - Underkänd..</div>`;
    }
    resultHtml += '<strong>Dina svar</strong>';

    userAnsweres.forEach((item, i) => {
        const currentQuestion = questions[i];
        const userChoice = parseInt(item.answere);
        const isCorrect = userChoice === currentQuestion.correctAnswer;

        const toggleClass = i % 2 === 0 ? 'result-row even' : 'result-row odd';

        resultHtml += `
            <div class="${toggleClass}">
                <div class="result">${currentQuestion.question} - ${isCorrect ? 'rätt' : 'fel'}</div>
            </div>`;
    })
    resultHtml += `
        <div class="btn-container result-play">
            <a class="btn play" href="index.html">Play</a>
        </div>`;

    quizContainer.innerHTML = resultHtml;
}






