# FriendFinder

This app is used to find friends with node.js and express.js.

The purpose of the app is to create new users and use their survey values to find a "best match" and display this to them.

server.js
Holds the dependencies, sets up the express app, data parsing, router files and listener.

friends.js
Holds the array of friends data including name, photo, and scores from the survey. It is then exported so that it can be used in another file. 

home.html
Creates the html page that is displayed. It uses html,css, and jquery to create the page.

survey.html
Creates the survey page that is displayed. It takes in the information the user added to the survey and posts this data to the friends api.

apiRoutes.js
Requires the friends array and uses it to return data in json format and posts it to the server in json format. It pushes the new data to the api page.

htmlRoutes.js
Requires path so that we can set up routes to the html pages so that they can be used. Also includes a catch all function that goes to the home page.