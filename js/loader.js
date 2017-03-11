
function isFullScreen()
{
    return (document.fullScreenElement && document.fullScreenElement !== null)
         || document.mozFullScreen
         || document.webkitIsFullScreen;
}


function requestFullScreen(element)
{
    if (element.requestFullscreen)
        element.requestFullscreen();
    else if (element.msRequestFullscreen)
        element.msRequestFullscreen();
    else if (element.mozRequestFullScreen)
        element.mozRequestFullScreen();
    else if (element.webkitRequestFullscreen)
        element.webkitRequestFullscreen();
}

function exitFullScreen()
{
    if (document.exitFullscreen)
        document.exitFullscreen();
    else if (document.msExitFullscreen)
        document.msExitFullscreen();
    else if (document.mozCancelFullScreen)
        document.mozCancelFullScreen();
    else if (document.webkitExitFullscreen)
        document.webkitExitFullscreen();
}

function toggleFullScreen(element)
{
        requestFullScreen(element || document.documentElement);
}

// addEventListener("click", function() {
// toggleFullScreen();
// });

$(document).ready(function(){   
    function stop_loader(){        
     $("#giri-boot-loader").remove();
     $('.top-right').addClass("done-loading");
    }
    document.getElementById('giri-vid').addEventListener('ended',myHandler,false);
    function myHandler(e) {
        is_end_of_the_month();
        stop_loader();
        getLocation_forWeather();
        $("giri#trigger").addClass("above-all");
    switch(the_signal){
      case 1:
        gs.signal_1();
        break;
      case 2:
        gs.signal_2();
        break;
      case 3:
        gs.signal_3();
        break;
      case 4:
        gs.signal_4();
        break;
      case 5:
        gs.signal_5();
         break;
    }
    
    if (is_tutorial) {
      $('body').prepend('<!--Tutorials for first Use--> <script type="text/javascript" src="js/setup.js"></script> <div id="tutorial-section"><span class="point_the_lat hidden">Latitude</span><span class="point_the_lng hidden">Longitude</span> <div id="firstGreet"> <h1>Welcome</h1> <p>Preparing for First Use</p> <button class="continue hidden">Continue</button> </div> </div><div class="tutorial-popup hidden"> <span></span> <div class="btn_wrapper"> <button class="next_tut">Next</button> <button class="skip_tut">Skip Tutorial</button> </div> </div>');
    }
// Update the online status icon based on connectivity
  window.addEventListener('online',  OnlineMode);
  window.addEventListener('offline', OfflineMode);

    function OnlineMode(){   
      $(".network-err").removeClass("show");     
    }

    function OfflineMode(){
      gs.no_connection();  
      $(".network-err").addClass("show"); 
    }
    }
});
document.addEventListener('contextmenu', event => event.preventDefault());

