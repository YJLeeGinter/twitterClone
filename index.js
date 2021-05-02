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

// read query string from url. compatibile with at least IE6 
/**
 * Get the URL parameters
 * source: https://css-tricks.com/snippets/javascript/get-url-variables/
 * @param  {String} url The URL
 * @return {Object}     The URL parameters
 */
 var getParams = function (url) {
	var params = {};
	var parser = document.createElement('a');
	parser.href = url;
    var query = parser.search.substring(1);
	var vars = query.split('&');
	for (var i = 0; i < vars.length; i++) {
		var pair = vars[i].split('=');
		params[pair[0]] = decodeURIComponent(pair[1]);
	}
	return params;
};
var selectedUser = getParams(window.location.href);

var renderByUser = function(user){
// header area
var header = document.querySelector('.header');

var userDisplayName = document.createElement('h3');
userDisplayName.classList.add('header-name')
userDisplayName.innerHTML = `${user.displayName} <i class="fas fa-certificate tweet-content-badge"></i>`;
header.appendChild(userDisplayName);


//cover photo area. Couldn't use backtik because innerHtml changes its element and delete following btn.
var coverPhotoArea = document.querySelector('.cover-photo');

var coverPhotoElement = document.createElement('img');
coverPhotoElement.src = user.coverPhotoURL;
coverPhotoElement.classList.add('main-cover-photo');
coverPhotoArea.appendChild(coverPhotoElement);

var avartarElement = document.createElement('img');
avartarElement.src = user.avatarURL;
avartarElement.classList.add('main-avartar-photo');
coverPhotoArea.appendChild(avartarElement);

// follower count function to change number => number+M 
var numberToMillionStr = function(num){
    return (num/1000000).toString()+'M';
}

// detail profile area
var profileDetailArea = document.querySelector('.profile-detail');

profileDetailArea.innerHTML =`<h3 class="profile-detail-name">${user.displayName} <i class="fas fa-certificate tweet-content-badge"></i></h3>
<p class= "profile-detail-user-name light-text">${user.userName}</p>
<p class= "light-text">📅 Joined ${user.joinedDate}</p>
<span class = "light-text"><strong>${user.followingCount}</strong> Following</span>
<span class="followers light-text"><strong>${numberToMillionStr(user.followerCount)}</strong> Followers</span>
`;

// tweet contents area

for (var tweetContent of user.tweets){
    var tweetsContainer = document.querySelector('.tweet-content-container');

    var tweetContentBox = document.createElement('div');
    tweetContentBox.classList.add('indivisual-tweet-content')
    tweetContentBox.innerHTML = `<img src="${user.avatarURL}" class="tweet-content-avartar"> 
    <p class="user-info light-text"><strong>${user.displayName}</strong> <i class="fas fa-certificate tweet-content-badge"></i> ${user.userName} &middot; ${tweetContent.timestamp}</p>
    <i class="fas fa-ellipsis-h light-text more"></i>
    <p class="tweet-content-text">${tweetContent.text}</p>
    <i class="far fa-comment comment light-text"></i>
    <i class="fas fa-retweet retweet light-text"></i>
    <i class="far fa-heart like light-text"></i>
    <i class="fas fa-external-link-alt share light-text"></i>
    `;
    
    tweetsContainer.appendChild(tweetContentBox);
}
}

renderByUser(users[selectedUser.user]);