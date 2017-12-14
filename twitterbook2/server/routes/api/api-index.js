const router = require('express').Router();
const apiMethods = require('./api-actions');
const helpers = require('./api-helpers');
const passport = require('passport');

// import route controllers
const messages = require('./api-logic/messages');
const rooms = require('./api-logic/rooms');
const auth = require('./api-logic/auth');

const routes = [
    // the index route of api, so '/' is handled with simple-stats-server
    // in app.js to show stats of the api (yes, loading time is long)
    {
        route: '/getMessages',
        method: apiMethods.post,
        func: messages.postGetMessages,
        isProtected: true,
    },
    {
        route: '/getRooms',
        method: apiMethods.post,
        func: rooms.postGetRooms,
        isProtected: true,
    },
    {
        route: '/createRoom',
        method: apiMethods.post,
        func: rooms.postCreateRoom,
        isProtected: true,
    },
    {
        route: '/getRoomExists',
        method: apiMethods.post,
        func: rooms.postRoomExits,
        isProtected: true,
    },
    {
        route: '/register',
        method: apiMethods.post,
        func: auth.postRegister,
    },
    {
        route: '/login',
        method: apiMethods.post,
        func: auth.postLogin,
        passportAuth: true,
    },
    {
        route: '/isLoggedIn',
        method: apiMethods.post,
        func: auth.postIsLoggedIn,
    }
];

const defaultVerifyMethod = helpers.verifyUser;

// ¯\_(ツ)_/¯
routes.map(({ route, method, func, isProtected, passportAuth }) => {
    return router[method](route, (isProtected
        ? defaultVerifyMethod
        : (req, res, next) => next()),
        (passportAuth
            ? passport.authenticate('local')
            : (req, res, next) => next())
        , func);
});

module.exports = router;