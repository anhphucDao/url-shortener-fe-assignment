import { QRCodeCanvas } from 'qrcode.react'
import { useRef } from 'react'
import copyIcon from '../assets/copy_outline.png'
import downloadIcon from '../assets/file_download.svg'
import { Button } from './Button'
import Input from './Input'

type QrModalProps = {
  shortened: string
  copySuccess: string
  onClose: () => void
  onCopy: () => void
}

function QrModal({ shortened, copySuccess, onClose, onCopy }: QrModalProps) {
  const qrCanvasRef = useRef<HTMLCanvasElement>(null)

  function handleDownloadQr() {
    const canvas = qrCanvasRef.current

    if (!canvas) return

    const pngUrl = canvas.toDataURL('image/png')
    const link = document.createElement('a')

    link.href = pngUrl
    link.download = 'shortened-url-qr.png'
    document.body.appendChild(link)
    link.click()
    link.remove()
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
      onClick={onClose}
    >
      <div
        className="relative w-[400px] overflow-hidden rounded-2xl bg-white shadow-2xl"
        onClick={e => e.stopPropagation()}
      >
        <Button
          variant="text"
          shape="circle"
          size="small"
          onClick={onClose}
          aria-label="Close popup"
          className="absolute right-3 top-3 z-10 bg-white text-brand-navy/70 shadow hover:text-brand-navy"
        >
          ✕
        </Button>

        <div className="relative flex h-[180px] items-end justify-center bg-brand-navy">
          <div className="absolute top-12 rounded-xl bg-white p-3 shadow-lg">
            <QRCodeCanvas
              ref={qrCanvasRef}
              value={shortened}
              size={140}
              bgColor="#FFFFFF"
              fgColor="#0B2878"
              level="M"
              className="h-[140px] w-[140px]"
            />
            <Button
              variant="contained"
              shape="circle"
              size="medium"
              type="button"
              onClick={handleDownloadQr}
              aria-label="Download QR code"
              className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 border-2 border-white"
            >
              <img src={downloadIcon} alt="Download" className="h-4 w-4 invert" />
            </Button>
          </div>
        </div>

        <div className="pt-20 pb-6 px-6 flex flex-col items-center text-center gap-3">
          <h3 className="text-lg font-bold text-brand-navy">Link shortened!</h3>

          <p className="max-w-[260px] text-sm text-brand-navy/80">
            Click the download button to save the QR code, or copy the shortened URL below to share
            it with others.
          </p>

          <div className="mt-3 flex w-full items-center gap-2">
            <Input variant="bordered" value={shortened} readOnly />
            <Button
              variant="contained"
              shape="square"
              size="medium"
              onClick={onCopy}
              aria-label="Copy shortened URL"
              className=""
            >
              <img src={copyIcon} alt="Copy" className="h-4 w-4 invert" />
            </Button>
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
