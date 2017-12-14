const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const MessageSchema = new Schema({
    data: {type: String, minlength: 1, maxlength: 255},
    roomName: String,
    sender: {type: String, minlength: 1, maxlength: 255},
});

const Message = mongoose.model('Message', MessageSchema);

module.exports = Message;