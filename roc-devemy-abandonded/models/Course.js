var mongoose = require('mongoose');


var Schema = mongoose.Schema;

var CourseChapter = new Schema({
    title: String,
    imgURL: String,
    chapterContent: String,

});

var CourseSchema = new Schema({
    title: String,
    backgroundImage: String,
    author: String,
    authorId: String,
    courseVideoLessons: [],
    chapters: [CourseChapter],
    creationDate: {type: Date, default: Date.now},
});
var Course = mongoose.model('Course', CourseSchema);

module.exports.Course = Course;