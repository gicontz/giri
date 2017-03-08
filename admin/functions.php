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
	<link rel="stylesheet" type="text/css" href="css/font-awesome.css">
	<link rel="stylesheet" type="text/css" href="css/bootstrap.min.css">	
	<link rel="stylesheet" type="text/css" href="../css/animate.css">
	<script type="text/javascript" src="js/jquery.min.js"></script>
	<script type="text/javascript" src="js/bootstrap.min.js"></script>
	<link rel="stylesheet" type="text/css" href="css/style.css">
	<?php
}
function forecat_table_head(){
	?>
<script type="text/javascript" src="https://cdn.datatables.net/1.10.13/js/jquery.dataTables.min.js"></script>
<link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/1.10.13/css/jquery.dataTables.min.css">
<script type="text/javascript" src="js/forecastdump.js"></script>
	<?php
}
function forecat_table_bottom(){
	?>

	<?php
}
function high_chart_head(){
	?>
	<style type="text/css">${demo.css}</style>
	<script type="text/javascript" src="js/forecast.js"></script>
	<?php
}
function high_chart_body(){
	?>
	<script src="https://code.highcharts.com/highcharts.js"></script>
	<script src="https://code.highcharts.com/highcharts-3d.js"></script>
	<script src="https://code.highcharts.com/modules/exporting.js"></script>
	<?php
}
function write_settings($file_dir, $data){
	$file1 = $file_dir; 
    $configFile = fopen($file1, "w");
    fwrite($configFile, $data);
    fclose($configFile);
}
?>