const Flight = require('../models/flight');
const Ticket = require('../models/ticket');

module.exports = {
    new: newFlight,
    create,
    index,
    show,
}

function show(req, res) {
    Flight.findById(req.params.id, function(err, flight) {
        if (err) console.log(err);
        Ticket.find({flight: req.params.id}, function(err, tickets) {
            if (err) console.log(err);
    
            res.render('flights/show', {flight, tickets});
        })
    })
}

function index(req, res) {
    Flight.find({}, function(err, flights) {
        res.render('flights/index', { flights });
        // console.log(err);
    });
}

function create(req, res) {
    const flight = new Flight(req.body);
    flight.save(function(err) {
        // one way to handle errors
        if (err) {
            console.log(err)
            return res.render('flights/new');
        } 
        // console.log(flight);
        // for now, redirect right back to new.ejs
        res.redirect('/flights');
      });
}


function newFlight (req, res) {
    res.render('flights/new');
}