'use strict';

//imports and setting of port for server
var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var routes = require("./routes");
var logger = require("morgan");
var mongoose = require('mongoose');
var port = process.env.PORT || 3000;


//connect to database, if it exists we use that one otherwise create one
mongoose.connect("mongodb://localhost:27017/api");


//set connection object to a var for easier manipulation
var db = mongoose.connection;



app.use(logger("dev"));

//so we can handle json HTTP requests, POST, PUT etc
app.use(bodyParser.json());

//event 'error', then we log it and cry in our corner
db.on("error", function (err) {
    console.log("connection error:", err);
});

//event 'open', used to log a message that connecting to db was successful
db.once("open", function () {
    console.log("db connection successful");
});


//which routes to use
app.use("/api", routes);



//catch 404 errors and forward to error handler
app.use(function (req, res, next) {
    var err = new Error("Not found");
    err.status = 404;
    next(err);
});

// custom error handler
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.json({
        error: {
            message: err.message
        }
    });
    // next();
});

//obvious
app.listen(port, function () {
    console.log("Express is running at", port);
});
