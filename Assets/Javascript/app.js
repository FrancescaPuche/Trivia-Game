var display = $("#question-display"); 
var timer = 30; 

$(document).on("click", "#restart", function(e) { 
    quiz.reset(); 
})


$(document).on("click", ".choices", function(e) { 
    quiz.clicked(e); 
}); 

$(document).on("click", "#start", function(e) { 
    // $("#timer").text(timer); 
    $("#timeHere").prepend("<h3 class='text-center'>Timer: <span id='timer'>30</span> seconds</h3>")
    quiz.loadQuestion(); 
}); 

var questions = [
    {
        qNum: 1,
        question: "Curacao is a small country in the Carribean",
        answers: ["True", "False"],
        correctAnswer: "True"
    }, 
    {
        qNum: 2,
        question: "Montana is the least populated state in the US.",
        answers: ["True", "False"],
        correctAnswer: "True",
    }, 
    {
        qNum: 3,
        question: "The Nile River is the longest river in the world",
        answers: ["True", "False"],
        correctAnswer: "True"
    }, 
    {
        qNum: 4,
        question: "The country of Greenland is the same size as the continent of Africa ",
        answers: ["True", "False"],
        correctAnswer: "False",
    },
    {
        qNum: 5,
        question: "Alaska was the last state in the US to become a state.",
        answers: ["True", "False"],
        correctAnswer: "False"
    }, 
    {
        qNum: 6,
        question: "Sydney is the captial of Australia.",
        answers: ["True", "False"],
        correctAnswer: "False",
    },
    {
        qNum: 7,
        question: "Lake Michigan is surrounded by two countries.",
        answers: ["True", "False"],
        correctAnswer: "True"
    }, 
    {
        qNum: 8,
        question: "90% of the Earth's population lives in the northern hemisphere.",
        answers: ["True", "False"],
        correctAnswer: "True",
    },
    {
        qNum: 9,
        question: "California has more people than all of Canada",
        answers: ["True", "False"],
        correctAnswer: "True",
    },
    {
        qNum: 10,
        question: "Russia spans 10 time zones.",
        answers: ["True", "False"],
        correctAnswer: "False",
    }
  ];
 
var quiz = {
    questions: questions, 
    currentQuestion: 0, 
    counter: timer, 
    correctQuestions: 0, 
    incorrectQuestions: 0, 
    countdown: function() { 
        quiz.counter--; 
        $("#timer").html(quiz.counter); 
        quiz.counter--; 

        if (quiz.counter === 0) { 
            console.log("Time's up!");
            quiz.timeUp();
        }
    }, 
    loadQuestion: function() { 
        time = setInterval(quiz.countdown, 1000); 
        display.html('<h4>' + questions[this.currentQuestion].question + '</h4>' );

        for (var i = 0; i<questions[this.currentQuestion].answers.length; i++) {
            display.append('<button class="choices btn btn-primary" id="button"' + 'data-name="' + questions[this.currentQuestion].answers[i] + '">' + questions[this.currentQuestion].answers[i] + '</button><br>');
        }
    }, 
    nextQuestion: function() { 
        quiz.counter = timer; 
        $("#timer").html(quiz.counter); 
        quiz.currentQuestion++; 
        quiz.loadQuestion(); 
    }, 

    timeUp: function() { 
        clearInterval(quiz.counter); 
        $("#timer").html(game.counter); 

        display.html("<h3>Time's up!</h3>"); 
        display.append("<h4> Correct Answer: " + questions[this.currentQuestion].correctAnswer);

        if (quiz.currentQuestion === questions.length - 1) { 
            setTimeout(quiz.results, 3000); 
        }
        else { 
            setTimeout(quiz.nextQuestion, 3000); 
        }
    }, 

    results: function() { 
        clearInterval(quiz.counter);

        display.html('<h3>All done, heres how you did!</h3>');
        $('#timer').html(quiz.counter);
        display.append('<h4>Correct Answers: ' + quiz.correct + '</h4>');
        display.append('<h4>Incorrect Answers: ' + quiz.incorrect + '</h4>');
        display.append('<h4>Unanswered: ' + (questions.length - (quiz.incorrect + quiz.correct)) + '</h4>');
        display.append('<br><button id="start-over">Start Over?</button>');
    },
    clicked: function(e) { 
        clearInterval(quiz.counter); 

        if ($(e.target).data("name") === questions[this.currentQuestion].correctAnswer) { 
            this.answeredCorrectly(); 
        }
        else { 
            this.answeredIncorrectly(); 
        }
    }, 
    answeredIncorrectly: function() { 
        quiz.incorrect++; 
        console.log(quiz.incorrect); 
        clearInterval(quiz.counter); 
        display.html("<h3>Sorry! Wrong answer.</h3>"); 
        display.append("<h3>Correct answer is: " + questions[this.currentQuestion].correctAnswer + "</h3>"); 
    
        if (quiz.currentQuestion === questions.length - 1) { 
            setTimeout(quiz.results, 3000); 
        }
        else { 
            setTimeout(quiz.nextQuestion, 3000); 
        }
    },
    answeredCorrectly: function() { 
        clearInterval(quiz.counter); 
        quiz.correct++; 
        display.html("<h3> Correct!</h3>"); 

        if (quiz.currentQuestion === questions.length - 1) {
            setTimeout(quiz.results, 3000); 
        }
        else { 
            setTimeout(quiz.nextQuestion, 3000); 
        }
    },
    reset: function(){
        this.currentQuestion = 0;
        this.counter = timer;
        this.correct = 0;
        this.incorrect = 0;
        this.loadQuestion();
    }

};


  