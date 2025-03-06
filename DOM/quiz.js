const quizData = [
    {
        question: "Which language runs in a web browser?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d",
    },
    {
        question: "What does CSS stand for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        correct: "b",
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },
];

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const atext = document.getElementById('a-text')
const btext = document.getElementById('b-text')
const ctext = document.getElementById('c-text')
const dtext = document.getElementById('d-text')
const submit = document.getElementById('submit')

let current = 0
let score = 0

loadQuiz()

function loadQuiz() {
    deselectAnswers()

    const currentQuizData = quizData[current]

    questionEl.innerText = currentQuizData.question
    atext.innerText = currentQuizData.a
    btext.innerText = currentQuizData.b
    ctext.innerText = currentQuizData.c
    dtext.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer

    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })

    return answer
}

submit.addEventListener('click', () => {
    const answer = getSelected()
    
    if(answer) {
        if(answer == quizData[current].correct) {
            score=score+1
        }

        current++

        if(current < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `
                <h2>You answered ${score}/${quizData.length} questions correctly</h2>

                <button onclick="location.reload()">Reload</button>
            `
        }
    }
})




























































// let questionCount = 0;
// let questionNumb = 1;
// let userScore = 0;

// const nextBtn = document.querySelector('.submit');
// nextBtn.onclick = () => {
//     if(questionCount < questions.length - 1){

//         questionCount++;
//         showQuestions(questionCount);

//         questionNumb++;
//         questionCounter(questionNumb);

//         // nextBtn.classList.remove('active');
//     }
//     else{
//         // console.log("Questions Completed");
//         showResultBox();
//     }
// }

// const optionList=document.querySelector(".option_all")

// function showQuestions(index){
//     const questionText=document.querySelector(".question")
//     optionsList.innerHTML = optionTag;

//     const option = document.querySelectorAll('.option');
//     for(let i=0;i<option.length;i++){
//         option[i].setAttribute('onclick','optionSelected(this)');
//     }
// }

// function optionSelected(answer){
//     let userAnswer = answer.textContent;
//     let correctAnswer = questions[questionCount].answer;
//     let alloptions = optionsList.children.length;


//     if(userAnswer == correctAnswer){
//         answer.classList.add('correct');
//         userScore +=1;
//         headerScore();
//     }
//     else{
//         answer.classList.add('incorrect');
//         for(let i=0;i<alloptions;i++){
//             if(optionsList.children[i].textContent == correctAnswer){
//                 optionsList.children[i].setAttribute('class','option correct');
//             }
//         }

//     }

//     for(let i=0;i<alloptions;i++){
//         optionsList.children[i].classList.add('disabled');
//     }
//     nextBtn.classList.add('active');
// }
// function questionCounter(index){
//     const questionTotal = document.querySelector('.question-total');
//     questionTotal.textContent = `${index} of ${questions.length} Questions`;
// }