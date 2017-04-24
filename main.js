console.log("hihi");

var startTime = Date.now();
console.log("startTime", startTime);

for (var i = 0; i < 2000000; i++){
	// running loop for fun
	var x = i + 1/1 * 6 - 4;
}

console.log("I just looped " + i + " times");
console.log("Loop time", Date.now() - startTime);

var dataRequest = new XMLHttpRequest();

dataRequest.addEventListener("load", dataRequestComplete);
dataRequest.addEventListener("error", dataRequestFailed);

function dataRequestComplete(event){
	console.log("The BIG file has loaded");
	var dataDumpTime = Date.now();
	console.log("Date of data DUMP", dataDumpTime, "since the startTime", dataDumpTime - startTime);
	var data = JSON.parse(event.target.responseText);
	console.log("The BIG DATA is: ", data);
	console.log("how long to process data", Date.now() - dataDumpTime);
}

function dataRequestFailed(event){
	console.log("Oops, an error occurred while getting the data");
}

dataRequest.open("GET", "JEOPARDY_QUESTIONS1.json");
dataRequest.send();

var dataRequest2 = new XMLHttpRequest();
dataRequest2.addEventListener("load", dataRequest2LoadComplete);
dataRequest2.addEventListener("error", dataRequest2Failed);

function dataRequest2LoadComplete(event){
	console.log("The small file has loaded");
	var smallData = JSON.parse(event.target.responseText);
	console.log("smallData", smallData);

	showData(smallData);
}

function dataRequest2Failed(event){
	console.log("Oops, an error occurred while getting the data");
}

function showData(taco){
	var colorDiv = document.getElementById("all-my-colors");
	var colorData = "";

	for (lettuce in taco){
		var colorItem = taco[lettuce];
		colorData += "<div>";
		colorData += "<h2>" + colorItem.color + ":" + colorItem.value + "</h2>";
		colorData += "</div>";
	}

	colorDiv.innerHTML += colorData;
}

dataRequest2.open("GET", "color.json");
dataRequest2.send();