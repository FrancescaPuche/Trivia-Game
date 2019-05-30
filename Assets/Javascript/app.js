 


$(document).ready(function() {
    // Global Variables for quiz and timer
    var correctAnswers = 0;
    var wrongAnswers = 0;
    var notAnswered = 0; 

    var timer = {
        minutes: 6, 
        seconds: 59
    };
    var intervalId;
    var running = false;

    /***************************************************/

    // Function to run the timer 
    function runTimer(){
        if (!running) {
        intervalId = setInterval(countDown(), 50000); 
        running = true;
        }
    }
    // Function to count down the minute and seconds 
    function countDown() {
        $("#timer").text(timer.minutes + ":" + timer.seconds);
        timer.seconds--; 

        if (timer.seconds < 0) {

            return timer.seconds--; 
        } 

        if (timer.seconds === 0) { 
            timer.minutes = timer.minutes - 1; 

            return timer.seconds = 59;
        }

        if (timer.minutes === 0 && timer.seconds === 0) { 
            stop();
            $("#timer").text("Time's Up!");
        }	
    }
    // Function to stop the timer (must add that the user cannot continue the quiz if the time is up)
    function stop() {
        running = false;
        clearInterval(intervalId);
    }

    runTimer();

    /***************************************************/

    // Function making sure that the user cannot change their answer once they clicked on one
    function quiz() { 
        function getResult() {

            var quesOne = $('input:question[name="one"]:checked').val();
            // console.log("Value of Q1 is : "+Q1);
            var quesTwo = $('input:question[name="two"]:checked').val();
            var quesThree = $('input:question[name="three"]:checked').val();
            var quesFour = $('input:question[name="four"]:checked').val();
            var quesFive = $('input:question[name="five"]:checked').val();
            var quesSix = $('input:question[name="six"]:checked').val();
            var quesSeven = $('input:question[name="seven"]:checked').val();
            var quesEight = $('input:question[name="eight"]:checked').val();
            var quesNine = $('input:question[name="nine"]:checked').val();
            var quesTen = $('input:question[name="ten"]:checked').val();
         
        }
    }

    // Function for sumbit button - must make sure the user cannot submit quiz until all questions have an answer
    function submit() { 

    }

    
    function rightAnswers() { 
    
    }

    
    function wrong() { 

    }

    // Function calculating and displaying the final score
    function score(){ 

    }

});