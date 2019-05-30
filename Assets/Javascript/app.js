 


$(document).ready(function() {

    var correctAnswers = 0;
    var wrongAnswers = 0;
    var timer = {
        minutes: 6, 
        seconds: 59
    };
    var intervalId;
    var running = false;

    function runTimer(){
        if (!running) {
        intervalId = setInterval(countDown(), 50000); 
        running = true;
        }
    }

    function countDown () {
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
    
    function stop() {
        running = false;
        clearInterval(intervalId);
    }

    runTimer();


});