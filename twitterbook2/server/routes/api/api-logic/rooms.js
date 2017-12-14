const Room = require('../../../models/Room');
const helpers = require('../api-helpers');

module.exports = {
    postGetRooms: (req, res) => {
        Room.find({}, (err, rooms) => {
            if (!err) {
                res.json({
                    data: rooms,
                });
            } else {
                helpers.errorHandler(err, res);
            }
        });
    },
    postCreateRoom: (req, res) => {
        Room.create({
            name: req.body.data }, (err, room) => {
            if (!err) {
                res.json({
                    data: room,
                });
            } else {
                helpers.errorHandler(err, res);
            }
        });
    },
    postRoomExits: (req, res) => {
        Room.find({ name: req.body.roomName }, (err, room) => {
            if (!err && room.length > 0) {
                res.status(204);
                res.send();
            } else {
                helpers.errrorHandler(err, res);
            }
        });
    }
};