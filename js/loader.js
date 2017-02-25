
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

