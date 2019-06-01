var display = $("#question-display"); 
var timer = 30; 

$(document).on("click", "#restart", function(e) { 
    quiz.reset(); 
})


$(document).on("click", ".choices", function(e) { 
    quiz.clicked(e); 
}); 

$(document).on("click", "#start", function(e) { 
    $("#timer").text(timer); 
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

  // quiz timer 

  var quiz = {
      quesNum: qNum,
      questions: questions, 
      currentQuestion: 0, 
      timer: timer, 
      correctQuestions: 0, 
      incorrectQuestions: 0, 
      countdown: function() { 
          quiz.counter--; 
          $("#timer").html(quiz.timer); 

          if (quiz.timer === 0) { 
              console.log("Time's up!");
              quiz.timeUp();
          }
      }, 
        loadQuestion: function() { 
            time = setInterval(quiz.countdown, 1000); 
            panel.html('<h4>' + questions[this.currentQuestion].question + '</h4>' );

            for (var i = 0; i<questions[this.currentQuestion].answers.length; i++) {
                panel.append('<button class="choices btn btn-primary" id="button"' + 'data-name="' + questions[this.currentQuestion].answers[i] + '">' + questions[this.currentQuestion].answers[i]+ '</button>');
                panel.append('<button class="choices btn btn-primary" id="button"' + 'data-name="' + questions[this.currentQuestion].answers[i+1] + '">' + questions[this.currentQuestion].answers[i+1]+ '</button>');
            }
        }, 
  }


  