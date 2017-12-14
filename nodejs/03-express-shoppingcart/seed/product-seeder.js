var Product = require('../models/product');

var mongoose = require('mongoose');


mongoose.Promise = global.Promise;

mongoose.connect('localhost:27017/shopping');


var products = [
    new Product({
        imagePath: 'https://placekitten.com/460/480',
        title: 'Kitty Cat Game, undisputably the best.',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, amet consequuntur distinctio dolor enim, ex fugiat hic ipsa laborum minus odio praesentium quam quod rerum saepe totam vel vero voluptatibus!',
        price: 60
    }),
    new Product({
        imagePath: 'https://placekitten.com/520/480',
        title: 'The best kitty game',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, amet consequuntur distinctio dolor enim, ex fugiat hic ipsa laborum minus odio praesentium quam quod rerum saepe totam vel vero voluptatibus!',
        price: 40
    }),
    new Product({
        imagePath: 'https://placekitten.com/640/520',
        title: 'It\'s alright, the game',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, amet consequuntur distinctio dolor enim, ex fugiat hic ipsa laborum minus odio praesentium quam quod rerum saepe totam vel vero voluptatibus!',
        price: 20
    })
];

var done = 0;

for (var i = 0; i < products.length; i++) {
    products[i].save(function (err, res) {
        done++;
        if (done === products.length) {
            exit();
        }
    });
}
function exit() {
    mongoose.disconnect();
}
