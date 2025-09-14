var questionsArr = [
    {
        question: 'Four multiplied by seven is twenty-eight.',
        answer: true
    },
    {
        question: 'Twenty-one divided by three is six.',
        answer: false
    },
    {
        question: 'Five multiplied by thirteen is sixty-five.',
        answer: true
    },
    {
        question: 'Sixty-four divided by sixteen is four.',
        answer: true
    },
    {
        question: 'Eight multiplied by thirteen is ninety-six.',
        answer: false
    }
]

function runQuiz () {
    var score = 0;
    var totalQuestions = questionsArr.length;
    for (var i = 0; i < questionsArr.length; i++) {
        var userAnswerString = prompt(questionsArr[i].question + " (True/False)");
        var finalAnswer = userAnswerString.toLowerCase();
        var userAnswerBoolean;
        if (finalAnswer === 'true') {
            userAnswerBoolean = true;
        } else if (finalAnswer === 'false') {
            userAnswerBoolean = false;
        } else {
            userAnswerBoolean = null; 
        }
        if (userAnswerBoolean === questionsArr[i].answer) {
            score++;
        }
    }
    var percentageScore = score/totalQuestions * 100;
    alert("You scored " + Math.round(percentageScore) + "%!")
}