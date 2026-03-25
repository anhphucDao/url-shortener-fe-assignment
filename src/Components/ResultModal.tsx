interface Props {
  shortenedUrl: string
  onClose: () => void
  onCopy: () => void
}

const ResultModal = ({ shortenedUrl, onClose, onCopy }: Props) => {
  if (!shortenedUrl) return null

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 backdrop-blur-sm">
      <div className="w-[400px] bg-white rounded-[32px] overflow-hidden shadow-2xl flex flex-col relative animate-in fade-in zoom-in duration-300">
        <div className="bg-[#0b2878] w-full p-8 flex flex-col items-center relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <div className="bg-white p-4 rounded-[20px] shadow-lg mt-4">
            <img
              src={`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${shortenedUrl}`}
              alt="QR Code"
              className="w-[160px] h-[160px]"
            />
          </div>

          {/* Nút Download */}
          <button className="absolute -bottom-6 w-12 h-12 rounded-full bg-white text-[#0b2878] flex items-center justify-center shadow-xl hover:scale-110 transition-transform border border-gray-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>
          </button>
        </div>

        <div className="bg-white w-full p-10 pt-12 flex flex-col items-center">
          <h3 className="text-2xl font-black text-[#0b2878]">Link shortened!</h3>

          <p className="text-center text-gray-400 text-sm mt-2 px-6 font-medium">
            Access the <span className="text-[#0b2878] font-bold">"My URL"</span> page to view
            statistics on your shortened links
          </p>

          <div className="w-full mt-8 flex items-center bg-[#f2f4f6] rounded-xl border border-gray-200 p-1">
            <div className="flex-1 px-4 py-2 truncate text-sm font-bold text-[#0b2878]">
              {shortenedUrl}
            </div>

            <button
              onClick={onCopy}
              className="bg-[#0b2878] text-white p-3 rounded-lg hover:bg-[#1a3a8a] transition-colors shadow-md"
              title="Copy to clipboard"
            >
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
                  d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ResultModal
