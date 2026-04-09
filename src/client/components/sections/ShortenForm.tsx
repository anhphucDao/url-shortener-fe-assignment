import { useState } from 'react'
import type { ShortLink } from '../../types'
import { isValidUrl } from '../../utils/url'
import { shortenUrl } from '../../services/urlService'
import { Button } from '../common'

interface ShortenFormProps {
  onCreated: (link: ShortLink) => void
}

function ShortenForm({ onCreated }: ShortenFormProps) {
  const [inputUrl, setInputUrl] = useState('')
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputUrl(e.target.value)
  }

  const submit = async () => {
    setError('')

    const trimmedUrl = inputUrl.trim()
    if (!trimmedUrl) {
      setError('Please enter a URL.')
      return
    }
    if (!isValidUrl(trimmedUrl)) {
      setError('Please enter a valid URL (include http:// or https://).')
      return
    }

    setIsLoading(true)
    try {
      const link = await shortenUrl(trimmedUrl)
      onCreated(link)
      setInputUrl('')
    } catch (err) {
      setError('Could not create short link. Please try again.')
      console.error(err)
    } finally {
      setIsLoading(false)
    }
  }

  const submitButtonText = isLoading ? 'Shortening…' : 'Shorten'
  const placeholderText = 'Input the URL you want to shorten'

  return (
    <div className="mt-10 w-full max-w-3xl bg-white rounded-2xl shadow-xl shadow-gray-300 p-6">
      <label htmlFor="url" className="block mb-4 text-lg md:text-xl font-bold text-[#0B2A7B]">
        Your Long URL
      </label>

      <div className="flex flex-col md:flex-row items-stretch gap-4">
        <div className="flex flex-1 items-center border border-gray-300 rounded-xl px-4 py-3 bg-white">
          <span className="text-[#0B2A7B] mr-3" aria-hidden="true">
            🌐
          </span>
          <input
            id="url"
            type="text"
            value={inputUrl}
            onChange={handleInputChange}
            placeholder={placeholderText}
            className="w-full outline-none text-sm md:text-base placeholder:text-gray-400"
          />
        </div>

        <Button onClick={submit} disabled={isLoading} isLoading={isLoading}>
          {submitButtonText}
        </Button>
      </div>

      {error && <p className="mt-4 text-sm md:text-base text-red-500 font-medium">{error}</p>}
    </div>
  )
}

export default ShortenForm
