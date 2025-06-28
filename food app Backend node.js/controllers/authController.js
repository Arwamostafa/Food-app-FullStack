const User = require('./../models/UserModel');
const bcrypt = require('bcrypt'); 
const jwt = require('jsonwebtoken');

// Register a new user
const registerUser = async (req, res) => {
    try {
        const { username, password, role } = req.body;

        
        const hashedPassword = await bcrypt.hash(password, 10);

       
        const newUser = new User({
            username,
            password: hashedPassword,
            role
        });

        await newUser.save();

        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Login user

const loginUser = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username });

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

       
        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

       
        const token = jwt.sign({ userId: user._id, role: user.role }, 'your_secret_key', { expiresIn: '1h' });

      
        res.status(200).json({ token, role: user.role });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


module.exports = { registerUser, loginUser };
