const express = require('express');
const router = express.Router();
const bookTableController = require('../controllers/BookTable');

router.post('/', bookTableController.createBooking);

module.exports = router;
