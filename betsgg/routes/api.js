const express = require('express');
const router = express.Router();
const axios = require('axios');
const chalk = require('chalk');
const Bet = require('../models/Bet');
const CurrentBet = require('../models/CurrentBet');
const WinLose = require('../models/WinLose');

const sortLowestValue = (a, b) => {
    if (a.at < b.at) {
        return -1;
    }
    if (a.at > b.at) {
        return 1;
    }
    return 0;
};
const sortHighestValue = (a, b) => {
    if (a.at > b.at) {
        return -1;
    }
    if (a.at < b.at) {
        return 1;
    }
    return 0;
};

Array.prototype.frequencies  = function () {
    var freqs = {sum: 0};
    this.map( function (a){
        if (!(a in this)) { this[a] = 1; }
        else { this[a] += 1; }
        this.sum += 1;
        return a; }, freqs
    );
    return freqs;
};

router.get('/getLowestCurrentBet', (req, res, next) => {
    const betQuery = Bet.find({}, null, {});

    betQuery.exec((err, bets) => {
        res.json([
            ...bets.sort(sortLowestValue)
        ]);
    });
});

router.get('/getHighestCurrentBet', (req, res, next) => {
    const betQuery = Bet.find({}, null, {});

    betQuery.exec((err, bets) => {
        res.json([
            ...bets.sort(sortHighestValue)
        ]);
    });
});
router.get('/getChanceBet', (req, res, next) => {
    const betQuery = Bet.find({}, null, {});
    let betsData = [];

    betQuery.exec((err, bets) => {
        bets.forEach((elem, index1) => {
            bets[index1] = elem.at;
            bets[index1] = Number(bets[index1]);
        });

        betsData = bets.frequencies();

        const objectKeysArray = Object.keys(betsData);
        const dataArray = [];

        objectKeysArray.map((elem,index) => {
            dataArray.push({at: Number(objectKeysArray[index]), count: betsData[objectKeysArray[index]]})
        });

        dataArray.sort(sortLowestValue);

        res.json(dataArray);
    });
});
router.get('/getChanceBetOrdered', (req, res, next) => {

});
router.get('/getBets', (req, res, next) => {

});
router.get('/getCurrentBets', (req, res, next) => {

});
router.get('/getWinLoses', (req, res, next) => {

});
router.get('/getDB', (req, res, next) => {

});

module.exports = router;
