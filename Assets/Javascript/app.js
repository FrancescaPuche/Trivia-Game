var display = $("#question-display"); 
var timer = 30; 


$(document).on("click", ".choices", function(e) { 
    game.clicked(e); 
}); 

$(document).on("click", "#start", function(e) { 
    $("#timer").text(timer); 
    game.loadQuestion(); 
}); 

