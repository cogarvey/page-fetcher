const request = require('request');
const fs = require("fs");

let URL = process.argv[2];
let localPath = process.argv[3];

request(URL, (error, response, body) => {
  if (error) {
    console.log(`Error: `, error);
  }
  fs.writeFile(localPath, body, (error) => {
    if (error) {
      console.log(error);
    } else {
      console.log(`Downloaded and saved ${body.length} bytes to ${localPath}`);
    }
  });
});



//first tackle the url -- which takes the http request and waits for response
// log an if error on the request
//then tackle the local path.. we use fs.writeFile which takes in the file location
//(localPath), then the body which is the bytes, and the error incase there isnt anything again
//if it does receive the data, then it will write to the system
// if it receives the data it will push a index to our file
// we get the bytes by comparing the body to .length
//our consolelog will say `downloaded and saves ... bytes to localPath



// const request = require('request');
// request('http://www.google.com', (error, response, body) => {
//   console.log('error:', error); // Print the error if one occurred
//   console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
//   console.log('body:', body); // Print the HTML for the Google homepage.
// });


////////////////// THIS IS WHAT WE NEED TO PUT INTO NODE

// > node fetcher.js http://www.example.edu/ ./index.html
// Downloaded and saved 3261 bytes to ./index.html