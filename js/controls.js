
// Time and Date
var forecast_date = new Date();
var forecast_month = forecast_date.getMonth();
var forecast_day = forecast_date.getDate();
var forecast_year = forecast_date.getFullYear();
var today = moment();
var tomorrow;
var newdate;

 // function increment_forecast_date(){        
 //        var the_full_date;
 //        if (forecast_day==31 && ()) {
          
 //        }
 //        the_full_date = month 
 //        $(".forecast_date").html("<span>Forecast Date: </span>" + the_full_date);
 // }

var mylocation = "loc="+  config.geo_position.longitude + "," + config.geo_position.latitude;
var weather_animation;

function the_specific_weather(longii, latii, overlay){
      var thismylocation = "loc=" + longii + ","  + latii;
      var thisweather_animation = "https://earth.nullschool.net/#current/wind/surface/level/overlay="+ overlay +"/orthographic=-236.70,12.37,2494/" + thismylocation;
      return thisweather_animation;
}

function getLocation_forWeather(){
    navigator.geolocation.getCurrentPosition(successFunction, errorFunction); 

    var latii;
    var longii;

  function successFunction(position) 
  {
      latii = position.coords.latitude;
      longii = position.coords.longitude;   
          //display the new place name upon geting the geo position of current location     
      mylocation = "loc=" + longii + ","  + latii;
      weather_animation = "https://earth.nullschool.net/#current/wind/surface/level/overlay=wind/orthographic=-236.70,12.37,2494/" + mylocation;
  }

  function errorFunction(position) 
  {    
              $(".notif_bar").removeClass("hide");
              $(".notif_bar .head-msg").text("CANNOT GET YOUR LOCATION!");
              $(".notif_bar .msg").text("Your Weather Animation locations is now based in the configuration");
              $(".notif_bar .notif-icon").addClass("fa-exclamation");
              weather_animation = "https://earth.nullschool.net/#current/wind/surface/level/overlay=wind/orthographic=-236.70,12.37,2494/" + mylocation;
              getmyPlace();
  }

}

var is_occ = false;
var onhome = true;
var onsleep = false;
 function getmyPlace(){
            $.getJSON("http://maps.googleapis.com/maps/api/geocode/json?latlng="+ config.geo_position.latitude + "," + config.geo_position.longitude + "&sensor=true", function(data) {
        $(".placeName").html(data.results[0].formatted_address);
            });
        }

var go_admin =  function(){
  if(!onsleep){ 
    window.location.assign("http://"+ window.location.hostname +"/giri/admin"); 
  }
}

var giri_shutdown = function(){
$.ajax({
  url: "http://localhost/giri/js/shutdown.php",
  success: function(){
    gs.Shutdown();
   }
  });
}

var abort_sd = function(){
$.ajax({
  url: "http://localhost/giri/js/abort.php",
  success: function(){
    gs.Abort_sd();
   }
  });
}
var show_weather = function(){
  if(!onsleep){   
  onhome = false;
  close_list();
  if(!onsleep){
  gs.showweath();
  console.log('Show Weather');
    $("#listen").text('Show Weather');
      $("#giri-weather #giri-map").animate({"opacity": "0.5", "z-index": "1"});
      $("#giri-weather #giri-map").attr('src', weather_animation);
      $("#giri-face img,#giri-face .greet").css("opacity", "0");
      $("#giri-face #listen").addClass("downme");
      $("#giri-bottom-face ").addClass("show"); 
      $(".giri_place_getter").removeClass("hide");  
      $(".forecast_date").removeClass("hidden");
        tomorrow = moment(today);
        tomorrow = tomorrow.toString();
        newdate = tomorrow.slice(0, 15);
        $(".forecast_date > span").text("Forecast Date: " + newdate);
      $(".mode").text("windspeed");
  }
}
}

