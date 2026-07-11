

let startButton = document.getElementById("startBtn");
let startScreen = document.getElementById("startScreen");
let gameArea = document.getElementById("gameArea");

let clueButton = document.getElementById("clueBtn");
let clueText = document.getElementById("clueBox");

let submitButton = document.getElementById("submitBtn");
let answerInput = document.getElementById("answer");
let result = document.getElementById("result");

let timerText = document.getElementById("timer");

let time = 60;




startButton.onclick = function() {

    startScreen.style.display = "none";
    gameArea.style.display = "block";

    startTimer();

};




function startTimer() {

    let timer = setInterval(function() {

        time--;

        timerText.innerHTML = "Time Left: " + time + " seconds";

        if(time == 0) {

            clearInterval(timer);

            result.innerHTML = "⏰ Time Over! Try Again.";

            submitButton.disabled = true;

        }

    },1000);

}




clueButton.onclick = function() {

    clueText.innerHTML = 
    "Clue: Find the hidden number and enter the correct password.";

};




submitButton.onclick = function() {

    let answer = answerInput.value;


    if(answer == "42") {

        result.innerHTML =
        "🎉 Congratulations! You escaped the room!";

    }

    else {

        result.innerHTML =
        "❌ Wrong answer! Try again.";

    }

};