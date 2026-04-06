type ShortenFormProps = {
  url: string
  onUrlChange: (value: string) => void
  onShorten: () => void
}

function ShortenForm(props: ShortenFormProps) {
  return (
    // Form input
    <div className="border border-gray-200 rounded-2xl shadow-sm p-6 w-full max-w-2xl">
      <p className="text-[#0B2878] font-semibold mb-4">Your long URL</p>
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2 border border-gray-200 rounded-lg px-3 py-2 flex-1">
          <img src="/Vector.svg" className="w-8 h-8" />
          <div className="w-px h-5 bg-gray-300" />
          {/* phần nhập link */}
          <input
            type="text"
            placeholder="Input the URL you want to shorten"
            value={props.url}
            onChange={e => props.onUrlChange(e.target.value)}
            className="flex-1 outline-none text-sm text-gray-500"
          />
        </div>

        {/* nút Shorten */}

        <button
          onClick={props.onShorten}
          className="bg-[#0B2878] text-white px-6 py-2 rounded-lg text-sm font-medium hover:opacity-90"
        >
          Shorten
        </button>
      </div>
    </div>
  )
}

export default ShortenForm
