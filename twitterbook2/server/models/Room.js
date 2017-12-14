const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const RoomSchema = new Schema({
    name: {type: String, unique: true, minlength: 1, maxlength: 255}
});

const Room = mongoose.model('Room', RoomSchema);

module.exports = Room;