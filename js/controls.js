var show_weather = function(){
  console.log('Show Weather');
    $("#listen").text('Show Weather');
      $("#giri-weather #giri-map").animate({"opacity": "1", "z-index": "1"}); 
}

if (annyang) {
  // Let's define a command.
  var whatihear = function(whatihear){
    console.log(whatihear);
  	$("#listen").text(whatihear);
  }
  var dateNow = new Date();
  var curdayofM = dateNow.getDate();
  var curyear = dateNow.getFullYear();
  var curmonth = dateNow.getMonth() + 1;
  var currentMode = "wind";
  var commands = {
    'Show Weather': show_weather,
    'Hide Weather': function() { 
    	$("#giri-weather #giri-map").animate({"opacity": "0", "z-index": "-1"}); 
    },
    'Show Precipitation': function(){
    	 	currentMode = "total_precipitable_water";
    		$("#giri-map").attr("src", "https://earth.nullschool.net/#current/wind/surface/level/overlay="+currentMode+"/orthographic=-236.70,12.37,2494/loc=120.879,14.128"); 
    },
    'Show Temperature': function(){
    		currentMode = "temp";
    		$("#giri-map").attr("src", "https://earth.nullschool.net/#current/wind/surface/level/overlay="+currentMode+"/orthographic=-236.70,12.37,2494/loc=120.879,14.128"); 
    },
    'Next Day Forecast': function(){
    		curdayofM+=1;
    		$("#giri-map").attr("src", "https://earth.nullschool.net/#"+curyear+"/"+curmonth+"/"+curdayofM+"/0900Z/wind/surface/level/overlay="+currentMode+"/orthographic=-236.70,12.37,2494/loc=120.879,14.128"); 
    },
    'Show Current Weather': function(){
    		curdayofM = dateNow.getDate();
    		$("#giri-map").attr("src", "https://earth.nullschool.net/#current/wind/surface/level/overlay="+currentMode+"/orthographic=-236.70,12.37,2494/loc=120.879,14.128"); 		
    },
    'Show Wind': function(){
        currentMode = "wind";
        $("#giri-map").attr("src", "https://earth.nullschool.net/#current/wind/surface/level/overlay="+currentMode+"/orthographic=-236.70,12.37,2494/loc=120.879,14.128"); 
    },
    'Next :dnum days': function(dnum){
      if(dnum=="three"){
        dnum = 3;
      }
        dnum = dateNow.getDate() + parseInt(dnum);
        $("#giri-map").attr("src", "https://earth.nullschool.net/#"+curyear+"/"+curmonth+"/"+dnum+"/0900Z/wind/surface/level/overlay="+currentMode+"/orthographic=-236.70,12.37,2494/loc=120.879,14.128");    
    },
    '*whatihear': whatihear
  };

  // Add our commands to annyang
  annyang.addCommands(commands);
  //Start Listen
  annyang.start();
}