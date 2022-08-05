function showTime(){
    // Variables :
    var date = new Date();
    console.log(date);
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var Seconds = date.getSeconds();
    
    // Condtions :
    hours = (hours > 12) ? hours - 12 : hours;
    hours = (hours === 0) ? hours = 12 : hours;
    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes
    Seconds = (Seconds < 10) ? "0" + Seconds : Seconds

    // Apper in HTML page :
    var time = hours + ":" + minutes + ":" + Seconds;
    document.getElementById("myClock").innerHTML = time;

    // Refresh auto :
    setTimeout(showTime, 1000) ;
}

showTime()


// Get the video
var video = document.getElementById("myVideo");

// Get the button
var btn = document.getElementById("myBtn");

// Pause and play the video, and change the button text
function myFunction() {
  if (video.paused) {
    video.play();
    btn.innerHTML = "Pause";
  } else {
    video.pause();
    btn.innerHTML = "Play";
  }
}

