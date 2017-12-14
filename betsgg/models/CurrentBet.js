var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var currentBetSchema = new Schema({
    currentBet: Number,
});

const CurrentBet = mongoose.model('CurrentBet', currentBetSchema);

module.exports = CurrentBet;