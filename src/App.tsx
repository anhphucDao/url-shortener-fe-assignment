import { useState } from 'react'

function App() {
  const [url, setUrl] = useState('')
  const [shortened, setShortened] = useState('')
  const [showPopup, setShowPopup] = useState(false)
  const [copySuccess, setCopySuccess] = useState('')
  const [profileOpen, setProfileOpen] = useState(false)

  function handleShorten() {
    const normalizedUrl = url.trim()
    if (!normalizedUrl) {
      return
    }
    setShortened(normalizedUrl)
    setShowPopup(true)
    setCopySuccess('')
  }

  function handleCopy() {
    if (shortened) {
      navigator.clipboard.writeText(shortened)
      setCopySuccess('Copied!')
      setTimeout(() => setCopySuccess(''), 1200)
    }
  }

  return (
    <div className="min-h-screen bg-parchment text-rich-mahogany">
      <header className="border-b border-rich-mahogany/20 bg-parchment/95 backdrop-blur-md">
        <div className="mx-auto flex h-[108px] w-full max-w-[1920px] items-center justify-between px-6 sm:px-10 lg:px-16">
          <div className="text-1xl font-black tracking-[0.12em] text-brand-navy sm:text-2xl">
            <a href="https://fessior.com/">
              <img
                src="src/assets/devcamp_logo_navy 1.svg"
                className="w-auto h-full inline-block mr-8 hover:scale-120 transition"
              />
            </a>
            Fessior DevCamp 2026
          </div>
          <div className="relative flex w-full max-w-[240px] justify-end">
            <button
              type="button"
              onClick={() => setProfileOpen(prev => !prev)}
              className="flex cursor-pointer items-center gap-2 overflow-hidden rounded-full border border-rich-mahogany/40 bg-rich-mahogany/10 pr-5 text-base font-semibold text-rich-mahogany transition-transform duration-200 hover:scale-110"
              aria-haspopup="menu"
              aria-expanded={profileOpen}
              aria-label="Open profile menu"
            >
              <div className="h-12 w-12 flex-shrink-0 overflow-hidden rounded-full">
                <img
                  src="src/assets/profilePic.JPG"
                  className="h-full w-full object-cover"
                  alt="Profile avatar"
                />
              </div>

              <span className="ml-3 tracking-[0.08em]">dhp</span>
              <svg
                className={`w-4 h-4 transition-transform duration-200 ${profileOpen ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {profileOpen && (
              <div className="absolute right-0 top-[calc(100%+10px)] z-30 w-[220px] rounded-2xl border border-rich-mahogany/20 bg-parchment p-2 shadow-xl">
                <a
                  href="https://github.com/dhp-exe"
                  target="_blank"
                  rel="noopener"
                  className="block rounded-xl px-4 py-3 text-sm font-semibold text-rich-mahogany transition hover:bg-rich-mahogany/10"
                  onClick={() => setProfileOpen(false)}
                >
                  <a className="flex items-center gap-2">
                    <img src="src/assets/github_icon.svg" alt="GitHub" className="w-4 h-4" />
                    <span>Github</span>
                  </a>
                </a>

                <button
                  type="button"
                  className="flex w-full items-center gap-2 rounded-xl px-4 py-3 text-left text-sm font-semibold text-rich-mahogany transition hover:bg-rich-mahogany/10"
                >
                  <span aria-hidden="true" className="text-base text-rich-mahogany/80">
                    ⎋
                  </span>
                  <span>Logout</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </header>

      <main className="mx-auto flex min-h-[calc(100vh-108px)] w-full max-w-[1920px] items-center justify-center px-4 py-1 sm:px-8 lg:px-12">
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

              <form
                className="flex w-full items-center gap-4"
                onSubmit={e => {
                  e.preventDefault()
                  handleShorten()
                }}
              >
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
                    className="ml-3 h-full w-full border-l border-rich-mahogany/20 bg-transparent pl-3 text-base font-medium text-rich-mahogany outline-none"
                    type="url"
                    placeholder="Paste your long URL here"
                    value={url}
                    onChange={e => setUrl(e.target.value)}
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
      </main>

      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="relative w-[400px] overflow-hidden rounded-2xl bg-parchment shadow-2xl">
            <button
              onClick={() => setShowPopup(false)}
              aria-label="Close popup"
              className="absolute right-3 top-3 z-10 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-parchment text-rich-mahogany/70 shadow transition hover:scale-110 hover:text-rich-mahogany"
            >
              ✕
            </button>

            <div className="relative flex h-[180px] items-end justify-center bg-rich-mahogany">
              <div className="absolute top-12 rounded-xl bg-parchment p-3 shadow-lg">
                <img
                  src="https://api.qrserver.com/v1/create-qr-code/?size=160x160&data=example"
                  alt="qr"
                  className="w-[140px] h-[140px]"
                />
                <button className="absolute bottom-0 right-0 flex h-10 w-10 translate-x-1/2 translate-y-1/2 cursor-pointer items-center justify-center rounded-full border-2 border-parchment bg-rich-mahogany text-parchment transition hover:scale-110">
                  <img
                    src="src/assets/file_download.svg"
                    alt="Download"
                    className="w-4 h-4 invert"
                  />
                </button>
              </div>
            </div>

            <div className="pt-20 pb-6 px-6 flex flex-col items-center text-center gap-3">
              <h3 className="text-lg font-bold text-rich-mahogany">Link shortened!</h3>

              <p className="max-w-[260px] text-sm text-rich-mahogany/80">
                Click the download button to save the QR code, or copy the shortened URL below to
                share it with others.
              </p>

              <div className="w-full flex items-center gap-2 mt-3">
                <input
                  value={shortened}
                  readOnly
                  className="flex-1 rounded-lg border border-rich-mahogany/25 bg-parchment px-3 py-2 text-sm text-rich-mahogany"
                />
                <button
                  onClick={handleCopy}
                  className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg bg-rich-mahogany text-parchment transition hover:scale-110"
                >
                  <img src="src/assets/copy-outline.png" alt="Copy" className="w-4 h-4 invert" />
                </button>
              </div>

              {copySuccess && (
                <span className="text-xs font-semibold text-rich-mahogany">{copySuccess}</span>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
