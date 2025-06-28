const Booking = require('../models/BookTableModel');

// Create a new booking
exports.createBooking = async (req, res) => {
    try {
      const { date, time, name, phone, totalPersons } = req.body;
      const booking = new BookTable({ date, time, name, phone, totalPersons });
      await booking.save();
      res.status(201).json({ message: 'Booking created successfully', booking });
    } catch (error) {
      res.status(500).json({ error: 'Failed to create booking' });
    }
  };
