const express = require('express');
const Ticket = require('../models/ticket');
const router = express.Router();

// POST route to create a ticket
router.post('/', async (req, res) => {
  try {
    const { name } = req.body;

    // Fetch the last ticket to determine the next customId
    const lastTicket = await Ticket.findOne().sort({ _id: -1 });
    const nextCustomId = lastTicket
      ? `#${parseInt(lastTicket._id.slice(1)) + 1}` // Increment the last customId
      : '#1'; // Start from #1 if no tickets exist

    const ticket = new Ticket({
      _id: nextCustomId, // Custom sequential ID as the primary key
      name,
    });

    await ticket.save();
    res.status(201).json(ticket);
  } catch (error) {
    console.error('Error creating ticket:', error);
    res.status(500).json({ error: 'Failed to create ticket' });
  }
});

// GET route to fetch all tickets
router.get('/', async (req, res) => {
  try {
    const tickets = await Ticket.find();
    res.status(200).json(tickets);
  } catch (error) {
    console.error('Error fetching tickets:', error);
    res.status(500).json({ error: 'Failed to fetch tickets' });
  }
});

// Search tickets by name
router.get('/search', async (req, res) => {
  try {
    const { query } = req.query; // Extract the query parameter
    if (!query) {
      return res.status(400).json({ error: 'Search query is required' });
    }

    // Perform a case-insensitive regex search on the 'name' field
    const tickets = await Ticket.find({ name: { $regex: query, $options: 'i' } });

    res.status(200).json(tickets); // Return matching tickets
  } catch (error) {
    console.error('Error searching tickets:', error);
    res.status(500).json({ error: 'Failed to search tickets' });
  }
});

// PUT route to edit a ticket
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params; // ID is the customId, e.g., "#1"
    const { name } = req.body;

    const updatedTicket = await Ticket.findByIdAndUpdate(
      id,
      { name },
      { new: true }
    );

    if (!updatedTicket) {
      return res.status(404).json({ error: 'Ticket not found' });
    }

    res.status(200).json(updatedTicket);
  } catch (error) {
    console.error('Error updating ticket:', error);
    res.status(500).json({ error: 'Failed to update ticket' });
  }
});

// DELETE route to delete a ticket
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params; // ID is the customId, e.g., "#1"

    const deletedTicket = await Ticket.findByIdAndDelete(id);

    if (!deletedTicket) {
      return res.status(404).json({ error: 'Ticket not found' });
    }

    res.status(200).json({ message: 'Ticket deleted successfully' });
  } catch (error) {
    console.error('Error deleting ticket:', error);
    res.status(500).json({ error: 'Failed to delete ticket' });
  }
});

module.exports = router;
