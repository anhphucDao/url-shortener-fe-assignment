function App() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center">
      <div className="text-center mb-10">
        <h1 className="text-5xl font-bold text-primary-500 mb-4">URL Shortener</h1>
        <h2 className="text-lg text-primary-300">
          Simplify, Organize, and Share: URL Management Made Easy
        </h2>
      </div>

      <div className="bg-white p-8 rounded-2xl shadow-2xl shadow-neutral-200/50 w-full max-w-4xl">
        <label className="block font-bold text-primary-500 mb-4">Your long URL</label>

        <div className="flex gap-4">
          <div className="flex-1 flex items-center border border-neutral-200 rounded-lg px-4 focus-within:border-primary-500 focus-within:ring-1 focus-within:ring-primary-500 transition-all bg-white">
            <svg
              className="w-5 h-5 text-neutral-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
              />
            </svg>

            <input
              type="text"
              placeholder="Input the URL you want to shorten"
              className="w-full py-4 px-3 outline-none text-neutral-800 placeholder-neutral-300"
            />
          </div>

          <MyButton text="Shorten" onClick={() => alert('Shorten button clicked!')} />
        </div>
      </div>
    </main>
  )
}

interface ButtonProps {
  text: string
  onClick: () => void
}

const MyButton = ({ text, onClick }: ButtonProps) => {
  return (
    <button
      className="px-4 py-2 bg-primary-500 text-white rounded hover:bg-primary-600 transition-colors"
      onClick={onClick}
    >
      {text}
    </button>
  )
}

export default App
