const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.set('view engine', 'pug');

app.get('/',(req, res) => {

     const name = req.cookies.username;
    if(name){
       res.render('index', {name});
    } else{
        res.redirect('/hello');
    }
});

app.get('/cards',(req, res) => {
    res.render('card',{prompt: "Name 3 characteristics of leadership?", 
    hint: "It includes Motivation and leading.", colors});
    // res.send("This is first page!");
});

app.get('/hello', (req, res) => {
    const name = req.cookies.username;
    if(name){
       res.redirect('/');
    } else{
        res.render('hello');
    }
});

app.post('/hello', (req, res) => {
    res.cookie('username', req.body.username);
    res.redirect('/');
});

app.post('/goodbye', (req, res) => {
    res.clearCookie('username');
    res.redirect('/hello');
})

app.listen(3000, () => {
    console.log("Go to localhost:3000");
});