let objects = document.querySelectorAll(".object");
let startGame = document.getElementById("startGame");
let playAgain = document.getElementById("playAgain");
let timerText = document.getElementById("timer");
let message = document.getElementById("message");


playAgain.style.display ="none";
timerText.style.display ="none";




let wantedObject;

function chooseObject() {

    let randomnumber = Math.floor(Math.random() * objects.length);
    wantedObject = objects[randomnumber].id;

    if(wantedObject === "gift"){
        message.textContent = "zozi wants to open a gift";
    } else if(wantedObject === "bee"){
        message.textContent = "Can you catch the bee?";
    } else if(wantedObject === "camera"){
        message.textContent = "Say cheese! Find the camera";
    }  else if(wantedObject === "cookies"){
        message.textContent = "zozi is hungry! Find the cookies";
    }  else if(wantedObject === "cherry"){
        message.textContent = "zozi found a cherry! Grab it";
    } else if(wantedObject === "blueCap"){
        message.textContent = "Where is the blue cap?";
    }   else if(wantedObject === "blueFish"){
        message.textContent = "Zozi is hungry for a blue fish!";
    }  else if(wantedObject === "boba"){
        message.textContent = "Boba time! Find the drink";
    }   else if(wantedObject === "cupCake"){
        message.textContent = "where is the cupcake?";
    }   else if(wantedObject === "duck"){
        message.textContent = "zozi found a friend! Find the duck?";
    }   else if(wantedObject === "glasses"){
        message.textContent = "Time to put on glasses!";
    }   else if(wantedObject === "book"){
        message.textContent = "Story time?";
    }   else if(wantedObject === "goldenFish"){
        message.textContent = "Zozi spotted a shiny fish!";
    }   else if(wantedObject === "pinkHat"){
        message.textContent = "zozi needs her pink hat!";
    }   else if(wantedObject === "iceCream"){
        message.textContent = "zozi is craving something cold!";
    }   else if(wantedObject === "mouse"){
        message.textContent = "A little mouse is hiding";
    }   else if(wantedObject === "sunFlower"){
        message.textContent = "Find the sunflower!";
    }   else if(wantedObject === "star"){
        message.textContent = "Twinkle twinkle! Find the star?";
    }   else if(wantedObject === "strawBerryMilk"){
        message.textContent = "Find the Strawberry Milk ";
    }   

}





let timer;
let timeLeft = 10;
let gameStarted = false;

function startTimer() {

    clearInterval(timer);

    timeLeft = 10;

    timerText.textContent = "⏳Time: " + timeLeft;

    timer = setInterval(function () {

        timeLeft--;

        timerText.textContent = "⏳Time: " + timeLeft;

        if (timeLeft === 0) {

            clearInterval(timer);

            gameStarted = false;

            message.textContent = "You lose!";
            playAgain.style.display= "block";
        }
    }, 1000);
}




startGame.addEventListener("click", function () {
    gameStarted = true;

    startGame.style.display ="none";
    playAgain.style.display ="none";
    timerText.style.display ="block";

    shuffleObjects();
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
            playAgain.style.display= "block";


        } else {

            message.textContent = "Wrong! Try again!";

        }
    });
}





playAgain.addEventListener("click", function(){


    gameStarted = true;

    playAgain.style.display= "none";

    shuffleObjects();

    chooseObject();

    startTimer();
});



function shuffleObjects(){
    for(let i=0; i< objects.length; i++){

    
        let randomOrder = Math.floor(Math.random()* objects.length);
        objects[i].style.order = randomOrder;
    }
}