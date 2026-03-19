function App() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-primary-500">Devcamp URL Shortener</h1>
      <p className="text-lg text-primary-500">
        Simplify, Organize, and Share: URL Management Made Easy
      </p>
      <form>
        <label className="font-semibold text-primary-500">Your long URL</label>
        <div className="flex gap-38">
          <input type="text" />
          <button className="bg-primary-500 text-white font-bold px-6 py-2 rounded-md">
            Shorten
          </button>
        </div>
      </form>
    </main>
  )
}

export default App