var hide_weather = function() {
  if(!onsleep){    
  onhome = true;    
  close_list();
      gs.go_home();
    $("#listen").text('Go Home');
      $(".forecast_date").addClass("hidden");
      $("#giri-weather #giri-map").animate({"opacity": "0", "z-index": "-1"});
      $("#giri-weather #giri-map").attr('src', "");
      $("#giri-face img, #giri-face .greet").css("opacity", "1");
      $("#giri-face #listen").removeClass("downme"); 
      $("#giri-bottom-face ").removeClass("show");
      $(".giri_place_getter").addClass("hide");     
    }
}

var sleep = function(){
  onsleep = true;
  close_list();
  gs.go_sleep();
  $(".place_name_popup").css("opacity", "0");
  $(".slider-caption").css("opacity", "0");
  $("#listen").text('Go to Sleep');
  $(".main-content").addClass("hideme");
  $("footer").addClass("hideme");
}

var wakeup = function(){
  onsleep = false;
  close_list();
  $(".place_name_popup").css("opacity", "1");
  $(".slider-caption").css("opacity", "1");
    $("#listen").text('Wake Up');
  $(".main-content").removeClass("hideme");
  $("footer").removeClass("hideme");
  gs.wakeupgiri();  
}

var intro = function(){
  close_list();
    $("#listen").text('Introduce yourself');
  gs.introduce();
}

var whatihear = function(whatihear){
  if(!onsleep){    
  close_list();
    console.log(whatihear);
    $("#listen").text(whatihear);
    gs.notgetS();
  }
  }

var hello = function(){
  if(!onsleep){    
  close_list();
  gs.wakeupgiri();  
}
}

var show_prec = function(){
  if(!onsleep){    
  close_list();
    $("#listen").text('Show Precipitation');
  if(!onhome && !onsleep){
        currentMode = "total_precipitable_water";
        $("#giri-map").attr("src", "https://earth.nullschool.net/#current/wind/surface/level/overlay="+currentMode+"/orthographic=-236.70,12.37,2494/" + mylocation); 
        gs.precW();
        $("#scale_ws").addClass("hidden");
        $("#scale_occr").addClass("hidden");
        $("#scale_prec").removeClass("hidden");
        $(".mode").text("total precipitable water");
      }else if(onhome && !onsleep){
        gs.notif_sw();
      }
    }
}

var show_occ = function(){
  is_occ = true;
  if(!onsleep){    
    close_list();
      $("#listen").text('Show Ocean Current');
    if(!onhome && !onsleep){
          $("#giri-map").attr("src", "https://earth.nullschool.net/#current/ocean/surface/currents/orthographic=-236.70,12.37,2494/" + mylocation); 
          $("#scale_ws").addClass("hidden");
          $("#scale_occr").removeClass("hidden");
          $("#scale_prec").addClass("hidden");
          gs.oceanCur();
        $(".mode").text("ocean current");
        }else if(onhome && !onsleep){
          gs.notif_sw();
        }
  }
}

var show_temp = function(){
  if(!onsleep){     
  close_list();
    $("#listen").text('Show Temperature');
  if(!onhome && !onsleep){    
        currentMode = "temp";
        $("#giri-map").attr("src", "https://earth.nullschool.net/#current/wind/surface/level/overlay="+currentMode+"/orthographic=-236.70,12.37,2494/" + mylocation); 
        gs.tempF();
        $("#scale_ws").addClass("hidden");
        $("#scale_occr").addClass("hidden");
        $("#scale_prec").addClass("hidden");
        $(".mode").text(currentMode);
  }else if(onhome && !onsleep){
        gs.notif_sw();
      }
    }
}

var nxt_day = function(){
  if(!onsleep){      
  close_list();
    $("#listen").text('Next Day Forecast');
  if(!onhome && !onsleep){    
        tomorrow = moment(today).add(1, 'day');
        tomorrow = tomorrow.toString();
        newdate = tomorrow.slice(0, 15);
        $(".forecast_date").removeClass("hidden");
        $(".forecast_date > span").text("Forecast Date: " + newdate);
        curdayofM+=1;
        $("#giri-map").attr("src", "https://earth.nullschool.net/#"+curyear+"/"+curmonth+"/"+curdayofM+"/0900Z/wind/surface/level/overlay="+currentMode+"/orthographic=-236.70,12.37,2494/" + mylocation); 
        gs.nextdayf();
      }else if(onhome && !onsleep){
        gs.notif_sw();
      }
    }
  }

