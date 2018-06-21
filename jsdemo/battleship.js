"use static";

var location1 = 3;
var location2 = 4;
var location3 = 5;
var guess;
var hits = 0;
var guesses = 0;
var isSank = false;
while (isSank == false){
    guess = prompt ("Ready,aim,fire!(enter a number form 0-6);");
    if (guess <0 || guess > 6){
        alert("Please enter a valid cell number!");
    }else{
        guesses += 1;
        if(guess ==location1 || guess == location2 || guess == location3){
            alert("Hits!");
            hits += 1;
            if(hits == 3){
                isSank = true;
                alert("You sank my ship!");
            }
        }else{
            alert("Miss!");
        }
    }
}
var stats = "You took"+ guesses + "guesses to sank the battleship," +
    "which means your shooting accuracy was "+ (3/guesses);
alert(stats);