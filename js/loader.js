'use strict';
$(document).ready(function(){   
    function stop_loader(){        
     $("#giri-boot-loader").css("display","none");  
     $('.top-right').addClass("done-loading");
    }
    document.getElementById('giri-vid').addEventListener('ended',myHandler,false);
    function myHandler(e) {
        stop_loader();
    }
});