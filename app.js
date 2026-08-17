let objects = document.querySelectorAll(".object");

for (let i =0; i<objects.length; i++){
    objects[i].addEventListener("click",function(){
    
        let clickedObject = objects[i].id;
        if (clickedObject === wantedObject){
            console.log("correct!");
        }
    
});
}




let message = document.getElementById("message");

let wantedObject;

function chooseObject(){

let randomnumber= Math.floor(Math.random()* objects.length);
wantedObject=objects[randomnumber].id;

}

chooseObject();
message.textContent= "zozi wants " + wantedObject + "!";



let timerText = document.getElementById("timer");
 
let timer;

let timerLeft = 20;

let gameStarted = false;

function startTimer(){

    timeLeft = 20;

    timerText.textContent = "Time: "+ timerLeft;

timer = setInterval(function(){

    timeLeft--;

    timer.textContent = "Time: "+ timerLeft;

    if(timerLeft === 0) {

        clearInterval(timer);

        gameStarted = false;

        message.textContent = "You lose!";
    }
},1000);
}


let playAgain = document.getElementById("startGame");

startGame.addEventListener("click", function(){
    gameStarted = true;
    chooseObject();
    startTimer;
});





 






