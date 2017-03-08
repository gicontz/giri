


  var weath_latitude;
  var weath_longitude;

        navigator.geolocation.getCurrentPosition(successFunction, errorFunction);

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
	            $(".notif_bar .msg").text("It's either Internet Connection Loss or The Geolocation service failed.");
	            $(".notif_bar .notif-icon").addClass("fa-exclamation");	            
	            getweather();
	}

$(document).ready(function(){
    $(".upndown").click(function(){
          	$(".point_the_lat, .point_the_lng").removeClass("hidden");
			$(".tutorial-popup span").text("Input or Type the value of the latitude and longitude that you can see on the element pointed by the bouncing arrows");
			$(".tutorial-popup").removeClass("t10");
			$(".tutorial-popup").addClass("t11");

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
            	data.status !== "ZERO_RESULTS" ? $(".placeName").html(data.results[0].formatted_address) : $(".placeName").html("No Such Place. Make sure you place the indicator in a LAND AREA");
            }).fail(function(){
            	$(".placeName").html("No Such Place. Make sure you place the indicator in a LAND AREA");
            });
        }
});