<?php 
//Screenshot the whole Screen
	$img = imagegrabscreen();
	imagepng($img, '../screenshots/screenshot.png');
?>