<html>
<head>
  <title>GIRI</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="viewport" content="initial-scale=1.0, user-scalable=no">
    <meta charset="utf-8">
  <!--Resources-->
  <script type="text/javascript" src="sounds/sounds.js"></script> <!--Sound Library-->
  <script type="text/javascript" src="js/giri.js"></script> <!--App Library-->
  <script type="text/javascript">
      const gs = new giri_sounds(); // Initialize Sound Object
      const giriapp = new giri(); // Initialize App Object
  </script>
  <script src="js/annyang.js"></script>
  <script src="js/moment.js"></script>
  <link rel="shortcut icon" href="favicon.png" />
  <!-- <script src="js/speechkitt.min.js"></script> -->
  <!-- <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/angularjs/1.4.8/angular.min.js"></script> -->
  <!-- <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.5/angular-animate.min.js"></script> -->

  <!--Bootstrap-->
  <!-- Latest compiled and minified CSS -->
  <link rel="stylesheet" href="css/bootstrap.min.css">
  <!--jQuery-->
  <script src="js/jquery.min.js"></script>
  <!-- Latest compiled and minified JavaScript -->
  <script src="js/bootstrap.min.js" ></script>
  <!--jQuery UI-->
  <script type="text/javascript" src="js/jquery-ui.min.js"></script>
  <script type="text/javascript" src="js/jquery-tp.js"></script>

<!-- Application-->

<!-- <script type="text/javascript" src="js/app.js"></script> -->
<!-- <script type="text/javascript" src="js/annyang-service.js"></script> -->
<!-- <script type="text/javascript" src="js/weather-service.js"></script>  -->

 <!--Settings-->
<script type="text/javascript" src="js/reader.js"></script>
<script type="text/javascript" src="js/geo-position.js"></script>
<script type="text/javascript" src="config.js"></script>
<script type="text/javascript" src="js/place.js"></script>

<!-- Weather -->
<script type="text/javascript" src="js/weather.js"></script>
<link rel="stylesheet" type="text/css" href="css/weather-icons.css">

<link rel="stylesheet" type="text/css" href="css/style.css">
<link rel="stylesheet" type="text/css" href="css/main.css">

<script type="text/javascript" src="crops/data/crops.js"></script>
<script type="text/javascript" src="crops/js/getcrop.js"></script>
<script type="text/javascript" src="crops/js/crop-data.js"></script>
<link rel="stylesheet" type="text/css" href="crops/css/slick.css">
<link rel="stylesheet" type="text/css" href="crops/css/slick-theme.css">
<link type="text/css" href="css/jquery-ui.min.css" rel="Stylesheet" />  
<script type="text/javascript" src="js/dragmouse.js"></script>
<link rel="stylesheet" type="text/css" href="crops/css/crop-slider.css">
</head>
<body class="pointer-m">

<!-- Trigger Button-->
<giri id="trigger" class="withtool-tip" title="Click to trigger command / start listening again">
    <img src="images/giri.png"> 
</giri>

  <!--Google MAP API-->
<script type="text/javascript" src="js/map.js"></script>
<div id="map" width="100%" height="100%">
  <img>
</div>
  
<!-- Crops of the Month -->
<script type="text/javascript" src="js/slider.js"></script>
    <div class="slider-caption withtool-tip" title="Click to show the crops of the month">
      <p>Crops of the Month</p>
    </div>
  <div id="cropslide">
   <!--  <section class="center slider" id="crop-slider"></section> -->
  </div>
<!-- End of Crops of the Month -->
<!--Deprecated-->
<!--<script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBvyDGw_-JMrFWQec19qV5my9JpctAhtas&callback=initMap"></script>-->
<!--Map-->
  <!--End Google MAP-->

  <!--Page Loader-->
<script type="text/javascript" src="js/loader.js"></script>
  <!--End Page Loader-->

  <!--Notification PopUp-->
<div class="notif_bar drag-m hide" id="notif_drag">
  <div class="upper-notif">
    <i class="notif-icon fa" style="font-weight: 600">!</i>
    <p class="head-msg"></p>
  </div>

  <div class="bottom-notif">
    <p class="msg"></p>
    <button class="ok-btn">OK</button>
  </div>
</div>
  <!--End Notification Popup-->

  <!--Popup Trash Can-->
<div class="trash hidden">  
    <span class="glyphicon glyphicon-trash"></span>
</div>
  <!--End Popup Trash Can-->

  <!--Place Name-->
