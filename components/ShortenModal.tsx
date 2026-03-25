import useQrDownload from '../src/hooks/useQrDownload'
import Button from './Button'
import ShortenModalDecoration from './ShortenModalDecoration'

interface ShortenModalProps {
  isOpen: boolean
  shortenedUrl: string
  isCopySuccess: boolean
  copyError?: string | null
  onClose: () => void
  onCopy: () => void
}

const ShortenModal = ({
  isOpen,
  shortenedUrl,
  isCopySuccess,
  copyError,
  onClose,
  onCopy,
}: ShortenModalProps) => {
  const { qrImageRef, downloadQrImage } = useQrDownload()

  if (!isOpen) {
    return null
  }

  return (
    <div className="shorten-modal">
      <div className="shorten-modal__container">
        <div className="shorten-modal__confirmation">
          <ShortenModalDecoration />
          <Button className="shorten-modal__close" onClick={onClose} aria-label="Close modal">
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="shorten-modal__close-icon"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 6L18 18M18 6L6 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Button>
          <div className="shorten-modal__qr">
            <img
              ref={qrImageRef}
              src="/image 101.png"
              alt="QR code for shortened URL"
              className="shorten-modal__qr-placeholder"
            />
            <Button
              className="shorten-modal__download"
              aria-label="Download QR code"
              onClick={downloadQrImage}
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="shorten-modal__download-icon"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 5V14"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8.5 11L12 14.5L15.5 11"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M5 19H19"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </Button>
          </div>
          <div className="shorten-modal__title">Link shortened!</div>
          <div className="shorten-modal__subtitle">
            Access the “My URL” page to view statistics on your shortened links
          </div>
          <div className="shorten-modal__url-row">
            <span className="shorten-modal__url-text">{shortenedUrl}</span>
            <Button
              className="shorten-modal__copy"
              aria-label="Copy shortened URL"
              onClick={onCopy}
            >
              {isCopySuccess ? (
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  className="shorten-modal__copy-icon"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 6L9 17L4 12"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              ) : (
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  className="shorten-modal__copy-icon"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 7V5C8 3.89543 8.89543 3 10 3H18C19.1046 3 20 3.89543 20 5V13C20 14.1046 19.1046 15 18 15H16"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <rect
                    x="4"
                    y="7"
                    width="12"
                    height="14"
                    rx="2"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
              )}
            </Button>
          </div>
          {copyError && <p className="shorten-modal__error">{copyError}</p>}
        </div>
      </div>
    </div>
  )
}

export default ShortenModal
