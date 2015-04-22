$(document).ready(function(){

    var tweetSubmit = $('#tweet-submit'),
        charCount = $('#char-count'),
        tweetCompose = $('.tweet-compose'),
        stream = $('#stream'),
        tweet = $('.tweet'),
        tweetActions = $('.tweet-actions');

    tweetSubmit.hide();
    charCount.hide();
    tweetActions.hide();

    tweetCompose.on('click', function(){
        $(this).css({
            height: '5em'
        });

        tweetSubmit.show();
        charCount.show();
    });

    tweetCompose.on('keyup', function(){
        var number = 140 - $(this).val().length;
        if (number <= 10) {
            charCount.css( {color: 'red'} );
        }
        if (number < 0) {
            tweetSubmit.hide();
        } else {
            tweetSubmit.show();
        }
        charCount.html(number);
    });

    tweetSubmit.on('click', function(){
        stream.prepend('A TWEET!\n')
    });

    tweet.hover(
        function() {
            $(this).find(tweetActions).show();
        },
        function() {
            $(this).find(tweetActions).hide();
        }
    );
});