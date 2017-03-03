

		var the_greet = $("#firstGreet");
		var the_tut = $(".tutorial-popup");

	setTimeout(function(){
		$("#firstGreet .continue").removeClass("hidden");
	},
	4000);

	$("#firstGreet .continue").click(function(){
		the_greet.remove();
		$("#tutorial-section").addClass("start");
		$(".tutorial-popup span").text("The greetings of Giri");
		the_tut.removeClass("hidden");
		the_tut.addClass("t1");
		$("#giri-face h1").addClass("emphasize");
	});

	$(".tutorial-popup .skip_tut").click(function(){
		$("#tutorial-section").remove();
		$("*").removeClass("emphasize");
		$("*").removeClass("emphasize-absolute");
	});

	$(".tutorial-popup .next_tut").click(function(){
		//Tutorial 1
		if(the_tut.hasClass("t1")){
			$(".tutorial-popup span").text("Try to speak");
			the_tut.removeClass("t1");
			the_tut.addClass("t2");
			$("#giri-face h1").removeClass("emphasize");
			$("#listen").addClass("emphasize");
		}

		//Tutorial 2
		else if(the_tut.hasClass("t2")){
			$(".tutorial-popup span").text("Click to show the current crops");
			the_tut.removeClass("t2");
			the_tut.addClass("t3");
			$("#listen").removeClass("emphasize");
			$(".slider-caption").addClass("emphasize-absolute");
		}


		// if(the_tut.hasClass("t1")){
		// 	$(".tutorial-popup span").text("Try to speak");
		// 	the_tut.removeClass("t1");
		// 	the_tut.addClass("t2");
		// 	$("#giri-face h1").removeClass("emphasize");
		// 	$("#listen").addClass("emphasize");
		// }


		// if(the_tut.hasClass("t1")){
		// 	$(".tutorial-popup span").text("Try to speak");
		// 	the_tut.removeClass("t1");
		// 	the_tut.addClass("t2");
		// 	$("#giri-face h1").removeClass("emphasize");
		// 	$("#listen").addClass("emphasize");
		// }

		// if(the_tut.hasClass("t1")){
		// 	$(".tutorial-popup span").text("Try to speak");
		// 	the_tut.removeClass("t1");
		// 	the_tut.addClass("t2");
		// 	$("#giri-face h1").removeClass("emphasize");
		// 	$("#listen").addClass("emphasize");
		// }


		// if(the_tut.hasClass("t1")){
		// 	$(".tutorial-popup span").text("Try to speak");
		// 	the_tut.removeClass("t1");
		// 	the_tut.addClass("t2");
		// 	$("#giri-face h1").removeClass("emphasize");
		// 	$("#listen").addClass("emphasize");
		// }
	});
