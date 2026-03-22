import { useState } from 'react'
import ShortenModal from '../components/ShortenModal'
import './App.css'

const validateUrl = (value: string) => {
  const trimmedValue = value.trim()

  if (!trimmedValue) {
    return 'blank'
  }

  try {
    new URL(trimmedValue)
    return 'valid'
  } catch {
    return 'invalid'
  }
}

function App() {
  const [urlValue, setUrlValue] = useState('')
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [shortenedUrl, setShortenedUrl] = useState('')

  const handleShortenClick = () => {
    const validationResult = validateUrl(urlValue)

    if (validationResult === 'blank') {
      alert("Please don't leave the input blank.")
      return
    }

    if (validationResult === 'invalid') {
      alert('Please provide a valid URL.')
      return
    }

    const trimmedValue = urlValue.trim()
    setShortenedUrl(trimmedValue)
    setIsModalOpen(true)
  }

  const handleModalClose = () => {
    setIsModalOpen(false)
  }

  const handleCopyShortenedUrl = async () => {
    if (!shortenedUrl) {
      return
    }

    try {
      if (navigator?.clipboard?.writeText) {
        await navigator.clipboard.writeText(shortenedUrl)
      } else {
        const textarea = document.createElement('textarea')
        textarea.value = shortenedUrl
        textarea.style.position = 'fixed'
        textarea.style.opacity = '0'
        document.body.appendChild(textarea)
        textarea.focus()
        textarea.select()
        document.execCommand('copy')
        document.body.removeChild(textarea)
      }
      alert('Shortened URL copied to clipboard.')
    } catch (error) {
      console.error('Failed to copy shortened URL:', error)
      alert('Unable to copy the shortened URL. Please copy it manually.')
    }
  }

  return (
    <main className="min-h-screen bg-white">
      <header className="url-header">
        <img src="/devcamp_logo_navy 1.png" alt="Devcamp" className="url-header__logo" />
        <div className="url-header__signin">
          <div className="url-header__icon">
            <svg
              aria-hidden="true"
              className="url-header__icon-svg"
              viewBox="0 0 52 52"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M26 0C11.648 0 0 11.648 0 26C0 40.352 11.648 52 26 52C40.352 52 52 40.352 52 26C52 11.648 40.352 0 26 0ZM26 7.8C30.32 7.8 33.8 11.284 33.8 15.6C33.8 19.916 30.32 23.4 26 23.4C21.68 23.4 18.2 19.916 18.2 15.6C18.2 11.284 21.68 7.8 26 7.8ZM26 44.72C19.5 44.72 13.752 41.392 10.4 36.348C10.48 31.174 20.8 28.34 26 28.34C31.168 28.34 41.52 31.174 41.6 36.348C38.248 41.392 32.5 44.72 26 44.72Z"
                fill="currentColor"
              />
            </svg>
          </div>
          <div className="url-header__meta">
            <span className="url-header__text">Username</span>
            <span className="url-header__subtext">Personal</span>
          </div>
        </div>
      </header>
      <section className="frame-5522-wrapper">
        <div className="frame-5522">
          <div className="frame-5522__title">Devcamp URL Shortener</div>
          <div className="frame-5522__subtitle">
            Simplify, Organize, and Share: URL Management Made Easy
          </div>
          <div className="frame-5522__card">
            <div className="frame-5522__card-head">
              <div className="frame-5522__card-text">Your long URL</div>
            </div>
            <div className="frame-5522__controls">
              <div className="frame-5522__input">
                <div className="frame-5522__input-icon">
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 17 17"
                    className="frame-5522__input-icon-svg"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.25 8.5C3.25 7.075 4.40833 5.91667 5.83333 5.91667H7.5V4.33333H5.83333C3.53333 4.33333 1.66667 6.2 1.66667 8.5C1.66667 10.8 3.53333 12.6667 5.83333 12.6667H7.5V11.0833H5.83333C4.40833 11.0833 3.25 9.925 3.25 8.5ZM6.33333 9.33333H9.66667V7.66667H6.33333V9.33333ZM11.1667 4.33333H9.5V5.91667H11.1667C12.5917 5.91667 13.75 7.075 13.75 8.5C13.75 9.925 12.5917 11.0833 11.1667 11.0833H9.5V12.6667H11.1667C13.4667 12.6667 15.3333 10.8 15.3333 8.5C15.3333 6.2 13.4667 4.33333 11.1667 4.33333Z"
                      fill="currentColor"
                      fillOpacity="0.87"
                    />
                  </svg>
                </div>
                <div className="frame-5522__input-divider" />
                <input
                  className="frame-5522__input-text"
                  placeholder="Input the URL you want to shorten"
                  value={urlValue}
                  onChange={event => setUrlValue(event.target.value)}
                />
              </div>
              <button className="frame-5522__button" type="button" onClick={handleShortenClick}>
                Shorten
              </button>
            </div>
          </div>
        </div>
      </section>
      <ShortenModal
        isOpen={isModalOpen}
        shortenedUrl={shortenedUrl}
        onClose={handleModalClose}
        onCopy={handleCopyShortenedUrl}
      />
    </main>
  )
}

export default App
