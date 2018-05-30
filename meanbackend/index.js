var http = require("http");
var port = process.env.PORT || 8080;
var express = require("express");
var app = express();
var cors = require("cors");
var bodyParser = require('body-parser');
var appRoutes = require('./routes/appRoutes');
var mongoose = require("mongoose");

mongoose.connect('mongodb://localhost/meanDb');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use('/', appRoutes);
http.createServer(app).listen(port);
console.log("backend running on port  " + port);