import { useState } from 'react'
import './App.css'

function App() {
  const [showResult, setShowResult] = useState(false)
  const shortLink = 'https://furl.one/myshortenlink'

  const handleCopy = () => {
    navigator.clipboard.writeText(shortLink)
    alert('Đã copy thành công!')
  }

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-white">
      <h1 className="font-sans text-[60px] font-bold text-[#0B2878] mb-[10px]">
        Devcamp URL Shortener
      </h1>
      <h2 className="font-sans text-[28px] text-[#0B2878] mb-[10px]">
        Simplify, Organize, and Share: URL Management Made Easy
      </h2>

      <div className="input-card">
        <label className="font-sans text-[20px] input-label text-[#0B2878] font-bold">
          Your long URL
        </label>

        <div className="flex input-flex-container items-center gap-4">
          <div className="flex input-group text-[#0B2878] flex-1">
            <svg
              width="35"
              height="35"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.9 12C3.9 10.29 5.29 8.9 7 8.9H11V7H7C4.24 7 2 9.24 2 12C2 14.76 4.24 17 7 17H11V15.1H7C5.29 15.1 3.9 13.71 3.9 12ZM8 13H16V11H8V13ZM17 7H13V8.9H17C18.71 8.9 20.1 10.29 20.1 12C20.1 13.71 18.71 15.1 17 15.1H13V17H17C19.76 17 22 14.76 22 12C22 9.24 19.76 7 17 7Z"
                fill="#0B2878"
                fillOpacity="0.87"
              />
            </svg>
            <div className="w-[3px] h-6 bg-gray-200 mx-3"></div>
            <input
              type="text"
              placeholder="Input the URL you want to shorten"
              className="url-input w-full outline-none"
            />
          </div>

          <button
            onClick={() => setShowResult(true)}
            className="flex shorten-btn font-bold font-sans text-[#ddd]"
          >
            Shorten
          </button>
        </div>

        {showResult && (
          <div className="modal-overlay" onClick={() => setShowResult(false)}>
            <div
              className="modal-content relative overflow-hidden bg-white rounded-2xl"
              onClick={e => e.stopPropagation()}
            >
              <button className="close-btn z-50" onClick={() => setShowResult(false)}>
                ✕
              </button>
              <div
                className="modal-header-blue"
                style={{
                  backgroundColor: '#0B2878',
                  height: '160px',
                  clipPath: 'polygon(0 0, 100% 0, 100% 85%, 0 100%)',
                }}
              >
                <div className="pattern-left">
                  <svg
                    width="52"
                    height="80"
                    viewBox="0 0 52 80"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g opacity="0.3">
                      <rect
                        x="-0.5"
                        y="0.5"
                        width="16.7778"
                        height="3.44444"
                        transform="matrix(-1 0 0 1 51 0)"
                        fill="white"
                        stroke="white"
                      />
                      <rect
                        x="0.5"
                        y="0.5"
                        width="16.7778"
                        height="3.44444"
                        transform="matrix(0 1 1 0 47.5556 0)"
                        fill="white"
                        stroke="white"
                      />
                      <rect
                        x="51.5"
                        y="79.5"
                        width="16.7778"
                        height="3.44444"
                        transform="rotate(180 51.5 79.5)"
                        fill="white"
                        stroke="white"
                      />
                      <rect
                        x="48.0556"
                        y="79.5"
                        width="16.7778"
                        height="3.44444"
                        transform="rotate(-90 48.0556 79.5)"
                        fill="white"
                        stroke="white"
                      />
                      <rect
                        x="-18.6111"
                        y="9.38892"
                        width="25.6667"
                        height="25.6667"
                        fill="white"
                        stroke="white"
                      />
                      <rect
                        x="16.9444"
                        y="9.38892"
                        width="25.6667"
                        height="25.6667"
                        fill="white"
                        stroke="white"
                      />
                      <rect
                        x="16.9444"
                        y="44.9445"
                        width="7.88889"
                        height="7.88889"
                        fill="white"
                        stroke="white"
                      />
                      <rect
                        x="16.9444"
                        y="62.7222"
                        width="7.88889"
                        height="7.88889"
                        fill="white"
                        stroke="white"
                      />
                      <rect
                        x="25.8333"
                        y="53.8333"
                        width="7.88889"
                        height="7.88889"
                        fill="white"
                        stroke="white"
                      />
                      <rect
                        x="34.7222"
                        y="44.9445"
                        width="7.88889"
                        height="7.88889"
                        fill="white"
                        stroke="white"
                      />
                      <rect
                        x="34.7222"
                        y="62.7222"
                        width="7.88889"
                        height="7.88889"
                        fill="white"
                        stroke="white"
                      />
                      <rect
                        x="-18.6111"
                        y="44.9445"
                        width="25.6667"
                        height="25.6667"
                        fill="white"
                        stroke="white"
                      />
                    </g>
                  </svg>
                </div>
                <div className="pattern-right">
                  <svg
                    width="52"
                    height="80"
                    viewBox="0 0 52 80"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g opacity="0.2">
                      <rect
                        x="0.5"
                        y="0.5"
                        width="16.7778"
                        height="3.44444"
                        fill="white"
                        stroke="white"
                      />
                      <rect
                        x="3.94446"
                        y="0.5"
                        width="16.7778"
                        height="3.44444"
                        transform="rotate(90 3.94446 0.5)"
                        fill="white"
                        stroke="white"
                      />
                      <rect
                        x="0.5"
                        y="-0.5"
                        width="16.7778"
                        height="3.44444"
                        transform="matrix(1 0 0 -1 0 79)"
                        fill="white"
                        stroke="white"
                      />
                      <rect
                        x="-0.5"
                        y="-0.5"
                        width="16.7778"
                        height="3.44444"
                        transform="matrix(0 -1 -1 0 3.44446 79)"
                        fill="white"
                        stroke="white"
                      />
                      <rect
                        x="9.38889"
                        y="9.38892"
                        width="25.6667"
                        height="25.6667"
                        fill="white"
                        stroke="white"
                      />
                      <rect
                        x="44.9445"
                        y="9.38892"
                        width="25.6667"
                        height="25.6667"
                        fill="white"
                        stroke="white"
                      />
                      <rect
                        x="44.9445"
                        y="44.9445"
                        width="7.88889"
                        height="7.88889"
                        fill="white"
                        stroke="white"
                      />
                      <rect
                        x="44.9445"
                        y="62.7222"
                        width="7.88889"
                        height="7.88889"
                        fill="white"
                        stroke="white"
                      />
                      <rect
                        x="9.38889"
                        y="44.9445"
                        width="25.6667"
                        height="25.6667"
                        fill="white"
                        stroke="white"
                      />
                    </g>
                  </svg>
                </div>
              </div>
              <div className="absolute top-[160px] left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                <div className="relative bg-white p-3 rounded-2xl shadow-lg">
                  <img
                    src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${shortLink}`}
                    alt="QR"
                    className="w-[150px] h-[150px] rounded-lg"
                  />
                  <div className="download-button">
                    <svg
                      width="28"
                      height="28"
                      viewBox="0 0 28 28"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18.6667 15.1667H15.1667V3.5H12.8333V15.1667H9.33332L14 19.8333L18.6667 15.1667ZM4.66666 22.1667V24.5H23.3333V22.1667H4.66666Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="modal-body pt-24 pb-8 flex flex-col items-center">
                <h3 className="font-bold text-[24px] font-sans text-[#0B2878] mb-2">
                  Link shortened!
                </h3>
                <p className="text-[#0B2878] text-[14px] font-sans mb-6 text-center px-8">
                  Access the “My URL” page to view statistics on your shortened links
                </p>

                <div className="flex items-center gap-2 w-full px-8">
                  <div className="copy-group flex-1">
                    <input
                      readOnly
                      value={shortLink}
                      className="font-sans font-medium text-[14px] modal-input w-full border border-[#0B2878] rounded-lg px-3 h-[45px]"
                    />
                  </div>
                  <button
                    onClick={handleCopy}
                    className="bg-[#0B2878] rounded-lg w-[45px] h-[45px] flex items-center justify-center shrink-0"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 19 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14 0H2C0.9 0 0 0.9 0 2V16H2V2H14V0ZM17 4H6C4.9 4 4 4.9 4 6V20C4 21.1 4.9 22 6 22H17C18.1 22 19 21.1 19 20V6C19 4.9 18.1 4 17 4ZM17 20H6V6H17V20Z"
                        fill="white"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  )
}

export default App
