import { useRef, useState, type ChangeEvent } from 'react'
import Header from '../components/Header'
import ShortenModal from '../components/ShortenModal'
import UrlInputCard from '../components/UrlInputCard'
import useClipboard from './hooks/useClipboard'
import useUrlValidation from './hooks/useUrlValidation'
import './App.css'

function App() {
  const [urlValue, setUrlValue] = useState('')
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [shortenedUrl, setShortenedUrl] = useState('')
  const [isCopySuccess, setIsCopySuccess] = useState(false)
  const copyResetTimerRef = useRef<number | null>(null)
  const { validateUrl } = useUrlValidation()
  const { copyText } = useClipboard()

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
    setIsCopySuccess(false)
    if (copyResetTimerRef.current) {
      window.clearTimeout(copyResetTimerRef.current)
      copyResetTimerRef.current = null
    }
  }

  const handleCopyShortenedUrl = async () => {
    const success = await copyText(shortenedUrl)

    if (success) {
      setIsCopySuccess(true)
      if (copyResetTimerRef.current) {
        window.clearTimeout(copyResetTimerRef.current)
      }
      copyResetTimerRef.current = window.setTimeout(() => {
        setIsCopySuccess(false)
        copyResetTimerRef.current = null
      }, 2000)
      return
    }

    alert('Unable to copy the shortened URL. Please copy it manually.')
  }

  const handleUrlChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUrlValue(event.target.value)
  }

  return (
    <main className="min-h-screen bg-white">
      <Header />
      <UrlInputCard
        urlValue={urlValue}
        onUrlChange={handleUrlChange}
        onShorten={handleShortenClick}
      />
      <ShortenModal
        isOpen={isModalOpen}
        shortenedUrl={shortenedUrl}
        isCopySuccess={isCopySuccess}
        onClose={handleModalClose}
        onCopy={handleCopyShortenedUrl}
      />
    </main>
  )
}

export default App
