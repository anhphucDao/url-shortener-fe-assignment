function App() {
  return (
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
              <input type="text" className="flex-1" />
              <button className="bg-primary-500 text-white font-bold px-6 py-2 rounded-md">
                Shorten
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  )
}

export default App
