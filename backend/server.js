import express from 'express'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
import cors from 'cors'

const app = express()
const PORT = 3000

// Middleware
app.use(cors())
app.use(express.json())

// Dummy user storage
const hashedPassword = bcrypt.hashSync('123456', 10)
const users = [{ username: '9710945126471', password: hashedPassword }]

// Secret key for JWT
const SECRET_KEY = 'abcd'

// Sign-up API
app.post('/signup', async (req, res) => {
  const { username, password } = req.body
  const hashedPassword = await bcrypt.hash(password, 10)
  users.push({ username, password: hashedPassword })
  res.status(201).send({ message: 'User registered successfully' })
})

// Sign-in API
app.post('/signin', async (req, res) => {
  const { username, password } = req.body
  const user = users.find((u) => u.username === username)

  if (!user) {
    return res.status(404).send({ message: 'User not found' })
  }

  const isPasswordValid = await bcrypt.compare(password, user.password)
  if (!isPasswordValid) {
    return res.status(401).send({ message: 'Invalid credentials' })
  }

  const token = jwt.sign({ username: user.username }, SECRET_KEY, { expiresIn: '1h' })
  res.send({ message: 'Login successful', token })
})

// Protected route example
app.get('/protected', (req, res) => {
  const authHeader = req.headers['authorization']

  if (!authHeader) {
    return res.status(401).send({ message: 'Token is missing' })
  }

  // Kiểm tra nếu header có định dạng "Bearer <token>"
  const token = authHeader.startsWith('Bearer ') ? authHeader.split(' ')[1] : authHeader

  try {
    const decoded = jwt.verify(token, SECRET_KEY)
    res.send({ message: 'Access granted', data: decoded })
  } catch (err) {
    res.status(401).send({ message: 'Invalid token' })
  }
})

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})
