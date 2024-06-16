var numbOfDrums = document.querySelectorAll(".drum").length;
for(var i = 0; i<numbOfDrums; i++){
    document.querySelectorAll("button")[i].addEventListener("click", function(){
       var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
    }
);
}
var audio;
document.addEventListener("keypress", function(event){
    makeSound(event.key);
});
function makeSound(key){
    switch(key){
        case "w":
            audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case "a":
            audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        case "s":
            audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        case "d":
            audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
        case "j":
            audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;
        case "k":
            audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;
        case "l":
            audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
    }
}