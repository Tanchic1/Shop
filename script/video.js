const video=document.getElementById("anime") 

function pause(){
    if (video.paused) {
        video.play()
    }
    else {
        video.pause()
    }
}