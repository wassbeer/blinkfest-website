var express = require("express");
var app     = express();
var path    = require("path");

// serving static files in Express
// https://expressjs.com/en/starter/static-files.html
app.use(express.static('blinkfest-website'));

app.listen(3000);

console.log("Running at Port 3000");