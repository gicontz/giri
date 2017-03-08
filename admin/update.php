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
			<div id="dashboard" class="visible">					<div class="settings">
						<button class="update_giri">SYSTEM UPDATE</button>
						<button class="reset_api">RESET API KEYS</button>
					</div>
				</div>
		</div>
	</div>

<?php giri_bottom_scripts(); ?>
<script type="text/javascript">
$(".update_giri").click(function(){
	$.ajax({
        type: "post",
        url: "system-update.php",
        success: function(data){  
         }
        });
});	
</script>
</body>
</html>