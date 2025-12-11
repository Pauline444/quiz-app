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
    // Nollställ allt vid omstart
    currentQuestionIndex = 0;
    score = 0;
    userAnsweres = [];
    getNewQuestion();
}



const showResult = () => {
    let resultHtml = '';
    // lägg till en klass för att öka höjden på containern när resultatet visas
    container.classList.add('result-mode');
    //räkna ut hur många procent användaren fått
    let procenten = score / questions.length * 100;

    // visa betyg baserat på poäng
    if (score >= 7) {
        resultHtml += `<div class="vg">${procenten}% - Bra Jobbat!!</div>`;
    } else if (score == 6 || score == 5) {
        resultHtml += `<div class="g">${procenten}% - Bra!</div>`;
    } else if (score <= 4) {
        resultHtml += `<div class="ig">${procenten}% - Underkänd..</div>`;
    }
    resultHtml += '<strong>Dina svar</strong>';

    // loopa igenom userAnsweres array med alla sparade svar från användaren
    // skriv ut alla frågor och visa användaren om hen svarat rätt eller fel
    userAnsweres.forEach((item, i) => {

        const currentQuestion = questions[i]; // hämta frågan med samma index
        const userChoice = parseInt(item.answere); // hämta användarens svar och gör om till integer(tal)
        const isCorrect = userChoice === currentQuestion.correctAnswer; // jämför svaret med rätta svaret

        // snygga till designen med zebra bakgrund för att öka läsbarheten
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

    // lägg in resultat html i quiz-container som innan hade visat frågorna
    quizContainer.innerHTML = resultHtml;
}



const getNewQuestion = () => {
    let q = questions[currentQuestionIndex];
    // ta bort klassen för att minska höjden på containern
    container.classList.remove('result-mode');
    // om det inte finns några frågor kvar, visa resultatet
    if (!q) showResult();
    else {
        // h3 elementet som visar vilken av frågorna du är på, hur många som är kvar, samt frågan
        questionElement.innerText = `${currentQuestionIndex + 1}/${questions.length} ${q.question}`;

        // loopar igenom varje svar och skriver ut de fyra alternativen i html med name answere
        document.querySelectorAll('.answere').forEach((label, i) => {
            label.innerText = q['option' + [i + 1]];
        })
        // avmarkerar varje radiobtn till nästa sida
        document.querySelectorAll('.input').forEach(input => input.checked = false);
    }
}



nextBtn.addEventListener('click', () => {
    let q = questions[currentQuestionIndex];

    const selected = document.querySelector('input[name="answere"]:checked');
    // om ingen fråga är vald, popup alert!
    if (!selected) {
        alert('Välj ett alternativ!')
        return;
    }
    // om frågorna tar slut visa resultatet
    // annars lägg in varje svar från användaren i ny array 
    if (!q) showResult();
    else {
        userAnsweres.push({
            answere: selected.value
        })
    }
    // gör om värdet från användarens val till integer(tal) ist för string för att matcha rätta svarets integer(tal)
    if (parseInt(selected.value) === q.correctAnswer) {
        score++
    }
    // öka index med 1 hela tiden så att nästa fråga laddas från questions arrayen
    currentQuestionIndex++;

    // om frågornas index är mindre än antalet frågor (om det finns frågor kvar) ladda en ny fråga
    // annars visa resultatet
    if (currentQuestionIndex < questions.length) {
        getNewQuestion();
    } else {
        showResult();
    }
})



// Hämta användarens namn från localStorage + Starta spel, när all html har laddat
document.addEventListener('DOMContentLoaded', () => {
    let addName = document.querySelector('.add-header');
    let savedName = localStorage.getItem('playerName');
    // skriv ut sparade namnet i html dokumentet
    addName.innerHTML = `<h2>${savedName}'s<br> QUIZ</h2>`;

    startGame();
})

