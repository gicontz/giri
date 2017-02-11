<!DOCTYPE html>
<html>
<head>
	<title>GIRI | Admin</title>
</head>
<?php include_once('functions.php'); ?>
<?php get_header_scripts(); ?>
<body class="dashboard">

	
<?php get_admin_menu(); ?>
<div class="title col-md-10 col-md-offset-2">
	<h1>Dashboard</h1>
</div>
	<div class="admin_content">
		<div class="container col-md-10 col-md-offset-2">
			<div id="dashboard" class="visible">
			</div>
		</div>
	</div>

<?php giri_bottom_scripts(); ?>
</body>
</html>