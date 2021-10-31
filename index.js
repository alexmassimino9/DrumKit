
let numberOfDrums = document.querySelectorAll(".drum").length;

for (let i = 0; i < numberOfDrums; i++){
  // event listener with callback function on click plays sound
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    keyInput(this.innerHTML);
    buttonAnimation(this.innerHTML);
  })}
//  event listener with callback function on key press plays sound
document.addEventListener("keydown", function(e){
  keyInput(e.key);
  buttonAnimation(e.key)
});

// function plays sounds based on key press
function keyInput (key){
  switch (key){
    case "w":
    let crash = new Audio("sounds/crash.mp3")
    .play();
    break;
    case "a":
    let kick = new Audio("sounds/kick-bass.mp3")
    .play();
    break;
    case "s":
    let snare = new Audio("sounds/snare.mp3")
    .play();
    break;
    case "d":
    let tom1 = new Audio("sounds/tom-1.mp3")
    .play();
    break;
    case "j":
    let tom2 = new Audio("sounds/tom-2.mp3")
    .play();
    break;
    case "k":
    let tom3 = new Audio("sounds/tom-3.mp3")
    .play();
    break;
    case "l":
    let tom4 = new Audio("sounds/tom-4.mp3")
    .play();
    break;
  }
}
function buttonAnimation (currentKey){
let currentButton = document.querySelector("."+currentKey)
    currentButton.classList.add("pressed")
    setTimeout( function (){currentButton.classList.remove("pressed")
}, 250);}
