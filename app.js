const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.set('view engine', 'pug');

app.use((req, res, next) => {
    req.message = "This a simple message set in middleware";
    const error = new Error("An error has encountered!");
    error.status = 500;
    next(error);
});
app.use((req, res, next) => {
    console.log(req.message);
    next();
});

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
});

app.use((error, req, res, next) => {
    res.locals.error = error;
    res.status(error.status);
    res.render('error');
});

app.listen(3000, () => {
    console.log("Go to localhost:3000");
});