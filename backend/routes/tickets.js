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

// Get All Tickets
router.get('/', async (req, res) => {
  try {
    const tickets = await Ticket.find().sort('_id');
    res.status(200).json(tickets);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Search Tickets by Name
router.get('/search', async (req, res) => {
  try {
    const { query } = req.query;
    const tickets = await Ticket.find({ name: { $regex: query, $options: 'i' } });

    res.status(200).json(tickets);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Edit Ticket
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;
    const updatedTicket = await Ticket.findByIdAndUpdate(id, { name }, { new: true });

    res.status(200).json(updatedTicket);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});



module.exports = router;


