const mongoose = require('mongoose');

const ticketSchema = new mongoose.Schema({
  _id: String, 
  name: String,
});

module.exports = mongoose.model('Ticket', ticketSchema);

