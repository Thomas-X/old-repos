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

var index = require('./routes/index');
var users = require('./routes/users');

var app = express();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');


/*
*
*   MONGODB
*
* */

// connection to database or creat one
mongoose.connect('mongodb://localhost/loginData');


var findOrCreate = require('mongoose-findorcreate')
var Schema = mongoose.Schema;
var UserSchema = new Schema({
    googleId: Number,
    displayName: String,
    displayImage: String,
    email: String
});

UserSchema.plugin(findOrCreate);
var User = mongoose.model('User', UserSchema);

// check for errors in database connection or if database connection is open
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    // open for business!!
});

/*
*
*   END MONGODB
*
* */



// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({ secret: 'secretysecret' })); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions

app.use('/', index);
app.use('/users', users);


/*
*
*   use passport googleStrategy
*
* */




passport.use(new GoogleStrategy({
        clientID: '162588864112-vgmfiefsv6l7ku12r2di8r8qkhrnn3jt.apps.googleusercontent.com',
        clientSecret: 'zteyUMl3dnk7qnLfB3UeOU2b',
        callbackURL: "http://127.0.0.1:3000/auth/google/callback"
    },
    function(accessToken, refreshToken, profile, cb) {

    // console.log(profile._json.image['url']);
    // console.log(profile.emails);
        console.log(profile);

        // using npm package for 'findOrCreate' but the idea of this is a custom function that either finds the user or store it in mongoDB
        User.findOrCreate({
            googleId: profile.id,
            displayName: profile.displayName,
            displayImage: profile._json.image['url'],
            email: String(profile.emails[0]['value'])
        }, function (err, user) {
            return cb(err, user);
        });
    }
));

passport.serializeUser(function(user, done) {
    done(null, user.id);
});

passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
        done(err, user);
    });
});

/*
*
*   end passport
*
* */




// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;
