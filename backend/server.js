import express from 'express';
import { json } from 'body-parser';
import { sign, verify } from 'jsonwebtoken';
import { hash, compare } from 'bcryptjs';
import cors from 'cors';

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(json());

// Dummy user storage
const users = [];

// Secret key for JWT
const SECRET_KEY = 'abcd';

// Sign-up API
app.post('/signup', async (req, res) => {
  const { username, password } = req.body;
  const hashedPassword = await hash(password, 10);
  users.push({ username, password: hashedPassword });
  res.status(201).send({ message: 'User registered successfully' });
});

// Sign-in API
app.post('/signin', async (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username);
  
  if (!user) {
    return res.status(404).send({ message: 'User not found' });
  }

  const isPasswordValid = await compare(password, user.password);
  if (!isPasswordValid) {
    return res.status(401).send({ message: 'Invalid credentials' });
  }

  const token = sign({ username: user.username }, SECRET_KEY, { expiresIn: '1h' });
  res.send({ message: 'Login successful', token });
});

// Protected route example
app.get('/protected', (req, res) => {
  const token = req.headers['authorization'];

  if (!token) {
    return res.status(401).send({ message: 'Token is missing' });
  }

  try {
    const decoded = verify(token, SECRET_KEY);
    res.send({ message: 'Access granted', data: decoded });
  } catch (err) {
    res.status(401).send({ message: 'Invalid token' });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
