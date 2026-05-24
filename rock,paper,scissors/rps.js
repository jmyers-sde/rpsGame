
let elWin = document.getElementById("win");
let elLoss = document.getElementById("loss");
let elTie = document.getElementById("tie");
let elRock = document.getElementById("rock");
let elPaper = document.getElementById("paper");
let elScissors = document.getElementById("scissors");
let elMyPick = document.getElementById("you");
let elComChoice = document.getElementById("computer");
let elResult = document.getElementById("result");

let scoreWin = 0;
let scoreLoss = 0;
let scoreTie = 0;

//=-=-=-=-=-Scores & Answers-=-=-=-=-=//

function start(userChoice) {
    random();
    compare(userChoice, compChoice);

    var theOutcome = compare(userChoice, compChoice);
    elMyPick.textContent = userChoice;
    elComChoice.textContent = compChoice;
    elResult.textContent = theOutcome;

    switch(theOutcome) {
        case "You Win!":
            elWin.textContent = ++scoreWin;
            break;
        case "You Lose!":
            elLoss.textContent = ++scoreLoss;
            break;
        case "It's a Tie!!":
            elTie.textContent = ++scoreTie;
            break;
    }
}

//=-=-=-=-=-Computer-=-=-=-=-=//

let compChoice;
function random() {
    var computerChoice = Math.ceil(Math.random() * 3);
    
    if (computerChoice === 1) { 
        compChoice = "rock";
    }
    else if(computerChoice === 2) { 
        compChoice = "paper"; 
    }
        else {
        compChoice = "scissors";
    }
    // console.log(compChoice);
}  
 
//=-=-=-=-=-Game Function-=-=-=-=-=-=-=//


function compare(userChoice, compChoice) {
    
    if (userChoice === compChoice) {
        return "It's a Tie!!";
    }
    else if (userChoice === "rock") {
        if (compChoice === "scissors") {
            return "You Win!";
        }
        else {
            return "You Lose!";
        }
    }    
    else if (userChoice === "paper") {
        if (compChoice === "rock") {
            return "You Win!";
        } 
        else {
                return "You Lose!";
        }   
    }
    else if (userChoice === "scissors") {
        if (compChoice === "paper") {
            return "You Win!";
        }    
        else {
            return "You Lose!";
        }
    }  
    // switch (userChoice, compChoice){
    //     case 'rock', 'rock':
    //         return "Its's a tie";
    //         break;
    //     case "rock", 
    // }
}


    

elRock.addEventListener('click', function() {start ("rock");}, false);
elPaper.addEventListener('click', function() {start ("paper");}, false);
elScissors.addEventListener('click', function() {start ("scissors");}, false);