<div class="place_name_popup">
  <span class="close"></span>
    <p class="placeName" title="Your Current Location"></p>    
    <p class="accuracy" title="Indicates how accurate is the GPS"></p>
</div>
  <!--End Place Name-->

  <!--Screenshot Shutter-->
<div class="shutter"></div>
  <!--End Shutter-->

  <!--Upload Loader-->
<div class="uploading">
  <img src="images/loading.gif">
  <span class="motionload"></span>
</div> 
  <!--End Upload Loader-->

  <!--Network Checker-->
<div class="network-err"><p>No Network</p></div>
  <!--End Network Checker-->

<!--The Main Content-->
<div class="main-content">

<div id="giri-boot-loader">
  <video src="loading.mp4" autoplay width="100%" height="100%" id="giri-vid"></video>
</div>

<div class="giri-info-content">
  <div class="giri-earth">
    <div id="giri-weather">
      <div class="tip-ofweath">
        <div class="long"></div>
        <div class="lat"></div>
      </div>
        <p class="forecast_date hidden"><span>Forecast Date: </span></p>
        <iframe id="giri-map"></iframe>      
    </div>
  </div>

  <div class="giri-forecast">
      <div class="top-right">
        <div class="weather">
          <div class="weather-today" title="The current weather temperature displayed in Celsius">
            <span class="icon dimmed wi "></span>
            <span  id="weather" class="tempreture"></span>
          </div>
          <div class="weather-week-descriptor">
            <span class="hourly" title="Summary of the weather that will happen every hour of the day"></span>
          </div>
          <div class="weather-week">

          <div class="weather-week-descriptor">
            <span class="daily" title="Daily summary of the weather"></span>
          </div>

            <div class="weather-week-day">
              
              <div class="day1">
                <span class="day light-grey"></span>
                <span class="icon-small dimmed wi "></span>
                <span class="tempreture tempreture-min"></span>
                <span class="tempreture tempreture-max"></span>    
              </div>

              <div class="day2">
                <span class="day light-grey"></span>
                <span class="icon-small dimmed wi "></span>
                <span class="tempreture tempreture-min"></span>
                <span class="tempreture tempreture-max"></span>    
              </div>

              <div class="day3">
                <span class="day light-grey"></span>
                <span class="icon-small dimmed wi "></span>
                <span class="tempreture tempreture-min"></span>
                <span class="tempreture tempreture-max"></span>    
              </div>

              <div class="day4">
                <span class="day light-grey"></span>
                <span class="icon-small dimmed wi "></span>
                <span class="tempreture tempreture-min"></span>
                <span class="tempreture tempreture-max"></span>    
              </div>

              <div class="day5">
                <span class="day light-grey"></span>
                <span class="icon-small dimmed wi "></span>
                <span class="tempreture tempreture-min"></span>
                <span class="tempreture tempreture-max"></span>    
              </div>

              <div class="day6">
                <span class="day light-grey"></span>
                <span class="icon-small dimmed wi "></span>
                <span class="tempreture tempreture-min"></span>
                <span class="tempreture tempreture-max"></span>    
              </div>   
              <span class="fio-credits"><em><a href="https://darksky.net/poweredby/">Powered by: Dark Sky</a></em></span>
            </div>
          </div>
        </div>        
      </div> 

    <div class="middle-left drag-m hidden" id="brgy_drag" style="">
      <div id="brgy-forecast-animation" class="back">
        <iframe src=""></iframe>
      </div>
      <div class="brgy-forecast front">

        <div class="scr_btn">
          <button class="up"><i class="glyphicon glyphicon-chevron-up"></i></button>
          <button class="down"><i class="glyphicon glyphicon-chevron-down"></i></button>
        </div>

          <h3>Get Weather on other Barangays</h3>
          <select id="brgy_name">Select Barangay</select>
          <button id="get_brgy_weather">Show Forecast Data</button>

        <div class="weather">
          <div class="weather-today" title="The current weather temperature displayed in Celsius">
            <span class="icon dimmed wi "></span>
            <span  id="weather" class="tempreture"></span>
          </div>
          <div class="weather-week-descriptor">
            <span class="hourly" title="Summary of the weather that will happen every hour of the day"></span>
          </div>
          <div class="weather-week">

          <div class="weather-week-descriptor">
            <span class="daily" title="Daily summary of the weather"></span>
          </div>

            <div class="weather-week-day">
              
              <div class="day1">
                <span class="day light-grey"></span>
                <span class="icon-small dimmed wi "></span>
                <span class="tempreture tempreture-min"></span>
                <span class="tempreture tempreture-max"></span>    
              </div>

              <div class="day2">
                <span class="day light-grey"></span>
                <span class="icon-small dimmed wi "></span>
                <span class="tempreture tempreture-min"></span>
                <span class="tempreture tempreture-max"></span>    
              </div>

              <div class="day3">
                <span class="day light-grey"></span>
                <span class="icon-small dimmed wi "></span>
                <span class="tempreture tempreture-min"></span>
                <span class="tempreture tempreture-max"></span>    
              </div>

              <div class="day4">
                <span class="day light-grey"></span>
                <span class="icon-small dimmed wi "></span>
                <span class="tempreture tempreture-min"></span>
                <span class="tempreture tempreture-max"></span>    
              </div>

              <div class="day5">
                <span class="day light-grey"></span>
                <span class="icon-small dimmed wi "></span>
                <span class="tempreture tempreture-min"></span>
                <span class="tempreture tempreture-max"></span>    
              </div>

              <div class="day6">
                <span class="day light-grey"></span>
                <span class="icon-small dimmed wi "></span>
                <span class="tempreture tempreture-min"></span>
                <span class="tempreture tempreture-max"></span>    
              </div>   
              <span class="fio-credits"><em><a href="https://darksky.net/poweredby/">Powered by: Dark Sky</a></em></span>
            </div>
          </div>
        </div> 
      </div>
    </div>

      <div id="date_time">
        <script type="text/javascript" src="time/config.js"></script>
        <script type="text/javascript" src="time/time.js"></script>
        <p class="date"></p>
        <p class="time" id="time"></p>
      </div>

  <div id="giri-face">
      <img src="images/giri.png" class="trigger">
    <h1 class="greet"></h1>
    <div class="cmd_container">
      <div class="cmd-list hide">
         <h2>Available Commands</h2>
          <dl>
            <dt>What can I say?</dt>
            <dd>Shows a list of voice commands available to you.</dd>
            <dt>Go home</dt>
            <dd>Takes you back to the home screen</dd>
            <dt>Show Weather</dt>
            <dd>Will show you the animated weather forecast</dd>
            <dt>Go To Sleep</dt>
            <dd>Sleep the Screen</dd>
            <dt>Show Precipitation</dt>
            <dd>Show the Total Precipitable Water while Weather is visible too</dd>
            <dt>Show Temperature</dt>
            <dd>Shows the Temperature while Weather is visible too</dd>
            <dt>Introduce Yourself</dt>
            <dd>State a short description of his capabilities</dd>
            <dt>Next Day Forecast</dt>
            <dd>Shows the forecast for the next day from the current forecast Date</dd>
            <dt>Show Current Weather</dt>
            <dd>Shows the Current weather in the current view</dd>
            <dt>Next (number) days</dt>
            <dd>Shows the forecast a number of days from the current date - maximum of 5</dd>
          </dl>
      </div>
    </div>
    <div id="listen">Say "What can I say?" to display the list of commands</div>
  </div>

  <div class="caption-modal">
    <div class="top_part">
      <div class="top_container">
    <span class="close"></span>
    <p class="pop_title">Post to Facebook</p>
    <p class="post_capt">What do you want me to post?</p>
      </div>
    </div>
    <div class="container">
      <textarea class="weather-status"></textarea>
      <button class="submit-weather-status">Post to Facebook</button>
      <script type="text/javascript" src="js/fbpost.js"></script>
    </div>
  </div>
  </div>

  <div id="giri-bottom-face" class="withtool-tip">
        <img src="images/giri.png" class="fb-post" title="Click to Create caption for the post">
  </div>

</div>
<div class="giri_place_getter hide">
  <span class="upndown up"></span>
    <div class="form-group">
  <input type="text" placeholder="longitude" class="lon_text">
    </div>
  <div class="form-group">
  <input type="text" placeholder="latitude" class="lat_text">
    </div>
  <input type="submit" value="GET PLACE" id="place_btn">
</div>

</div>
<!--End of Main Content-->

<footer class="giri-license">
  <p>&copy; Copyright 2016 GIRI</p>
</footer>
<!--Voice Controls-->
<script type="text/javascript" src="js/controls.js"></script>
<!--Crop Slider-->
<script type="text/javascript" src="crops/js/slick.js"></script>
<script type="text/javascript" src="crops/js/crop-slider-images.js"></script>
<script type="text/javascript" src="crops/js/crop-slider.js"></script>
</body>
</html>