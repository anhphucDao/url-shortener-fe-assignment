const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const helmet = require('helmet')
const rateLimit = require('express-rate-limit')
require('dotenv').config()

const connectDB = require('./config/db')
const urlRoutes = require('./routes/urlRoutes')
const { errorHandler } = require('./middleware/errorHandler')

const app = express()
const PORT = process.env.PORT || 5000

// Rate limiting
const limiter = rateLimit({
  windowMs: parseInt(process.env.RATE_LIMIT_WINDOW_MS) || 15 * 60 * 1000,
  max: parseInt(process.env.RATE_LIMIT_MAX_REQUESTS) || 100,
  message: 'Too many requests from this IP, please try again later.',
})

// Middleware - CORS allow all for production
app.use(helmet())
app.use(limiter)
app.use(
  cors({
    origin: true,
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

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({ error: 'Route not found' })
})

// Connect to database and start server
connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`)
      console.log(`📊 Health check: http://localhost:${PORT}/health`)
    })
  })
  .catch(error => {
    console.error('❌ Failed to start server:', error.message)
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
