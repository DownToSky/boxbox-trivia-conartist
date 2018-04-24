var triviaCategories = ["Quotes", "Titles", "Skills", "Lore", "LCS", "Summoner Spells", "Designers", "voice Actors"];

var tabStore = {};
chrome.tabs.query({}, function(tabs){
	for(i = 0; i<tabs.length; i++){
		var tabId = tabs[i].tabId;
		tabStore[tabId] = tabs[i];
	}
});

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    tabStore[tabId] = tab;
});

chrome.tabs.onRemoved.addListener(function(tabId) {
    delete tabStore[tabId];
});

chrome.tabs.onActivated.addListener(function(activeInfo) {
	if (activeInfo.tabId in tabStore)
	{
		var opt = {
		  type: "basic",
		  title: "notifications!",
		  message: tabStore.tabId.title,
		  iconUrl: "icon19.png"
		}

		function callback(){
			console.log("Popup don!");
		}

		chrome.notifications.create(opt, callback);
	}
	else
	{
		console.log(activeInfo.tabId + " not in " + Object.keys(tabStore).join(", "));
	}
});







