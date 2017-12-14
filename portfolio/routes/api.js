const express = require('express');
const router = express.Router();
import Case from '../models/Case';
import {api} from '../../secret/secrets';

const getCases = async() => await Case.find({});
const createCase = async(obj) => await Case.create(obj);


router.get('/getCases', (req, res) => {
    getCases().then((queryData) => {
        res.json(queryData);
    });
});

router.post('/addCase', (req,res) => {
    if(req.body.token === api.secret) {
        const obj = {
            title: req.body.title,
            description: req.body.description,
            tag: req.body.tag,
            links: req.body.links,
        };
        createCase(obj).then((queryData) => {
            res.json(queryData);
        })
    }
});

module.exports = router;
