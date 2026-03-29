import { useRef, useState } from 'react'

const TOAST_ERROR_DURATION_MS = 3000

function useShortenUrl() {
  const [url, setUrl] = useState('')
  const [shortened, setShortened] = useState('')
  const [loading, setLoading] = useState(false)
  const [toastError, setToastError] = useState('')

  const toastTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  async function handleShorten() {
    const normalizedUrl = url.trim()

    if (!normalizedUrl) {
      return ''
    }

    setShortened('')
    setLoading(true)
    setToastError('')

    try {
      throw new Error('Backend not connected yet')
    } catch (error) {
      console.error('Failed to shorten URL:', error)
      setToastError('Cannot connect to the server. Please try again.')

      if (toastTimerRef.current) {
        clearTimeout(toastTimerRef.current)
      }

      toastTimerRef.current = setTimeout(() => setToastError(''), TOAST_ERROR_DURATION_MS)

      const demoShortenedUrl = 'This is a demo shortened URL'
      setShortened(demoShortenedUrl) // For demo only
      return demoShortenedUrl
    } finally {
      setLoading(false)
    }
  }

  return {
    url,
    setUrl,
    shortened,
    loading,
    toastError,
    toastTimerRef,
    handleShorten,
  }
}

export default useShortenUrl
