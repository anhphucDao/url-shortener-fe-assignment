import express from 'express'
import cors from 'cors'

const app = express()
app.use(cors());
const PORT = process.env.PORT || 4000
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
    const code = Math.random().toString(36).substring(2, 8);

    db[code] = url
    res.json({ shortUrl: `https://url-shortener-fe-assignment-1.onrender.com/c/${code}` })
  } catch (err) {
    res.status(400).json({ error: 'Định dạng URL không hợp lệ.' })
  }
})

app.get('/:code', (req, res) => { handleRedirect(req, res) })
app.get('/c/:code', (req, res) => { handleRedirect(req, res) })

function handleRedirect(req, res) {
  const originalUrl = db[req.params.code]
  if (originalUrl) return res.redirect(originalUrl)
  res.status(404).send('Không tìm thấy link')
}

app.listen(PORT, () => console.log(`🚀 Backend đang chạy tại: http://localhost:${PORT}`))
