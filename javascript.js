function getComputerChoice() {
    let number = Math.random();
    if(number <= 0.33) {
        return "rock";
    } else if (number <= 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    let answer = prompt("What is your move?");
    return answer;
}

function updatePoints(human, computer) {
    turn += 1;

    if(human=="rock") {
        
        if(computer=="rock") {
            console.log("Draw!");
            humanPoints++;
            computerPoints++;
        } else if(computer=="scissors") {
            console.log("Human Wins!");
            humanPoints++;
        } else {
            console.log("Computer Wins!");
            computerPoints++;
        }
    } else if(human=="paper") {
        if(computer=="paper") {
            console.log("Draw!");
            humanPoints++;
            computerPoints++;
        } else if(computer=="rock") {
            console.log("Human Wins!");
            humanPoints++;
        } else {
            console.log("Computer Wins!");
            computerPoints++;
        }
    } else {
        if(computer=="scissors") {
            console.log("Draw!");
            humanPoints++;
            computerPoints++;
        } else if(computer=="paper") {
            console.log("Human Wins!");
            humanPoints++;
        } else {
            console.log("Computer Wins!");
            computerPoints++;
        }
    }
    console.log("This is turn " + turn + ".")
    console.log("Human: " + humanPoints);
    console.log("Computer: " + computerPoints);
}

let humanPoints = 0;
let computerPoints = 0;

let turn = 0;

for(let step = 0; step < 5; step++) {
    updatePoints(getHumanChoice(),getComputerChoice());
}

if(humanPoints > computerPoints) {
    console.log("Human wins!");
} else if(humanPoitns == computerPoints) {
    console.log("Draw!");
} else {
    console.log("Computer Wins!")
}