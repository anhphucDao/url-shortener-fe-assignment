import { QRCodeCanvas } from 'qrcode.react'
import { type RefObject } from 'react'
import copyIcon from '../assets/copy-outline.png'
import downloadIcon from '../assets/file_download.svg'

type QrModalProps = {
  shortened: string
  copySuccess: string
  canvasRef: RefObject<HTMLCanvasElement | null>
  onClose: () => void
  onCopy: () => void
  onDownload: () => void
}

function QrModal({ shortened, copySuccess, canvasRef, onClose, onCopy, onDownload }: QrModalProps) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
      onClick={onClose}
    >
      <div
        className="relative w-[400px] overflow-hidden rounded-2xl bg-white shadow-2xl"
        onClick={e => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close popup"
          className="absolute right-3 top-3 z-10 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-white text-brand-navy/70 shadow transition hover:scale-110 hover:text-brand-navy"
        >
          ✕
        </button>

        <div className="relative flex h-[180px] items-end justify-center bg-brand-navy">
          <div className="absolute top-12 rounded-xl bg-white p-3 shadow-lg">
            <QRCodeCanvas
              ref={canvasRef}
              value={shortened}
              size={140}
              bgColor="#FFFFFF"
              fgColor="#0B2878"
              level="M"
              className="h-[140px] w-[140px]"
            />
            <button
              type="button"
              onClick={onDownload}
              aria-label="Download QR code"
              className="absolute bottom-0 right-0 flex h-10 w-10 translate-x-1/2 translate-y-1/2 cursor-pointer items-center justify-center rounded-full border-2 border-white bg-brand-navy text-white transition hover:scale-110"
            >
              <img src={downloadIcon} alt="Download" className="h-4 w-4 invert" />
            </button>
          </div>
        </div>

        <div className="pt-20 pb-6 px-6 flex flex-col items-center text-center gap-3">
          <h3 className="text-lg font-bold text-brand-navy">Link shortened!</h3>

          <p className="max-w-[260px] text-sm text-brand-navy/80">
            Click the download button to save the QR code, or copy the shortened URL below to share
            it with others.
          </p>

          <div className="mt-3 flex w-full items-center gap-2">
            <input
              value={shortened}
              readOnly
              className="flex-1 rounded-lg border border-brand-navy/25 bg-white px-3 py-2 text-sm text-brand-navy"
            />
            <button
              onClick={onCopy}
              className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg bg-brand-navy text-white transition hover:scale-110"
            >
              <img src={copyIcon} alt="Copy" className="h-4 w-4 invert" />
            </button>
          </div>

          {copySuccess && (
            <span className="text-xs font-semibold text-brand-navy">{copySuccess}</span>
          )}
        </div>
      </div>
    </div>
  )
}

export default QrModal
