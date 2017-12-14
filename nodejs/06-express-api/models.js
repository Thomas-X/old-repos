var mongoose = require('mongoose');

//create Schema object
var Schema = mongoose.Schema;

var DataSchema = new Schema({
    merk: String,
    type: String,
    prijs: String,
    url: String
});

var Data = mongoose.model("Data", DataSchema);

module.exports.Data = Data;