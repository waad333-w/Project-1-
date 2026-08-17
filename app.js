let objects = document.querySelectorAll(".object");

for (let i =0; i<objects.length; i++){
    objects[i].addEventListener("click",function(){
        console.log("u clicked an object!");
    }
)};





let message = document.getElementById("message");

let wantedObject = "cookies";

function chooseObject(){

let randomnumber= Math.floor(Math.random()* objects.length);
wantedObject=objects[randomnumber].id;

}
message.textContent= "zozi wants " + wantedObject + "!";









 






