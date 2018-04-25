var triviaCategories = ["Quotes", "Titles", "Skills", "Lore", "LCS", "Summoner Spells", "Designers", "voice Actors"];
alert("hi");
var msgs =  Array.from(document.getElementsByClassName("chat-room__content"));
console.log("test.js running")
for (var msg in msgs){
	console.log(msg.innerHTML);
}