// $(document).ready(function(){
	//ForeCast.IO


  $("#giri-map").click(function(){
    alert($("#giri-map").attr("src"));
  });

  $(".giri_place_getter .upndown").click(function(){
    if ($(this).hasClass("up")) {
    $(".giri_place_getter").css("bottom", "0");    
    $(this).addClass("dwn");
    $(this).removeClass("up");
    } else if($(this).hasClass("dwn")){
    $(".giri_place_getter").css("bottom", "-70px");    
    $(this).addClass("up");
    $(this).removeClass("dwn");
    }
  });


  function getweather(){
            $.getJSON("https://api.forecast.io/forecast/" + config.forcast.key + "/" + weath_latitude + "," + weath_longitude + "?callback=?", function(data) {
              // console.log(data);
              //Data in the current weather
              var far_temp = parseFloat(data.currently.temperature);
              var cel = ((far_temp - 32) * 5) / 9;              
              $('#weather').html(cel.toFixed(2) + '&deg;C');
              //Currently Weather Icon
              var currentlyicon = "wi-forecast-io-";
              currentlyicon += data.currently.icon;
              $('.weather-today .icon').addClass(currentlyicon);

              
              //Weekly and Hourly Summary
              var daily_summary = data.daily.summary;
              var daily_temp;
              daily_temp = daily_summary.slice(daily_summary.indexOf("\u00b0")-3, daily_summary.indexOf('\u00b0'));      

              daily_temp = ((daily_temp - 32) * 5) / 9;
              
              daily_temp = daily_temp.toFixed(2);

              var next_line = daily_summary.slice(daily_summary.indexOf('\u00b0')+2);

              daily_summary = daily_summary.slice(0, daily_summary.indexOf('\u00b0')-3) + ' ' + daily_temp + '&deg;C ' + next_line;

              $('.weather-week-descriptor .daily').html(daily_summary);
              $('.weather-week-descriptor .hourly').text(data.hourly.summary);

              //Data weekly Forecast
              var day = new Array(data.daily.data.length-1);
              var dailytempMin = new Array(data.daily.data.length-1);
              var dailytempMax = new Array(data.daily.data.length-1);
              var dailyicon = new Array(data.daily.data.length-1);

              var far_temp_Min = new Array(data.daily.data.length-1);
              var far_temp_Max = new Array(data.daily.data.length-1);

              for (var i = 0; i < data.daily.data.length; i++) {
              day[i] = moment.unix(data.daily.data[i].time).format('ddd');


              far_temp_Min[i] = parseFloat(data.daily.data[i].temperatureMin);              
              dailytempMin[i] = ((far_temp_Min[i] - 32) * 5) / 9;  

              far_temp_Max[i] = parseFloat(data.daily.data[i].temperatureMax);              
              dailytempMax[i] = ((far_temp_Max[i] - 32) * 5) / 9;  

              dailyicon[i] = "wi-forecast-io-" + data.daily.data[i].icon;
              $('.day'+i.toString()+' .icon-small').addClass(dailyicon[i]);
              $('.day'+i.toString()+' .day').text(day[i]);
              $('.day'+i.toString()+' .tempreture-min').html(dailytempMin[i].toFixed(2) + '&deg;C -');
              $('.day'+i.toString()+' .tempreture-max').html(dailytempMax[i].toFixed(2) + '&deg;C');
              }
            });

      //Brgy Forecast      
              
              //Currently Weather Icon
              var currentlyicon = "wi-forecast-io-";

      var num_of_brgy = brgy_config.brgy_name.length;
      function get_brgy_forecast(){
        for (var i = 0; i < num_of_brgy; i++) {
           $.getJSON("https://api.forecast.io/forecast/" + config.forcast.key + "/"+ brgy_config.brgy_name[i].lat + "," + brgy_config.brgy_name[i].lng + "?callback=?", function(data) {
              var far_temp = parseFloat(data.currently.temperature);
              var cel = ((far_temp - 32) * 5) / 9;              
              $('.brgy-forecast .tempreture').html(cel.toFixed(2) + '&deg;C');
              currentlyicon += data.currently.icon;
           });           
              $('.' + brgy_config.brgy_name[i].classname + ' .icon-small').addClass(currentlyicon);
        };
      }
      //get_brgy_forecast();

    //Earth       
        }
        

  setInterval(getweather, 300000);

   // });