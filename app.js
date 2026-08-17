let objects = document.querySelectorAll(".object");



let message = document.getElementById("message");

let wantedObject;

function chooseObject() {

    let randomnumber = Math.floor(Math.random() * objects.length);
    wantedObject = objects[randomnumber].id;

    message.textContent = "Zozi wants " + wantedObject + "!";
 
}




let timerText = document.getElementById("timer");

let timer;

let timeLeft = 20;

let gameStarted = false;

function startTimer() {

    clearInterval(timer);

    timeLeft = 20;

    timerText.textContent = "Time: " + timeLeft;

    timer = setInterval(function () {

        timeLeft--;

        timerText.textContent = "Time: " + timeLeft;

        if (timeLeft === 0) {

            clearInterval(timer);

            gameStarted = false;

            message.textContent = "You lose!";
        }
    }, 1000);
}



let startGame = document.getElementById("startGame");

startGame.addEventListener("click", function () {
    gameStarted = true;
    chooseObject();
    startTimer();
});



for (let i = 0; i < objects.length; i++) {

    let object = objects[i];

    object.addEventListener("click", function () {

        if (gameStarted === false) {
            return;
        }

        let clickedObject = object.id;

        if (clickedObject === wantedObject) {

            clearInterval(timer);

            gameStarted = false;

            message.textContent = "You Win!";


        } else {

            message.textContent = "Wrong! Try again!";

        }
    });
}


let playAgain = document.getElementById("playAgain");

playAgain.addEventListener("click", function(){

    clearInterval(timer);

    gameStarted = true;

    chooseObject();

    startTimer();
});
















