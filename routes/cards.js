const express = require('express');
const router = express.Router();

const { data } = require('../data/flashCardsData');
const { cards } = data;

router.get('/:id', (req, res) => {

    const { side } = req.query;
    const { id } = req.params;
    const text = cards[id][side];
    const templateData = { text };
    const {hint} = cards[id];
    const link = '/cards/'+id;
    if (side === 'question') {
        //const { hint } = cards[id];
        templateData.link = link + '?side=answer';
        templateData.hint = hint;
    } else {
        templateData.link = link + '?side=question';
    }
    //console.log(side);
    res.render('card', templateData);
});

module.exports = router;