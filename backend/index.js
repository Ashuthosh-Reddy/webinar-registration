// backend/index.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Connected to MongoDB');
}).catch(err => {
    console.error('Failed to connect to MongoDB', err);
});

// Mongoose schema and model
const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    profession: { type: String, required: true },
    institutes: { type: String, required: true },
});

const User = mongoose.model('User', userSchema);


// Routes
app.post('/register', async (req, res) => {
    const { name, email, profession, institutes } = req.body;

    const newUser = new User({
        name,
        email,
        profession,
        institutes,
    });

    try {
        await newUser.save();
        res.status(201).json({ message: 'User registered successfully' });
        console.log(newUser);
    } catch (error) {
        res.status(500).json({ message: 'Error registering user', error });
        console.log(error);
    }


});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
