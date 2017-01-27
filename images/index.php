<html>
<head>
  <title></title>
</head>
<body>
<?php
// require Facebook PHP SDK
// see: https://developers.facebook.com/docs/php/gettingstarted/
require_once __DIR__ . '\facebook-php-sdk/src/facebook.php';
 
// initialize Facebook class using your own Facebook App credentials
// see: https://developers.facebook.com/docs/php/gettingstarted/#install
$config = array();
$config['appId'] = '609849629194835';
$config['secret'] = '0c581414f7543f21200f83728a3dfff2';
$config['fileUpload'] = false; // optional
 
$facebook = new Facebook($config);
 
// // define your POST parameters (replace with your own values)
// $params = array(
//   "access_token" => "EAAIqp66DulMBAAbxk4XcOnzmx2ZCMttH85vtUg7TraZBGPufw7IvDuGck9foZAk4AzeV0p1q9P4lS6EzB4D5y5UgWZB7PKGpL9ba3xYs3565qRfVHuPYBkpEGWeOo83TN0C32Mfw17dSaKLMbuarzjweuxkYInsZD
// ", // see: https://developers.facebook.com/docs/facebook-login/access-tokens/
//   "message" => "Here is a blog post about auto posting on Facebook using PHP #php #facebook",
//   "link" => "https://github.com/facebookarchive/facebook-php-sdk",
//   "picture" => "https://lh5.googleusercontent.com/vrLY7oz9_ygye1PrDQvYkmdhyxSbqACrUjhC_zeTLai4DRsfR3navg0HlO8vi4ovTCaZsIxZd7NrKVc=w1366-h662",
//   "name" => "How to Auto Post on Facebook with PHP",
//   "caption" => "github.com",
//   "description" => "Automatically post on Facebook with PHP using Facebook PHP SDK. How to create a Facebook app. Obtain and extend Facebook access tokens. Cron automation."
// );
 
// // post to Facebook
// // see: https://developers.facebook.com/docs/reference/php/facebook-api/
// try {
//   $ret = $fb->api('/100278483778213/feed', 'POST', $params);
//   echo 'Successfully posted to Facebook';
// } catch(Exception $e) {
//   echo $e->getMessage();
// }

//upload photo
$access_token = 'EAAIqp66DulMBAAbxk4XcOnzmx2ZCMttH85vtUg7TraZBGPufw7IvDuGck9foZAk4AzeV0p1q9P4lS6EzB4D5y5UgWZB7PKGpL9ba3xYs3565qRfVHuPYBkpEGWeOo83TN0C32Mfw17dSaKLMbuarzjweuxkYInsZD';
$album_id = '100013881840178';
$fb = new Facebook\Facebook([
  'app_id' => '{app-id}',
  'app_secret' => '{app-secret}',
  'default_graph_version' => 'v2.2',
  ]);

$data = [
  'message' => 'My awesome photo upload example.',
  'source' => $fb->fileToUpload('/path/to/photo.jpg'),
];

try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->post('/me/photos', $data, '{access-token}');
} catch(Facebook\Exceptions\FacebookResponseException $e) {
  echo 'Graph returned an error: ' . $e->getMessage();
  exit;
} catch(Facebook\Exceptions\FacebookSDKException $e) {
  echo 'Facebook SDK returned an error: ' . $e->getMessage();
  exit;
}

$graphNode = $response->getGraphNode();

echo 'Photo ID: ' . $graphNode['id'];
    ?>
</body>
</html>