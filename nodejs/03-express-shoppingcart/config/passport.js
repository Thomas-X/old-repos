var passport = require('passport');
var User = require('../models/user');
var LocalStrategy = require('passport-local').Strategy;

passport.serializeUser(function (email, done) {
   done(null, email.id);
});

passport.deserializeUser(function (id, done) {
    User.findById(id, function (err, email) {
        done(err,email);
    });
});

//idek

passport.use('local.signup', new LocalStrategy({
    email: 'email',
    passwordField: 'password',
    passReqToCallback: true
}, function (req, email, password, done) {
    User.findOne({'email': email}, function (err, email) {
        if (err) {
            return done(err);
        }
        if (email) {
            return done(null, false, {message: 'Email is already in use.'});
        }
        var newUser = new User();
        newUser.email = email;
        newUser.password = newUser.encryptPassword(password);
        console.log(newUser.email);

        newUser.save(function (err, res) {
            if (err) {
                return done(err);
            }
            return done(null, newUser);
        })
    })
}));