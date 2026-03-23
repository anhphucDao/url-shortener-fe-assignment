import { useState } from 'react'

function App() {
  const [showPopup, setShowPopup] = useState(false)
  return (
    <>
      <header className="w-full bg-white px-6 py-4 flex items-center justify-between">
        <div className="text-xl font-bold text-primary-500">
          <img src="./src/assets/devcamp_logo_navy 1.svg" alt="Devcamp Logo" />
        </div>

        <div className="flex items-center gap-2 w-[200px] border-2 border-[#0B2878] rounded-full bg-gray-100">
          <button className="text-primary-500 font-semibold">
            <img src="./src/assets/ProfileVector.svg" alt="Vector" />
          </button>

          <div className="flex flex-col">
            <span className="text-sm text-gray-500 leading-none">Personal</span>
            <span className="text-xl font-semibold text-gray-500 leading-tight">Username</span>
          </div>
        </div>
      </header>

      <main className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-primary-500 mb-[10px]">Devcamp URL Shortener</h1>

        <p className="text-lg text-primary-500 mb-[10px]">
          Simplify, Organize, and Share: URL Management Made Easy
        </p>

        <div className="p-4 w-[600px]">
          <div
            className="bg-white rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.08),0_-2px_10px_rgba(0,0,0,0.05)] p-6"
            style={{
              padding: '20px 28px',
            }}
          >
            <form className="flex flex-col gap-2" onSubmit={e => e.preventDefault()}>
              <label className="font-semibold text-primary-500">Your long URL</label>

              <div className="flex items-center gap-10">
                <div className="flex-1 h-[42px] border border-gray-300 rounded-lg flex items-center px-3 bg-gray-50">
                  <img src="./src/assets/VectorLink.svg" alt="link" className="w-4 h-4 mr-3" />

                  <input
                    type="text"
                    placeholder="Input the URL you want to shorten"
                    className="flex-1 bg-transparent outline-none text-sm text-primary-300 placeholder-gray-400"
                  />
                </div>

                <button
                  className="bg-primary-500 text-white font-bold px-6 py-2 rounded-md"
                  onClick={() => setShowPopup(true)}
                >
                  Shorten
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>

      {showPopup && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="relative bg-white rounded-2xl py-8 w-[350px] mx-2 pointer-events-auto overflow-hidden">
            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 z-20"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <div className="relative z-10 text-center">
              <div className="relative h-40 -mt-8 mb-12">
                <div className="absolute inset-0 bg-blue-900 [clip-path:polygon(0_0,100%_0,100%_70%,0_100%)]"></div>

                <div className="w-40 h-40 absolute left-1/2 top-[70%] -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg p-2 shadow-lg">
                  <img src="./src/assets/SampleQR.svg" className="w-full h-full" />
                  {/* Download button */}
                  <button className="absolute -bottom-3 -right-3 w-10 h-10 bg-primary-500 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-primary-600 transition-colors">
                    <img src="./src/assets/DowVector.svg" alt="Download" className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <h2 className="text-xl font-extrabold text-primary-500 mb-2">Link shortened!</h2>
              <p className="text-sm text-primary-500 mb-6">
                Access the 'My URL' page to view statistics on your shortened links
              </p>
              <div className="px-4">
                <div className="flex items-center gap-2 mb-6">
                  <div className="flex-1 bg-gray-100 rounded-lg px-4 py-3 flex items-center border border-blue-800">
                    <input
                      type="text"
                      value="https://furl.one/myshortenlink"
                      readOnly
                      className="flex-1 bg-transparent outline-none text-sm text-primary-500 font-semibold"
                    />
                  </div>
                  <button className="bg-primary-500 text-white p-3 rounded-lg hover:bg-primary-600 transition-colors">
                    <img src="./src/assets/CopyVector.svg" alt="Copy" className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default App
