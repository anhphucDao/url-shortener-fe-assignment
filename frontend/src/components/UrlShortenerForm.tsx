import { useState } from 'react'
import { apiService } from '../services/apiService'

interface UrlShortenerFormProps {
  onShorten: (data: { shortUrl: string; qrCode: string }) => void
  onError: (error: string) => void
  isLoading?: boolean
  linkIcon?: string
}

export function UrlShortenerForm({
  onShorten,
  onError,
  isLoading = false,
  linkIcon = '/assets/VectorLink.svg',
}: UrlShortenerFormProps) {
  const [url, setUrl] = useState('')
  const [isValidating, setIsValidating] = useState(false)

  const validateUrl = (inputUrl: string): boolean => {
    if (!inputUrl.trim()) return false

    // Basic URL validation
    const urlRegex = /^https?:\/\/.+/
    return urlRegex.test(inputUrl)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateUrl(url)) {
      onError('Please enter a valid URL (http:// or https://)')
      return
    }

    setIsValidating(true)

    try {
      const response = await apiService.shortenUrl(url)

      if (response.success && response.data) {
        onShorten({
          shortUrl: response.data.shortUrl,
          qrCode: response.data.qrCode,
        })
        setUrl('') // Clear input on success
      } else {
        onError(response.error || 'Failed to shorten URL')
      }
    } catch (error) {
      onError('Network error. Please try again.')
      console.error('Shorten error:', error)
    } finally {
      setIsValidating(false)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUrl(e.target.value)
  }

  const isSubmitDisabled = !url.trim() || isLoading || isValidating

  return (
    <div className="p-4 w-[600px]">
      <div
        className="bg-white rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.08),0_-2px_10px_rgba(0,0,0,0.05)] p-6"
        style={{
          padding: '20px 28px',
        }}
      >
        <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
          <label className="font-semibold text-primary-500">Your long URL</label>

          <div className="flex items-center gap-10">
            <div className="flex-1 h-[42px] border border-gray-300 rounded-lg flex items-center px-3 bg-gray-50">
              <img src={linkIcon} alt="link" className="w-4 h-4 mr-3" />

              <input
                type="text"
                placeholder="Input the URL you want to shorten"
                className="flex-1 bg-transparent outline-none text-sm text-primary-300 placeholder-gray-400"
                value={url}
                onChange={handleInputChange}
                disabled={isLoading || isValidating}
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitDisabled}
              className={`font-bold px-6 py-2 rounded-md transition-colors ${
                isSubmitDisabled
                  ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  : 'bg-primary-500 text-white hover:bg-primary-600'
              }`}
            >
              {isValidating ? 'Processing...' : isLoading ? 'Loading...' : 'Shorten'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
