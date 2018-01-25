chrome.tabs.query({}, function printTitles(tabs){
	for(i = 0; i<tabs.length; i++){
		console.log(tabs[i].title);
	}
});