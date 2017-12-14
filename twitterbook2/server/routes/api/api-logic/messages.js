// @flow

const Message = require('../../../models/Message');
const helpers = require('../api-helpers');

module.exports = {
    postGetMessages: (req, res) => {
        Message.find({ roomName: req.body.data }, (err, messages) => {
            if (!err) {
                res.json({ data: messages });
            } else {
                helpers.errorHandler(err, res);
            }
        });
    },
    // TODO add socket function logic here aswell
};