import { useState, useRef } from 'react'
import { QRCodeCanvas } from 'qrcode.react'
import { CopyButton, CloseButton, Button, SlantedDivider, CornerDecorations } from '../common'
import { DownloadIcon } from '../icons'
import { downloadCanvas } from '../../utils/url'

interface QRPageProps {
  shortUrl: string
  originalUrl: string
  onClose: () => void
}

function QRPage({ shortUrl, onClose }: QRPageProps) {
  const [copied, setCopied] = useState(false)
  const qrCanvasRef = useRef<HTMLCanvasElement>(null)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(shortUrl)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      alert('Failed to copy link.')
    }
  }

  const handleDownloadQR = () => {
    const canvas = qrCanvasRef.current
    if (!canvas) return
    downloadCanvas(canvas, 'short-link-qr.png')
  }

  const headingText = 'Link shortened!'
  const descriptionText = 'Access the "My URL" page to view statistics on your shortened links'

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-[2px] px-4">
      <div className="relative w-full max-w-[360px] overflow-hidden rounded-2xl bg-white shadow-2xl">
        <CloseButton onClick={onClose} />

        <div className="relative h-44 bg-[#0B2A7B]">
          <CornerDecorations />
          <SlantedDivider className="absolute bottom-0 left-0" />
        </div>

        <div className="absolute left-1/2 top-[34px] z-10 -translate-x-1/2">
          <div className="rounded-2xl bg-white p-4 shadow-xl border border-gray-100">
            <QRCodeCanvas
              ref={qrCanvasRef}
              value={shortUrl}
              size={160}
              bgColor="#ffffff"
              fgColor="#000000"
              level="H"
              includeMargin={false}
            />
          </div>

          <Button
            onClick={handleDownloadQR}
            variant="icon"
            size="sm"
            title="Download QR"
            className="absolute -bottom-3 -right-3 shadow-lg"
          >
            <DownloadIcon />
          </Button>
        </div>

        <div className="px-6 pb-6 pt-24 text-center">
          <h2 className="text-2xl font-extrabold text-[#0B2A7B]">{headingText}</h2>

          <p className="mt-2 text-sm text-[#1E3A8A] leading-relaxed">{descriptionText}</p>

          <div className="mt-6 flex items-center gap-2">
            <input
              type="text"
              readOnly
              value={shortUrl}
              className="flex-1 rounded-xl border border-[#0B2A7B] px-4 py-3 text-sm text-[#0B2A7B] outline-none bg-white"
            />

            <CopyButton isCopied={copied} onClick={handleCopy} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default QRPage
