'use strict';

var mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/sandbox");

var db = mongoose.connection;

db.on("error", function (err) {
    console.log("connection error:", err);
});

db.once("open", function () {
    console.log("db connection successful");
    //all db communication goes here


    var Schema = mongoose.Schema;
    var AnimalSchema = new Schema({
        type: String,
        color: String,
        size: String,
        avgMass: Number,
        name: String
    });


    var Animal = mongoose.model("Animal", AnimalSchema);

    var elephant = new Animal({
       type: "elephant",
        size: "big",
        color: "gray",
        avgMass: 6500,
        name: "Albert"
    });

    elephant.save(function (err) {
        if (err) {
            console.log("saving failed", err);
        } else {
            console.log("saved");
        }
        db.close(function () {
            console.log("db connection closed!");
        });
    });
});