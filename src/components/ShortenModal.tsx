interface ShortenModalProps {
  isOpen: boolean
  onClose: () => void
}
const ShortenModal = ({ isOpen, onClose }: ShortenModalProps) => {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50  px-4">
      <div className="relative w-full max-w-md bg-white rounded-3xl overflow-hidden shadow-2xl ">
        <div
          className="bg-brand-navy h-40 w-full"
          style={{ clipPath: 'polygon(0 0, 100% 0, 100% 70%, 0 100%)' }}
        />

        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-white text-black z-50"
        >
          ✕
        </button>

        <div className="absolute top-12 left-1/2 -translate-x-1/2 z-40">
          <div className="bg-white p-4 rounded-2xl ">
            <img src="src/assets/realqr.png" alt="QR Code" className="w-32 h-32" />
            <button className="absolute -bottom-3 -right-3 bg-brand-navy text-white p-2.5 rounded-full shadow-lg ">
              <img src="src/assets/download.png" className="w-4 h-4 invert" alt="Download" />
            </button>
          </div>
        </div>

        {/* 4. NỘI DUNG (Content) */}
        <div className="pt-24 pb-10 px-8 text-center flex flex-col items-center">
          <h2 className="text-xl font-bold text-brand-navy mb-2 font-sans mt-4">Link shortened!</h2>
          <p className="text-xs text-brand-navy/70 mb-8 font-sans px-4">
            Access the "My URL" page to view statistics on your shortened links
          </p>

          <div className="flex items-center gap-3 w-full">
            <div className="flex-1 flex items-center p-1 rounded-xl border border-brand-navy">
              <input
                readOnly
                value="https://furl.one/myshortenlink"
                className="w-full bg-transparent px-3 py-2 text-sm text-brand-navy  font-medium"
              />
            </div>

            <button className="bg-brand-navy p-3.5 rounded-xl">
              <img src="src/assets/copy.png" className="w-4 h-4 invert" alt="Copy" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default ShortenModal
