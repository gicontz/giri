

		var the_greet = $("#firstGreet");
		var the_tut = $(".tutorial-popup");
		var tut_text = $(".tutorial-popup span");

	setTimeout(function(){
		$("#firstGreet .continue").removeClass("hidden");
	},
	4000);

	$("#firstGreet .continue").click(function(){
		the_greet.remove();
		$("#tutorial-section").addClass("start");
		tut_text.text("The greetings of Giri");
		the_tut.removeClass("hidden");
		the_tut.addClass("t1");
		$("#giri-face h1").addClass("emphasize");
	});

	$(".tutorial-popup .skip_tut").click(function(){
		$(".tutorial-popup").remove();
		$("#tutorial-section").remove();
		$("*").removeClass("emphasize");
		$("*").removeClass("emphasize-absolute");
		$("#restart_tut").removeClass("hidden");
	});

	$("#restart_tut .yes_tut").click(function(){
		$("#restart_tut").remove();
	});

	$("#restart_tut .no_tut").click(function(){
		$("#restart_tut").remove();
		$.ajax({
		type: "post",
		url: "http://" + window.location.hostname.toString() + "/giri/admin/tutorial-no.php",
		success: function(){	
				console.log("Tutorial OFF upon reboot");			
		 }
		});	
	});

	$(".tutorial-popup .next_tut").click(function(){
		//Tutorial 1
		if(the_tut.hasClass("t1")){
			tut_text.text("Try to speak");
			the_tut.removeClass("t1");
			the_tut.addClass("t2");
			$("#giri-face h1").removeClass("emphasize");
			$("#listen").addClass("emphasize");
		}

		//Tutorial 2
		else if(the_tut.hasClass("t2")){
			silent_untold();
			tut_text.text("Click to show the current crops");
			the_tut.removeClass("t2");
			the_tut.addClass("t3");
			$("#listen").removeClass("emphasize");
			$(".slider-caption").addClass("emphasize-absolute");
		}


		else if(the_tut.hasClass("t3")){
			tut_text.text("Noise Trigger, try to hover cursor");
			the_tut.removeClass("t3");
			the_tut.addClass("t4");
			$(".slider-caption").removeClass("emphasize-absolute");
			$("#trigger").addClass("emphasize-absolute");
		}


		else if(the_tut.hasClass("t4")){
			tut_text.text("The Quantitable report of weather forecast");
			the_tut.removeClass("t4");
			the_tut.addClass("t5");
			$("#trigger").removeClass("emphasize-absolute");
			$(".top-right").addClass("emphasize-absolute");
		}

		else if(the_tut.hasClass("t5")){
			tut_text.text("Your current location and its accuracy in finding your location");
			the_tut.removeClass("t5");
			the_tut.addClass("t6");
			$(".top-right").removeClass("emphasize-absolute");
			$(".place_name_popup").addClass("emphasize-absolute");
		}


		else if(the_tut.hasClass("t6")){
			show_weather();
			tut_text.text("By Saying \" Show Weather \" you can now see the weather forecast and click this to check the status that will be post on facebook");
			the_tut.removeClass("t6");
			the_tut.addClass("t7");
			$(".place_name_popup").removeClass("emphasize-absolute");
			$("#giri-bottom-face").addClass("emphasize-absolute");
		}

		else if(the_tut.hasClass("t7")){
			$(".fb-post").click();
			tut_text.text("Click this to upload the weather screenshot and weather report. (You can post after this tutorial)");
			the_tut.removeClass("t7");
			the_tut.addClass("t8");
			$("#giri-bottom-face").removeClass("emphasize-absolute");
		}

		else if(the_tut.hasClass("t8")){
          	$(".caption-modal").removeClass("show");
			tut_text.text("Display the current weather date, scale and mode. Try to move your cursor to the scale to check the color legend value in the weather animation");
			the_tut.removeClass("t8");
			the_tut.addClass("t9");
			$("#giri-bottom-face").removeClass("emphasize-absolute");
			$(".forecast_date").addClass("emphasize-absolute");
		}

		else if(the_tut.hasClass("t9")){
			tut_text.text("Click to toggle the form of the place getter, for you to know the actual location pointed by the indicator");
			the_tut.removeClass("t9");
			the_tut.addClass("t10");
			$(".forecast_date").removeClass("emphasize-absolute");
			$(".giri_place_getter").addClass("emphasize-absolute");
		}


		else if(the_tut.hasClass("t10")){
			$(".upndown").click();
          	$(".point_the_lat, .point_the_lng").removeClass("hidden");
			tut_text.text("Input or Type the value of the latitude and longitude that you can see on the element pointed by the bouncing arrows");
			the_tut.removeClass("t10");
			the_tut.addClass("t11");
		}

		else if(the_tut.hasClass("t11")){
          	$(".point_the_lat, .point_the_lng").addClass("hidden");
			hide_weather();
			tut_text.text("Say \"Go Home or Home\" to get you back at the default screen and remove overlays of weather");
			the_tut.removeClass("t11");
			the_tut.addClass("t12");
			$(".giri_place_getter").removeClass("emphasize-absolute");
			$("#listen").addClass("emphasize");
		}

		else if(the_tut.hasClass("t12")){
			show_map();
			tut_text.text("Say \"Show Map or Map\" to see the map of your current location based on the coordinates taken from the Geolocation API.");
			the_tut.removeClass("t12");
			the_tut.addClass("t13");
			$(".giri_place_getter").removeClass("emphasize-absolute");
			$("#listen").addClass("emphasize");
			$("#map").addClass("emphasize-absolute");
		}

		else if(the_tut.hasClass("t13")){
			imgmap.show_req_map("Silang Cavite");
			$("#listen").text("Show me the map of Silang Cavite");
			tut_text.text("If you want a map of a specific location, just say \"Show me the map of *the name of the location\"");
			the_tut.removeClass("t13");
			the_tut.addClass("t14");
			$(".giri_place_getter").removeClass("emphasize-absolute");
			$("#map").addClass("emphasize-absolute");
		}

		else if(the_tut.hasClass("t14")){
			hide_weather();
			show_brgyweath();
			tut_text.text("Say \"Show All Forecast\" to display the forecast in all barangays of Silang");
			the_tut.removeClass("t14");
			the_tut.addClass("t15");
			$("#map").removeClass("emphasize-absolute");
			$("#listen").removeClass("emphasize");
			$("#brgy_drag").addClass("emphasize-absolute");
		}

		else if(the_tut.hasClass("t15")){
			tut_text.text("Choose the name of the barangay you want to check its weather forecast");
			the_tut.removeClass("t15");
			the_tut.addClass("t16");
		}

		else if(the_tut.hasClass("t16")){
			tut_text.text("Click this to see the quantitable weather forecast that will be show below");
			the_tut.removeClass("t16");
			the_tut.addClass("t17");
		}

		else if(the_tut.hasClass("t17")){
			tut_text.text("Click this to show the map of the Barangay based on the name you chose in the dropdown");
			the_tut.removeClass("t17");
			the_tut.addClass("t18");
		}

		else if(the_tut.hasClass("t18")){
			brgy_weather_forecast();
			tut_text.text("Say \"The Weather\", it will recognize that you want to see the weather animation of the barangay name you chose");
			the_tut.removeClass("t18");
			the_tut.addClass("t19");
		}

		else if(the_tut.hasClass("t19")){
			tut_text.text("Try to drag this up to remove this element if you don't need it");
			the_tut.removeClass("t19");
			the_tut.addClass("t20");
		}

		else if(the_tut.hasClass("t20")){
			crop_cal();			
			tut_text.text("Say \"Show Crop Calendar\", it will display the 12 names of the month, try to click each");
			the_tut.removeClass("t20");
			the_tut.addClass("t21");
		}

		else if(the_tut.hasClass("t21")){
			hide_map_untold();
			tut_text.html("Now Your Settled Up! <br>I Hope You Can Handle Things Now.");
			the_tut.removeClass("t21");
			the_tut.addClass("tut_end");
			$(".tutorial-popup.tut_end button.skip_tut").text("Get Started");
			$(".tutorial-popup.tut_end button.next_tut").remove();
			$("#brgy_drag").addClass("hidden");
		}
	});