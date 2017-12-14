const User = require('../../models/User');

const helpers = function () {
    const errorHandler = (err, res) => {
        res.status(500);
        res.send(err);
    };
    const verifyUser = (req, res, next) => {
        if (req.body.token) {
            User.find({ token: req.body.token }, (err, user) => {
                if (!err && user) {
                    req.user = user;
                    next();
                } else {
                    this.errorHandler(res);
                }
            });
        } else {
            this.errorHandler(res);
        }
    };

    this.errorHandler = errorHandler.bind(this);
    this.verifyUser = verifyUser.bind(this);
    return {
        verifyUser: verifyUser,
        errorHandler: errorHandler,
    };
};

module.exports = (helpers)();