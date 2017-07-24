const express = require('express');

var app = express();

app.set('view engine', 'pug');

app.get('/',(req, res) => {
    res.render('index');
});

app.get('/cards',(req, res) => {
    res.render('card',{prompt: "Name 3 characteristics of leadership?", hint: "It includes Motivation and leading."});
    // res.send("This is first page!");
});

app.listen(3000, () => {
    console.log("Go to localhost:3000");
});