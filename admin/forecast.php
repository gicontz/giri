<!DOCTYPE html>
<html>
<head>
	<title>GIRI | Admin</title>
</head>
<?php include_once('functions.php'); ?>
<?php get_header_scripts(); ?>
<body class="forecast">

	
<?php get_admin_menu(); ?>

<div class="title col-md-10 col-md-offset-2">
	<h1>Forecast IO</h1>
</div>
	<div class="admin_content">
		<div class="container col-md-10 col-md-offset-2">
			<div id="dashboard" class="visible">
				<button class="edit_btn">EDIT</button>
					<div class="settings">
						<h3>Settings</h3>
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
				</div>
		</div>
	</div>

<?php giri_bottom_scripts(); ?>
<script type="text/javascript">
	var apkey = $.giriReader('../api_configs/forecast-api.giri');
	$("#apikey").attr("value", apkey);
	if($("#apikey").attr("value") != ''){
		$("#apikey").attr("disabled", "disabled");
	}
	$(".edit_btn").click(function(){
		$("#apikey").removeAttr("disabled");
	});
</script>
</body>
</html>