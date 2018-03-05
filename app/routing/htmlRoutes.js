// A GET Route to /survey which should display the survey page.
// A default, catch-all route that leads to home.html which displays the home page.

//Dependencies
var path = require("path");

//Routing
module.exports = function(app){
	//HTML GET requests

	//Route that leads to home page
	app.get("/", function(req, res){
		res.sendFile(path.join(__dirname, "../public/home.html"));
	});

	//Route that leads to survey page
	app.get("/survey", function(req, res){
		res.sendFile(path.join(__dirname, "../public/survey.html"));
	});

	//Default, catch-all route that leads to home page
	app.get("*", function(req, res){
		res.sendFile(path.join(__dirname, "../public/home.html"));
	});

};