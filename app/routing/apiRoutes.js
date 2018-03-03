//Load Data- Holds arrays of information for friends.js

var friendsData = require("../data/friends");

//Routing
module.exports = function(app){
	//API GET Requests
	//Returns data in json format
	app.get("/api/friends", function(req, res){
		res.json(friendsData);
	});


	//API POST Requests
	//When user posts data and it gets sent to the server and
	//displays in json format
	app.post("/api/friends", function(req, res){
		friendsData.push(req.body);
		res.JSON.parse();
		console.log(res.JSONparse());
	})
};