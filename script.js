let userScore = 0;
let computerScore = 0;

function play(userChoice){

    const choices = ["rock","paper","scissors"];

    const computerChoice = choices[Math.floor(Math.random()*3)];

    document.getElementById("userChoice").innerHTML = userChoice;

    document.getElementById("computerChoice").innerHTML = computerChoice;

    let result = "";

    if(userChoice === computerChoice){

        result = "🤝 It's a Draw!";

    }

    else if(

        (userChoice==="rock" && computerChoice==="scissors") ||

        (userChoice==="paper" && computerChoice==="rock") ||

        (userChoice==="scissors" && computerChoice==="paper")

    ){

        result = "🎉 You Win!";
        userScore++;

    }

    else{

        result = "💻 Computer Wins!";
        computerScore++;

    }

    document.getElementById("winner").innerHTML = result;

    document.getElementById("userScore").innerHTML = userScore;

    document.getElementById("computerScore").innerHTML = computerScore;

}

function resetGame(){

    userScore = 0;
    computerScore = 0;

    document.getElementById("userScore").innerHTML = 0;

    document.getElementById("computerScore").innerHTML = 0;

    document.getElementById("userChoice").innerHTML = "-";

    document.getElementById("computerChoice").innerHTML = "-";

    document.getElementById("winner").innerHTML = "Choose an option!";

}