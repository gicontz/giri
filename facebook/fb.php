
<?php 

//Return the value if success or error
$stat = postOn_FB();
echo $stat;

function postOn_FB(){
set_time_limit(0); //unlimited time to upload the files in facebook

//Initialize js variables to php
$cropsnames = $_POST['cropnames'];
$cropsnames = explode(",", $cropsnames);

$descr = $_POST['cropdescr'];
$descr = explode("@", $descr);

$cphotos = $_POST['cropphotos'];
$cphotos = explode(",", $cphotos);

$photos = array(sizeof($cropsnames)+1);
$msg = array(sizeof($cropsnames)+1);

for($ind = 0; $ind < sizeof($cropsnames); $ind++) {
  $photos[$ind] = $cphotos[$ind];
  $msg[$ind] = $descr[$ind];
}
//Screenshot the whole Screen
$img = imagegrabscreen();
imagepng($img, '../screenshots/screenshot.png');

//Initialize the weather photo and description
$photos[sizeof($cropsnames)] = '../screenshots/screenshot.png';
$msg[sizeof($cropsnames)] = "Weather Updates";

?>
 <?php    
  require_once __DIR__ . '/facebook-php-sdk-v4/src/Facebook/autoload.php';
$fb = new Facebook\Facebook([
  'app_id' => '609849629194835',
  'app_secret' => '0c581414f7543f21200f83728a3dfff2',
  'default_graph_version' => 'v2.5',
]);

// $photos = array('../screenshots/screenshot.png');
// $msg = array('Weather Today');

for($i = 0; $i < sizeof($photos); $i++) {
$data = [
  'message' => $msg[$i],
  'source' => $fb->fileToUpload($photos[$i]),
];

try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->post('103665846772810/photos', $data, 'EAAIqp66DulMBAH4ML880ZAO63QzZANbaf2OLgkYmpEZBtk2RVy9c2codJgyWSfh7CZAKa35ircMjR0ceKXZBnRAXhx5ZAlCSCRIg62Tv7WZAD1kP6hyV52JU0nnUsJLqeNglZB4o2up3Wq4gxhZA3KNfkZBYxeznXl6OlDPuuIHfIPhAZDZD');
} catch(Facebook\Exceptions\FacebookResponseException $e) {
  $output = 'Graph returned an error: ' . $e->getMessage();
  exit;
} catch(Facebook\Exceptions\FacebookSDKException $e) {
  $output = 'Facebook SDK returned an error: ' . $e->getMessage();
?><script type="text/javascript">
alert("error!");
 </script><?php
  exit;
}

$graphNode = $response->getGraphNode();

// echo 'Photo ID: ' . $graphNode['id'];
$output = 'Uploaded Sucessfully!';
}
return $output;
}
?>
