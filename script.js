const questionBag = [{
        id: 1,
        question: "What is hoisting in Javascript",
        category: "javascript",
        difficulty: 1,
        answers: [{
                id: 1,
                answer: "Movement of initialized variables to the top of a module/file for module/file-wide access"
            },
            {
                id: 2,
                answer: "Repositioning of a flag to the top of a pole"
            },
            {
                id: 3,
                answer: "A technique for dynamic styling of Vue components"
            },
            {
                id: 4,
                answer: "Repeated usage of the command line interface"
            },
        ],
        answerId: 1
    },
    {
        id: 2,
        question: "What is the name of NodeJS's creator",
        category: "javascript",
        difficulty: 1,
        answers: [{
                id: 1,
                answer: "Darken Rahl"
            },
            {
                id: 2,
                answer: "Ryan Dahl"
            },
            {
                id: 3,
                answer: "Milin Shah"
            },
            {
                id: 4,
                answer: "Burnaboy"
            },
        ],
        answerId: 2
    },
    {
        id: 3,
        question: "In Javascript, 0.2 + 0.3 = 0.4",
        category: "javascript",
        difficulty: 1,
        answers: [{
                id: 1,
                answer: "True"
            },
            {
                id: 2,
                answer: "Certainly true"
            },
            {
                id: 3,
                answer: "Maybe true"
            },
            {
                id: 4,
                answer: "False"
            },
        ],
        answerId: 4
    },
    {
        id: 4,
        question: "Which of these is not a way to create an Object in Javascript",
        category: "javascript",
        difficulty: 1,
        answers: [{
                id: 1,
                answer: "Object.create()"
            },
            {
                id: 2,
                answer: "Object.assign()"
            },
            {
                id: 3,
                answer: "{}"
            },
            {
                id: 4,
                answer: "Object.initialize({})"
            },
        ],
        answerId: 4
    },
    {
        id: 5,
        question: "What does the global object refer to in a Chromium environment",
        category: "javascript",
        difficulty: 1,
        answers: [{
                id: 1,
                answer: "Window"
            },
            {
                id: 2,
                answer: "Garage"
            },
            {
                id: 3,
                answer: "This"
            },
            {
                id: 4,
                answer: "Context"
            },
        ],
        answerId: 1
    },
    {
        id: 6,
        question: "What is referential transparency",
        category: "javascript",
        difficulty: 2,
        answers: [{
                id: 1,
                answer: "A condition where a function returns it's direct inputs without any processing"
            },
            {
                id: 2,
                answer: "A condition where a function can be replaced by its return value effectively"
            },
            {
                id: 3,
                answer: "A condition where a function accepts integers and returns a boolean"
            },
            {
                id: 4,
                answer: "A condition where a function has a 'null' parameter"
            },
        ],
        answerId: 2
    },
    {
        id: 7,
        question: "At what range does Javascript throw a 'StackFramesExceeded' error",
        category: "javascript",
        difficulty: 1,
        answers: [{
                id: 1,
                answer: "135000"
            },
            {
                id: 2,
                answer: "13500"
            },
            {
                id: 3,
                answer: "210000"
            },
            {
                id: 4,
                answer: "21000"
            },
        ],
        answerId: 4
    },
    {
        id: 8,
        question: "What will be the return type of 'function(x)/n{return x===1}'",
        category: "javascript",
        difficulty: 2,
        answers: [{
                id: 1,
                answer: "Boolean"
            },
            {
                id: 2,
                answer: "Integer"
            },
            {
                id: 3,
                answer: "Float"
            },
            {
                id: 4,
                answer: "String"
            },
        ],
        answerId: 1
    },
    {
        id: 9,
        question: "What is the difference between Array.forEach and Array.map",
        category: "javascript",
        difficulty: 1,
        answers: [{
                id: 1,
                answer: "Map runs a function in reverse order while ForEach runs in order"
            },
            {
                id: 2,
                answer: "Map accepts predicates only, while ForEach accepts all expressions"
            },
            {
                id: 3,
                answer: "ForEach returns null, while Map returns an array"
            },
            {
                id: 4,
                answer: "Map opens up the OS local google maps, while ForEach does not"
            },
        ],
        answerId: 2
    },
    {
        id: 10,
        question: "When is a function refered to as an Identity",
        category: "javascript",
        difficulty: 3,
        answers: [{
                id: 1,
                answer: "When it returns its direct inputs without any processing"
            },
            {
                id: 2,
                answer: "When it can successfully call another function and pass null inputs"
            },
            {
                id: 3,
                answer: "When it is utilized as an error handler"
            },
            {
                id: 4,
                answer: "Wizkid"
            },
        ],
        answerId: 1
    },
    {
        id: 11,
        question: "Which of these is not an array method",
        category: "javascript",
        difficulty: 1,
        answers: [{
                id: 1,
                answer: "Array.flat"
            },
            {
                id: 2,
                answer: "Array.map"
            },
            {
                id: 3,
                answer: "Array.plot"
            },
            {
                id: 4,
                answer: "Array.pop"
            },
        ],
        answerId: 1
    },
    {
        id: 12,
        question: "When a function accepts no arguments, it is sometimes referred to as a ______ function",
        category: "javascript",
        difficulty: 3,
        answers: [{
                id: 1,
                answer: "Higher Abstract"
            },
            {
                id: 2,
                answer: "Concise"
            },
            {
                id: 3,
                answer: "Referential"
            },
            {
                id: 4,
                answer: "Point Free"
            },
        ],
        answerId: 4
    },
]

