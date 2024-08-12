const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());

const users = [];
const secretKey = 'your_secret_key';

// Register endpoint
app.post('/register', (req, res) => {
  const { username, password } = req.body;

  if (users.find(user => user.username === username)) {
    return res.status(400).json({ message: 'User already exists' });
  }

  const hashedPassword = bcrypt.hashSync(password, 8);
  users.push({ username, password: hashedPassword });

  res.status(201).json({ message: 'User registered successfully' });
});

// Login endpoint
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  const user = users.find(user => user.username === username);
  if (!user) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  const passwordIsValid = bcrypt.compareSync(password, user.password);
  if (!passwordIsValid) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  const token = jwt.sign({ username: user.username }, secretKey, { expiresIn: '1h' });
  res.status(200).json({ message: 'Login successful', token });
});

// Welcome endpoint (protected)
app.get('/welcome', (req, res) => {
  const token = req.headers['authorization'];
  if (!token) {
    return res.status(401).json({ message: 'No token provided' });
  }

  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: 'your eligible ' });
    }

    res.status(200).json({ message: `Welcome ${decoded.username}` });
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
