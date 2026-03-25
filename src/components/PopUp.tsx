import { useState, useEffect, useRef } from 'react'
import { CloseIcon } from '../assets/icons/CloseIcon'
import { CopyIcon } from '../assets/icons/CopyIcon'
import { DownloadIcon } from '../assets/icons/DownloadIcon'
import { Button } from './Button'
const COPY_TIMEOUT = 2000
const SHORT_URL = import.meta.env.VITE_SHORT_URL
const QR_API_URL = import.meta.env.VITE_QR_API_URL
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
    <div className="fixed inset-0 z-25 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/30" onClick={onClose} />
      <div className="relative bg-white rounded-xl shadow-2xl w-full max-w-100 overflow-hidden animate-in fade-in zoom-in duration-300">
        <Button
          onClick={onClose}
          className="absolute top-3 right-3 z-10 bg-white hover:bg-primary-300 cursor-pointer text-neutral-500 hover:text-white rounded-full p-1 transition-colors"
        >
          <CloseIcon />
        </Button>

        <div className="bg-primary-500 h-32 relative flex justify-center">
          <div className="absolute top-10 bg-white p-3 rounded-xl shadow-lg border border-primary-100">
            <img src={QR_API_URL} alt="QR Code" className="w-32 h-32" />
            <div className="absolute -bottom-2 -right-2 bg-primary-500 text-white p-1.5 rounded-full border-2 border-white cursor-pointer hover:bg-primary-300 hover:text-primary-500 hover:scale-105 duration-100">
              <DownloadIcon />
            </div>
          </div>
        </div>

        <div className="pt-20 pb-8 px-8 text-center">
          <h3 className="text-primary-500 text-xl font-bold mb-2">Link shortened!</h3>
          <p className="text-primary-500 text-xs leading-relaxed mb-6 px-4">
            Access the "My URL" page to view statistics on your shortened links
          </p>

          <div className="relative">
            <div className="flex items-center gap-2 bg-white">
              <span className="text-primary-500 text-sm truncate flex-1 text-left border border-primary-500 rounded-lg p-2 pl-3 h-full flex items-center">
                {SHORT_URL}
              </span>
              <Button
                className="bg-primary-500 text-white p-2.5 rounded-md transition-colors hover:bg-primary-300 cursor-pointer duration-100 hover:text-primary-500 hover:scale-105"
                onClick={handleCopy}
              >
                <CopyIcon />
              </Button>
            </div>

            <div
              className={`absolute -bottom-6 left-0 w-full transition-all duration-300 ${
                feedback
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 -translate-y-2 pointer-events-none'
              }`}
            >
              <p
                className={`text-[10px] font-bold ${
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
