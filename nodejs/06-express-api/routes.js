'use strict';

var express = require("express");
var router = express.Router();
var Data = require("./models").Data;




// GET /questions
// Route for questions collection
router.get("/wheely", function (req, res, next) {
    Data.find({})
        .exec(function (err, data) {
            if (err) {
                return next(err);
            }
            res.json(data);
        });
    console.log("you sent me a get request!");
});

// POST /questions
// Route for creating questions
router.post("/wheely", function (req, res, next) {
    //
    // req.body.forEach(function (elem) {
    //     var item = new Data(elem);
    //     item.save(function (err) {
    //         if (err) {
    //           return next(err);
    //       }
    //       res.status(201);
    //    });
    // });
    res.json("I got your post request! Thank you., I didn't save it though.");
});

module.exports = router;
