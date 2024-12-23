const mongoose = require('mongoose');

// Ticket Schema
const ticketSchema = new mongoose.Schema({
  _id: String, // Custom ID (like #1, #2) will be used as the primary key
  name: String,
});

module.exports = mongoose.model('Ticket', ticketSchema);

