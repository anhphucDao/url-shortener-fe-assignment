const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const helmet = require('helmet')
const rateLimit = require('express-rate-limit')
require('dotenv').config()

const urlRoutes = require('./routes/urlRoutes')
const { errorHandler } = require('./middleware/errorHandler')

const app = express()
const PORT = process.env.PORT || 5000

// Rate limiting
const limiter = rateLimit({
  windowMs: parseInt(process.env.RATE_LIMIT_WINDOW_MS) || 15 * 60 * 1000, // 15 minutes
  max: parseInt(process.env.RATE_LIMIT_MAX_REQUESTS) || 100, // limit each IP to 100 requests per windowMs
  message: 'Too many requests from this IP, please try again later.',
})

// Middleware
app.use(helmet())
app.use(limiter)
app.use(
  cors({
    origin:
      process.env.NODE_ENV === 'production'
        ? ['http://localhost:5173', 'http://localhost:3000']
        : true,
    credentials: true,
  })
)
app.use(express.json({ limit: '10mb' }))
app.use(express.urlencoded({ extended: true }))

// Routes
app.use('/api', urlRoutes)

// Root level redirect route
app.get('/:shortCode', async (req, res) => {
  try {
    const { shortCode } = req.params
    const Url = require('./models/Url')

    const urlData = await Url.findByShortCodeAndIncrement(shortCode)

    if (!urlData) {
      return res.status(404).json({
        success: false,
        error: 'Short URL not found or expired',
      })
    }

    res.redirect(301, urlData.originalUrl)
  } catch (error) {
    console.error('Error in GET /:shortCode:', error)
    res.status(500).json({
      success: false,
      error: 'Server error during redirect',
    })
  }
})

// Health check
app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'OK',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
  })
})

// Error handling middleware
app.use(errorHandler)

// 404 handler (must be last)
app.use('*', (req, res) => {
  res.status(404).json({ error: 'Route not found' })
})

// Database connection
mongoose
  .connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/url-shortener', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('✅ Connected to MongoDB')
    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`)
      console.log(`📊 Health check: http://localhost:${PORT}/health`)
    })
  })
  .catch(error => {
    console.error('❌ MongoDB connection error:', error)
    process.exit(1)
  })

// Graceful shutdown
process.on('SIGTERM', () => {
  console.log('SIGTERM received, shutting down gracefully')
  mongoose.connection.close(() => {
    console.log('MongoDB connection closed')
    process.exit(0)
  })
})

module.exports = app