var curr_wthr = function(){
  if(!onsleep){     
  close_list();
    $("#listen").text('Show Current Weather');
  if(!onhome && !onsleep){    
        tomorrow = moment(today);
        tomorrow = tomorrow.toString();
        newdate = tomorrow.slice(0, 15);
        $(".forecast_date").removeClass("hidden");
        $(".forecast_date > span").text("Forecast Date: " + newdate);
        curdayofM = dateNow.getDate();
        is_occ ? show_occ : $("#giri-map").attr("src", "https://earth.nullschool.net/#current/wind/surface/level/overlay="+currentMode+"/orthographic=-236.70,12.37,2494/" + mylocation);        
        gs.current_weather();
      }else if(onhome && !onsleep){
        gs.notif_sw();
      }
    }
  }

var show_wnds = function(){
  if(!onsleep){     
  close_list();
    $("#listen").text('Show Wind Speed');
  if(!onhome && !onsleep){    
        currentMode = "wind";
        $("#giri-map").attr("src", "https://earth.nullschool.net/#current/wind/surface/level/overlay="+currentMode+"/orthographic=-236.70,12.37,2494/" + mylocation); 
        gs.windS();
        $("#scale_ws").removeClass("hidden");
        $("#scale_occr").addClass("hidden");
        $("#scale_prec").addClass("hidden");
        $(".mode").text("windspeed");
      }else if(onhome && !onsleep){
        gs.notif_sw();
      }
    }
  }

var next_day_num = function(dnum){
  if(!onsleep){     
  close_list();
    $("#listen").text('Next '+ dnum +' days');
  if(!onhome && !onsleep){    
      if(dnum=="three"){
        dnum = 3;
      }else if(dnum=='five'){
        dnum = 5;
      }else if(dnum=='six'){
        dnum = 6;
      }else if(dnum=='four'){
        dnum = 4;
      }else if(dnum=='one'){
        dnum = 1;
      }else if(dnum=='two'){
        dnum = 2;
      }else if(dnum>6){
        gs.Max_FDate();
      }      
        tomorrow = moment(today).add(dnum, 'day');
        tomorrow = tomorrow.toString();
        newdate = tomorrow.slice(0, 15);
        $(".forecast_date").removeClass("hidden");
        $(".forecast_date > span").text("Forecast Date: " + newdate);
        dnum = dateNow.getDate() + parseInt(dnum);
        $("#giri-map").attr("src", "https://earth.nullschool.net/#"+curyear+"/"+curmonth+"/"+dnum+"/0900Z/wind/surface/level/overlay="+currentMode+"/orthographic=-236.70,12.37,2494/" + mylocation);    
    }else if(onhome && !onsleep){
        gs.notif_sw();
      }
    }
  }

var what_say = function(){
  if(!onsleep){    
    $("#listen").text('');
    $(".cmd-list").addClass("up");
    $(".cmd-list").removeClass("hide");
    $(".greet").addClass("hide");
    $("#giri-face img").addClass("hide");
    gs.show_commands();
  }
}

var show_map = function(){
  if(!onsleep){    
    show_current_map();
    $("#listen").text('Show Map');
    $("#map").addClass("showmap");
  }
};

function hide_map(){
  if(!onsleep){    
    $("#listen").text('Hide Map');
    $(".greet").removeClass("send-to-back");
    $("#map").removeClass("showmap");
  }
};

function close_list(){  
  if(!onsleep){    
    $(".cmd-list").removeClass("up");
    $(".cmd-list").addClass("hide");
    $(".greet").removeClass("hide");
    $("#giri-face img").removeClass("hide");
  }
}

function show_brgyweath(){  
  if(!onsleep){    
    $("#brgy_drag").css({top: '239px', left: '53px'});
    $("#brgy_drag").removeClass("removing");
    $("#brgy_drag").removeClass("hidden");
    console.log('Show All Barangay');
  }
}

