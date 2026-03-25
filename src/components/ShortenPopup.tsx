interface ShortenPopupProps {
  isOpen: boolean
  onClose: () => void
  shortenedUrl?: string
  qrCode?: string
  downloadIcon?: string
  copyIcon?: string
}

export function ShortenPopup({
  isOpen,
  onClose,
  shortenedUrl = 'https://furl.one/myshortenlink',
  qrCode = '/assets/SampleQR.svg',
  downloadIcon = '/assets/DowVector.svg',
  copyIcon = '/assets/CopyVector.svg',
}: ShortenPopupProps) {
  if (!isOpen) return null

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(shortenedUrl)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  const handleDownload = () => {
    try {
      const link = document.createElement('a')
      link.href = qrCode
      link.download = 'qrcode.svg'
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      console.log('QR code downloaded successfully')
    } catch (err) {
      console.error('Failed to download QR code:', err)
    }
  }

  return (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="relative bg-white rounded-2xl py-8 w-[350px] mx-2 pointer-events-auto overflow-hidden">
        <button
          onClick={onClose}
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
              <img src={qrCode} className="w-full h-full" />
              <button
                onClick={handleDownload}
                className="absolute -bottom-3 -right-3 w-10 h-10 bg-primary-500 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-primary-600 transition-colors"
              >
                <img src={downloadIcon} alt="Download" className="w-4 h-4" />
              </button>
            </div>
          </div>

          <h2 className="text-xl font-extrabold text-primary-500 mb-2">Link shortened!</h2>
          <p className="text-sm text-primary-500 mb-6">
            Access the 'My URL' page to view statistics on your shortened links
          </p>
          <div className="px-4">
            <div className="flex items-center gap-2">
              <div className="flex-1 bg-gray-100 rounded-lg px-4 py-3 flex items-center border border-blue-800">
                <input
                  type="text"
                  value={shortenedUrl}
                  readOnly
                  className="flex-1 bg-transparent outline-none text-sm text-primary-500 font-semibold"
                />
              </div>
              <button
                onClick={handleCopy}
                className="bg-primary-500 text-white p-3 rounded-lg hover:bg-primary-600 transition-colors"
              >
                <img src={copyIcon} alt="Copy" className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
