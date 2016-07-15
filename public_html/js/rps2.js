
var rps = ["rock","paper","scissors"]; //global variable to minjs a bit

//global counter variables
var rcount = 0;
var pcount = 0;
var scount = 0;
var tcount = 0; //tie count
var total = 0;

function aiMath() { //gets a random number and picks from 3 choices
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


//for returning the id of the clicked element
function userClick(idClick) {
    if (idClick === 'rockbtn') {
        userChoice = rps[0];
    }
    else if (idClick === 'paperbtn') {
        userChoice = rps[1];
    }
    else {
        userChoice = rps[2];
    }
    aiChoice = aiMath();
    document.getElementById('aiAnswer').innerHTML = aiChoice;
    document.getElementById('userAnswer').innerHTML = userChoice;
    compare(userChoice, aiChoice);
    };


//compare function
function compare(choice1, choice2) {
    
    //tie:
    if (choice1 === choice2) {
        document.getElementById('result').innerHTML = "TIE!";
        tcount++;
        total++;
    }
    
    //rock vs paper else
    else if (choice1 === rps[0]) {
        if (choice2 === rps[1]) {
            document.getElementById('result').innerHTML = "AI WINS!";
            pcount++;
            total++;
        }
        else {
            document.getElementById('result').innerHTML = "USER WINS!";
            rcount++;
            total++;
        }
    }
    
    //paper vs rock else
    else if (choice1 === rps[1]) {
        if (choice2 === rps[0]) {
            document.getElementById('result').innerHTML = "USER WINS!";
            pcount++;
            total++;
        }
        else {
            document.getElementById('result').innerHTML = "AI WINS!";
            rcount++;
            total++;
        }
    }
    
    //scissors vs rock else
    else if (choice1 === rps[2]) {
        if (choice2 === rps[0]) {
            document.getElementById('result').innerHTML = "AI WINS!";
            scount++;
            total++;            
        }
        else {
            document.getElementById('result').innerHTML = "USER WINS!";
            rcount++;
            total++;
        }
    }
}


