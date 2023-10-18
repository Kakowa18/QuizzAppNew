let questions = [
    {
        'question': 'Welche Programmiersprache hat ein älteres Entstehungsdatum?',
        'answer_1': 'Python',
        'answer_2': 'Javascript',
        'answer_3': 'C',
        'answer_4': 'C++',
        'right_answer': 3
    },
    {
        'question': 'Welche Programmiersprache wird weltweit am häufigsten genutzt? (stand: 2022)',
        'answer_1': 'Java',
        'answer_2': 'Python',
        'answer_3': 'Javascript',
        'answer_4': 'C#',
        'right_answer': 2
    },
    {
        'question': 'Welcher Browser hat nach Chrome den größten Marktanteil weltweit? (stand: 2022)',
        'answer_1': 'Safari',
        'answer_2': 'Firefox',
        'answer_3': 'Edge',
        'answer_4': 'Opera',
        'right_answer': 1
    },
    {
        'question': 'Welcher der folgenden Begriffe bezeichnet die kleinste Einheit von Daten in einem Computer?',
        'answer_1': 'Byte',
        'answer_2': 'Kilobyte',
        'answer_3': 'Megabyte',
        'answer_4': 'Bit',
        'right_answer': 4
    }
];

let curentQuestion = 0;
let correctAnswers = 0;

function init() {
    let lengthOfQuestions = document.getElementById('length-of-four');
    lengthOfQuestions.innerHTML = `${questions.length}`;

    showQuestion();
    disableBtn();
}

function disableBtn() {
    document.getElementById('nextQuestion').disabled = true;
}


function showQuestion() {

    let currentQuestionText = document.getElementById('current-question');
    currentQuestionText.innerHTML = `<h2>${questions[curentQuestion]['question']}</h2>`;

    let firstAnswer = document.getElementById('answer_1');
    let secondAnswer = document.getElementById('answer_2');
    let thirdAnswer = document.getElementById('answer_3');
    let fourthAnswer = document.getElementById('answer_4');

    firstAnswer.innerHTML = `${questions[curentQuestion]['answer_1']}`;
    secondAnswer.innerHTML = `${questions[curentQuestion]['answer_2']}`;
    thirdAnswer.innerHTML = `${questions[curentQuestion]['answer_3']}`;
    fourthAnswer.innerHTML = `${questions[curentQuestion]['answer_4']}`;

}

function clickOnButton(selection) {

    

    document.getElementById('nextQuestion').disabled = false;
    let answer = document.getElementById(selection);
    let lastCharacter = selection.slice(-1);

    let greenAnswer = document.getElementById('answer_3');

    if (lastCharacter == questions[curentQuestion]['right_answer']) {
        answer.classList.add('new-background-color-green');
        answer.classList.add('new-background-color-green:hover');
        correctAnswers++;

    } else {
        answer.classList.add('new-background-color-red');
        answer.classList.add('new-background-color-red:hover');
        greenAnswer.classList.add('new-background-color-green')
    }

    

}

function nextQuestion() {
    curentQuestion++;

    let percent = curentQuestion / questions.length;
    percent = Math.round(percent * 100);
    document.getElementById('progress').innerHTML = `${percent} %`;
    document.getElementById('progress').style.width = `${percent}%`;
    if (curentQuestion >= 4) {
        document.getElementById('showWhenFinish').style = '';
        document.getElementById('alwaysShown').style = "display: none !important";
        document.getElementById('main-img-topic').src = 'img/winner.jpg';
        document.getElementById('main-img-topic').classList.add('newBorder');
        document.getElementById('lengthOfJson').innerHTML = questions.length;
        document.getElementById('correctAnswers').innerHTML = correctAnswers;
        document.getElementById('progress').style.width = `100%`;
        document.getElementById('showWhenFinish').innerHTML += `
        <div class="progress">
                    <div class="progress-bar progress-bar-striped progress-bar-animated blue-color" role="progressbar"
                        aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="width: 100%" id="progress"></div>
                </div>
        `;
    } else {


        document.getElementById('current-question-number').innerHTML = `${curentQuestion + 1} `;
        document.getElementById('nextQuestion').disabled = true;
        let currentQuestionText = document.getElementById('current-question');
        currentQuestionText.innerHTML = `<h2>${questions[curentQuestion]['question']}</h2>`;

        let firstAnswer = document.getElementById('answer_1');
        let secondAnswer = document.getElementById('answer_2');
        let thirdAnswer = document.getElementById('answer_3');
        let fourthAnswer = document.getElementById('answer_4');

        firstAnswer.innerHTML = `${questions[curentQuestion]['answer_1']}`;
        secondAnswer.innerHTML = `${questions[curentQuestion]['answer_2']}`;
        thirdAnswer.innerHTML = `${questions[curentQuestion]['answer_3']}`;
        fourthAnswer.innerHTML = `${questions[curentQuestion]['answer_4']}`;

        resetColor();
    }
}

function resetColor() {
    document.getElementById('answer_1').classList.remove('new-background-color-green');
    document.getElementById('answer_1').classList.remove('new-background-color-red');
    document.getElementById('answer_2').classList.remove('new-background-color-green');
    document.getElementById('answer_2').classList.remove('new-background-color-red');
    document.getElementById('answer_3').classList.remove('new-background-color-green');
    document.getElementById('answer_3').classList.remove('new-background-color-red');
    document.getElementById('answer_4').classList.remove('new-background-color-green');
    document.getElementById('answer_4').classList.remove('new-background-color-red');

    disableBtn();
}