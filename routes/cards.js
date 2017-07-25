const express = require('express');
const router = express.Router();

router.get('/',(req, res) => {
    res.render('card',{prompt: "Name 3 characteristics of leadership?", 
    hint: "It includes Motivation and leading."});
    // res.send("This is first page!");
});

module.exports = router;