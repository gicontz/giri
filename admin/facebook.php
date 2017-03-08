<!DOCTYPE html>
<html>
<head>
	<title>GIRI | Admin</title>
</head>
<?php include_once('functions.php'); ?>
<?php get_header_scripts(); ?>
<body class="facebook">

	
<?php get_admin_menu(); ?>

<div class="title col-md-10 col-md-offset-2">
	<h1>Facebook API</h1>
</div>
	<div class="admin_content">
		<div class="container col-md-10 col-md-offset-2">
			<div id="dashboard" class="visible">
				<button class="edit_btn">EDIT</button>
					<div class="settings">
						<h3>Settings</h3>
						<form class="form" method="POST">
						<div class="form-group">
							<label class="control-lable" for="apikey">APP ID:</label>
							<input class="" type="text" id="fbapikey" name="fbapikey"</input>
						</div>
						<div class="form-group">
							<label class="control-lable" for="fbseckey">Secret Key:</label>
							<input class="" type="text" id="fbseckey" name="fbseckey"></input>
						</div>
						<div class="form-group">
							<label class="control-lable" for="fbacctoken">Access Token:</label>
							<input class="" type="text" id="fbacctoken" name="fbacctoken"></input>
						</div>
						<input type="submit" name="fb-submit" value="UPDATE">
						</form>
						<?php 
						if(isset($_POST['fb-submit'])){
							if(isset($_POST['fbapikey']) && isset($_POST['fbseckey']) && isset($_POST['fbacctoken'])){
								$fb_data = $_POST['fbacctoken'] . "#" . $_POST['fbapikey'] . "#" . $_POST['fbseckey'];
								write_settings('../api_configs/fbapi.giri', $fb_data);
							}
						}
						?>
					</div>
				</div>
		</div>
	</div>

<?php giri_bottom_scripts(); ?>
<script type="text/javascript">
	var apkey = $.giriReader('../api_configs/fbapi.giri').split("#");
	$("#fbapikey").attr("value", apkey[1]);
	if($("#fbapikey").attr("value") != ''){
		$("#fbapikey").attr("disabled", "disabled");
	}

	$("#fbseckey").attr("value", apkey[2]);
	if($("#fbseckey").attr("value") != ''){
		$("#fbseckey").attr("disabled", "disabled");
	}

	$("#fbacctoken").attr("value", apkey[0]);
	if($("#fbacctoken").attr("value") != ''){
		$("#fbacctoken").attr("disabled", "disabled");
	}
	$(".edit_btn").click(function(){
		$("#fbacctoken").removeAttr("disabled");
		$("#fbapikey").removeAttr("disabled");
		$("#fbseckey").removeAttr("disabled");
	});
</script>
</body>
</html>