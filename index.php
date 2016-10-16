<html>
<head>
  <title>GIRI</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <!--Resources-->
<script src="//cdnjs.cloudflare.com/ajax/libs/annyang/2.5.0/annyang.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.10.6/moment.js"></script>
<!-- <script src="js/speechkitt.min.js"></script> -->
<!-- <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/angularjs/1.4.8/angular.min.js"></script> -->
<!-- <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.5/angular-animate.min.js"></script> -->

<!--Bootstrap-->
<!-- Latest compiled and minified CSS -->
<link rel="stylesheet" href="css/bootstrap.min.css">
<!-- Optional theme -->
<link rel="stylesheet" href="css/bootstrap-theme.min.css">
<!--jQuery-->
<script src="js/jquery.min.js"></script>
<!-- Latest compiled and minified JavaScript -->
<script src="js/bootstrap.min.js" ></script>

<!-- Application-->
<!-- <script type="text/javascript" src="js/app.js"></script> -->
<!-- <script type="text/javascript" src="js/annyang-service.js"></script> -->
<!-- <script type="text/javascript" src="js/weather-service.js"></script>  -->

 <!--Settings-->
<script type="text/javascript" src="config.js"></script>

<!-- Weather -->
<script type="text/javascript" src="js/weather.js"></script>
<link rel="stylesheet" type="text/css" href="css/weather-icons.css">

<link rel="stylesheet" type="text/css" href="css/style.css">
<link rel="stylesheet" type="text/css" href="css/main.css">

<script type="text/javascript" src="crops/data/crops.js"></script>
<script type="text/javascript" src="crops/js/getcrop.js"></script>
<script type="text/javascript" src="crops/js/crop-data.js"></script>
</head>
<body>
<script type="text/javascript" src="js/loader.js"></script>
<div class="main-content">

<!--<div id="giri-boot-loader">
  <video src="loading.mp4" autoplay width="100%" height="100%" id="giri-vid"></video>
</div>-->

<div class="giri-info-content">
  <div class="giri-earth">
    <div id="giri-weather">
      <button class="fb-post" onclick="postFB();">POST ON FACEBOOK</button>
      <iframe id="giri-map" src="https://earth.nullschool.net/#current/wind/surface/level/overlay=wind/orthographic=-236.70,12.37,2494/loc=120.879,14.128"></iframe>
    </div>
</div>

  <div class="giri-forecast">
      <div class="top-right">
        <div class="weather">
          <div class="weather-today">
            <span class="icon dimmed wi "></span>
            <span  id="weather" class="tempreture"></span>
          </div>
          <div class="weather-week-descriptor1">
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
            </div>
          </div>
        </div>        
      </div>
  <div id="giri-face">
    <h1> Hello Master </h1>
    <div id="listen"></div>
  </div>
    </div>
</div>
</div>

<script type="text/javascript" src="js/controls.js"></script>
</body>
</html>
