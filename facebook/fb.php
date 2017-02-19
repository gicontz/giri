<?php 

include_once('config.php');

//Return the value if success or error

//Get the dates kung katapusan na ba ng month or hindi
date_default_timezone_set("Asia/Singapore");
$nowdate=getdate(date("U"));

function isleapyear(){
  global $nowdate;
$year = "$nowdate[year]";
$begin = new DateTime(  $year . '-01-01');
$end = new DateTime( $year .'-03-10' );

$interval = DateInterval::createFromDateString('1 day');
$period = new DatePeriod($begin, $interval, $end);

foreach ( $period as $dt ) {

    if(($dt->format('m') === '02') && ($dt->format('d') === '29')) {
        return true;
    }
}
return false;
}

  $mday = "$nowdate[mday]";
  $mainmday = $mday;
  $mon = "$nowdate[mon]";
function month31(){
  global $mon;
  $curmon = $mon=="1" || $mon=="3" || $mon=="3" || $mon=="5" || $mon=="7" || $mon=="8" || $mon=="10"|| $mon=="12";
  if ($curmon) {
    return true;
   } 
   return false;
}
function postwithcrops(){
  global $mon, $mainmday;
  $decide_post = ($mainmday=="30" && month31()==0 && $mon!="2") || ($mainmday=="31" && month31()==1 && $mon!="2") || ($mainmday=="29" && $mon=="2" && isleapyear()==1) || ($mainmday=="28" && $mon=="2" && isleapyear()==0);
  if ($decide_post) {
    return true; // pag katapusan magpopost kasama crops
  } 
  return false; // pag hindi, weather lang
  
}

    if(postwithcrops()){
        $stat = postOn_FB_wCrops();
        echo $stat;
    }
    else{
        $stat = postOn_FB_Wonly();
        echo $stat;
    }

function postOn_FB_wCrops(){
  global $access_token, $app_id, $app_secret;
set_time_limit(0); //unlimited time to upload the files in facebook

//Initialize js variables to php
$cropsnames = $_POST['cropnames'];
$cropsnames = explode(",", $cropsnames);

$descr = $_POST['cropdescr'];
$descr = explode("@", $descr);

$cphotos = $_POST['cropphotos'];
$cphotos = explode(",", $cphotos);

$weather_status = $_POST['wetherdesc'];

$photos = array(sizeof($cropsnames)+1);
$msg = array(sizeof($cropsnames)+1);

for($ind = 0; $ind < sizeof($cropsnames); $ind++) {
  $photos[$ind] = $cphotos[$ind];
  $msg[$ind] = $descr[$ind];
}

//Initialize the weather photo and description
$photos[sizeof($cropsnames)] = '../screenshots/screenshot.png';
$msg[sizeof($cropsnames)] = $weather_status;
  
  require_once __DIR__ . '/facebook-php-sdk-v4/src/Facebook/autoload.php';
$fb = new Facebook\Facebook([
  'app_id' => $app_id,
  'app_secret' => $app_secret,
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
  $response = $fb->post('../photos', $data, $access_token);
} catch(Facebook\Exceptions\FacebookResponseException $e) {
  $output = 'Graph returned an error: ' . $e->getMessage();
  exit;
} catch(Facebook\Exceptions\FacebookSDKException $e) {
  $output = 'Facebook SDK returned an error: ' . $e->getMessage();
  exit;
}

$graphNode = $response->getGraphNode();

// echo 'Photo ID: ' . $graphNode['id'];
$output = 'Done';
}
return $output;
}


function postOn_FB_Wonly(){
  global $access_token, $app_id, $app_secret;
set_time_limit(0); //unlimited time to upload the files in facebook

$weather_status = $_POST['wetherdesc'];

//Initialize the weather photo and description
$photos = '../screenshots/screenshot.png';
$msg = $weather_status;
  
  require_once __DIR__ . '/facebook-php-sdk-v4/src/Facebook/autoload.php';
$fb = new Facebook\Facebook([
  'app_id' => $app_id,
  'app_secret' => $app_secret,
  'default_graph_version' => 'v2.5',
]);

// $photos = array('../screenshots/screenshot.png');
// $msg = array('Weather Today');

$data = [
  'message' => $msg,
  'source' => $fb->fileToUpload($photos),
];

try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->post('../photos', $data, $access_token);
} catch(Facebook\Exceptions\FacebookResponseException $e) {
  $output = 'Graph returned an error: ' . $e->getMessage();
  //exit;
} catch(Facebook\Exceptions\FacebookSDKException $e) {
  $output = 'Facebook SDK returned an error: ' . $e->getMessage();  
  //exit;
}

$graphNode = $response->getGraphNode();

// echo 'Photo ID: ' . $graphNode['id'];
$output = 'Done';

return $output;
}
?>
