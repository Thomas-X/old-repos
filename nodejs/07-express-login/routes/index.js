var express = require('express');
var router = express.Router();
var User = require('../models/User').User;


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// POST register page (registered)
router.post('/register', function (req, res, next) {
    console.log(req);
    var user = new User(req.body);
    user.save(function (err, user) {
        if (err) {
            return next(err);
        }
        res.status(201);
        res.render('register', {registered: 1, user: user});
    });
});


// GET register page (so not registered)
router.get('/register', function (req, res, next) {

    res.render('register', {notRegistered: 1});

});


module.exports = router;
