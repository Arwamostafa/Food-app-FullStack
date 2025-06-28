const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  date: { type: Date, required: true },
  time: { type: String, required: true },
  name: { type: String, required: true },
  phone: { type: String, required: true },
  totalPerson: { type: String, required: true },
});

const Booking = mongoose.model('Booking', bookingSchema);

module.exports = Booking;
