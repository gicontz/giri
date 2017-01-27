
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
    if (isFullScreen())
        element.cancelFullScreen();
    else
        requestFullScreen(element || document.documentElement);
}

addEventListener("click", function() {
toggleFullScreen();
});

$(document).ready(function(){   
    function stop_loader(){        
     $("#giri-boot-loader").remove();
     $('.top-right').addClass("done-loading");
    }
    document.getElementById('giri-vid').addEventListener('ended',myHandler,false);
    function myHandler(e) {
  is_end_of_the_month();
        stop_loader();
    }
});


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
