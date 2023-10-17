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
        'answer_2': 'Javascript',
        'answer_3': 'Python',
        'answer_4': 'C#',
        'right_answer': 3
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


function init() {
    let lengthOfQuestions = document.getElementById('length-of-four');
    lengthOfQuestions.innerHTML = `${questions.length}`; 
}

