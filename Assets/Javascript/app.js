var display = $("#question-display"); 
var timer = 30; 


$(document).on("click", ".choices", function(e) { 
    game.clicked(e); 
}); 

$(document).on("click", "#start", function(e) { 
    $("#timer").text(timer); 
    game.loadQuestion(); 
}); 

var quizQuestions = [
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

  