const quetsElm = document.getElementById('question');
const optionAElm = document.getElementById('a_text');
const optionBElm = document.getElementById('b_text');
const optionCElm = document.getElementById('c_text');
const optionDElm = document.getElementById('d_text');
let nextElm = document.getElementById('next');
let prevElm = document.getElementById('prev');
const answersEl = document.querySelectorAll('.answer');
let quizcontElm = document.getElementById('quiz');
let submitbtn = document.getElementById('subbtn');
let qnumber = document.getElementById('qnumber');
const qLength = document.getElementById('qlength');

var currentquiz = 0;
let score = 0;
let answerArr = [];
let answerMap = new Map()
qLength.innerHTML = questionBag.length;


loadQuestion();
deSelect();
getQuiz();

function loadQuestion() {
    deSelect();
    const quizQuestion = questionBag[currentquiz];
    quetsElm.innerText = quizQuestion.question;
    optionAElm.innerText = quizQuestion.answers[0].answer;
    optionBElm.innerText = quizQuestion.answers[1].answer;
    optionCElm.innerText = quizQuestion.answers[2].answer;
    optionDElm.innerText = quizQuestion.answers[3].answer;
    answerArr.push(quizQuestion.answerId);
    // getSelectedRadioButtonID();
    let answer = getSelectedRadioButtonID();
    if (answer) {
        if (answer == questionBag[currentquiz].answerId) {
            score++;
        }
   
}
    if (currentquiz === 0) {
        prevElm.style.display = "none";
    } else {
        prevElm.style.display = "block";
        nextElm.style.display ="block";
    }
    // console.log(questionBag.length + "questionbag");
    // prevElm.style.display = "none";
    // if (currentquiz + 1 === questionBag.length) {
    //     nextElm.style.display = "none";
    // } else {
    //     nextElm.style.display = "block";
    // }
    if (currentquiz + 1 != questionBag.length) {
        submitbtn.style.display = "none";
    } else {
        submitbtn.style.display = "block";
        nextElm.style.display ="none";
    }
    

}

function getSelectedRadioButtonID() {
    // console.log(answersEl);
    let answer;
    answersEl.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
            // console.log(
            //     answer
            // );

            // get question index
            // get value of question index in answer array
            // replace value

            // localStorage.setItem('correct', answer);
        // answerArr.push(answer);
        answerMap.set(currentquiz, answer);
        }
    });
    // console.log(answerArr);
    // console.log(answerMap);
    return answer;
}

function deSelect() {
    answersEl.forEach((answersEl) => {
        answersEl.checked = false;
    });
}
   
nextElm.addEventListener('click', () => {
    let answer = getSelectedRadioButtonID();
    if (answer) {
        if (answer == questionBag[currentquiz].answerId) {
            score++;
        }
        console.log(answerArr);
        currentquiz++;
        qnumber.innerHTML = currentquiz + 1;
        if (currentquiz < questionBag.length) {
            localStorage.setItem('correct', answer);
            loadQuestion();
        }
    }
    let mychecked = answerMap.get(currentquiz);
    // console.log(mychecked);
    answersEl.forEach((answerEl) => {
        // console.log(answerEl.id);
        for (let i = currentquiz; i < questionBag.length; i++) {
            if (mychecked == answerEl.id) {
                answerEl.checked = true;
            }
        }
    });
});

prevElm.addEventListener('click', () => {
    let answer = getSelectedRadioButtonID();
    if (currentquiz === 0) {
        return;
    } else {
        currentquiz--;
        qnumber.innerHTML = currentquiz + 1;
        loadQuestion();
        // localStorage.getItem("answer");
    }
    let mychecked = answerMap.get(currentquiz);
    // console.log(mychecked);
    answersEl.forEach((answerEl) => {
        // console.log(answerEl.id);
        for (let i = currentquiz; i < questionBag.length; i++) {
            if (mychecked == answerEl.id) {
                answerEl.checked = true;
            }
        }
    });

});
 
function submitAnswer() {
    if (score > questionBag.length / 2) {
        quizcontElm.innerHTML = `<h2>you score ${score} out of ${questionBag.length} qusetions Keep it up </h2>
        <button onclick="location.reload()" style="width:100%">Reload...
        </button> `;

    } else {
        quizcontElm.innerHTML = `<h2>you score ${score} out of ${questionBag.length} qusetions You can do better </h2>
        <button onclick="location.reload()" style="width:100%">Reload...
        </button> `;
    }
    let count = 0;
    if (answerMap.get(currentquiz)==answerArr[currentquiz]){
        count++
        score = count;
    }
    console.log(count);
    loadQuestion();
    // let answer = getSelectedRadioButtonID();
    // if(answer){
    //     if(answer == questionBag[currentquiz].answerId){
    //         score++;
    //     }
  

//    for(let i = currentquiz; i < questionBag.length; i++){
//        if(answerMap.set(currentquiz, answer)== questionBag[currentquiz].answerId){
//            score++;
//        }
//    }
console.log(count);
}

let count = 60;
let minute = 5;
var interval = setInterval(function() {
    document.getElementById('timer').innerHTML = minute + "m:" + count + "s";
    count--;
    if (count === 0) {
        minute--;
        count = 60;
        if (minute === 0) {
            count = 0;
            minute = 0;
            alert("You're out of time!");
            submitAnswer();
            clearInterval(interval);
            document.getElementById('countdemo').innerHTML = 'Done';
            // or...
            // alert("You're out of time!");
        }
    }
}, 1000);

async function getQuiz() {
    let quizt = await fetch('https://opentdb.com/api.php?amount=10');
    console.log(quizt);
}