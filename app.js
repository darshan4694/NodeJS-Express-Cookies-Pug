const express = require('express');
const bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.set('view engine', 'pug');

app.get('/',(req, res) => {
    res.render('index');
});

app.get('/cards',(req, res) => {
    res.render('card',{prompt: "Name 3 characteristics of leadership?", 
    hint: "It includes Motivation and leading.", colors});
    // res.send("This is first page!");
});

app.get('/hello', (req, res) => {
    res.render('hello');
});

app.post('/hello', (req, res) => {
    //console.dir(req.body);
    res.render('hello', {name: req.body.username});
});

app.listen(3000, () => {
    console.log("Go to localhost:3000");
});