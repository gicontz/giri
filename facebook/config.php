<?php
$filename = "../api_configs/fbapi.giri";
$fb_array = explode("#", file_get_contents($filename));
$access_token = $fb_array[0];
$app_id = $fb_array[1];
$app_secret = $fb_array[2];
	// $myfile = fopen("webdictionary.txt", "r") or die("Unable to open file!");
	// echo fread($myfile,filesize("webdictionary.txt"));
	// fclose($myfile);
?>