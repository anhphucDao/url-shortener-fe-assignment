import type { FormEvent } from 'react'

type UrlFormProps = {
  url: string
  onUrlChange: (value: string) => void
  onSubmit: (e: FormEvent<HTMLFormElement>) => void
}

function UrlForm({ url, onUrlChange, onSubmit }: UrlFormProps) {
  return (
    <section className="flex w-full max-w-[832px] flex-col justify-between gap-5 lg:h-[301px]">
      <h2 className="text-center text-4xl font-black text-rich-mahogany sm:text-5xl">
        Devcamp URL Shortener
      </h2>
      <p className="mt-5 text-center text-sm text-rich-mahogany/90 sm:text-xl">
        Simple, Easy, Organized. Shortens the link in one click
      </p>

      <div className="w-full max-w-[800px] rounded-2xl border border-rich-mahogany/15 bg-parchment p-5 shadow-[0_20px_60px_-22px_rgba(55,27,23,0.35)] backdrop-blur-sm sm:p-7">
        <div className="mx-auto w-full max-w-[744px]">
          <p className="mb-4 font-extrabold text-rich-mahogany">Your long URL</p>

          <form className="flex w-full items-center gap-4" onSubmit={onSubmit}>
            <div className="flex h-14 min-w-0 flex-1 items-center rounded-xl border border-rich-mahogany/20 bg-parchment px-4">
              <span className="text-rich-mahogany/90" aria-hidden="true">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M10 13a5 5 0 0 0 7.07 0l2.83-2.83a5 5 0 0 0-7.07-7.07L10 4" />
                  <path d="M14 11a5 5 0 0 0-7.07 0L4.1 13.83a5 5 0 0 0 7.07 7.07L14 20" />
                </svg>
              </span>
              <input
                className="ml-3 h-full w-full border-l border-rich-mahogany/20 bg-transparent pl-3 text-base font-medium text-rich-mahogany focus-within:ring-2 focus-within:ring-rich-mahogany"
                type="url"
                placeholder="Paste your long URL here"
                value={url}
                onChange={e => onUrlChange(e.target.value)}
                required
              />
            </div>

            <button
              className="h-14 min-w-[132px] flex-shrink-0 cursor-pointer rounded-xl bg-rich-mahogany px-8 text-3xl font-bold text-parchment transition hover:scale-105 hover:bg-rich-mahogany-dark focus:outline-none focus:ring-4 focus:ring-rich-mahogany/30 sm:text-base"
              type="submit"
            >
              Shorten
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default UrlForm
