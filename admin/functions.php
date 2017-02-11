<?php 
function get_admin_menu(){
	include_once('menu.php');
}
function giri_bottom_scripts(){
	?>
	<script type="text/javascript" src="js/menu.js"></script>
	<?php
}
function get_header_scripts(){
	?>
<link rel="stylesheet" type="text/css" href="css/bootstrap.min.css">
<script type="text/javascript" src="js/jquery.min.js"></script>
<script type="text/javascript" src="js/bootstrap.min.js"></script>
<link rel="stylesheet" type="text/css" href="css/style.css">
	<?php
}
function write_settings($file_dir, $data){
	$file1 = $file_dir; 
    $configFile = fopen($file1, "w");
    fwrite($configFile, $data);
    fclose($configFile);
}
?>