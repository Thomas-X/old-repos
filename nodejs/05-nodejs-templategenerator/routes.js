'use strict';

var express = require("express");
var router = express.Router();

// GET /questions
// Route for questions collection
router.get("/", function(req, res){
    res.json({response: "You sent me a GET request"});
});
