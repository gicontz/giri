


  var weath_latitude;
  var weath_longitude;

        navigator.geolocation.getCurrentPosition(successFunction, errorFunction, {maximumAge:600000, timeout:5000, enableHighAccuracy: true});

	//EARTH API
	var long_val;
	var lat_val;
	//get the values of coordinates
			long_val = config.geo_position.longitude;
			lat_val = config.geo_position.latitude;

	//Current Location


	//Get Default Weather
	weath_latitude = config.geo_position.latitude;
	weath_longitude = config.geo_position.longitude;

	function successFunction(position) 
	{
	    var lati;
	    var longi;
	    var accuracy;
	    lati = position.coords.latitude;
	    longi = position.coords.longitude; 
	    accuracy = position.coords.accuracy; 
	    //Weather
				weath_latitude = lati;
				weath_longitude = longi;
				console.log(lati + "," + longi + " accuracy: " + accuracy);
			getweather();
	}	

	function errorFunction(position) 
	{    
				weath_latitude = config.geo_position.latitude;
				weath_longitude = config.geo_position.longitude;
	            $(".notif_bar").removeClass("hide");
	            $(".notif_bar .head-msg").text("CANNOT GET YOUR LOCATION!");
	            $(".notif_bar .msg").text("You must have an internet connection to get your current location.");
	            $(".notif_bar .notif-icon").addClass("fa-exclamation");
	}

$(document).ready(function(){
    $(".upndown").click(function(){
        var el = $(this);
        var targ_el = $(".giri_place_getter");
        if(el.hasClass("up")){
            el.removeClass("up");
            el.addClass("dwn");
            targ_el.css("bottom", "0");
        }else{
            el.removeClass("dwn");
            el.addClass("up");
            targ_el.attr("style", "");      
        }
    });

    //display the new place name upon geting information in a form
	$("#place_btn").click(function(){
		long_val = $(".lon_text").val();
		lat_val = $(".lat_text").val();
		if ((long_val == "" || long_val == null) && (lat_val == "" || lat_val == null)) {
			long_val = config.geo_position.longitude;
			lat_val = config.geo_position.latitude;
		}
		get_manual_Place();	
	});
  //a function to get the JSON of a geocode to get the place name (REVERSE GEOCODING)
  function get_manual_Place(){
            $.getJSON("http://maps.googleapis.com/maps/api/geocode/json?latlng="+ lat_val + "," + long_val + "&sensor=true", function(data) {
 				$(".placeName").html(data.results[0].formatted_address);
            });
        }
});