interface Props {
  url: string
  setUrl: (val: string) => void
  onShorten: () => void
}

const UrlInput = ({ url, setUrl, onShorten }: Props) => {
  return (
    <div className="w-full max-w-[800px] min-h-[119px] bg-white rounded-[40px] border border-gray-200 p-8 shadow-lg flex flex-col items-start space-y-4">
      <div className="w-full max-w-[700px] mb-1">
        <h3 className="text-[18px] font-bold text-[#0b2878] ml-1">Your long URL</h3>
      </div>

      {/* Khối Input và Button */}
      <div className="w-full max-w-[700px] flex items-stretch gap-4">
        <div className="flex-[3] flex items-center bg-white rounded-xl border border-gray-300 px-4 py-1 shadow-sm transition-all focus-within:border-[#cbcfdd] focus-within:ring-1 focus-within:ring-[#c8cdd7]">
          <div className="text-[#0b2878] opacity-40 ml-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
              />
            </svg>
          </div>

          <input
            type="text"
            value={url}
            onChange={e => setUrl(e.target.value)}
            placeholder="Input the URL you want to shorten"
            className="flex-1 px-3 py-3 text-base outline-none text-[#0b2878] font-bold placeholder:text-gray-300 bg-transparent"
          />
        </div>

        {/* Nút Shorten */}
        <button
          onClick={onShorten}
          className="flex-1 bg-[#0b2878] hover:bg-[#1a3a8a] text-white font-black text-lg py-4 rounded-xl transition-all active:scale-95 shadow-md"
        >
          Shorten
        </button>
      </div>
    </div>
  )
}

export default UrlInput
