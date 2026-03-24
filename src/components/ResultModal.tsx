import { QRCodeSVG } from 'qrcode.react'
import { X, Copy, Check, QrCodeIcon, Download } from 'lucide-react'
import Button from './Button'
import Input from './Input'
import { useCopyToClipboard } from '../hooks/useCopyToClipboard'
export interface ResultModalProps {
  isOpen: boolean
  onClose: () => void
  shortUrl: string
}

export default function ResultModal({ isOpen, onClose, shortUrl }: ResultModalProps) {
  const { isCopied, copy, error } = useCopyToClipboard()

  if (!isOpen) return null

  const handleCopyClick = () => {
    copy(shortUrl)
  }

  const renderCopyIcon = isCopied ? <Check className="w-6 h-6" /> : <Copy className="w-6 h-6" />

  return (
    <div className="fixed inset-0 bg-neutral-900/40 flex justify-center items-center z-50 p-4">
      <div className="bg-white rounded-2xl w-full max-w-sm flex flex-col relative overflow-hidden shadow-2xl">
        <Button
          onClick={onClose}
          variant="icon"
          className="absolute top-4 right-4 z-10 !bg-white !text-neutral-500 hover:!text-neutral-900 rounded-full p-1 shadow-sm"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </Button>

        <div className="bg-primary-500 h-36 w-full relative [clip-path:polygon(0_0,100%_0,100%_70%,0_100%)]">
          <QrCodeIcon className="absolute top-4 left-4 w-12 h-12 text-white/20" />
          <QrCodeIcon className="absolute bottom-4 right-12 w-12 h-12 text-white/20" />
        </div>

        <div className="px-6 pb-8 pt-28 flex flex-col items-center text-center relative">
          <div className="absolute -top-20 left-1/2 -translate-x-1/2 bg-white p-3 rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.1)]">
            <QRCodeSVG value={shortUrl} size={140} />

            <Button variant="rounded" aria-label="Download QR Code">
              <Download className="w-4 h-4" />
            </Button>
          </div>

          <h2 className="text-xl font-bold text-primary-500 mb-2 tracking-tight">
            Link shortened!
          </h2>
          <p className="text-sm text-primary-500/80 mb-6 px-4 font-medium">
            Access the "My URL" page to view statistics
            <br />
            on your shortened links
          </p>

          {error && <p className="text-sm text-red-500 mb-2">{error}</p>}

          <div className="w-full flex items-center gap-2">
            <Input
              type="text"
              readOnly
              value={shortUrl}
              className="flex-1 border-2 border-primary-500 text-primary-500 font-semibold rounded-lg py-2.5 px-3 text-sm"
            />

            <Button onClick={handleCopyClick} variant="icon" title="Copy to clipboard">
              {renderCopyIcon}
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
