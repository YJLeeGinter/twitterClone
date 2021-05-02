// Users object

var users = {
    user1 : {
        userName: '@elonmusk',
        displayName: 'Elon Musk',
        joinedDate: 'June 2009',
        followingCount: 103,
        followerCount: 47900000,
        avatarURL: 'assets/elonmusk.jpg',
        coverPhotoURL: 'assets/elonmusk-cover.jpeg',
        tweets: [
            {
                text: 'I admit to judging books by their cover',
                timestamp: '2/10/2021 00:01:20'
            },
            {
                text: 'Starship to the moon',
                timestamp: '2/09/2021 18:37:12'
            },
            {
                text: 'Out on launch pad, engine swap underway',
                timestamp: '2/09/2021 12:11:51'
            }
        ]
    },
    user2 : {
        userName: '@BillGates',
        displayName: 'Bill Gates',
        joinedDate: 'June 2009',
        followingCount: 274,
        followerCount: 53800000,
        avatarURL: 'assets/billgates.jpg',
        coverPhotoURL: 'assets/billgates-cover.jpeg',
        tweets: [
            {
                text: 'Everybody asks, how is the next Windows coming along? But nobody asks how is Bill? :/',
                timestamp: '2/10/2021 00:01:20'
            },
            {
                text: 'Should I start tweeting memes? Let me know in a comment.',
                timestamp: '2/09/2021 18:37:12'
            },
            {
                text: 'In 2020, I read a book every hour.',
                timestamp: '2/09/2021 12:11:51'
            }
        ]
    },
}

// 1. array of date objects and sort them out
// 2. display tweets based on sorted array


var dateObjArr = [];
var userTweetsObj = {};

for(var user in users){
    var tweetsArr = users[user]['tweets'];

    for(var eachTweet of tweetsArr){
        dateObjArr.push({user : user, date: new Date(eachTweet['timestamp'])});
    }
}

var sortedDateArr = dateObjArr.sort(function(a, b){
    return a.date-b.date;
})

var displayTweetsByDate = function (user, date){

  
        var container = document.querySelector('.container');
        var tweetContentBox = document.createElement('div');
        tweetContentBox.classList.add('indivisual-tweet-content');
        var tweetText = '';

        for(var tweetContent of user.tweets){
            var originalDate = new Date(tweetContent.timestamp).toString();
            if(originalDate === date.toString()){
                tweetText = tweetContent.text;
            }
        }

        tweetContentBox.innerHTML = `<img src="${user.avatarURL}" class="tweet-content-avartar"> 
        <p class="user-info light-text"><strong>${user.displayName}</strong> <i class="fas fa-certificate tweet-content-badge"></i> ${user.userName} &middot; ${date}</p>
        <i class="fas fa-ellipsis-h light-text more"></i>
        <p class="tweet-content-text">${tweetText}</p>
        <i class="far fa-comment comment light-text"></i>
        <i class="fas fa-retweet retweet light-text"></i>
        <i class="far fa-heart like light-text"></i>
        <i class="fas fa-external-link-alt share light-text"></i>
        `;
        
        container.appendChild(tweetContentBox);


}

for(var eachObj of sortedDateArr){
    displayTweetsByDate(users[eachObj.user], eachObj.date);
}