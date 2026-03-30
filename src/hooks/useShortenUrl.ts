import { useState } from 'react'

type ShortenResult = {
  shortenedUrl: string
  errorMessage: string
}

function useShortenUrl() {
  const [url, setUrl] = useState('')
  const [shortened, setShortened] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  async function handleShorten(): Promise<ShortenResult> {
    const normalizedUrl = url.trim()

    if (!normalizedUrl) {
      return {
        shortenedUrl: '',
        errorMessage: '',
      }
    }

    setShortened('')
    setLoading(true)
    setError('')

    try {
      throw new Error('Backend not connected yet')
    } catch (err) {
      console.error('Failed to shorten URL:', err)
      const errorMessage = 'Cannot connect to the server. Please try again.'
      setError(errorMessage)

      const demoShortenedUrl = 'This is a demo shortened URL'
      setShortened(demoShortenedUrl) // For demo only
      return {
        shortenedUrl: demoShortenedUrl,
        errorMessage,
      }
    } finally {
      setLoading(false)
    }
  }

  return {
    url,
    setUrl,
    shortened,
    loading,
    error,
    handleShorten,
  }
}

export default useShortenUrl
