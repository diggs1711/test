### Overview

My solution is a simple NodeJS server built with the express framework and written in Typescript. This allows a user to easily upload a file and then query that same server with simple HTTP requests. Typescript was used to provide static checking and type safety which helps to minimise bugs.

The API I have created has three endpoints. The first endpoint allows the user to upload a txt file containing the tournament data. The other endpoints enable the user to query specifics about a certain match or player. A match can be queried by passing it's Id, whereas a player can be queried by passing it's name as a URL parameter. In the examples below I use the command line tool [cURL](https://curl.haxx.se/download.html) to query the server.

For testing, the [jest](https://jestjs.io/) testing framework is used.

A simple DB class object is used to act as a database which stores the tournament and player information.

Install dependcies
```
npm install
```

To start the server
```
npm run start
```

To upload the tournament results
```
curl http://localhost:8000/uploadTournamentResults --data-binary @full_tournament.txt
```

Query a match result
```
curl http://localhost:8000/getMatchResult\?matchId\=1
```

Query a player's stats
```
curl http://localhost:8000/getPlayerStats\?playerName\=Person+A
```

Run the tests
```
npm install jest --global
npm run test
```

