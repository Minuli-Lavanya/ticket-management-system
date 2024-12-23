const express = require('express');
const Ticket = require('../models/Ticket');
const router = express.Router();

// Create Ticket
router.post('/', async (req, res) => {
  try {
    const { name } = req.body;
    const ticket = new Ticket({ name });
    const savedTicket = await ticket.save();

    res.status(201).json(savedTicket);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});



module.exports = router;


