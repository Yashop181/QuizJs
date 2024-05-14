
const quizData = [
    {
        question: "What is the capital of France?",
        a: "Berlin",
        b: "Paris",
        c: "London",
        d: "Rome",
        correct: "b",
    },
    {
        question: "Who wrote 'Romeo and Juliet'?",
        a: "William Shakespeare",
        b: "Charles Dickens",
        c: "Jane Austen",
        d: "Homer",
        correct: "a",
    },
    {
        question: "What is the chemical symbol for water?",
        a: "W",
        b: "H2O",
        c: "O2",
        d: "H",
    
        correct: "b",
    },
    {
        question: "Which planet is known as the Red Planet?",
        a: "Mars",
        b: "Jupiter",
        c: "Venus",
        d: "Saturn",
    
        correct: "a",
    },
    {
        question: "What is the largest mammal in the world?",
        a: "Elephant",
        b: "Blue whale",
        c: "Giraffe",
        d: "Polar bear",
        correct: "b",
    },
];


const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz()
{
    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]
    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers()
{
    answerEls.forEach(answerEls => answerEls.checked = false)
}


function getSelected()
{
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked)
            {
                answer = answerEl.id
            }
    })
    return answer
}

submitBtn.addEventListener('click', ()=>{
    const answer = getSelected()
    
    if(answer)
        {
            if(answer === quizData[currentQuiz].correct)
                {
                    score++
                }
            currentQuiz++
            if(currentQuiz < quizData.length)
                {
                    loadQuiz()
                }
            else
            {
                quiz.innerHTML = `
                    <h2>You answered correctly at ${score}/${quizData.length} questions </h2>
                    <button onclick="location.reload()">Reload</button>
                `
            }
        }
})