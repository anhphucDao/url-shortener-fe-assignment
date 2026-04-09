import 'dotenv/config'
import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'

const app = express()
app.use(cors())
app.use(express.json())

const mongoUri = process.env.MONGODB_URI
const PORT = process.env.PORT || 3000

if (!mongoUri) {
  console.error('❌ MONGODB_URI is not set in environment variables')
  process.exit(1)
}

const urlSchema = new mongoose.Schema({
  originalUrl: { type: String, required: true },
  shortCode: { type: String, required: true, unique: true },
  clicks: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now },
})

const Url = mongoose.model('Url', urlSchema)

app.get('/', (req, res) => {
  res.send('URL Shortener Backend is running 🚀')
})

app.post('/api/urls', async (req, res) => {
  try {
    const { originalUrl, shortCode } = req.body

    if (!originalUrl || !shortCode) {
      return res.status(400).json({ error: 'Missing originalUrl or shortCode' })
    }

    const existing = await Url.findOne({ shortCode })
    if (existing) {
      return res.status(409).json({ error: 'Short code already exists' })
    }

    const newUrl = await Url.create({ originalUrl, shortCode })

    console.log(`✓ Created short URL: ${shortCode} -> ${originalUrl}`)
    res.json(newUrl)
  } catch (err) {
    console.error('✗ Error creating short URL:', err)
    res.status(500).json({ error: 'Failed to create short URL', message: err.message })
  }
})

app.get('/api/urls', async (req, res) => {
  try {
    const urls = await Url.find().sort({ createdAt: -1 })
    console.log(`✓ Retrieved ${urls.length} URLs from database`)
    res.json(urls)
  } catch (err) {
    console.error('✗ Error retrieving URLs:', err)
    res.status(500).json({ error: 'Failed to retrieve URLs', message: err.message })
  }
})

app.get('/api/urls/:id', async (req, res) => {
  try {
    const url = await Url.findById(req.params.id)
    if (!url) {
      return res.status(404).json({ error: 'URL not found' })
    }
    res.json(url)
  } catch (err) {
    console.error('✗ Error retrieving URL by ID:', err)
    res.status(500).json({ error: 'Failed to retrieve URL', message: err.message })
  }
})

app.get('/:shortCode', async (req, res) => {
  try {
    const { shortCode } = req.params
    console.log(`→ Received request for short code: ${shortCode}`)

    const url = await Url.findOne({ shortCode })

    if (!url) {
      console.log(`✗ Short code not found in database: ${shortCode}`)
      return res.status(404).json({ error: 'Short URL not found' })
    }

    url.clicks += 1
    await url.save()

    console.log(`✓ Redirecting to: ${url.originalUrl}`)
    res.redirect(url.originalUrl)
  } catch (err) {
    console.error('✗ Error retrieving short URL:', err)
    res.status(500).json({ error: 'Failed to retrieve short URL', message: err.message })
  }
})

mongoose
  .connect(mongoUri)
  .then(() => {
    console.log('✅ MongoDB connected')
    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`)
    })
  })
  .catch(err => {
    console.error('❌ MongoDB connection error:', err)
    process.exit(1)
  })
