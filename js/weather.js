// $(document).ready(function(){
	//ForeCast.IO  

//Place getter form toggler
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
//Auto Populate dropdown options for Brgy names
  $(function($){
for (var bindex = brgy_config.brgy_name.length-1; bindex >= 0; bindex--) {
  var option = '<option value="'+ bindex +'">' + brgy_config.brgy_name[bindex].classname + '</option>';
  if (bindex==0) {
    option = '<option value="'+ bindex +'" selected="selected">' + brgy_config.brgy_name[bindex].classname + '</option>';
  }
    $("select#brgy_name").prepend(option);
  }
  });
//Initialize weather forecast
  getweather();

  function getweather(){
            $.getJSON("https://api.forecast.io/forecast/" + config.forcast.key + "/" + weath_latitude + "," + weath_longitude + "?callback=?", function(data) {
              // console.log(data);
              //Data in the current weather
              var far_temp = parseFloat(data.currently.temperature);
              var cel = ((far_temp - 32) * 5) / 9;              
              $('#weather').html(cel.toFixed(2) + '&deg;C');
              $('.brgy-forecast #weather').html(cel.toFixed(2) + '&deg;C');
              //Currently Weather Icon
              var currentlyicon = "wi-forecast-io-";
              currentlyicon += data.currently.icon;
              $('.weather-today .icon').addClass(currentlyicon);
              $('.weather-today .icon').attr('title', currentlyicon.slice(15));

              
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
              $('.day'+i.toString()+' .icon-small').attr('title', dailyicon[i].slice(15));
              $('.day'+i.toString()+' .day').text(day[i]);
              $('.day'+i.toString()+' .tempreture-min').html(dailytempMin[i].toFixed(2) + '&deg;C -');
              $('.day'+i.toString()+' .tempreture-max').html(dailytempMax[i].toFixed(2) + '&deg;C');
              }
            });

      //Brgy Forecast      
              
              //Currently Weather Icon
              var currentlyicon = "wi-forecast-io-";

      var num_of_brgy = brgy_config.brgy_name.length;
      $("#get_brgy_weather").click(function(){
        var the_lat = brgy_config.brgy_name[parseInt($('#brgy_name').val())].lat;
        var the_lng = brgy_config.brgy_name[parseInt($('#brgy_name').val())].lng;
        get_brgy_forecast(the_lat, the_lng);
      });

      function get_brgy_forecast(the_lat, the_lng){
        // for (var i = 0; i < num_of_brgy; i++) {
        //    $.getJSON("https://api.forecast.io/forecast/" + config.forcast.key + "/"+ brgy_config.brgy_name[i].lat + "," + brgy_config.brgy_name[i].lng + "?callback=?", function(data) {
        //       var far_temp = parseFloat(data.currently.temperature);
        //       var cel = ((far_temp - 32) * 5) / 9;              
        //       $('.brgy-forecast .tempreture').html(cel.toFixed(2) + '&deg;C');
        //       currentlyicon += data.currently.icon;
        //    });           
        //       $('.' + brgy_config.brgy_name[i].classname + ' .icon-small').addClass(currentlyicon);
        // };
        $.getJSON("https://api.forecast.io/forecast/" + config.forcast.key + "/" + the_lat + "," + the_lng + "?callback=?", function(data) {
              // console.log(data);
              //Data in the current weather
              var far_temp = parseFloat(data.currently.temperature);
              var cel = ((far_temp - 32) * 5) / 9;              
              $('.brgy-forecast #weather').html(cel.toFixed(2) + '&deg;C');
              //Currently Weather Icon
              var currentlyicon = "wi-forecast-io-";
              currentlyicon += data.currently.icon;
              $('.brgy-forecast .weather-today .icon').addClass(currentlyicon);
              $('.brgy-forecast .weather-today .icon').attr('title', currentlyicon.slice(15));

              
              //Weekly and Hourly Summary
              var daily_summary = data.daily.summary;
              var daily_temp;
              daily_temp = daily_summary.slice(daily_summary.indexOf("\u00b0")-3, daily_summary.indexOf('\u00b0'));      

              daily_temp = ((daily_temp - 32) * 5) / 9;
              
              daily_temp = daily_temp.toFixed(2);

              var next_line = daily_summary.slice(daily_summary.indexOf('\u00b0')+2);

              daily_summary = daily_summary.slice(0, daily_summary.indexOf('\u00b0')-3) + ' ' + daily_temp + '&deg;C ' + next_line;

              $('.brgy-forecast .weather-week-descriptor .daily').html(daily_summary);
              $('.brgy-forecast .weather-week-descriptor .hourly').text(data.hourly.summary);

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
              $('.brgy-forecast .day'+i.toString()+' .icon-small').addClass(dailyicon[i]);
              $('.brgy-forecast .day'+i.toString()+' .icon-small').attr('title', dailyicon[i].slice(15));
              $('.brgy-forecast .day'+i.toString()+' .day').text(day[i]);
              $('.brgy-forecast .day'+i.toString()+' .tempreture-min').html(dailytempMin[i].toFixed(2) + '&deg;C -');
              $('.brgy-forecast .day'+i.toString()+' .tempreture-max').html(dailytempMax[i].toFixed(2) + '&deg;C');
              }
            });
      }
      //get_brgy_forecast();

    //Earth       
        }
        

  setInterval(getweather, 300000);

   // });