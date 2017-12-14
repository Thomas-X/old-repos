var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var WishtlistItemSchema = new Schema({
    itemName: {type: String, default: null},
    price: {type: Number, default: null},
    bought: {type: Boolean, default: false},
    buyer: {type: String, default: null},
});

var WishlistSchema = new Schema({
    items: [WishtlistItemSchema],
    author: {type: String, default: null},
})

var Wishlist = mongoose.model('Wishlist', WishlistSchema);

module.exports.Wishlist = Wishlist;