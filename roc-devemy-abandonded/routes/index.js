var express = require('express');
var router = express.Router();
var User = require('../models/User').User;
var Course = require('../models/Course').Course;
var passport = require('passport');
var request = require('request');
var jsdom = require('jsdom');

//TODO change apikeys and secrets
var youtubeApiKey = "AIzaSyDdf0bdgY7DKqo32a2L19EBCYsJWMPCSj4";


/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index');
});

// router.get('*', function (request, response){
//     response.sendFile(path.resolve(__dirname, 'public', 'index.html'));
// })

// router.get('/courses/:cID', isLoggedIn, function (req, res, next) {
//
//     res.render('course', {data: req.doc});
// });
//
router.get('/logout', isLoggedIn, function (req, res, next) {
    // resetting user locals aswell
    console.log('/');

    req.app.locals.username = null;
    req.app.locals.email = null;
    req.app.locals.displayImage = null;
    req.logout();
    res.redirect('/');
});
router.get('/#/logout', isLoggedIn, function (req, res, next) {
    // resetting user locals aswell
    console.log('/#/');
    req.app.locals.username = null;
    req.app.locals.email = null;
    req.app.locals.displayImage = null;
    req.logout();
    res.redirect('/');
});
//
//
// router.param("cID", function (req, res, next, id) {
//     Course.findById(id, function (err, doc) {
//         if (err) {
//             return next(err);
//         }
//         if (!doc) {
//             err = new Error("Not Found");
//             err.status = 404;
//             return next(err);
//         }
//         req.courseAuthorId = doc.authorId;
//         req.doc = doc;
//         return next();
//     })
// });

// router.get('/courses/:cID', isLoggedIn, function (req, res, next) {
//
//     var str = String(req.course.creationDate);
//
//     // sketchy date formatting
//     str = str.substr(0, str.lastIndexOf(':') + 3);
//     req.course.formattedDate = str;
//
//     var desc = req.course.description
//     desc = desc.substr(desc.indexOf('"') + 1)
//     req.course.description = desc.substr(0, desc.lastIndexOf('"') - 1)
//
//
//     res.render('course', {data: req.course});
// });
//
// router.get('/addCourses/', isTeacherLoggedIn, function (req, res, next) {
//
//     var course = new Course();
//     course.authorId = req.user._id
//     course.save(function (err, course) {
//         res.redirect('/createCourse/' + course.id + '?cID=' + course.id);
//     });
//
// });
//
// router.get('/createCourse/:cID', isTeacherLoggedIn, function (req, res, next) {
//
//
//     if (req.courseAuthorId != req.user._id) {
//         res.redirect('/');
//     }
//
//     res.render('texteditor');
//
// });
//
// router.post('/addCourses', isTeacherLoggedIn, function (req, res, next) {
//
//     var playlistId = gup("list", req.body.course.courseVideoLessons);
//
//     var uri = "https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=" + playlistId + "&maxResults=50&key=" + youtubeApiKey;
//
//     var courseVideos = [];
//
//     /*
//      *
//      *   this function calls the youtube api, checks if there's a nextPageToken
//      *   because there is a limit of 50 per page for google's api.
//      *   if there is a nextPageToken we add it to the uri and add the current items (the first page of items)
//      *   to the array of all videos of that specific playlist, after adding it to the array it calls itself
//      *   again, till there's nothing left except the last page. recursion!
//
//      *
//      * */
//
//     function recursion(callback) {
//         if (playlistId != null) {
//             request(uri, function (err, res, body) {
//                 body = JSON.parse(body);
//                 var items = body.items;
//
//                 if (body.nextPageToken) {
//
//                     //this means we already added a '&pageToken=' string to the url and we need to remove it
//                     if (uri.includes('&pageToken=')) {
//                         uri = uri.substr(0, uri.indexOf('&pageToken='));
//                     }
//                     uri = uri + "&pageToken=" + body.nextPageToken;
//                     for (var i = 0; i < items.length; i++) {
//                         courseVideos.push({
//                             title: items[i].snippet.title,
//                             description: items[i].snippet.description.substr(0, 50) + "...",
//                             thumbnail: items[i].snippet.thumbnails.default.url,
//                             videoId: items[i].snippet.resourceId.videoId
//                         })
//                     }
//                     recursion(callback);
//                 }
//
//                 // this means we're at the last page of the results
//                 // if no token of any kind is given the playlist is shorter than 50 so that means we're done aswell
//                 if (body.nextPageToken == null && body.prevPageToken != null || body.nextPageToken == null && body.prevPageToken == null) {
//                     for (var i = 0; i < items.length; i++) {
//                         courseVideos.push({
//                             title: items[i].snippet.title,
//                             description: items[i].snippet.description.substr(0, 50) + "...",
//                             thumbnail: items[i].snippet.thumbnails.default.url,
//                             videoId: items[i].snippet.resourceId.videoId
//                         })
//                     }
//                     callback();
//                 }
//             });
//         } else {
//             // no valid youtube ID, should add form validation front end aswell
//             callback();
//         }
//     }
//
//
//     /*
//      *
//      *   here we call the recursion function and when it's done doing all the requests
//      *   to do youtube api we use a callback to signal that it's done, so we can safely
//      *   add it as a course (because otherwise a course wouldn't be created till the recursion method is done.)
//      *
//      * */
//
//     recursion(function () {
//
//
//         Course.create({
//             courseTitle: req.body.course.courseTitle,
//             courseThumbnail: req.body.course.courseThumbnail,
//             author: req.app.locals.username,
//             authorId: req.user.id,
//             courseVideoLessons: courseVideos,
//             creationDate: Date.now(),
//             chapters: [req.body.chapters],
//
//         }, function (err, val) {
//             if (err) {
//                 // let's hope this doesn't happen often ..
//                 alert("Something went wrong with saving the course, try again! " + err);
//                 return next(err);
//             }
//             //redirect to last url somehow
//             res.redirect('/');
//         });
//     });
//
// });
//

