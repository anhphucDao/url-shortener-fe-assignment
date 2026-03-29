import myLogo from './assets/logo.png'
import { useState } from 'react'
import './App.css'
import myqr from './assets/qrcode.svg'

function App() {
  const [longUrl, setLongUrl] = useState('')
  // ẩn/hiện Modal
  const [isModalOpen, setIsModalOpen] = useState(false)
  // state luu link rút gọn
  const [shortUrl, setShortUrl] = useState('')

  const handleShorten = () => {
    if (!longUrl) {
      alert('Vui lòng nhập link cần rút gọn nhé!')
      return
    }

    setShortUrl('https://furl.one/my-shorten-link')

    // Mở Modal
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  return (
    <div className={`app-container ${isModalOpen ? 'modal-active' : ''}`}>
      {/* PHẦN HEADER */}
      {/* PHẦN HEADER */}
      <header className="header">
        {/* BÊN TRÁI: LOGO */}
        <div className="logo">
          <img src={myLogo} alt="Fessior Devcamp Logo" className="logo-image" />
        </div>

        {/* BÊN PHẢI: GIỮ NGUYÊN USER PROFILE */}
        <div className="user-profile">
          <div className="user-info">
            <span className="user-role">Personal</span>
            <span className="user-name">Username</span>
          </div>
          <div className="user-avatar">
            <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 4c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm0 14c-2.03 0-4.43-.82-6.14-2.88C7.55 15.8 9.68 15 12 15s4.45.8 6.14 2.12C16.43 19.18 14.03 20 12 20z"></path>
            </svg>
          </div>
        </div>
      </header>

      {/* PHẦN NỘI DUNG CHÍNH */}
      <main className="main-content">
        <h1 className="main-title">Devcamp URL Shortener</h1>
        <p className="main-subtitle">Simplify, Organize, and Share: URL Management Made Easy</p>

        <div className="shortener-card">
          <label className="input-label">Your long URL</label>

          <div className="input-group">
            <div className="input-wrapper">
              <span className="link-icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  width="18"
                  height="18"
                >
                  <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                  <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                </svg>
              </span>
              <input
                type="text"
                placeholder="Input the URL you want to shorten"
                value={longUrl}
                onChange={e => setLongUrl(e.target.value)}
              />
            </div>
            <button className="shorten-btn" onClick={handleShorten}>
              Shorten
            </button>
          </div>
        </div>
      </main>

      {/* --- CỬA SỔ MODAL KẾT QUẢ --- */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="close-btn" onClick={closeModal}>
              &times;
            </button>

            <div className="modal-body">
              {}
              {}
              <img src={myqr} alt="Wikipedia QR Code" className="qr-code" />

              <h2 className="modal-title-success">Link shortened!</h2>
              <p className="modal-subtitle-success">
                Access the "My URL" page to view statistics on your shortened links
              </p>

              <div className="copy-group">
                <input type="text" value={shortUrl} readOnly />
                <button className="copy-btn">Copy</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
