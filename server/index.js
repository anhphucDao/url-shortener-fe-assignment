import express from 'express'
import cors from 'cors'

const app = express()
const PORT = 5002

app.use(cors())
app.use(express.json())

const db = new Map() //shortcode - url

// POST /api/shorten
app.post('/api/shorten', (req, res) => {
  const { url } = req.body

  if (!url) {
    return res.status(400).json({ error: 'URL is required' })
  }

  const shortUrl = Math.random().toString(36).substring(2, 8)

  db.set(shortUrl, url)

  const shortURL = `http://localhost:${PORT}/${shortUrl}`
  res.status(201).json({ shortURL: shortURL })
})

// GET /:shortUrl
app.get('/:shortUrl', (req, res) => {
  const { shortUrl } = req.params
  const originalUrl = db.get(shortUrl)

  if (originalUrl) {
    res.redirect(originalUrl)
  } else {
    res.status(404).json({ error: 'Short URL not found' })
  }
})

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`)
})
