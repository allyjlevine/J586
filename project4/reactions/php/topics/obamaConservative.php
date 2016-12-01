<?php
echo '<link href="css/styles.css" rel="stylesheet">';
ini_set('display_errors', 1);
require_once('TwitterAPIExchange.php');
/** Set access tokens here - see: https://dev.twitter.com/apps/ **/
$settings = array(
    'oauth_access_token' => "3220668127-ZmMTLmCUBKxL1jmM7rxIKx179UW47JvUHBXZF9H",
    'oauth_access_token_secret' => "hAPFPG0XOvNUKwu6c2QijTSdas8niblhkEYQLtesw0x1h",
    'consumer_key' => "Huw239utyRNkzAHfsYzQp8jKq",
    'consumer_secret' => "q9eou8pyeuONEp7A69L1GpUcwQ1Mk3sMhOlza2X8dfBHXG2bAa"
);

/** Perform a POST request and echo the response **/
  // $twitter = new TwitterAPIExchange($settings);
  // echo $twitter->buildOauth($url, $requestMethod)
  //              ->setPostfields($postfields)
  //              ->performRequest();
/** Perform a GET request and echo the response **/
/** Note: Set the GET field BEFORE calling buildOauth(); **/
$url = 'https://api.twitter.com/1.1/lists/statuses.json';
$getfield = '?slug=conservative-voices&owner_screen_name=allyjlevine&count=100';
$requestMethod = 'GET';
$twitter = new TwitterAPIExchange($settings);
$tweetData = json_decode($twitter->setGetfield($getfield)
             ->buildOauth($url, $requestMethod)
             ->performRequest(),$assoc=TRUE);

foreach($tweetData as $index => $items){
      $tweetText = $items ['text'];
      $userArray = $items['user'];
      $topics = array('Obama');
      $foundTopics = false;
        foreach ($topics as $currentTopic)
        {
          if(stristr($tweetText, $currentTopic) == TRUE)
          {
            $foundTopics = true;
            break;
          }
        }

        // skip this tweet containing a banned word
        if ($foundTopics)
        {
          echo '<div class="twitter-tweet"> <a href="http://twitter.com/' . $userArray['screen_name'] . '"><img src="' . $userArray['profile_image_url'] . '"></a><p class="screen-name" href="http://twitter.com/' . $userArray['screen_name'] . '">' . $userArray['name'] . '</p><p class="tweet-text">' . $items['text'] . '</p>';
          echo '<p class="date">' . $items['created_at'] . '</p>';
          echo '</div>';
        }
};
