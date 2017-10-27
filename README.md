# FreeCodeCamp API Projects

## Timestamp Microservice

* **Objective**: Build a full stack JavaScript app that is functionally similar to this: https://timestamp-ms.herokuapp.com/ and deploy it to Heroku.
* **User Story**: I can pass a string as a parameter, and it will check to see whether that string contains either a unix timestamp or a natural language date (example: January 1, 2016).
* **User Story**: If it does, it returns both the Unix timestamp and the natural language form of that date.
* **User Story**: If it does not contain a date or Unix timestamp, it returns null for those properties.

### To run this app with docker:
* Build image: `docker build -t rumpel78/timestamp .`
* Run container: `docker run -p8080:8080 --name fcc_timestamp rumpel78/timestamp`  
* Open in browser: http://localhost:8080
* To remove the container run: `docker rm fcc_timestamp -f`

### To run this app with nodejs and without docker:
* Enter source directory: `cd src`
* Install packages: `npm install`
* Start nodjs server: `npm start`  
* Open in browser: http://localhost:8080

See the result under: https://timestamp.app.rzipa.at/  
To take a look at the other projects go to https://app.rzipa.at
