<!DOCTYPE html>
<html>
<head>
	<title>GIRI | Admin</title>
  <link rel="shortcut icon" href="favicon.png" />
<?php include_once('functions.php'); ?>
<?php 
	get_header_scripts();
	forecat_table_head();
?>
</head>
<body class="forecast">

	
<?php get_admin_menu(); ?>

<div class="title col-md-10 col-md-offset-2">
	<h1>Forecast IO</h1>
</div>
	<div class="admin_content">
		<div class="container col-md-12 col-md-offset-2">
			<div id="dashboard" class="visible">
				<button class="edit_btn">EDIT</button>
					<div class="settings">
						<form class="form" method="post">
							<div class="form-group">
								<label class="control-lable" for="apikey">API Key</label>
								<input class="" type="text" id="apikey" name="apikey">
							</div>
							<input type="submit" name="fapi-submit" value="UPDATE">
						</form>
						<?php 
						if(isset($_POST['fapi-submit'])){
							if(isset($_POST['apikey'])){
								write_settings('../api_configs/forecast-api.giri', $_POST['apikey']);
							}
						}
						?>
					</div>

					<div class="forecast_directory">
<?php
function showdir(){


            $dirname = "forecast-dump/full_bckups";
            $dir = opendir($dirname);
            $output = "";

    while(false != ($file = readdir($dir)))
    {

        if(($file != ".") and ($file != "..") and ($file != "index.php"))
        {

            $output = "<a class='file' href='$dirname/$file' download><i class='fa fa-book'></i>$file</a>" . $output;
        }
    }
    return "<div class='file-dir'>" . $output . "</div>";
}					
echo showdir();	
?>
					</div>
					<div id="forecast_form">
						<div id="data_form">
							<span>Get Forecast History by Date:</span>
							<select id="year">
							</select>
							<select id="month">
							</select>
							<select id="day">
							</select>
							<button id="search_date">Show</button>
							<button id="print_table" onclick="window.print()">Print Table</button>
						</div>
					<table id="forecsatReport" class="display" width="100%"></table>
					</div>				
				</div>
		</div>
	</div>
<?php
	giri_bottom_scripts();
	?>
<script type="text/javascript">
	
	//Year
	for(var y = 2017; y <= 2300; y++){
		$("#year").append('<option value="'+ y +'">'+ y +'</option>');
	}
		$("#year").prepend('<option value="">Year</option>');


	//Month
	for(var m = 1; m <= 12; m++){
		m < 10 ? $("#month").append('<option value="0'+ m +'">0'+ m +'</option>') : $("#month").append('<option value="'+ m +'">'+ m +'</option>');
	}
		$("#month").prepend('<option value="">Month</option>');


	//Day
	for(var d = 1; d <= 31; d++){
		d < 10 ? $("#day").append('<option value="0'+ d +'">0'+ d +'</option>') : $("#day").append('<option value="'+ d +'">'+ d +'</option>');
	}
		$("#day").prepend('<option value="">Day</option>');

	var apkey = $.giriReader('../api_configs/forecast-api.giri');
	$("#apikey").attr("value", apkey);
	if($("#apikey").attr("value") != ''){
		$("#apikey").attr("disabled", "disabled");
	}
	$(".edit_btn").click(function(){
		$("#apikey").removeAttr("disabled");
	});

	$("#search_date").click(function(){	
		var the_date_dd = $("#year").val() + "-" + $("#month").val() + "-" + $("#day").val();
		$.giriWriter('../forecast-dump/date-view.giri', the_date_dd);
		setTimeout(function(){
			location.reload();
		}, 1000);
	});
</script>
</body>
</html>