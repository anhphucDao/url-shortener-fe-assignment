function App() {
  return (
    <>
      <header className="w-full bg-white px-6 py-4 flex items-center justify-between">
        <div className="text-xl font-bold text-primary-500">
          <img src="./src/assets/devcamp_logo_navy 1.svg" alt="Devcamp Logo" />
        </div>

        <div className="flex items-center gap-2 w-[200px] border-2 border-blue-0B2878 rounded-full bg-gray-100">
          <button className="text-primary-500 font-semibold">
            <img src="./src/assets/Vector.svg" alt="Vector" />
          </button>

          <div className="flex flex-col">
            <span className="text-sm text-gray-500 leading-none">Personal</span>
            <span className="text-xl font-semibold text-gray-500 leading-tight">Username</span>
          </div>
        </div>
      </header>

      <main className="min-h-screen flex flex-col items-center justify-center mt-[20px]">
        <h1 className="text-4xl font-bold text-primary-500 mb-[10px]">Devcamp URL Shortener</h1>

        <p className="text-lg text-primary-500 mb-[10px]">
          Simplify, Organize, and Share: URL Management Made Easy
        </p>

        <div
          style={{
            backgroundColor: 'transparent',
            padding: '16px',
            width: '600px',
            height: '70px',
          }}
        >
          <div
            className="bg-white rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.08),0_-2px_10px_rgba(0,0,0,0.05)] p-6"
            style={{
              padding: '20px 28px',
            }}
          >
            <form>
              <label className="font-semibold text-primary-500">Your long URL</label>

              <div className="flex justify-end gap-4">
                <div className="w-[608px] h-[42px] border border-gray-300 rounded-lg flex items-center px-3 bg-gray-50">
                  <img src="./src/assets/VectorLink.svg" alt="link" className="w-4 h-4 mr-3" />

                  <input
                    type="text"
                    placeholder="Input the URL you want to shorten"
                    className="flex-1 bg-transparent outline-none text-sm text-primary-300 placeholder-gray-400"
                  />
                </div>

                <button className="bg-primary-500 text-white font-bold px-6 py-2 rounded-md">
                  Shorten
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </>
  )
}

export default App
