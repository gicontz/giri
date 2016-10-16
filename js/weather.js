$(document).ready(function(){
	//ForeCast.IO
            $.getJSON("https://api.forecast.io/forecast/" + config.forcast.key + "/" + config.geo_position.latitude + "," + config.geo_position.longitude + "?callback=?", function(data) {
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
              $('.weather-week-descriptor .daily').text(data.daily.summary);
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

    //Earth   		
        });