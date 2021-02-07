const express = require("express");

const router = express.Router();

const Post = require('../models/Post');

router.get('/', (req, res) => {
    res.send("/posts")
});

router.post('/', (req, res) => {
    console.log(req.body);
    res.send("/posts")
});

module.exports = router;