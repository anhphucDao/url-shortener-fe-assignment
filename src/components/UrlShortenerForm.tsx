import { useState } from 'react'

interface UrlShortenerFormProps {
  onShorten: () => void
  linkIcon?: string
}

export function UrlShortenerForm({
  onShorten,
  linkIcon = '/assets/VectorLink.svg',
}: UrlShortenerFormProps) {
  const [url, setUrl] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted with URL:', url)
    if (url.trim()) {
      console.log('Calling onShorten callback...')
      onShorten()
    } else {
      console.log('URL is empty, not calling onShorten')
    }
  }

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
                onChange={e => setUrl(e.target.value)}
              />
            </div>

            <button
              type="submit"
              className="bg-primary-500 text-white font-bold px-6 py-2 rounded-md hover:bg-primary-600 transition-colors"
            >
              Shorten
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
