
const express = require('express');
const cors = require('cors'); 
const mongoose = require('mongoose');
const producRoutes = require('./routes/productsRoutes'); 
const authRoutes = require('./routes/authRoutes');
const app = express();
const path=require('node:path')
 const bookingRoutes = require('./routes/BookTable'); 
// Enable CORS for all routes
app.use(cors());

// Middleware to parse JSON bodies
app.use(express.json());
app.use(express.static(path.join(__dirname,'')))

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/FOODdb')
  .then(() => {
    console.log("DB Connected");
  })
  .catch((err) => {
    console.error("DB connection error:", err);
  });

// Define  routes
app.use('/products', producRoutes);
app.use(bookingRoutes);

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.post('/logout', (req, res) => {
  req.session.destroy(err => {
    if (err) {
      return res.status(500).send('Logout failed.');
    }
    res.clearCookie('connect.sid'); 
    return res.status(200).send('Logout successful.');
  });
});


// Start the server
const port = process.env.PORT || 3005;
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});



// Use authentication routes
app.use('/auth', authRoutes);

