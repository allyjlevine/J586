<?php
ini_set('display_errors', 1);
require_once('TwitterAPIExchange.php');

/** Set access tokens here - see: https://dev.twitter.com/apps/ **/
$settings = array(
    'oauth_access_token' => "306005066-EwvCfki8GEevEsfAD7IQYTJRcbeVP51CdvHUCi1Q",
    'oauth_access_token_secret' => "vQWBBIFQPD1OOTaVgDeEK2CfSvqjZbBhIgdqDWjexzLh7",
    'consumer_key' => "NzSP5lgj5OBUB5oTwY7jdGag7",
    'consumer_secret' => "nIjQlI5xxq65yZeUHosc1VnTdJSmoqQgSmBP6Ty41tVbaqWaTV"
);

/** URL for REST request, see: https://dev.twitter.com/docs/api/1.1/ **/
$url = 'https://api.twitter.com/1.1/blocks/create.json';
$requestMethod = 'POST';

/** POST fields required by the URL above. See relevant docs as above **/
$postfields = array(
    'screen_name' => 'usernameToBlock',
    'skip_status' => '1'
);

/** Perform a POST request and echo the response **/
// $twitter = new TwitterAPIExchange($settings);
// echo $twitter->buildOauth($url, $requestMethod)
//              ->setPostfields($postfields)
//              ->performRequest();

/** Perform a GET request and echo the response **/
/** Note: Set the GET field BEFORE calling buildOauth(); **/
$url = 'https://api.twitter.com/1.1/search/tweets.json';
$getfield = '?q=#UNC';
$requestMethod = 'GET';
$twitter = new TwitterAPIExchange($settings);

$tweetData = json_decode(
  $twitter->setGetfield($getfield)
          ->buildOauth($url, $requestMethod)
          ->performRequest(),$assoc=TRUE;
foreach($tweetData['statuses'] as $index => $items){
  $userArray = $items['user'];
  echo '<div class="twitter-tweet"> ' . $userArray['screen_name'] . $items['text'];
  echo '<br/>' . $items ['created_at']:
  echo '</div>';
  echo $items['text'];

}
$twitter->setGetfield($getfield)
        ->buildOauth($url, $requestMethod)
        ->performRequest();
)
