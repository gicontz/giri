
    var lati;
    var longi;
  
  setInterval(getLocation, 10000);

function getLocation(){
    if (navigator.geolocation)
    {
        navigator.geolocation.getCurrentPosition(successFunction, errorFunction);
    }   


function successFunction(position) 
{
    lati = position.coords.latitude;
    longi = position.coords.longitude;   
        //display the new place name upon geting the geo position of current location
                long_val = longi;
                lat_val = lati;
    getMyPlace(); 
}

function errorFunction(position) 
{    
            $(".notif_bar").removeClass("hide");
            $(".notif_bar .head-msg").text("CANNOT GET YOUR LOCATION!");
            $(".notif_bar .msg").text("You must have an internet connection to get your current location.");
            $(".notif_bar .notif-icon").addClass("fa-exclamation");
}


  //a function to get the JSON of a geocode to get the place name (REVERSE GEOCODING)
  function getMyPlace(){
            $.getJSON("http://maps.googleapis.com/maps/api/geocode/json?latlng="+ lat_val + "," + long_val + "&sensor=true", function(data) {
                $(".placeName").html(data.results[0].formatted_address);
            });
        }
}
