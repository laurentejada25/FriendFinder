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
		console.log(req.body);
		var newFriend = req.body;
		//this is where best match will be found
		var bestMatch = {};
		var bestMatchDifference = 999

		//a for loop will go through the friends array, add the scores
		//and compare them to one another to find the best match
		for(var i = 0; i < friends.length; i++){
			var currentFriend = friends[i];
			console.log(currentFriend.scores.length);
			var difference = 0;

			for(var j = 0; j < currentFriend.scores.length; j++){
				var currentUser = newFriend.scores[j];
				var arrayFriend = currentFriend.scores[j];
				//diffrence = difference + other value
				//what is on the right side of the equal sign happens first
				difference += Math.abs(parseInt(currentUser) - parseInt(arrayFriend));
			}
			if(difference < bestMatchDifference){
				bestMatch = friends[i];
				bestMatchDifference = difference 
			}
		}

		friends.push(newFriend);
		// res.json({message: "this is from server"})
		res.json(bestMatch);
		res.json(bestMatch.photo);
		// console.log(res.JSON.parse());

		//post best match name and image to the modal
	})
};