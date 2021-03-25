var express = require('express');
var router = express.Router();

const flightsCtrl = require('../controllers/flights');


	
// GET /movies
router.get('/', flightsCtrl.index);

// GET /flights/new
router.get('/new', flightsCtrl.new);

// GET /flights/:id
router.get('/:id', flightsCtrl.show)

// POST /movies

router.post('/', flightsCtrl.create);

module.exports = router;
