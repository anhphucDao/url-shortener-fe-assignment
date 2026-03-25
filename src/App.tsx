import { useRef, useState, type ChangeEvent } from 'react'
import Header from '../components/Header'
import ShortenModal from '../components/ShortenModal'
import UrlInputCard from '../components/UrlInputCard'
import { COPY_ERROR_RESET_DELAY_MS, COPY_SUCCESS_RESET_DELAY_MS } from './constants'
import useClipboard from './hooks/useClipboard'
import useUrlValidation from './hooks/useUrlValidation'
import './App.css'

function App() {
  const [urlValue, setUrlValue] = useState('')
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [shortenedUrl, setShortenedUrl] = useState('')
  const [isCopySuccess, setIsCopySuccess] = useState(false)
  const [inputError, setInputError] = useState<string | null>(null)
  const [copyError, setCopyError] = useState<string | null>(null)
  const copyResetTimerRef = useRef<number | null>(null)
  const copyErrorResetTimerRef = useRef<number | null>(null)
  const { validateUrl } = useUrlValidation()
  const { copyText } = useClipboard()

  const clearCopyError = () => {
    setCopyError(null)

    if (copyErrorResetTimerRef.current) {
      window.clearTimeout(copyErrorResetTimerRef.current)
      copyErrorResetTimerRef.current = null
    }
  }

  const scheduleCopyErrorReset = () => {
    if (copyErrorResetTimerRef.current) {
      window.clearTimeout(copyErrorResetTimerRef.current)
    }

    copyErrorResetTimerRef.current = window.setTimeout(() => {
      setCopyError(null)
      copyErrorResetTimerRef.current = null
    }, COPY_ERROR_RESET_DELAY_MS)
  }

  const handleShortenClick = () => {
    const validationResult = validateUrl(urlValue)

    if (validationResult === 'blank') {
      setInputError("Please don't leave the input blank.")
      return
    }

    if (validationResult === 'invalid') {
      setInputError('Please provide a valid URL.')
      return
    }

    setInputError(null)
    // const trimmedValue = urlValue.trim()
    setShortenedUrl('localhost:3000/shortened-url')
    setIsModalOpen(true)
  }

  const handleModalClose = () => {
    setIsModalOpen(false)
    setIsCopySuccess(false)

    clearCopyError()

    if (copyResetTimerRef.current) {
      window.clearTimeout(copyResetTimerRef.current)
      copyResetTimerRef.current = null
    }
  }

  const handleCopyShortenedUrl = async () => {
    const success = await copyText(shortenedUrl)

    if (success) {
      clearCopyError()
      setIsCopySuccess(true)

      if (copyResetTimerRef.current) {
        window.clearTimeout(copyResetTimerRef.current)
      }

      copyResetTimerRef.current = window.setTimeout(() => {
        setIsCopySuccess(false)
        copyResetTimerRef.current = null
      }, COPY_SUCCESS_RESET_DELAY_MS)

      return
    }

    setCopyError('Unable to copy the shortened URL. Please copy it manually.')
    scheduleCopyErrorReset()
  }

  const handleUrlChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUrlValue(event.target.value)

    if (inputError) {
      setInputError(null)
    }
  }

  return (
    <main className="min-h-screen bg-white">
      <Header />
      <UrlInputCard
        urlValue={urlValue}
        errorMessage={inputError}
        onUrlChange={handleUrlChange}
        onShorten={handleShortenClick}
      />
      <ShortenModal
        isOpen={isModalOpen}
        shortenedUrl={shortenedUrl}
        isCopySuccess={isCopySuccess}
        copyError={copyError}
        onClose={handleModalClose}
        onCopy={handleCopyShortenedUrl}
      />
    </main>
  )
}

export default App
