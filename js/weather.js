// $(document).ready(function(){
	//ForeCast.IO  


var said_ws = '';
var said_near_fw = '';
var sid_near_loc = '';
var forecast_url = "https://api.forecast.io/forecast/" + config.forcast.key + "/" + weath_latitude + "," + weath_longitude;
forecast_bckup(forecast_url);
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
    $("select#brgy_name").prepend(option);
  }  
    $("select#brgy_name").prepend('<option value="-1" selected="selected">Select Barangay</option>');

  for( var numofdays = 0; numofdays<=6; numofdays++){    
                $(".weather-report").append('<p class="precType'+ numofdays.toString() + '"></p>');
                $(".weather-report").append('<p class="precIntensity'+ numofdays.toString() + '"></p>');
                $(".weather-report").append('<p class="precProb' + numofdays.toString() + '"></p>');
  }
  });

  

                   
  var the_signal = 0;
  var info_hourly = "";
  var the_final_sum = "";

//Initialize weather forecast
//  getweather();

  function getweather(){
            $.getJSON("https://api.forecast.io/forecast/" + config.forcast.key + "/" + weath_latitude + "," + weath_longitude + "?callback=?", function(data) {                          
                var mpkm = 1.60934;

                forecast_usage(++num_req);// Forecast IO Usage Manager
                var prec_Prob = (data.currently.precipProbability * 100).toFixed();                              
              $(".the_ws").text((data.currently.windSpeed * mpkm).toFixed(4));
              $(".the_precipProbability").text(prec_Prob);
              prec_Prob > 0 ? $(".the_precipType").text(data.currently.precipType) : $(".the_precipType").text("N/A");
              prec_Prob > 0 ? $(".the_precipIntensity").html(data.currently.precipIntensity + "in&#x00B3;/h") : $(".the_precipIntensity").text("N/A");
              //Data in the current weather    
              var getHourlyWindSpeed = function(maxhour, target_sig, datum){
                  for (var hr_index = 0; hr_index <= maxhour - 1; hr_index++){
                    var ws = datum.hourly.data[hr_index].windSpeed * mpkm;
                    switch(target_sig){
                      case 1:                      
                        if (ws >= 30 && ws <=60){
                          return true;
                        }
                        break;
                      case 2:                      
                        if (ws >= 61 && ws <=120){
                          return true;
                        }
                        break;
                      case 3:                      
                        if (ws >= 121 && ws <= 170){
                          return true;
                        }
                        break;
                      case 4:                      
                        if (ws >= 171 && ws <= 220){
                          return true;
                        }
                        break;
                      case 5:
                        if(ws > 220){
                          return true;                          
                        }
                        break;
                    }
                  }
                return false;
              }
              var signal_indicator = $("#giri-face img");         
              //The Signal Warning Assessment
              if (getHourlyWindSpeed(36, 1, data)) {
                the_signal = 1;
                gs.signal_1();
              }
              else if(getHourlyWindSpeed(24, 2, data)){
                the_signal = 2;
                gs.signal_2();
              }
              else if(getHourlyWindSpeed(18, 3, data)){
                the_signal = 3;
                gs.signal_3();
              }
              else if(getHourlyWindSpeed(12, 4, data)){
                the_signal = 4;
                gs.signal_4();
              }
              else if(getHourlyWindSpeed(12, 5, data)){
                the_signal = 5;
                gs.signal_5();
              }

              //Testing for development
              var getHourlyWindSpeed_test = function (maxhour, datum){
                var mpkm = 1.60934;
                var the_hour = 1;
                  for (var hr_index = 0; hr_index <= maxhour - 1; hr_index++){
                    var ws = datum.hourly.data[hr_index].windSpeed * mpkm;
                    info_hourly += "\n" + (the_hour + hr_index) + "hour(s), " + ws.toFixed(4) + "km/hr,";
                  }
                  the_final_sum = info_hourly;
              }

              var the_final_report = function(){
                return the_final_sum;
              }

              the_final_sum = the_final_report();

              getHourlyWindSpeed_test(36, data);
                //Report
              console.log(info_hourly);
              forecast_dump(info_hourly);

    //Test
     //the_signal = 5;

              //Signal Warning Colors
              switch(the_signal){
                case 1:
                  signal_indicator.attr('class', "");
                  signal_indicator.addClass("signal1");
                  signal_indicator.attr('src', 'images/GiRi_signal 1.svg');
                  break;
                case 2:
                  signal_indicator.attr('class', "");
                  signal_indicator.addClass("signal2");
                  signal_indicator.attr('src', 'images/GiRi_signal 2.svg');
                  break;
                case 3:
                  signal_indicator.attr('class', "");
                  signal_indicator.addClass("signal3");
                  signal_indicator.attr('src', 'images/GiRi_signal 3.svg');
                  break;
                case 4:
                  signal_indicator.attr('class', "");
                  signal_indicator.addClass("signal4");
                  signal_indicator.attr('src', 'images/GiRi_signal 4.svg');
                  break;
                case 5:
                  signal_indicator.attr('class', "");
                  signal_indicator.addClass("signal5");
                  signal_indicator.attr('src', 'images/GiRi_signal 5.svg');
                  break;
                default:
                  signal_indicator.attr('class', "");                 
                  break;
              }

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
              var prec_Prob_array = new Array(data.daily.data.length - 1);

              var far_temp_Min = new Array(data.daily.data.length-1);
              var far_temp_Max = new Array(data.daily.data.length-1);

              for (var i = 0; i < data.daily.data.length; i++) {

                day[i] = moment.unix(data.daily.data[i].time).format('ddd');
                prec_Prob_array[i] = (data.daily.data[i].precipProbability * 100).toFixed();
                $(".weather-report .precProb" + i.toString()).text(prec_Prob_array[i] + "%");
                prec_Prob_array[i] > 0 ? $('.precType'+ i.toString()).text(data.daily.data[i].precipType) : $('.precType'+ i).text("N/A");
                prec_Prob_array[i] > 0 ? $('.precIntensity'+ i.toString()).html(data.daily.data[i].precipIntensity + "in&#x00B3;/h") : $('.precIntensity'+ i).text("N/A");

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
              var the_lat;
              var the_lng;

      var num_of_brgy = brgy_config.brgy_name.length;

      $("#get_brgy_weather").click(function(){
        $("#brgy-forecast-animation").removeClass("vis");
        $("#brgy_drag .weather").addClass("vis");
        the_lat = brgy_config.brgy_name[parseInt($('#brgy_name').val())].lat;
        the_lng = brgy_config.brgy_name[parseInt($('#brgy_name').val())].lng;
        $(".the_lat").text(the_lat);
        $(".the_long").text(the_lng);
        get_brgy_forecast(the_lat, the_lng);
      });      

      $("#get_brgy_map").click(function(){
        the_lat = brgy_config.brgy_name[parseInt($('#brgy_name').val())].lat;
        the_lng = brgy_config.brgy_name[parseInt($('#brgy_name').val())].lng;
       var brgy_coords = the_lat + "," + the_lng;
       var brgy_name = "Brgy. " + brgy_config.brgy_name[parseInt($('#brgy_name').val())].classname;
       imgmap.show_req_map(brgy_coords, brgy_name);
      });
      function get_brgy_forecast(the_lat, the_lng){
        $.getJSON("https://api.forecast.io/forecast/" + config.forcast.key + "/" + the_lat + "," + the_lng + "?callback=?", function(data) {
              
              forecast_usage(++num_req); // Forecast IO Usage Manager
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

        //Signal Warnings

  setInterval(getweather, 300000);

   // });