const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.set('view engine', 'pug');

const mainRoutes = require('./routes');
const cardsRoutes = require('./routes/cards');

app.use(mainRoutes);
app.use('/cards', cardsRoutes);

app.use((req, res, next) => {
    const error = new Error("Page Not Found");
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.locals.error = error;
    res.status(error.status);
    res.render('error');
});

app.listen(3000, () => {
    console.log("Go to localhost:3000");
});