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
    <div className="min-h-screen bg-[radial-gradient(circle_at_20%_20%,#ddeeff_0%,#f8fbff_40%,#ffffff_100%)] text-neutral-900">
      <header className="border-b border-neutral-200/70 bg-white/70 backdrop-blur-md">
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
              className="flex cursor-pointer items-center overflow-hidden rounded-full border border-brand-blue/100 bg-brand-blue/10 pr-5 text-base font-semibold text-brand-blue transition-transform duration-200 hover:scale-110 gap-2"
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
              <div className="absolute right-0 top-[calc(100%+10px)] z-30 w-[220px] rounded-2xl border border-brand-blue/20 bg-white p-2 shadow-xl">
                <a
                  href="https://github.com/dhp-exe"
                  target="_blank"
                  rel="noopener"
                  className="block rounded-xl px-4 py-3 text-sm font-semibold text-brand-navy transition hover:bg-brand-blue/10"
                  onClick={() => setProfileOpen(false)}
                >
                  <a className="flex items-center gap-2">
                    <img src="src/assets/github_icon.svg" alt="GitHub" className="w-4 h-4" />
                    <span>Github</span>
                  </a>
                </a>

                <button
                  type="button"
                  className="flex w-full items-center gap-2 rounded-xl px-4 py-3 text-left text-sm font-semibold text-brand-navy transition hover:bg-brand-blue/10"
                >
                  <span aria-hidden="true" className="text-base text-brand-navy/80">
                    ⎋
                  </span>
                  <span>Logout</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </header>

      <main className="mx-auto flex min-h-[calc(100vh-108px)] w-full max-w-[1920px] items-center justify-center px-4 py-8 sm:px-8 lg:px-12">
        <section className="w-full max-w-[832px] rounded-[28px] border border-white/70 bg-white/80 p-6 shadow-[0_24px_80px_-20px_rgba(11,40,120,0.35)] backdrop-blur-sm sm:p-10 lg:h-[301px]">
          <div className="flex h-full flex-col justify-between gap-5">
            <h2 className="text-center mt-2 text-3xl font-black text-brand-navy sm:text-4xl">
              Devcamp URL Shortener
            </h2>
            <p className="text-center font-semibold uppercase tracking-[0.08em] text-brand-gray">
              Shorten links in one click
            </p>
            <form
              className="flex flex-col gap-4 sm:flex-row"
              onSubmit={e => {
                e.preventDefault()
                handleShorten()
              }}
            >
              <input
                className="h-14 w-full rounded-2xl border border-neutral-200 bg-white px-5 text-base font-medium text-neutral-900 outline-none transition focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/20"
                type="url"
                placeholder="Paste your long URL here"
                value={url}
                onChange={e => setUrl(e.target.value)}
                required
              />
              <button
                className="cursor-pointer hover:scale-110 transition h-14 rounded-2xl bg-brand-navy px-8 text-base font-bold text-white transition hover:bg-info-700 focus:outline-none focus:ring-4 focus:ring-brand-blue/30"
                type="submit"
              >
                Shorten
              </button>
            </form>
          </div>
        </section>
      </main>

      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="relative w-[400px] rounded-2xl overflow-hidden shadow-2xl bg-white">
            <button
              onClick={() => setShowPopup(false)}
              aria-label="Close popup"
              className="cursor-pointer absolute top-3 right-3 w-8 h-8 rounded-full bg-white shadow flex items-center justify-center text-gray-600 hover:text-black z-10 hover:scale-110 transition"
            >
              ✕
            </button>

            <div className="bg-brand-navy h-[180px] flex items-end justify-center relative">
              <div className="absolute top-12 bg-white p-3 rounded-xl shadow-lg">
                <img
                  src="https://api.qrserver.com/v1/create-qr-code/?size=160x160&data=example"
                  alt="qr"
                  className="w-[140px] h-[140px]"
                />
                <button className="cursor-pointer hover:scale-110 transition absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 w-10 h-10 rounded-full bg-brand-navy border-2 border-white flex items-center justify-center text-white">
                  <img
                    src="src/assets/file_download.svg"
                    alt="Download"
                    className="w-4 h-4 invert"
                  />
                </button>
              </div>
            </div>

            <div className="pt-20 pb-6 px-6 flex flex-col items-center text-center gap-3">
              <h3 className="text-lg font-bold text-brand-navy">Link shortened!</h3>

              <p className="text-sm text-brand-gray max-w-[260px]">
                Access the “My URL” page to view statistics on your shortened links
              </p>

              <div className="w-full flex items-center gap-2 mt-3">
                <input
                  value={shortened}
                  readOnly
                  className="flex-1 rounded-lg border border-gray-300 px-3 py-2 text-sm"
                />
                <button
                  onClick={handleCopy}
                  className="cursor-pointer hover:scale-110 transition w-10 h-10 rounded-lg bg-brand-navy text-white flex items-center justify-center"
                >
                  <img src="src/assets/copy-outline.png" alt="Copy" className="w-4 h-4 invert" />
                </button>
              </div>

              {copySuccess && (
                <span className="text-xs text-green-600 font-semibold">{copySuccess}</span>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
