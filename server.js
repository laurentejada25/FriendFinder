//Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");


//Sets up the Express app
var app = express();
var PORT = process.env.PORT || 3000;


// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.text());


//Router- includes the route files
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);


//Listener
app.listen(PORT, function(){
	console.log("App listening on PORT: " + PORT);
});