var express = require('express');
var router = express.Router();
var User = require('../models/User').User;
var Wishlist = require('../models/Verlanglijstje').Wishlist;


router.param('verlanglijstjeID', (req, res, next, wishlistID) => {
    if(req.user != null) {
        Wishlist.findById(wishlistID, (err, wishlist) => {
            if (err) {
                res.status(404);
                next();
            }
            if (wishlist && !err) {
                console.log('asdasd', wishlist);
                req.user.wishlist = wishlist;
                next();
            } else {
                next();
            }
            console.log('asddddfdasd', wishlist);
        });
    } else {
        next();
    }
});

router.param('verlanglijstjeNAME', (req, res, next, authorName) => {
    if(req.user != null) {
            Wishlist.findOne({author: authorName}, (err, wishlist) => {
                if (err) {
                    res.status(404);
                    next();
                }
                if (wishlist && !err) {
                    req.user.wishlist = wishlist;
                    next();
                } else {
                    next();
                }
            });
    } else {
        next();
    }
});


/* GET home page. */
router.get('/', function (req, res, next) {
    Wishlist.find({}, (err, wishlists) => {
        if (!err) {
            let loggedIn = false;
            if (req.user != null) {
                if (req.user.username != null) loggedIn = true;
                wishlists.forEach((elem, index) => {
                   if(elem.author == req.user.username) {
                       wishlists.splice(index, 1)
                   }
                });
                res.render('index', {loggedIn: loggedIn, username: req.user.username, wishlists: wishlists});
            } else {
                res.render('index');
            }
        }
    });
});

router.get('/login', (req, res, next) => {
    let loggedIn = false;
    if (req.user != null) {
        if (req.user.username != null) loggedIn = true;
        res.redirect('/');
    } else {
        res.render('login');
    }
});



router.get('/logout',
    function(req, res){
        req.logout();
        res.redirect('/');
    });

router.post('/addWishlistItem/:verlanglijstjeID', (req, res, next) => {
    let loggedIn = false;
    if (req.user != null) {
        if (req.user.username != null) loggedIn = true;
        if (req.user.username != null) {
            Wishlist.findOne({author: req.user.wishlist.author}, (err, wishlist) => {
                if (!err && wishlist) {
                    wishlist.items.push({
                        itemName: req.body.itemName,
                        price: req.body.price,
                        buyer: req.user.username
                    });
                    wishlist.save((err, updatedWishlist) => {
                        if (!err) {
                            let link = '/verlanglijstjes/' + req.user.wishlist.author;
                            res.redirect(link);
                        } else {
                        }
                    })
                } else {
                }
            });
        } else {
        }
    } else {
        res.redirect('/');
    }
});


router.get('/verlanglijstjes/:verlanglijstjeNAME', (req, res, next) => {
    let loggedIn = false;
    if (req.user != null) {
        if (req.user.username != null) loggedIn = true;
        if (req.user.wishlist.author == req.user.username) {
            res.redirect('/');
        } else {
            let empty = false;
            if (req.user.wishlist.items.length <= 0) {
                empty = true;
            }
            res.render('verlanglijstje', {
                wishlist: req.user.wishlist,
                empty: empty,
                loggedIn: loggedIn,
                username: req.user.username
            });
        }
    } else {
        res.redirect('/');
    }


});

module.exports = router;
