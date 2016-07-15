
var rps = ["rock","paper","scisors"]; //global variable to minjs a bit

//gets a random number and picks from 3 choices
function aiChoice() { 
    randNum = Math.random();
    if (randNum <= 0.33) {
        return rps[0];
    }
    else if (randNum > 0.33 && randNum < 0.67) {
        return rps[1];
    }
    else {
        return rps[2];
    }
    };

function userChoice() {
    //no idea how to fill this in yet
}