 var weather_status;
 $(document).ready(function(){
      $(".fb-post").click(function(){
            // var iframe     = $('#giri-map');
            // var contentWnd = iframe.attr('contentWindow');
            // var url = contentWnd.window.location.href;
            // alert(url);
        if ($(".caption-modal").hasClass("show")) {
          $(".caption-modal").removeClass("show");
        }
        else{
        $(".caption-modal").addClass("show");
        }
      });

      $(".close").click(function(){
            $(".caption-modal").removeClass("show");
        });
      $(".submit-weather-status").click(function(){
            $(".caption-modal").removeClass("show");
        });
      $('.caption-modal .submit-weather-status').click(function(){
        weather_status = $(".weather-status").val();
        $("#giri-weather #giri-map").css("opacity", "1");
        setTimeout(weather_image, 2000);     
        setTimeout(function(){
        $("#giri-weather #giri-map").css("opacity", "0.5");  
        gs.postonfb();    
        }
          , 4000);     
      });
    });
