const express = require('express');
router = express.Router();
var burger = require('../models/burger.js');

router.get('/', function(req, rest) {
    burger.selectAll(function(data) {
        var hbsObject = {
            burger: data
        };

        console.log(hbcObject);
        res.render('index', hbsObject);
    });
});

router.post('/api/burgers', function(req, res) {
    burger.insertOne(['burger_name'], [req.body.name], function(result) {
        res.json(result)
    });
});

router.put('/api/burgers/:id', function(req, res) {
    burger.updateOne(req.body.name, req.body.condition, function(req, res) {
        if (result.changedRows == 0)
        {
            return res.sendStatus(404).end();
        }
        else 
        {
            res.status(200).end();
        }
    });
});

router.delete();


module.export = router;