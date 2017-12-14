var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var winLoseSchema = new Schema({
    win: Boolean,
    lose: Boolean,
});

const WinLose = mongoose.model('WinLose', winLoseSchema);

module.exports = WinLose;