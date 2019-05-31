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
        correctAnswer: "",
    }, 
    {
        qNum: 3,
        question: " ",
        answers: ["True", "False"],
        correctAnswer: ""
    }, 
    {
        qNum: 4,
        question: " ",
        answers: ["True", "False"],
        correctAnswer: "",
    },
    {
        qNum: 5,
        question: " ",
        answers: ["True", "False"],
        correctAnswer: ""
    }, 
    {
        qNum: 6,
        question: " ",
        answers: ["True", "False"],
        correctAnswer: "",
    },
    {
        qNum: 7,
        question: " ",
        answers: ["True", "False"],
        correctAnswer: ""
    }, 
    {
        qNum: 8,
        question: " ",
        answers: ["True", "False"],
        correctAnswer: " ",
    },
    {
        qNum: 9,
        question: " ",
        answers: ["True", "False"],
        correctAnswer: "",
    },
    {
        qNum: 10,
        question: " ",
        answers: ["True", "False"],
        correctAnswer: "",
    }
  ];

  