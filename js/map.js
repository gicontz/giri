   

  var imgmap = {};
  imgmap.gmap_key = readTextFile('api_configs/google-map.giri');
  imgmap.center = "Silang, Cavite";
  imgmap.zoom = 15;
  imgmap.generateMap = function(targetCenter, targetZoom){
    if (targetCenter === undefined) {
        targetCenter = imgmap.center;
    } 
    else{
      //when we change the center of the map keep track of it
      imgmap.center = targetCenter;
    }
    if (targetZoom === undefined) {
      targetZoom = imgmap.zoom;
    }
  return "http://maps.googleapis.com/maps/api/staticmap?center="+targetCenter+"&zoom="+targetZoom+
            "&format=png&sensor=false&scale=2&size=1366x447&key="+ imgmap.gmap_key +"&maptype=roadmap&style=visibility:on|weight:1|invert_lightness:true|saturation:-100|lightness:1";
  };
  imgmap.zoomIn = function(){
    gs.Zoom_In();
    imgmap.zoom += 1;
    $("#map img").attr("src", imgmap.generateMap(imgmap.center));
    $("#listen").text("Zoom In");
  };

  imgmap.zoom_by = function(){
    gs.zooooom();
    imgmap.zoom = 17;
    $("#map img").attr("src", imgmap.generateMap(imgmap.center));
    $("#listen").text("Zooooooom");
  };

  imgmap.zoomOut = function(){
    gs.Zoom_Out();
    imgmap.zoom -= 1;
    $("#map img").attr("src", imgmap.generateMap(imgmap.center));
    $("#listen").text("Zoom Out");    
  }

  imgmap.zoom_out_by = function(){
    gs.Max_ZoomOut();
    imgmap.zoom = 10;
    $("#map img").attr("src", imgmap.generateMap(imgmap.center));
    $("#listen").text("Zooooooom Out");    
  }

  imgmap.show_req_map = function(place){
    gs.reqMap();
    imgmap.zoom = 15;
    imgmap.center = place;
    $(".greet").addClass("send-to-back");
    $("#map").addClass("showmap");
    $("#map img").attr("src", imgmap.generateMap(imgmap.center));   
    $("#listen").text("Showing Map of "+place); 
  }

  function show_current_map(){
    gs.showMap();
    $(".greet").addClass("send-to-back");
  if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };
            imgmap.zoom = 15;
            imgmap.center = pos.lat + "," + pos.lng;
            $("#map img").attr("src", imgmap.generateMap(imgmap.center));
          }, function(){
            imgmap.center = config.geo_position.latitude + "," + config.geo_position.longitude;
            $("#map img").attr("src", imgmap.generateMap(imgmap.center));            
          });
  }
  }