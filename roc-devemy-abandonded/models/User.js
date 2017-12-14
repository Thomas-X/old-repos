var mongoose = require('mongoose');
var findOrCreate = require('mongoose-find-or-create');

var Schema = mongoose.Schema;
var UserSchema = new Schema({
    googleId: Number,
    displayName: String,
    displayImage: String,
    email: String,
    isTeacher: Boolean,
    watchedCourses: []
});
UserSchema.plugin(findOrCreate);
var User = mongoose.model('User', UserSchema);

module.exports.User = User;