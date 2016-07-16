
var rps = ["rock","paper","scissors"]; //global variable to minjs a bit

//global counter variables
var rcount = 0; //rock count
var pcount = 0; //paper count
var scount = 0;// scissors count
var ucount = 0; //user count
var acount = 0; //ai count
var tcount = 0; //tie count
var total = 0; //total count

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
    }


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
    
    
        
    compare(userChoice, aiChoice);
    
    document.getElementById('aiAnswer').innerHTML = acount;
    document.getElementById('userAnswer').innerHTML = ucount;
    }


//compare function
function compare(choice1, choice2) {
    
    //tie:
    if (choice1 === choice2) {
        document.getElementById('result').innerHTML = "DRAW!";
        tcount++;
        total++;
        document.getElementById("total").innerHTML = total;
        document.getElementById("tcount").innerHTML = tcount;
        document.getElementById("arrows").innerHTML = "&#8615;";
        if(tcount === 0) {
            document.getElementById("tietext").innerHTML = "DRAWN";
        }
        else if (tcount > 0 && tcount < 2)  {
            document.getElementById("tietext").innerHTML = "DRAW";
        }
        else{    
            document.getElementById("tietext").innerHTML = "DRAWN";
            }
        
           
    }
    
    //rock vs paper else
    else if (choice1 === rps[0]) {
        if (choice2 === rps[1]) {
            document.getElementById('result').innerHTML = "AI WINS WITH "+choice2.toUpperCase();
            pcount++;
            acount++;
            total++;
            document.getElementById("total").innerHTML = total;
            document.getElementById("arrows").innerHTML = "&#8618;";
            
        }
        else {
            document.getElementById('result').innerHTML = "YOU WIN WITH "+choice1.toUpperCase();
            ucount++;
            rcount++;
            total++;
            document.getElementById("total").innerHTML = total;
            document.getElementById("arrows").innerHTML = "&#8617;";
            
        }
    }
    
    //paper vs rock else
    else if (choice1 === rps[1]) {
        if (choice2 === rps[0]) {
            document.getElementById('result').innerHTML = "YOU WIN WITH "+choice1.toUpperCase();
            ucount++;
            pcount++;
            total++;
            document.getElementById("total").innerHTML = total;
            document.getElementById("arrows").innerHTML = "&#8617;";
            
        }
        else {
            document.getElementById('result').innerHTML = "AI WINS WITH "+choice2.toUpperCase();
            acount++;
            rcount++;
            total++;
            document.getElementById("total").innerHTML = total;
            document.getElementById("arrows").innerHTML = "&#8618;";
           
        }
    }
    
    //scissors vs rock else
    else if (choice1 === rps[2]) {
        if (choice2 === rps[0]) {
            document.getElementById('result').innerHTML = "AI WINS WITH "+choice2.toUpperCase();
            acount++;
            scount++;
            total++;            
            document.getElementById("total").innerHTML = total;
            document.getElementById("arrows").innerHTML = "&#8618;";
           
        }
        else {
            document.getElementById('result').innerHTML = "YOU WIN WITH "+choice1.toUpperCase();
            ucount++;
            rcount++;
            total++;
            document.getElementById("total").innerHTML = total;
            document.getElementById("arrows").innerHTML = "&#8617;";
           
        }
        
    }
}


