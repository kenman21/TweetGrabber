var Twitter = require('twitter');

//Enter screen name of desired twitter and number of tweets to be returned

let twitter_sn = ""
let tweet_num = ""

//Grab info from twitter app dashboard

var client = new Twitter({
  consumer_key: "XXX",
  consumer_secret: "XXX",
  access_token_key: 'XXX',
  access_token_secret: 'XXX'
});

var fs = require('fs');
var params = {screen_name: twitter_sn, count: tweet_num};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
    let tweet_array = tweets.map(tweet => tweet.text)
    console.log(tweet_array);

    var file = fs.createWriteStream('tweets.txt');
    file.on('error', function(err) { console.log("error!"); });
    tweet_array.forEach(tweet => { file.write(tweet + '\n'); });
    file.end();
  }
});
