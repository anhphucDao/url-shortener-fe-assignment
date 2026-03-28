import type { FormEvent } from 'react'
import Input from './Input'

type UrlFormProps = {
  url: string
  loading: boolean
  onUrlChange: (value: string) => void
  onSubmit: (e: FormEvent<HTMLFormElement>) => void
}

function UrlForm({ url, loading, onUrlChange, onSubmit }: UrlFormProps) {
  return (
    <section className="flex w-full max-w-[832px] flex-col justify-between gap-5 lg:h-[301px]">
      <h2 className="text-center text-4xl font-black text-brand-navy sm:text-5xl">
        Devcamp URL Shortener
      </h2>
      <p className="mt-5 text-center text-sm text-brand-navy/90 sm:text-xl">
        Simple, Easy, Organized. Shortens the link in one click
      </p>

      <div className="w-full max-w-[800px] rounded-2xl border border-brand-navy/15 bg-white p-5 shadow-[0_20px_60px_-22px_rgba(11,40,120,0.35)] backdrop-blur-sm sm:p-7">
        <div className="mx-auto w-full max-w-[744px]">
          <p className="mb-4 font-extrabold text-brand-navy">Your long URL</p>

          <form
            className="flex w-full flex-col gap-4 sm:flex-row sm:items-center"
            onSubmit={onSubmit}
          >
            <div className="flex h-14 w-full min-w-0 flex-1 items-center rounded-xl border border-brand-navy/20 bg-white px-4">
              <span className="text-brand-navy/90" aria-hidden="true">
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
              <Input
                variant="url"
                type="url"
                placeholder="Paste your long URL here"
                value={url}
                onChange={e => onUrlChange(e.target.value)}
                required
              />
            </div>

            <button
              className="cursor-pointer flex h-14 w-full flex-shrink-0 items-center justify-center gap-2 rounded-xl bg-brand-navy px-8 text-2xl font-bold text-white transition hover:scale-105 hover:bg-brand-navy/90 focus:outline-none focus:ring-4 focus:ring-brand-navy/30 disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:scale-100 disabled:hover:bg-brand-navy sm:w-auto sm:min-w-[132px] sm:text-base"
              type="submit"
              disabled={loading}
              aria-busy={loading}
            >
              {loading && (
                <span
                  className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white"
                  aria-hidden="true"
                />
              )}
              <span>{loading ? 'Shortening...' : 'Shorten'}</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default UrlForm
