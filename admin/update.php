<!DOCTYPE html>
<html>
<head>
	<title>GIRI | Admin</title>
</head>
<?php include_once('functions.php'); ?>
<?php get_header_scripts(); ?>
<body class="update">

	
<?php get_admin_menu(); ?>

<div class="title col-md-10 col-md-offset-2">
	<h1>Settings</h1>
</div>
	<div class="admin_content">
		<div class="container col-md-10 col-md-offset-2">
			<div id="dashboard" class="visible">					
				<div class="settings">
						<button class="update_giri">SYSTEM UPDATE</button><img src="../images/loading.gif" class="ajax-loader hidden"><br/><br>
						<small><em>Disclaimer: Proceeding may reset all your API Keys to the default keys from the server, it will not affect the functionaliy of the application but it may limit your request to some API's because the API in the server was for free of use. If you purchase API keys please be informed that you need to update the API settings after this update.</em></small>
					</div>
				</div>
				<div id="updatereport">
					<?php
					$status = shell_exec( 'cd/ && cd xampp/htdocs/giri && git status ' );
					?>
					<code><?php echo substr($status,22,25); ?></code>
				</div>
		</div>
	</div>

<?php giri_bottom_scripts(); ?>
<script type="text/javascript">
$(".update_giri").click(function(){
	$(".ajax-loader").removeClass("hidden");
	$.ajax({
        type: "post",
        url: "system-update.php",
        success: function(data){  
        	$("#updatereport code").html(data);
			$(".ajax-loader").addClass("hidden");
         }
        });
});	
</script>
</body>
</html>