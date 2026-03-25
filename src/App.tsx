import { useState, useEffect, useRef } from 'react'
import LaunchIcon from '@mui/icons-material/Launch'
import PublicIcon from '@mui/icons-material/Public'
import ColorizeIcon from '@mui/icons-material/Colorize'
import './App.css'
import QRImage from './Riel_QR_Code.png'
// ===== TYPE DEFINITIONS =====
type TimeoutId = ReturnType<typeof setTimeout>

interface AppState {
  isModalOpen: boolean
  copied: boolean
}

function App() {
  const [isModalOpen, setIsModalOpen] = useState<AppState['isModalOpen']>(false)
  const [copied, setCopied] = useState<AppState['copied']>(false)
  const timeoutRef = useRef<TimeoutId | null>(null)

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText('https://short.url/abc123')
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
      {/* ===== HERO SECTION ===== */}
      <div className={`hero-wrapper ${isModalOpen ? 'blurred' : ''}`}>
        <h1 className="hero-title">THE ONLY URL SHORTENER YOU NEED</h1>

        <p className="hero-subtitle">Is your URL look like this:</p>

        <p className="hero-long-url">
          http://hotels.andcastles.andhouseboats.andigloos.andteepees.andriversidecabins.andlakesidecabins.andpondsidecabins.andstreamadjacentcabins.andcabinsthatarentnearanybodiesofwaterwhatsoever.andlakehouses.andregularhousesandlodgesandskilodgesandallthings.ski/.com.
        </p>

        {/* Submit Bar */}
        <div className="submit-bar">
          <div className="submit-bar-inner">
            {/* Long URL */}
            <div className="field-group">
              <label className="field-label">
                <LaunchIcon sx={{ fontSize: 18 }} />
                Long URL
              </label>
              <input
                type="text"
                placeholder="Paste your incredibly long url here"
                className="field-input"
              />
              <p className="field-hint">
                <span className="field-hint-bold">E.g: </span>
                <span>bit.ly </span>
                <span className="field-hint-bold">or </span>
                <span>furl.one...</span>
              </p>
            </div>

            {/* Domain */}
            <div className="field-group">
              <label className="field-label">
                <PublicIcon sx={{ fontSize: 18 }} />
                Domain
              </label>
              <select className="field-input field-select">
                <option value="">Choose your domain</option>
              </select>
            </div>

            {/* Alias */}
            <div className="field-group">
              <label className="field-label">
                <ColorizeIcon sx={{ fontSize: 18 }} />
                Alias
              </label>
              <input
                type="text"
                placeholder="Paste your Alias (Recommended)"
                className="field-input"
              />
              <p className="field-hint">
                <span className="field-hint-bold">E.g: </span>
                <span>example.com </span>
                <span className="field-hint-bold">and </span>
                <span>example.net </span>
                <span className="field-hint-bold">both linked to </span>
                <span>example.com</span>
              </p>
            </div>
          </div>
        </div>

        {/* Shorten Button */}
        <button onClick={() => setIsModalOpen(true)} className="shorten-btn">
          Shorten URL
        </button>
      </div>

      {/* ===== MODAL ===== */}
      {isModalOpen && (
        <div className="modal-container">
          {/* QR Code */}
          <div className="qr-card">
            <p className="qr-title">Scan QR Code</p>
            <img src={QRImage} alt="QR Code" className="qr-image" />
          </div>

          {/* Result  */}
          <div className="result-section">
            <h2 className="result-title">URL Shortened !!!</h2>

            <div className="result-row">
              <input value="Here is your new URL" readOnly className="result-input" />
              <button
                onClick={handleCopy}
                className={`copy-btn ${copied ? 'copy-btn-copied' : 'copy-btn-default'}`}
              >
                {copied ? '✓ Copied!' : 'Copy'}
              </button>
            </div>

            <button
              onClick={() => {
                setIsModalOpen(false)
                setCopied(false)
              }}
              className="return-btn"
            >
              ← Return
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
