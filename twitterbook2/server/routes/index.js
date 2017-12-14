const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('home page of the backend, hi :)');
});

module.exports = router;
