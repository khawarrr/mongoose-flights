const Ticket = require('../models/ticket');
const Flight = require('../models/flight');


module.exports = {
    create,
    new: newTicket,
};


function create(req, res) {
    req.body.flight = req.params.id;
    Ticket.create(req.body, function(err, ticket) {
        res.redirect(`/flights/${req.params.id}`);
    })
}

function newTicket(req, res) {
    // this will take you to the form to create a ticket. this will be on its own page
    const flightId = req.params.id;
    res.render(`tickets/new`, { flightId });
}