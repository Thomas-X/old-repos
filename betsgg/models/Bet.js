var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var betSchema = new Schema({
    at: String,
    hash: String,
    key: String,
});

const Bet = mongoose.model('Bet', betSchema);

module.exports = Bet;