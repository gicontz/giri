$(document).ready(function(){
    function create_slider(){         
        $("#crop-slider").remove();
        $("#cropslide").append('<section class="center slider" id="crop-slider"></section>');
        
      if (split_crops.length < 6) { 
      for(var i = 0; i < 3; i++){               
        for(var j = 0; j < split_crops.length; j++){
                $("#crop-slider").append('<div><img src="crops/images/' + split_crops[j].trim() + '.jpg"></div>');
            }
        }
      }
      else{
        for(var i = 0; i < split_crops.length; i++){
            $("#crop-slider").append('<div><img src="crops/images/' + split_crops[i].trim() + '.jpg"></div>');              
        }
      }
    }
    create_slider();
    // setInterval(create_slider, 5000);
});