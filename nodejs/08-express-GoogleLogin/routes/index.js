var express = require('express');
var router = express.Router();
var User = require('../models/User').User;
var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth20').Strategy;

/* GET home page. */
router.get('/user', isLoggedIn, function (req, res, next) {

    res.render('profile', {user: req.user});

});

router.get('/', function (req, res, next) {

    // console.log(req.user);

    if (req.isAuthenticated()) {
        res.render('index', {title: req.user['email'], authenticated: 1});
    } else {
        res.render('index', {title: 'Express', notAuthenticated: 1});
    }




});

// route middleware to make sure a user is logged in
function isLoggedIn(req, res, next) {

    // if user is authenticated in the session, carry on
    if (req.isAuthenticated())
        return next();

    // if they aren't redirect them to the home page
    res.redirect('/');
}

// POST register page (registered)
router.post('/register', function (req, res, next) {
    var user = new User(req.body);
    user.save(function (err, user) {
        if (err) {
            return next(err);
        }
        res.status(201);
        res.render('register', {registered: 1, user: user});
    });
});








// GET /auth/google
//   Use passport.authenticate() as route middleware to authenticate the
//   request.  The first step in Google authentication will involve
//   redirecting the user to google.com.  After authorization, Google
//   will redirect the user back to this application at /auth/google/callback
router.get('/auth/google',
    passport.authenticate('google', {scope: [
        'https://www.googleapis.com/auth/plus.login',
        'https://www.googleapis.com/auth/plus.profile.emails.read'
    ], hostedDomain: 'roc-dev.com'}));

// GET /auth/google/callback
//   Use passport.authenticate() as route middleware to authenticate the
//   request.  If authentication fails, the user will be redirected back to the
//   login page.  Otherwise, the primary route function function will be called,
//   which, in this example, will redirect the user to the home page.
router.get('/auth/google/callback',
    passport.authenticate('google', {failureRedirect: '/login'}),
    function (req, res) {
        console.log(req.user);
        res.redirect('/');
    });

















// GET register page (so not registered)
router.get('/register', function (req, res, next) {

    res.render('register', {notRegistered: 1});

});


module.exports = router;
