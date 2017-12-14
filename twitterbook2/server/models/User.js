const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: {type: String, unique: true, minlength: 1, maxlength: 255},
    password: {type: String, minlength: 1, maxlength: 255},
    name: {type: String, minlength: 1, maxlength: 255},
    token: String,
});

const User = mongoose.model('User', UserSchema);

module.exports = User;