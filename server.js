import express from 'express'
import cors from 'cors'

const app = express()
const PORT = 4000
const db = {}

app.use(cors({ origin: '*' }))
app.use(express.json())

app.get('/', (req, res) => {
  res.send('<h1> OK </h1>')
})

app.post('/api/shorten', (req, res) => {
  let { url } = req.body
  if (!url) return res.status(400).json({ error: 'Vui lòng nhập URL.' })

  if (!/^https?:\/\//i.test(url)) {
    url = 'https://' + url
  }

  try {
    const parsedUrl = new URL(url)
    const hostParts = parsedUrl.hostname.replace('www.', '').split('.')
    const brandName = hostParts[0]
    const suffix = Math.random().toString(36).substring(7, 11)
    const code = `${brandName}-${suffix}`

    db[code] = url
    res.json({ shortUrl: `http://localhost:${PORT}/c/${code}` })
  } catch (err) {
    res.status(400).json({ error: 'Định dạng URL không hợp lệ.' })
  }
})

app.get('/c/:code', (req, res) => {
  const originalUrl = db[req.params.code]
  if (originalUrl) res.redirect(originalUrl)
  else res.status(404).send('<h1>404 - Link này không tồn tại!</h1>')
})

app.listen(PORT, () => console.log(`🚀 Backend đang chạy tại: http://localhost:${PORT}`))
