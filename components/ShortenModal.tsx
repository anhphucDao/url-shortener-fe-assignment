import useQrDownload from '../src/hooks/useQrDownload'
import Button from './Button'
import { CheckIcon, CloseIcon, CopyIcon, DownloadIcon } from './Icons'
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
            <CloseIcon className="shorten-modal__close-icon" />
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
              <DownloadIcon className="shorten-modal__download-icon" />
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
              {isCopySuccess ? <CheckIcon className="shorten-modal__copy-icon" /> : <CopyIcon className="shorten-modal__copy-icon" />}
            </Button>
          </div>
          {copyError && <p className="shorten-modal__error">{copyError}</p>}
        </div>
      </div>
    </div>
  )
}

export default ShortenModal
