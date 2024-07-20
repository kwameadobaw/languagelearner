const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

const users = []; // This should be replaced with a proper database in a real application

app.post('/api/register', async (req, res) => {
    const { email, password, firstName, lastName, username } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = { email, password: hashedPassword, firstName, lastName, username };
    users.push(user);
    res.json({ message: 'User registered successfully' });
});

app.post('/api/login', async (req, res) => {
    const { username, password } = req.body;
    const user = users.find(user => user.username === username);
    if (!user) {
        return res.status(400).json({ message: 'User not found' });
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
        return res.status(400).json({ message: 'Invalid password' });
    }
    const token = jwt.sign({ username: user.username, firstName: user.firstName }, 'secret_key', { expiresIn: '1h' });
    res.json({ token, firstName: user.firstName });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});