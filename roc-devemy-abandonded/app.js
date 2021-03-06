var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth20').Strategy;
var session = require('express-session');
var request = require('request');

var index = require('./routes/index');
var api = require('./routes/api');
// var api = require('./routes/api');


var app = express();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

/*
 *
 *   babel
 *
 * */




/*
 *
 *   MONGODB
 *
 * */

// connection to database or create one
//TODO change db name to something like 'roc-devemyDB' (there's test data in 'loginData' which right now I need.
mongoose.connect('mongodb://localhost/loginData');

//get user schema from models.
var User = require('./models/User').User;

// check for errors in database connection or if database connection is open
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    // connection open!!
});


/*
 *
 *   Express configuration
 *
 * */


// uncomment after placing favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({secret: 'secretysecret'})); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions


app.use('/', index);
app.use('/api', api);
// app.use('/api', api);


/*
 *
 *   use passport googleStrategy
 *
 * */


passport.use(new GoogleStrategy({
        clientID: '162588864112-vgmfiefsv6l7ku12r2di8r8qkhrnn3jt.apps.googleusercontent.com',
        clientSecret: 'zteyUMl3dnk7qnLfB3UeOU2b',
        callbackURL: "http://localhost:7000/auth/google/callback"
    },
    function (accessToken, refreshToken, profile, cb) {


        User.findOne({googleId: profile.id}, function (err, doc) {
            //check if we found a doc, if doc is null we create a new user, if doc isn't null we compare id's, for double safety :)
            if (doc != null) {
                if (doc.googleId == profile.id) {
                    return cb(err, doc);
                }
            } else if (doc == null) {
                User.create({
                    googleId: profile.id,
                    displayName: profile.displayName,
                    displayImage: profile._json.image['url'],
                    email: String(profile.emails[0]['value']),
                    isTeacher: false,
                    watchedCourses: []
                }, function (err, val) {
                    return cb(err, val);
                });
            }
        });
    }
));

passport.serializeUser(function (user, done) {
    done(null, user.id);
});

passport.deserializeUser(function (id, done) {
    User.findById(id, function (err, user) {
        done(err, user);
    });
});


/*
 *
 *   Error handlers
 *
 * */

// catch 404 and forward to error handler
// app.use(function (req, res, next) {
//     var err = new Error('Not Found');
//     err.status = 404;
//     next(err);
// });

// error handler
// app.use(function (err, req, res, next) {
//     // set locals, only providing error in development
//     res.locals.message = err.message;
//     res.locals.error = req.app.get('env') === 'development' ? err : {};
//
//     // render the error page
//     res.status(err.status || 500);
//     res.render('error');
// });

module.exports = app;
