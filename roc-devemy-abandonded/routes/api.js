var express = require('express');
var router = express.Router();
var User = require('../models/User').User;
var Course = require('../models/Course').Course;
var passport = require('passport');


router.param("cID", function (req, res, next, id) {
    Course.findById(id, function (err, doc) {
        if (err) {
            return next(err);
        }
        if (!doc) {
            err = new Error("Not Found");
            err.status = 404;
            return next(err);
        }
        req.doc = doc;
        return next();
    })
});

router.post('/autoSave', function (req, res, next) {
    console.log(req.body);

    res.json(JSON.stringify({
        message: 'recieved JSON!'
    }));
});
router.post('/publishCourse', function (req, res, next) {
    console.log('hi');
    res.json(JSON.stringify({
        message: 'recieved JSON!'
    }));
})


router.get('/getUserData', function (req, res, next) {


    // so user is logged in since there's data.
    if (req.user != null) {
        res.json(JSON.stringify({
            loggedIn: true,
            username: req.app.locals.username,
            email: req.app.locals.email,
            displayImage: req.app.locals.displayImage,
        }));
    } else if (req.user == null) {
        res.json(JSON.stringify({
            loggedIn: false
        }));
    }
});

router.get('/getUserProfile', function (req, res, next) {

    // we don't have to worry about wheter user is logged in because we can just use isLoggedIn here and don't need to give
    // an unique response versus the .get route /getUserData

    if (req.isAuthenticated()) {
        res.json(JSON.stringify({
            data: req.user,
            Authenticated: true,
        }));
    } else {
        res.json(JSON.stringify({
            Authenticated: false,
        }))
    }

});

router.get('/getCourseDataById', function (req, res, next) {
    if (req.isAuthenticated()) {
        var courses = [];

        function IloveRecursion(callback) {
            req.user.watchedCourses.forEach(function (elem, index) {
                Course.findById(elem['courseId'], function (err, course) {
                    courses.push(course);
                    if ((index + 1) == req.user.watchedCourses.length) {
                        callback();
                    }

                });
            });
        }

        IloveRecursion(function () {
            res.json(JSON.stringify({
                courses: courses,
            }))
        });
    }
});

router.get('/getCourseById/:cID', function (req, res, next) {
    res.json(req.doc);
});
router.get('/createCourse', function (req, res, next) {

    // if it's set it means user is logged in
    if (req.app.locals.username != null && req.user.isTeacher === true) {

        Course.create({
            title: null,
            backgroundImage: null,
            author: req.app.locals.username,
            authorId: req.user.id,
            courseVideoLessons: [],
            chapters: [],
            creationDate: Date.now(),

        }, function (err, doc) {
            if (err) {
                console.log(err);
            }
            console.log(doc);
            res.json(doc._id);
        })
    }
    else {
        console.log('not authenticated!');
        res.json({userNotValid: true});
    }
});
router.get('/authUser', function (req, res, next) {

    // if it's null that means there's not a logged in user, if it is though, the user is logged in
    if (req.app.locals.username != null) {
        res.json({authenticated: true})
    } else if (req.app.locals.username == null) {
        res.json({authenticated: false})
    }
});
router.get('/authTeacher', function (req, res, next) {

    if (req.app.locals.username != null && req.user.isTeacher === true) {
        res.json({authenticated: true})
    } else if (req.app.locals.username == null || req.user.isTeacher === false) {
        res.json({authenticated: false});
    }
});

router.get('/loggedIn', function (req, res, next) {
    if (req.isAuthenticated()) {
        res.json(JSON.stringify({
            Authenticated: true,
        }));
    } else {
        res.json(JSON.stringify({
            Authenticated: false,
        }))
    }
});


// route middleware to make sure a user is logged in
function isLoggedIn(req, res, next) {

    // if user is authenticated in the session, carry on
    if (req.isAuthenticated()) {
        return next();
    }
    // if user isn't logged in redirect them to the home page
    res.redirect('/');
}

function isTeacherLoggedIn(req, res, next) {

    if (req.isAuthenticated()) {
        if (req.user.isTeacher === true) {
            return next();
        }
    }
    res.redirect('/');

}

module.exports = router;
