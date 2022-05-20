Collaborative project.

Web-based calorie/macro counting application.

Current functionality only displays macros, calories, meals and days but does not allow the user much interaction. At the moment, the user is only able to submit for the creation of a week.

Ideal functionality consists of having a user be able to post daily meals along with their macro count. The application would take care of adding macros together as well as convert macros into calorie counts when desired. In addition, days would be kept track of and users would be able to look up their meals based on the day they would like to see.

To start the application, run **npm install** for the necessary dependencies. Then, run **json-server --watch db.json --port 3001** in your command line, this will run the db.json file as a server so that we can fetch to it. Lastly, open a second command line and run **npm run start**. Once this is done, the server for the react application should start and automatically open a page in your browser. If the page does not automatically open, make sure you are using the appropriate ports for your servers.
