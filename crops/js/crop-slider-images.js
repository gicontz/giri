$(document).ready(function(){
    function create_slider(){         
        $("#crop-slider").remove();
        $("#cropslide").append('<section class="center slider" id="crop-slider"></section>');
        console.log(split_crops.length + "\n" + array_crops);
      if (split_crops.length < 6 && split_crops.length > 1 ) { 
      for(var i = 0; i < 3; i++){               
        for(var j = 0; j < split_crops.length; j++){
                $("#crop-slider").append('<div><img src="crops/images/' + split_crops[j].trim() + '.jpg" title="'+ split_crops[j].trim() +'"></div>');
            }
        }
      }
      else if (array_crops != "" && split_crops.length == 1) {  
        $("#crop-slider").append('<div><img src="crops/images/' + split_crops[0].trim() + '.jpg" title="'+ split_crops[0].trim() +'"></div>');      
        $("#crop-slider").addClass("onti");
      }
      else if(array_crops == "" && split_crops.length == 1){
        $("#crop-slider").append('<p>No Crops For This Month</p>');
        $("#crop-slider").addClass("wala");
      }
      else{
        for(var i = 0; i < split_crops.length; i++){
            $("#crop-slider").append('<div><img src="crops/images/' + split_crops[i].trim() + '.jpg" title="'+ split_crops[i].trim() +'"></div>');              
        }
      }
    }
    create_slider();
    // setInterval(create_slider, 5000);
});