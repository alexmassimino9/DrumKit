
const numberOfDrums = document.querySelectorAll(".drum").length;



for (let i = 0; i < numberOfDrums; i++){
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    switch (this.innerHTML){
      case "w":
      let crash= new Audio("sounds/crash.mp3")
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
)
}
