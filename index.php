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

  <!--Google MAP API-->
<script type="text/javascript" src="js/map.js"></script>
<div id="map" width="100%" height="100%">
  <img>
</div>

<!-- Trigger Button-->
<giri id="trigger">
    <img src="images/giri.png">    
  </giri>
  
<!-- Crops of the Month -->
<script type="text/javascript" src="js/slider.js"></script>
    <p class="slider-caption">Crops of the Month</p>
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
    <p class="placeName"></p>    
    <p class="accuracy"></p>
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
      <p class="forecast_date hidden"><span>Forecast Date: </span></p>
      <iframe id="giri-map"></iframe>
    </div>
  </div>

  <div class="giri-forecast">
      <div class="top-right">
        <div class="weather">
          <div class="weather-today">
            <span class="icon dimmed wi "></span>
            <span  id="weather" class="tempreture"></span>
          </div>
          <div class="weather-week-descriptor">
            <span class="hourly"></span>
          </div>
          <div class="weather-week">

          <div class="weather-week-descriptor">
            <span class="daily"></span>
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

    <div class="middle-left drag-m" id="brgy_drag" style=""> 
      <div class="brgy-forecast">

        <div class="scr_btn">
          <button class="up"><i class="glyphicon glyphicon-chevron-up"></i></button>
          <button class="down"><i class="glyphicon glyphicon-chevron-down"></i></button>
        </div>

        <h3>Weather in some Barangays</h3>
        <div class="adlas">
          <p>Adlas</p>
                <span class="icon-small dimmed wi "></span>
                <span class="tempreture"></span>
        </div>       

        <div class="balite1">
          <p>Balite I</p>
                <span class="icon-small dimmed wi "></span>
                <span class="tempreture"></span>
        </div>  

        <div class="balite2">
          <p>Balite II</p>
                <span class="icon-small dimmed wi "></span>
                <span class="tempreture"></span>
        </div>  

        <div class="balubad">
          <p>Balubad</p>
                <span class="icon-small dimmed wi "></span>
                <span class="tempreture"></span>
        </div>  

        <div class="brgy1">
          <p>Barangay 1</p>
                <span class="icon-small dimmed wi "></span>
                <span class="tempreture"></span>
        </div>  

        <div class="brgy2">
          <p>Barangay 2</p>
                <span class="icon-small dimmed wi "></span>
                <span class="tempreture"></span>
        </div>  

        <div class="brgy3">
          <p>Barangay 3</p>
                <span class="icon-small dimmed wi "></span>
                <span class="tempreture"></span>
        </div>  

        <div class="brgy4">
          <p>Barangay 4</p>
                <span class="icon-small dimmed wi "></span>
                <span class="tempreture"></span>
        </div>  

        <div class="brgy5">
          <p>Barangay 5</p>
                <span class="icon-small dimmed wi "></span>
                <span class="tempreture"></span>
        </div>   

        <div class="batas">
          <p>Batas</p>
                <span class="icon-small dimmed wi "></span>
                <span class="tempreture"></span>
        </div>  

        <div class="biga1">
          <p>Biga 1</p>
                <span class="icon-small dimmed wi "></span>
                <span class="tempreture"></span>
        </div>  

        <div class="biga2">
          <p>Biga 2</p>
                <span class="icon-small dimmed wi "></span>
                <span class="tempreture"></span>
        </div>  

        <div class="biluso">
          <p>Biluso</p>
                <span class="icon-small dimmed wi "></span>
                <span class="tempreture"></span>
        </div>  

        <div class="bucal">
          <p>Bucal</p>
                <span class="icon-small dimmed wi "></span>
                <span class="tempreture"></span>
        </div>  

        <div class="buho">
          <p>Buho</p>
                <span class="icon-small dimmed wi "></span>
                <span class="tempreture"></span>
        </div>  

        <div class="bulihan">
          <p>Bulihan</p>
                <span class="icon-small dimmed wi "></span>
                <span class="tempreture"></span>
        </div>  

        <div class="cabangaan">
          <p>Cabangaan</p>
                <span class="icon-small dimmed wi "></span>
                <span class="tempreture"></span>
        </div>  

        <div class="carmen">
          <p>Carmen</p>
                <span class="icon-small dimmed wi "></span>
                <span class="tempreture"></span>
        </div>  

        <div class="hoyo">
          <p>Hoyo</p>
                <span class="icon-small dimmed wi "></span>
                <span class="tempreture"></span>
        </div>  

        <div class="hukay">
          <p>Hukay</p>
                <span class="icon-small dimmed wi "></span>
                <span class="tempreture"></span>
        </div>  

        <div class="iba">
          <p>Iba</p>
                <span class="icon-small dimmed wi "></span>
                <span class="tempreture"></span>
        </div>  

        <div class="inchikan">
          <p>Inchikan</p>
                <span class="icon-small dimmed wi "></span>
                <span class="tempreture"></span>
        </div>  

        <div class="kalubkob">
          <p>Kalubkob</p>
                <span class="icon-small dimmed wi "></span>
                <span class="tempreture"></span>
        </div>  

        <div class="kaong">
          <p>Kaong</p>
                <span class="icon-small dimmed wi "></span>
                <span class="tempreture"></span>
        </div>  

        <div class="lalaan1">
          <p>Lalaan 1</p>
                <span class="icon-small dimmed wi "></span>
                <span class="tempreture"></span>
        </div>  

        <div class="lalaan2">
          <p>Lalaan 2</p>
                <span class="icon-small dimmed wi "></span>
                <span class="tempreture"></span>
        </div>  

        <div class="litlit">
          <p>Litlit</p>
                <span class="icon-small dimmed wi "></span>
                <span class="tempreture"></span>
        </div>  

        <div class="lucsuhin">
          <p>Lusuhin</p>
                <span class="icon-small dimmed wi "></span>
                <span class="tempreture"></span>
        </div>  

        <div class="lumil">
          <p>Lumil</p>
                <span class="icon-small dimmed wi "></span>
                <span class="tempreture"></span>
        </div>  

        <div class="maguyam">
          <p>Maguyam</p>
                <span class="icon-small dimmed wi "></span>
                <span class="tempreture"></span>
        </div>  

        <div class="malabag">
          <p>Malabag</p>
                <span class="icon-small dimmed wi "></span>
                <span class="tempreture"></span>
        </div>  

        <div class="malakit">
          <p>Malaking Tatiao</p>
                <span class="icon-small dimmed wi "></span>
                <span class="tempreture"></span>
        </div>  

        <div class="mataasnab">
          <p>Mataas na Burol</p>
                <span class="icon-small dimmed wi "></span>
                <span class="tempreture"></span>
        </div>  

        <div class="muntingi">
          <p>Munting Ilog</p>
                <span class="icon-small dimmed wi "></span>
                <span class="tempreture"></span>
        </div>  

        <div class="paligawan">
          <p>Paligawan</p>
                <span class="icon-small dimmed wi "></span>
                <span class="tempreture"></span>
        </div>  

        <div class="pasonglangka">
          <p>Pasong Langka</p>
                <span class="icon-small dimmed wi "></span>
                <span class="tempreture"></span>
        </div> 

        <div class="pooc1">
          <p>Pooc 1</p>
                <span class="icon-small dimmed wi "></span>
                <span class="tempreture"></span>
        </div> 

        <div class="pooc2">
          <p>Pooc 2</p>
                <span class="icon-small dimmed wi "></span>
                <span class="tempreture"></span>
        </div> 

        <div class="pulongsaging">
          <p>Pulong Saging</p>
                <span class="icon-small dimmed wi "></span>
                <span class="tempreture"></span>
        </div> 

        <div class="pulongbunga">
          <p>Pulong Bunga</p>
                <span class="icon-small dimmed wi "></span>
                <span class="tempreture"></span>
        </div> 

        <div class="putingkahoy">
          <p>Puting Kahoy</p>
                <span class="icon-small dimmed wi "></span>
                <span class="tempreture"></span>
        </div> 

        <div class="sabutan">
          <p>Sabutan</p>
                <span class="icon-small dimmed wi "></span>
                <span class="tempreture"></span>
        </div> 

        <div class="santol">
          <p>Santol</p>
                <span class="icon-small dimmed wi "></span>
                <span class="tempreture"></span>
        </div> 

        <div class="sanvic1">
          <p>San Vicente 1</p>
                <span class="icon-small dimmed wi "></span>
                <span class="tempreture"></span>
        </div> 

        <div class="sanvic2">
          <p>Sab Vicente 2</p>
                <span class="icon-small dimmed wi "></span>
                <span class="tempreture"></span>
        </div> 

        <div class="tartaria">
          <p>Tartaria</p>
                <span class="icon-small dimmed wi "></span>
                <span class="tempreture"></span>
        </div> 

        <div class="tibig">
          <p>Tibig</p>
                <span class="icon-small dimmed wi "></span>
                <span class="tempreture"></span>
        </div> 

        <div class="toledo">
          <p>Toldeo</p>
                <span class="icon-small dimmed wi "></span>
                <span class="tempreture"></span>
        </div> 

        <div class="tubuan1">
          <p>Tubuan 1</p>
                <span class="icon-small dimmed wi "></span>
                <span class="tempreture"></span>
        </div> 

        <div class="tubuan2">
          <p>Tubuan 2</p>
                <span class="icon-small dimmed wi "></span>
                <span class="tempreture"></span>
        </div> 

        <div class="tubuan3">
          <p>Tubuan 3</p>
                <span class="icon-small dimmed wi "></span>
                <span class="tempreture"></span>
        </div> 

        <div class="ulat">
          <p>Ulat</p>
                <span class="icon-small dimmed wi "></span>
                <span class="tempreture"></span>
        </div> 

      </div>
    </div>

      <div id="date_time">
        <?php include("time/time.php"); ?>
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

  <div id="giri-bottom-face">
        <img src="images/giri.png" class="fb-post">
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