var express = require('express');
var router = express.Router();
var csrf = require('csurf');
var passport = require("passport");

var Product = require('../models/product');


var csrfProtection = csrf();
router.use(csrfProtection);


/* GET home page. */
router.get('/', function (req, res, next) {
    var products = Product.find(function (err, docs) {
        var productChunks = [];
        var chunkSize = 3;
        for (var i = 0; i < docs.length; i += chunkSize) {
            productChunks.push(docs.slice(i, i + chunkSize));
        }
        //TODO FIX COLUMNS NodeJS / Express / MongoDB - Build a Shopping Cart - #5 Outputting Data
        // https://www.youtube.com/watch?v=dSQ1CYLHWYM&index=6&list=PL55RiY5tL51rajp7Xr_zk-fCFtzdlGKUp
        res.render('shop/index', {title: 'hello express', productsName: productChunks});
    });
});


router.get('/user/signup', function (req, res, next) {
    res.render('user/signup', {csrfToken: req.csrfToken})
});

router.get('/user/temp', function (req, res, next) {
    res.render('user/temp', {csrfToken: req.csrfToken})
});

router.post('/user/signup', passport.authenticate('local.signup', {
    successRedirect: '/user/profile',
    failureRedirect: '/user/temp',
    failureFlash: true
}));

router.get('/user/profile', function (req, res, next) {
    res.render('user/profile')
})

module.exports = router;
