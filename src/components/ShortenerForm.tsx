import { useState } from 'react'
import { Link } from 'lucide-react'
import Button from './Button'
import Input from './Input'
interface ShortenerFormProps {
  onSubmit: (url: string) => void
}

export default function ShortenerForm({ onSubmit }: ShortenerFormProps) {
  const [longUrl, setLongUrl] = useState<string>('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!longUrl.trim()) return
    onSubmit(longUrl)
  }
  const handleUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLongUrl(e.target.value)
  }
  return (
    <div className="bg-white p-6 md:p-8 rounded-2xl w-full max-w-4xl shadow-[0_10px_60px_rgb(0,0,0,0.06)] border border-neutral-100">
      <h2 className="text-lg font-bold text-primary-500 mb-4 text-left">Your long URL</h2>

      <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4">
        <div className="flex-1 flex items-center border border-neutral-200 rounded-lg focus-within:border-primary-500 focus-within:ring-1 focus-within:ring-primary-500 transition-all bg-white px-4">
          <div className="text-primary-500 flex items-center justify-center">
            <Link className="w-5 h-5" />
          </div>
          <div className="w-px h-6 bg-neutral-200 mx-3"></div>
          <Input
            type="url"
            required
            value={longUrl}
            onChange={handleUrlChange}
            placeholder="Input the URL you want to shorten"
            className="flex-1 py-3 text-neutral-900 text-base placeholder-neutral-400"
          />
        </div>
        <Button type="submit" variant="primary">
          Shorten
        </Button>
      </form>
    </div>
  )
}
