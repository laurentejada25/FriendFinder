//Load Data- Holds arrays of information for friends.js

var friends = require("../data/friends.js");

//Routing
module.exports = function(app){
	//API GET Requests
	//Returns data in json format
	app.get("/api/friends", function(req, res){
		console.log(friends);
		res.json(friends);	
	});


	//API POST Requests
	//When user posts data and it gets sent to the server and
	//displays in json format
	app.post("/api/friends", function(req, res){
		var newFriend = req.body;
		//this is where best match will be found
		var bestMatch = {};

		//a for loop will go through the friends array, add the scores
		//and compare them to one another to find the best match
		for(var i = 0; i < friends.scores.length; i++){
			//math to figure out which scores are best matches
		}

		friends.push(newFriend);
		// res.json(bestMatch);
		// res.JSON.parse();
		// console.log(res.JSON.parse());

		//post best match name and image to the modal
	})
};