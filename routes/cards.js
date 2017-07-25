const express = require('express');
const router = express.Router();

const { data } = require('../data/flashCardsData');
const { cards } = data;

router.get('/:id', (req, res) => {

   if (req.query.side) {
        const { side } = req.query;
        const { id } = req.params;
        const text = cards[id][side];
        const templateData = { id, text };
        const { hint } = cards[id];
        const link = '/cards/' + id;
        if (side === 'question') {
            //const { hint } = cards[id];
            templateData.sideToShow = 'answer';
            templateData.sideToShowText = 'Answer';
        } else if (side === 'answer') {
            templateData.sideToShow = 'question';
            templateData.sideToShowText = 'Question';
        }
        res.render('card', templateData);
    } else {
        //req.query.side = 'question';
        res.redirect('/cards/'+req.params.id + '?side=question');
    }

});


router.get('/', (req, res) => {
    var randomNumber = Math.floor(Math.random() * cards.length);

    res.redirect('/cards/' + randomNumber + '?side=question');
});
module.exports = router;