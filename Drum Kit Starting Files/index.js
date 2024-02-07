// var n = document.querySelectorAll(".drum").length;
// for (var i = 0; i < n; i++) {
//     document.querySelector(".drum")[i].addEventListener("click", function () {
//         alert("i got clicked");
//     });
// }
var drums = document.querySelectorAll(".drum");
for (var i = 0; i < drums.length; i++) {
    drums[i].addEventListener("click", function () {
        // alert("i got clicked");
        //this.style.color = "green";
        var key = this.innerHTML;
        makeSound(key);
        buttonAnimation(key);

    });
     document.addEventListener("keypress",function(event) {
        makeSound(event.key);
        buttonAnimation(event.key);
     });


    function makeSound(key){
        switch (key) {
            case "w":
                var sound = new Audio('./sounds/tom-2.mp3');
                sound.play();
                break;
            case "a":
                var sound = new Audio('./sounds/tom-1.mp3');
                sound.play();
            break;
            case "s":
                var sound = new Audio('./sounds/tom-3.mp3');
                sound.play();
            break;
            case"d":
                var sound = new Audio('./sounds/tom-4.mp3');
                sound.play();
            break;
            case "j":
                var sound = new Audio('./sounds/snare.mp3');
                sound.play();
            break;
            case "k":
                var sound = new Audio('./sounds/kick-bass.mp3');
                sound.play();
            break;
            case "l":
                var sound = new Audio('./sounds/crash.mp3');
                sound.play();
            break;


            default:
                break;
        }
    }
    function buttonAnimation(currentkey){
    var ActiveButton=document.querySelector("."+currentkey);
    ActiveButton.classList.add("pressed");
       setTimeout(function(){
        ActiveButton.classList.remove("pressed");
        //ActiveButton.style.color="green";
       },100);
    }
}
