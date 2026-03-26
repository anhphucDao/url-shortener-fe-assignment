import { useState, useEffect, useRef } from 'react'
import { CloseIcon } from '../../assets/icons/CloseIcon'
import { CopyIcon } from '../../assets/icons/CopyIcon'
import { DownloadIcon } from '../../assets/icons/DownloadIcon'
import { Button } from '../Button/Button'
import { SHORT_URL, QR_API_URL, COPY_TIMEOUT } from '../../constants/url'
import './PopUp.css'

type PopUpProps = {
  isShown: boolean
  onClose: () => void
}
type Feedback = {
  type: 'success' | 'error'
  message: string
} | null
export const PopUp = ({ isShown, onClose }: PopUpProps) => {
  const [feedback, setFeedback] = useState<Feedback>(null)
  const timeoutRef = useRef<number | null>(null)
  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  }, [])
  if (!isShown) return null
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(SHORT_URL)
      setFeedback({
        type: 'success',
        message: 'Copied to clipboard!',
      })
    } catch {
      setFeedback({
        type: 'error',
        message: 'Failed to copy link. Please try again.',
      })
    }
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
    timeoutRef.current = setTimeout(() => {
      setFeedback(null)
    }, COPY_TIMEOUT)
  }
  return (
    <div className="popup-overlay">
      <div className="popup-backdrop" onClick={onClose} />
      <div className="popup-card animate-in fade-in zoom-in">
        <Button
          onClick={onClose}
          className="popup-close-btn bg-white text-neutral-500 hover:bg-primary-300 hover:text-white transition-colors"
        >
          <CloseIcon />
        </Button>
        <div className="popup-hero bg-primary-500">
          <div className="popup-qr-wrapper border border-primary-100">
            <img src={QR_API_URL} alt="QR Code" className="popup-qr" />
            <div className="popup-download-btn bg-primary-500 text-white border-2 border-white cursor-pointer popup-btn-animate hover:bg-primary-300 hover:text-primary-500">
              <DownloadIcon />
            </div>
          </div>
        </div>
        <div className="popup-content">
          <h3 className="text-primary-500 text-xl font-bold mb-2">Link shortened!</h3>
          <p className="text-primary-500 text-xs leading-relaxed popup-text">
            Access the "My URL" page to view statistics on your shortened links
          </p>
          <div className="relative">
            <div className="popup-copy-row">
              <span className="popup-url text-primary-500 border-primary-500">{SHORT_URL}</span>
              <Button
                className="popup-copy-btn bg-primary-500 text-white popup-btn-animate hover:bg-primary-300 hover:text-primary-500"
                onClick={handleCopy}
              >
                <CopyIcon />
              </Button>
            </div>
            <div
              className={`popup-feedback-container ${
                feedback
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 -translate-y-2 pointer-events-none'
              }`}
            >
              <p
                className={`popup-feedback-text ${
                  feedback?.type === 'success' ? 'text-green-500' : 'text-red-500'
                }`}
              >
                {feedback?.message}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
