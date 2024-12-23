const mongoose = require('mongoose');

const ticketSchema = new mongoose.Schema({
  name: { type: String, required: true },
});

module.exports = mongoose.model('Ticket', ticketSchema);
