const express = require('express');

var app = express();

app.get('/',(req, res) => {
    res.send("Hello worlds");
});

app.get('/first',(req, res) => {
    res.send("This is first page!");
});