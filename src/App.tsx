import { useState, useEffect, useRef } from 'react'
import './App.css'

// ===== IMPORT ASSETS =====
import devcamp_logo from './assets/devcamp_logo.svg'
import avatar_icon from './assets/Avatar_icon.svg'
import link_icon from './assets/link_icon.svg'
import bg_qr from './assets/BG_QR_code.svg'
import qr_sample from './assets/QR_code_sample(scan it pls).png'
import download_icon from './assets/Download_icon.svg'
import copy_icon from './assets/Copy_icon.svg'

// ===== TYPE DEFINITIONS =====
type TimeoutId = ReturnType<typeof setTimeout>

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [copied, setCopied] = useState(false)
  const [longUrl, setLongUrl] = useState('')
  const [errorMsg, setErrorMsg] = useState('')
  const timeoutRef = useRef<TimeoutId | null>(null)

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  const isValidUrl = (url: string): boolean => {
    try {
      const parsed = new URL(url)
      return parsed.protocol === 'http:' || parsed.protocol === 'https:'
    } catch {
      return false
    }
  }

  const handleShorten = () => {
    if (!longUrl.trim()) {
      setErrorMsg('Please enter a URL')
      return
    }

    if (!isValidUrl(longUrl.trim())) {
      setErrorMsg('This is not a valid URL')
      return
    }
    setErrorMsg('')
    setIsModalOpen(true)
  }

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText('https://furl.one/myshortenlink')
      setCopied(true)

      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
      timeoutRef.current = setTimeout(() => {
        setCopied(false)
      }, 3636)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  return (
    <div className="app-container">
      <nav className="navbar">
        <a
          href="https://fessior.com/tools/url-shortener/generate"
          target="_blank"
          rel="noopener noreferrer"
          className="navbar-logo-link"
          title="This is the riel tool"
        >
          <img
            src={devcamp_logo}
            alt="Fessior Devcamp 2026 Prometheus"
            className="navbar-logo-img"
          />
        </a>
        <div className="navbar-user">
          <img src={avatar_icon} alt="User Avatar" className="user-avatar-img" />
          <div className="user-info">
            <span className="user-label">Personal</span>
            <span className="user-name">Username</span>
          </div>
        </div>
      </nav>
      <main className={`main-content ${isModalOpen ? 'blurred' : ''}`}>
        <h1 className="page-title">Devcamp URL Shortener</h1>
        <p className="page-subtitle">Simplify, Organize, and Share: URL Management Made Easy</p>

        {/* Form Card */}
        <div className="form-card">
          <p className="form-label">Your long URL</p>
          <div className="form-row">
            <div className="input-wrapper">
              <img src={link_icon} alt="Link" className="input-icon" />
              <span className="input-divider" />
              <input
                type="text"
                placeholder="Input the URL you want to shorten"
                value={longUrl}
                onChange={e => {
                  setLongUrl(e.target.value)
                  if (errorMsg) setErrorMsg('')
                }}
                className={`url-input ${errorMsg ? 'url-input-error' : ''}`}
              />
            </div>
            <button onClick={handleShorten} className="shorten-btn">
              Shorten
            </button>
          </div>
          {/* Error message */}
          {errorMsg && <p className="error-msg">{errorMsg}</p>}
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
          <div className="modal-card" onClick={e => e.stopPropagation()}>
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
              <img src={bg_qr} alt="" className="modal-deco-qr modal-deco-qr-left" />
              <img src={bg_qr} alt="" className="modal-deco-qr modal-deco-qr-right" />

              {/* Main QR code */}
              <img src={qr_sample} alt="QR Code" className="modal-qr-img" />
            </div>

            {/* Download button wrapper */}
            <div className="modal-download-wrapper">
              <a href={qr_sample} download className="modal-download-btn">
                <img src={download_icon} alt="Download" width="24" height="24" />
              </a>
            </div>

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
                  {copied ? (
                    <span className="copy-check">✓</span>
                  ) : (
                    <img src={copy_icon} alt="Copy" width="20" height="20" />
                  )}
                </button>
              </div>

              {/* Copy notification */}
              {copied && <p className="copied-msg">Link copied to clipboard!</p>}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
