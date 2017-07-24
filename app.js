const express = require('express');

var app = express();

app.set('view engine', 'pug');

app.get('/',(req, res) => {
    res.render('index');
});

app.get('/first',(req, res) => {
    res.send("This is first page!");
});

app.listen(3000, () => {
    console.log("Go to localhost:3000");
});