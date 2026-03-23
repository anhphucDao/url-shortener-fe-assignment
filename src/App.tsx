import { useState } from 'react'
import './App.css'

function App() {
  const [longUrl, setLongUrl] = useState('') // 1. Nhớ cái link dài người dùng gõ
  const [shortUrl, setShortUrl] = useState('') // 2. Nhớ cái link ngắn sau khi rút gọn
  const [isModalOpen, setIsModalOpen] = useState(false) // 3. Nhớ xem bảng kết quả đang đóng (false) hay mở (true)
  const handleShorten = () => {
    if (longUrl === '') {
      alert('Please paste your link here!')
      return
    }
    setShortUrl('https://shortenlink.123')
    setIsModalOpen(true)
    console.log('link shorten:', longUrl)
  }
  const handleCopy = () => {
    navigator.clipboard.writeText(shortUrl)
    alert('Copied')
  }

  return (
    <main className="app-container">
      <nav className="top-nav">
        <div className="nav-logo">
          <img src="logo.png" className="logo" alt="Logo" />
        </div>

        <div className="user-card">
          <div className="user-icon">👤</div>
          <div className="user-details">
            <span className="user-status">Personal</span>
            <span className="user-name">Username</span>
          </div>
        </div>
      </nav>

      <div className="shortener-container">
        <header className="header">
          <h1 className="main-title">Devcamp URL Shortener</h1>
          <p className="sub-title">Simplify, Organize, and Share: URL Management Made Easy</p>
        </header>
      </div>

      <div className="shortener-box">
        <label className="input-label">Your long URL</label>
        <div className="input-group">
          <div className="input-field-wrapper">
            <span className="link-symbol">🔗</span>
            <input
              type="text"
              className="url-input"
              placeholder="Input the URL you want to shorten"
              value={longUrl}
              onChange={e => setLongUrl(e.target.value)}
            />
          </div>
          <button className="submit-btn" onClick={handleShorten}>
            Shorten{' '}
          </button>
        </div>
      </div>

      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-box">
            <h2 className="modal-title">Link shortened!</h2>

            <div className="result-container">
              {}
              <input type="text" className="result-input" value={shortUrl} readOnly />
              <button className="copy-btn" onClick={handleCopy}>
                Copy
              </button>
            </div>

            <button className="close-btn" onClick={() => setIsModalOpen(false)}>
              Close
            </button>
          </div>
        </div>
      )}
    </main>
  )
}

export default App
