 var weather_status;
 $(document).ready(function(){
      $(".fb-post").click(function(){
            // var iframe     = $('#giri-map');
            // var contentWnd = iframe.attr('contentWindow');
            // var url = contentWnd.window.location.href;
            // alert(url);
            var summary  = "";
            var weekly = "";
            var alter;
            alter = "Forecast Location: "+ $(".placeName").text() + "\n"+ $(".forecast_date").text() +
                    "\nWindspeed: \nTotal Precipitable Water: \nNearest Fast Wind\nLocation: \nWindspeed: \n"
            for(var i = 1; i<=6; i++){
              weekly = weekly + $(".giri-forecast .day"+i+" .day").text() + " " + $(".giri-forecast .day"+i+" .tempreture-min").text() + " " + $(".giri-forecast .day"+i+" .tempreture-max").text() + "\n";
            }
            summary = alter + $(".giri-forecast .hourly").text() + "\n" + $(".giri-forecast .daily").text() + "\nWeekly Forecast: \n" + weekly +"\n" + "#GIRI";
            $(".weather-status").text(summary);
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
