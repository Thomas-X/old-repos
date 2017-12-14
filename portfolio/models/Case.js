const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const LinksSchema = new Schema({
    type: String,
    link: String,
});

const CaseSchema = new Schema({
    title: String,
    description: String,
    tag: String,
    links: [LinksSchema],
});

const Case = mongoose.model('Case', CaseSchema);

module.exports = Case;