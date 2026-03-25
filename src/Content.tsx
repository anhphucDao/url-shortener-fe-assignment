import { type FormEvent, useState } from 'react'
import link from './image/link.png'
import Result from './Result'

const Content = () => {
  const [url, setUrl] = useState('')
  const [isResultOpen, setIsResultOpen] = useState(false)
  const isDisabled = url.trim().length === 0

  const handleShortenSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (isDisabled) return
    setIsResultOpen(true)
  }

  return (
    <section className="w-full px-4 sm:px-6">
      <div className="mx-auto mb-8 max-w-[980px]">
        <div className="h-16 text-center text-4xl font-bold text-primary-500 sm:text-5xl lg:text-6xl">
          Devcamp URL Shortener
        </div>
        <div className="h-16 text-center text-xl font-normal text-primary-500 sm:text-2xl lg:text-3xl">
          Simplify, Organize, and Share: URL Management Made Easy
        </div>
      </div>

      <div className="relative mx-auto h-28 w-full max-w-[800px] rounded-lg border-[0.5px] border-neutral-500/30 bg-white shadow-[0px_4px_47px_0px_rgba(11,40,120,0.30)]">
        <div className="absolute top-4 left-7 h-20 w-[744px] max-w-[calc(100%-56px)]">
          <h6 className="absolute top-0 left-0 h-7 w-32 text-xl font-semibold text-primary-500">
            Your long URL
          </h6>

          <form className="absolute top-[37px] left-0 h-10 w-full" onSubmit={handleShortenSubmit}>
            <div className="absolute top-0 left-0 h-10 w-[608px] max-w-[calc(100%-136px)] rounded-lg border-[0.5px] border-neutral-500/30 bg-white" />

            <img src={link} alt="Link" className="absolute top-[10px] left-[8px] h-5 w-5" />

            <div className="absolute top-[8px] left-[36px] h-6 w-px bg-neutral-500/30" />

            <input
              id="long-url-input"
              type="url"
              placeholder="Input the URL you want to shorten"
              className="absolute top-[8px] left-[48px] h-6 w-[540px] max-w-[calc(100%-184px)] bg-transparent text-xs text-primary-300 outline-none placeholder:text-primary-300"
              value={url}
              onChange={event => setUrl(event.target.value)}
            />

            <button
              type="submit"
              disabled={isDisabled}
              className="absolute top-0 right-0 h-10 w-24 rounded-lg text-base font-bold transition bg-primary-500 text-white hover:bg-primary-300"
            >
              Shorten
            </button>
          </form>
        </div>
      </div>

      <Result
        isOpen={isResultOpen}
        onClose={() => setIsResultOpen(false)}
        shortUrl="https://furl.one/myshortenlink"
      />
    </section>
  )
}

export default Content
