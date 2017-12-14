'use strict';

//imports
var mongoose = require('mongoose');

//create Schema object
var Schema = mongoose.Schema;

//sorts answers, but it's unused?
var sortAnswers = function (a, b) {
    //- negative if a before b
    //0 no change
    //+ positive a after b

    if (a.votes === b.votes) {
        return b.updatedAt - a.updatedAt;
    }
    return b.votes - a.votes;
}

//new schema the data has to comply with, sortof like a 'template'
var AnswerSchema = new Schema(
    {
        text: String,
        createdAt: {type: Date, default: Date.now},
        updatedAt: {type: Date, default: Date.now},
        votes: {type: Number, default: 0}
    });




//??
AnswerSchema.method("update", function (updates, callback) {
    Object.assign(this, updates, {updatedAt: new Date()});
    this.parent().save(callback);
});


//??
AnswerSchema.method("vote", function (vote, callback) {
    if (vote === "up") {
        this.votes++; //maybe +=
    } else {
        this.vote--;
    }
    this.parent().save(callback);
});

//template for the data to comply with, uses AnswerSchema as data for answers, parents->child relationship
var QuestionSchema = new Schema({
    text: String,
    createdAt: {type: Date, default: Date.now},
    answers: [AnswerSchema]
});


//pre hook for saving to sort the data so that our DB has the correct order
QuestionSchema.pre("save", function (next) {
    //it would be a string of [object Object]
    this.answers.sort();
    next();
});

//make a model with the label Question
var Question = mongoose.model("Question", QuestionSchema);


//so if models.js is imported the require.Question is set not the whole file, only so like
//require("./models").Question
module.exports.Question = Question;