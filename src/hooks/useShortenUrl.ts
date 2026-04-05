import { useState } from 'react'
import { api, API_URL } from '../api'

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
      const response = await api.post('/api/urls', {
        originalUrl: normalizedUrl,
      })

      const shortenedUrl = `${API_URL}/${response.shortCode}`
      setShortened(shortenedUrl)

      return {
        shortenedUrl,
        errorMessage: '',
      }
    } catch (err: unknown) {
      console.error('Failed to shorten URL:', err)
      const errorMessage =
        err instanceof Error ? err.message : 'Cannot connect to the server. Please try again.'

      setError(errorMessage)

      return {
        shortenedUrl: '',
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