var isSilent = false;
var silent = function(){
  annyang.removeCommands();
  gs.silence_mode();
  isSilent = true;
};

var brgy_weather_forecast = function(){
  $("#brgy-forecast-animation iframe").attr('src', the_specific_weather($(".the_long").text(), $(".the_lat").text(), "wind"));
  $("#brgy-forecast-animation").addClass("vis");
  $("#brgy_drag .weather").removeClass("vis");
};

if (annyang) {
  // Let's define a command.
  var dateNow = new Date();
  var curdayofM = dateNow.getDate();
  var curyear = dateNow.getFullYear();
  var curmonth = dateNow.getMonth() + 1;
  var currentMode = "wind";
  var commands = {
    'Hello (Hi) (Hey) (Jerry)': hello,
    'Introduce (yourself)': intro,
    'what can i say': what_say,
    '(Go) Home': hide_weather,
    '(Go) (to) Sleep': sleep,
    'Wake Up': wakeup,
    '(Show) Weather': show_weather,
    '(Show) Precipitation': show_prec,
    '(Show) Temperature': show_temp,
    '(Show) Ocean Current': show_occ,
    'Next Day (Forecast)': nxt_day,
    '(Show) Current Weather': curr_wthr,
    '(Show) Wind Speed': show_wnds,
    '(Next) :dnum days': next_day_num,
    '(Show) (Silang) (All) Forecast': show_brgyweath,
    '(Show) Map': show_map,
    'Show (me) (the) map (of) *place': imgmap.show_req_map,
    'Zoom In': imgmap.zoomIn,
    'Zoom': imgmap.zoom_by,
    'Zoom Out': imgmap.zoomOut,
    'Maximum Zoom Out': imgmap.zoom_out_by,
    'Hide Map': hide_map,
    '(Go) (to) Admin': go_admin,
    '(turn) system off': giri_shutdown,
    '(abort) (a boy) system': abort_sd,
    'please (shut up) (quiet)': silent,
    'the weather animation': brgy_weather_forecast, 
    '*whatihear': whatihear
  };    
  // Add our commands to annyang
  annyang.addCommands(commands);  

   //Start Listen
  var done_load_vid = document.getElementById('giri-vid').addEventListener('ended', annyang_start,false);

  var speech_recog = {};
  speech_recog.deftxt = 'Say "What can I say?" to display the list of commands';
  var is_change = false; 
  function restCommand(){    
    $('#listen').text(speech_recog.deftxt);    
    is_change = false;
    annyang.start({ pause: false });  
  }
   

    var recognition = annyang.getSpeechRecognizer();
    var final_transcript = '';
    var final_span = $("#listen");
    recognition.interimResults = true;

    $("giri#trigger").click(function(event){  
      recognition.stop();  
        if(isSilent){
          annyang.addCommands(commands);
          gs.listen_mode();
          setTimeout(function(){
            isSilent = false;
          }, 2000);
        }
    });


    $(".show_prec").click(function(){
      $("#brgy-forecast-animation iframe").attr('src', the_specific_weather($(".the_long").text(), $(".the_lat").text(), "total_precipitable_water"));      
    });

      recognition.onresult = function(event) {
        var interim_transcript = '';
        final_transcript = '';        
        for (var i = event.resultIndex; i < event.results.length; ++i) {
            if (event.results[i].isFinal) {
                  final_transcript += event.results[i][0].transcript;
                  annyang.trigger(final_transcript); //If the sentence is "final" for the Web Speech API, we can try to trigger the sentence
                  annyang.start({ pause: true });
                  setTimeout(restCommand, 2000);
            } 
            else {                         
                interim_transcript += event.results[i][0].transcript;            
                final_span.text(interim_transcript);
                is_change = true;            
            }
        }    
      };


      
   function annyang_start(e){
  if(done_load_vid){
  return annyang.start({autoRestart: true, continuous: true });
  }
  else{
  return annyang.start({ pause: true });

  annyang.addCallback('error', function(){console.log('error');});
  var isdefault = annyang.isListening();

      if(isdefault){
          $("#listen").text(speech_recog.deftxt);        
      }
  }
}
    }
