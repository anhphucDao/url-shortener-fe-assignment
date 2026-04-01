const mongoose = require('mongoose')

const urlSchema = new mongoose.Schema(
  {
    originalUrl: {
      type: String,
      required: [true, 'Original URL is required'],
      validate: {
        validator: function (v) {
          return /^https?:\/\/.+/.test(v)
        },
        message: 'Invalid URL format',
      },
    },
    shortCode: {
      type: String,
      required: false, // Changed to false - will be generated in pre-save
      unique: true,
      index: true,
      minlength: 4,
      maxlength: 10,
    },
    shortUrl: {
      type: String,
      required: false, // Changed to false - will be generated in pre-save
      unique: true,
    },
    qrCode: {
      type: String,
      required: true,
    },
    clicks: {
      type: Number,
      default: 0,
      min: 0,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      expires: 2592000, // Auto-delete after 30 days
    },
    lastAccessed: {
      type: Date,
      default: Date.now,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    userAgent: {
      type: String,
      default: null,
    },
    ipAddress: {
      type: String,
      default: null,
    },
  },
  {
    timestamps: true,
    toJSON: {
      transform: function (doc, ret) {
        delete ret.__v
        delete ret._id
        return ret
      },
    },
  }
)

// Indexes for better performance
urlSchema.index({ shortCode: 1 })
urlSchema.index({ createdAt: -1 })
urlSchema.index({ clicks: -1 })

// Pre-save middleware to generate short code if not provided
urlSchema.pre('save', async function (next) {
  if (!this.shortCode) {
    const shortid = require('shortid')
    let code
    let exists = true

    // Generate unique short code
    while (exists) {
      code = shortid.generate().substring(0, 6)
      exists = await this.constructor.findOne({ shortCode: code })
    }

    this.shortCode = code
    this.shortUrl = `http://localhost:5001/${code}`
    console.log(`Generated short URL: ${this.shortUrl}`) // Debug log
  }
  next()
})

// Static method to find by short code and increment clicks
urlSchema.statics.findByShortCodeAndIncrement = async function (shortCode, userAgent, ipAddress) {
  const url = await this.findOneAndUpdate(
    { shortCode, isActive: true },
    {
      $inc: { clicks: 1 },
      $set: { lastAccessed: new Date() },
    },
    { new: true, runValidators: true }
  )

  if (url) {
    // Optional: Track analytics
    if (userAgent || ipAddress) {
      await this.updateOne(
        { shortCode },
        {
          $set: {
            userAgent: userAgent || url.userAgent,
            ipAddress: ipAddress || url.ipAddress,
          },
        }
      )
    }
  }

  return url
}

// Virtual for formatted creation date
urlSchema.virtual('formattedCreatedAt').get(function () {
  return this.createdAt.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })
})

module.exports = mongoose.model('Url', urlSchema)
