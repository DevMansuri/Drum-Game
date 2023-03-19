var number = document.querySelectorAll(".drum").length ;

for (var  i = 0 ;  i < number ; i++ ) {
    document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);

}
function handleClick() {
    var audio = new Audio("sounds/tom-1.mp3");
    audio.play();

// alert("click");
}