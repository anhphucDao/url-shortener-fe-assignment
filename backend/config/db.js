const mongoose = require('mongoose')

/**
 * Connect to MongoDB Atlas
 * Uses MONGO_URI from environment variables
 * No hardcoded credentials - all config via .env
 */
const connectDB = async () => {
  try {
    // Get MongoDB URI from environment variable
    const mongoURI = process.env.MONGO_URI

    // Validate that MONGO_URI exists
    if (!mongoURI) {
      console.error('❌ MONGO_URI not found in environment variables')
      console.error('   Please check your .env file')
      process.exit(1)
    }

    // Connect to MongoDB (without logging the full URI)
    const conn = await mongoose.connect(mongoURI)

    // Log success with sanitized info (no credentials)
    const sanitizedURI = mongoURI.replace(/\/\/[^:]+:[^@]+@/, '//***:***@')
    console.log(`✅ MongoDB Connected: ${sanitizedURI}`)

    return conn
  } catch (error) {
    console.error('❌ MongoDB connection error:', error.message)
    process.exit(1)
  }
}

module.exports = connectDB
