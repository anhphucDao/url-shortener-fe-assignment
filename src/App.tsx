import { useState, useEffect, useRef } from 'react'
import './App.css'

// ===== TYPE DEFINITIONS =====
type TimeoutId = ReturnType<typeof setTimeout>

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [copied, setCopied] = useState(false)
  const [longUrl, setLongUrl] = useState('')
  const timeoutRef = useRef<TimeoutId | null>(null)

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  const handleShorten = () => {
    if (longUrl.trim()) {
      setIsModalOpen(true)
    }
  }

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText('https://short.url/abc123')
      setCopied(true)

      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
      timeoutRef.current = setTimeout(() => {
        setCopied(false)
      }, 3000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  return (
    <div className="app-container">
      <nav className="navbar">
        <img src="/src/assets/devcamp_logo.svg" alt="Fessior Devcamp 2026 Prometheus" className="navbar-logo-img" />
        <div className="navbar-user">
          <img src="/src/assets/Avatar_icon.svg" alt="User Avatar" className="user-avatar-img" />
          <div className="user-info">
            <span className="user-label">Personal</span>
            <span className="user-name">Username</span>
          </div>
        </div>
      </nav>
      <main className={`main-content ${isModalOpen ? 'blurred' : ''}`}>
        <h1 className="page-title">Devcamp URL Shortener</h1>
        <p className="page-subtitle">
          Simplify, Organize, and Share: URL Management Made Easy
        </p>

        {/* Form Card */}
        <div className="form-card">
          <p className="form-label">Your long URL</p>
          <div className="form-row">
            <div className="input-wrapper">
              <img src="/src/assets/link_icon.svg" alt="Link" className="input-icon" />
              <span className="input-divider" />
              <input
                type="text"
                placeholder="Input the URL you want to shorten"
                value={longUrl}
                onChange={(e) => setLongUrl(e.target.value)}
                className="url-input"
              />
            </div>
            <button
              onClick={handleShorten}
              className="shorten-btn"
            >
              Shorten
            </button>
          </div>
        </div>
      </main>

      {/* ===== MODAL ===== */}
      {isModalOpen && (
        <div
          className="modal-overlay"
          onClick={() => {
            setIsModalOpen(false)
            setCopied(false)
          }}
        >
          <div
            className="modal-card"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              className="modal-close-btn"
              onClick={() => {
                setIsModalOpen(false)
                setCopied(false)
              }}
            >
              ✕
            </button>

            {/* QR Section with blue background */}
            <div className="modal-qr-section">
              {/* Small decorative QR codes */}
              <img src="/src/assets/BG_QR_code.svg" alt="" className="modal-deco-qr modal-deco-qr-left" />
              <img src="/src/assets/BG_QR_code.svg" alt="" className="modal-deco-qr modal-deco-qr-right" />

              {/* Main QR code */}
              <img src="/src/assets/QR_code_sample(scan it pls).png" alt="QR Code" className="modal-qr-img" />
            </div>

            {/* Download button - outside qr-section so it's not clipped */}
            <a href="/src/assets/QR_code_sample(scan it pls).png" download className="modal-download-btn">
              <img src="/src/assets/Download_icon.svg" alt="Download" width="24" height="24" />
            </a>

            {/* Info Section */}
            <div className="modal-info-section">
              <h2 className="modal-title">Link shortened!</h2>
              <p className="modal-subtitle">
                Access the &quot;My URL&quot; page to view statistics
                <br />
                on your shortened links
              </p>

              <div className="modal-link-row">
                <div className="modal-link-box">
                  <span className="modal-link-text">https://furl.one/myshortenlink</span>
                </div>
                <button
                  onClick={handleCopy}
                  className={`modal-copy-btn ${copied ? 'modal-copy-btn-copied' : ''}`}
                >
                  <img src="/src/assets/Copy_icon.svg" alt="Copy" width="20" height="20" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default App