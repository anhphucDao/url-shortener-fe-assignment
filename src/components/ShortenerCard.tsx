import { useState } from 'react'

interface ShortenerCardProps {
  onShorten: (url: string) => void
}

export const ShortenerCard = ({ onShorten }: ShortenerCardProps) => {
  const [url, setUrl] = useState('')

  const handleShorten = () => {
    if (!url.trim()) return

    const mockUrl = 'https://furl.one/myshortenlink'
    onShorten(mockUrl)
  }

  return (
    <div className="bg-white rounded-2xl shadow-[0px_4px_47px_0px_rgba(11,40,120,0.3)] border-[0.5px] border-secondary-200/30 p-[30px] w-full max-w-[800px] flex flex-col gap-[16px]">
      <label className="block text-color-primary-500 font-semibold text-[20px] leading-none">
        Your long URL
      </label>

      <div className="flex flex-col md:flex-row items-center gap-[20px] w-full">
        <div className="flex-1 flex items-center border border-neutral-600/30 rounded-[8px] px-4 h-[42px] w-[608px] bg-white gap-3">
          <img src="/link.svg" alt="Copy icon" className="w-5 h-5 shrink-0 opacity-70" />
          <div className="h-[24px] w-[1px] bg-neutral-600/30"></div>

          <input
            type="text"
            value={url}
            onChange={e => setUrl(e.target.value)}
            placeholder="Input the URL you want to shorten"
            className="flex-1 placeholder: text-primary-300 h-full font-regular text-[12px]"
          />
        </div>

        <button
          onClick={handleShorten}
          className="flex items-center bg-primary-500 text-white font-bold text-[16px] rounded-[8px] w-[98px] h-[42px] px-8 hover:bg-primary-500/70 focus:bg-primary-500 focus:outline-none focus:ring-4 focus:ring-[#0B2878]/30 active:scale-95 transition-all duration-150 w-full md:w-auto shrink-0"
        >
          Shorten
        </button>
      </div>
    </div>
  )
}
