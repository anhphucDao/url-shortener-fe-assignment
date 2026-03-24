import { useState } from 'react'
import type { FormEvent } from 'react'
import linkIcon from '../assets/Vector.svg'

interface ShortenFormProps {
  onShortenSuccess: (originalUrl: string) => void
}

function ShortenForm({ onShortenSuccess }: ShortenFormProps) {
  const [url, setUrl] = useState('')
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const trimmed = url.trim()
    if (!trimmed) {
      setError('Vui lòng nhập URL.')
      return
    }

    setError('')
    setIsLoading(true)

    setTimeout(() => {
      setIsLoading(false)
      onShortenSuccess(trimmed)
    }, 1000)
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-[560px]">
      <div
        className={`
          flex flex-col gap-1 rounded-xl border-2 bg-white px-4 py-3 shadow-sm
          transition-colors duration-200
          ${error ? 'border-danger-500' : 'has-[:focus]:border-primary-500 border-neutral-200'}
        `}
      >
        <label htmlFor="url-input" className="text-sm font-bold text-primary-500">
          Your long URL
        </label>

        <div className="flex items-center gap-3">
          <div className="relative flex-1">
            <img
              src={linkIcon}
              alt="Link Icon"
              className="pointer-events-none absolute left-0 top-1/2 h-5 w-5 -translate-y-1/2 opacity-60"
            />
            <input
              id="url-input"
              type="text"
              value={url}
              placeholder="Input the URL you want to shorten"
              onChange={e => {
                setUrl(e.target.value)
                if (error) setError('')
              }}
              className="w-full bg-transparent pl-8 text-sm text-neutral-800 outline-none placeholder:text-neutral-400"
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="shrink-0 cursor-pointer rounded-lg bg-primary-500 px-5 py-2 text-sm font-bold text-white transition-all duration-200 hover:bg-primary-400 active:scale-95 disabled:cursor-wait disabled:opacity-60"
          >
            {isLoading ? (
              <span className="flex items-center gap-2">
                <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
                  <circle
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="3"
                    className="opacity-25"
                  />
                  <path
                    d="M4 12a8 8 0 018-8"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    className="opacity-75"
                  />
                </svg>
                Wait...
              </span>
            ) : (
              'Shorten'
            )}
          </button>
        </div>
      </div>

      {error && <p className="mt-2 text-sm font-medium text-danger-500">{error}</p>}
    </form>
  )
}

export default ShortenForm