// POST /addCouse
// adds a course to the logged in user (the course to be added has to be in the post body, req.body)
router.post('/addCourse', isLoggedIn, function (req, res, next) {

    // finds a user with logged in ID,
    // then pushes the clicked course's courseId to the 'watchedCourses' array, that is in the db
    // options:
    // "new" - so that you get the updated document in return (read answer description)
    // "upsert" - If set to true, creates a new document when no document matches the query criteria.
    // "safe" - this is something we want to safe write, takes longer but adding a course should be done safely.
    User.findByIdAndUpdate(req.user._id,
        // lastWatched 0 because all the videos will be in an array, 0 is the first video
        {$push: {'watchedCourses': {courseId: req.body.course.id, lastWatched: 0}}},
        {safe: true, upsert: true, new: true},
        function (err, model) {
            console.log(err);

            // redirect to last url instead of just back to homepage, or add courses via an AJAX call.
            res.redirect('/');
        }
    );
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

/*
 *
 *   source: http://www.netlobo.com/url_query_string_javascript.html
 *   this function searches a url and it's params, I did not make this. Why re-invent the wheel?
 *   does a regex search on the url to find the specified name param from the url
 *
 * */
function gup(name, url) {
    name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
    var regexS = "[\\?&]" + name + "=([^&#]*)";
    var regex = new RegExp(regexS);
    var results = regex.exec(url);
    return results == null
        ? null
        : results[1];
}


/*
 *
 *   google auth handlers
 *
 * */

// GET /auth/google
//   Use passport.authenticate() as route middleware to authenticate the
//   request.  The first step in Google authentication will involve
//   redirecting the user to google.com.  After authorization, Google
//   will redirect the user back to this application at /auth/google/callback
router.get('/auth/google',
    passport.authenticate('google', {
        scope: [
            'https://www.googleapis.com/auth/plus.login',
            'https://www.googleapis.com/auth/plus.profile.emails.read',
            'https://www.googleapis.com/auth/plus.profiles.read',
            'https://www.googleapis.com/auth/plus.me',
            'https://www.googleapis.com/auth/plus.circles.read',
            'https://www.googleapis.com/auth/userinfo.profile'
        ] //, hostedDomain: 'roc-dev.com' TODO uncomment this after testing so only roc-dev.com domains are allowed.
    }));


// GET /auth/google/callback
//   Use passport.authenticate() as route middleware to authenticate the
//   request.  If authentication fails, the user will be redirected back to the
//   login page.  Otherwise, the primary route function function will be called,
//   which, in this example, will redirect the user to the home page.

router.get('/auth/google/callback',
    passport.authenticate('google', {failureRedirect: '/login'}),
    function (req, res) {
        req.app.locals.username = req.user.displayName;
        req.app.locals.email = req.user.email;
        req.app.locals.displayImage = req.user.displayImage;
        res.redirect('/');
    });

module.exports = router;
