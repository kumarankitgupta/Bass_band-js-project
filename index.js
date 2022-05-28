var a = document.querySelectorAll(".drum");
for (let i = 0; i < a.length; i++) {
    a[i].addEventListener("click",function playsound(){
        var k = a[i].innerHTML;
        if(k === 'w'){
            var ad1 = new Audio('sounds/tom-1.mp3');
            ad1.play();
        }
        else if(k === 'a'){
            var ad2 = new Audio('sounds/tom-2.mp3');
            ad2.play();
        }else if(k === 's'){
            var ad3 = new Audio('sounds/tom-3.mp3');
            ad3.play();
        }else if(k === 'd'){
            var ad4 = new Audio('sounds/tom-4.mp3');
            ad4.play();
        }else if(k === 'j'){
            var ad5 = new Audio('sounds/kick-bass.mp3');
            ad5.play();
        }else if(k === 'k'){
            var ad6 = new Audio('sounds/snare.mp3');
            ad6.play();
        }else{
            var audio = new Audio('sounds/crash.mp3');
            audio.play();
        }
        
    });
}
