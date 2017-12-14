var express = require('express');
var router = express.Router();
const axios = require('axios');
const chalk = require('chalk');
const Bet = require('../models/Bet');
const CurrentBet = require('../models/CurrentBet');
const WinLose = require('../models/WinLose');

/* GET home page. */
router.get('/', function (req, res, next) {
    let myPulloutRate = 0;

    CurrentBet.find({}, (err, currentbets) => {
        myPulloutRate = currentbets[currentbets.length - 1].currentBet;
        WinLose.find({}, (err, winloses) => {
            let wonAmount = 0;
            let loseAmount = 0;
            winloses.forEach((elem) => {
                if (elem.win) {
                    wonAmount++;
                }
                if (elem.lose) {
                    loseAmount++;
                }
            });

            Bet.find({}, (err, bets) => {
                res.render('index', {
                    avg: myPulloutRate.toFixed(2),
                    winAmount: wonAmount,
                    loseAmount: loseAmount,
                    totalGames: bets.length,
                });
            });
        });
    });
});

module.exports = router;
