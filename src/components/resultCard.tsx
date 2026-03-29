import { createPortal } from 'react-dom'
import QRIcon from '../static/qr.svg'
import { CopyToClipboard } from './ui/copyToClipboard'

interface ResultCardProps {
  onClose: () => void
}

export function ResultCard({ onClose }: ResultCardProps) {
  const modalContent = (
    <div className="fixed inset-0 z-[100] flex justify-center bg-neutral-900/60">
      <div className="absolute inset-0" onClick={onClose} aria-hidden="true"></div>
      <div className="fixed inset-0 z-10 flex item-center justify-center bg-black/30">
        <div className="relative mx-3 flex flex-col justify-center h-auto w-full max-w-[500px] overflow-hidden bg-primary z-10">
          <div className="relative flex flex-col items-center gap-7 p-10 md:p-10 bg-white rounded-lg">
            <div className="relative flex aspect-square max-w items-center justify-center rounded-lg bg-white p-3 shadow-[0px_4px_12px_0px_rgba(11,40,120,0.16)]">
              <div className="size-s">
                <img src={QRIcon} alt="mock-qrcode"></img>
              </div>
            </div>
            <div className="mb-3 flex flex-col items-center justify-center px-3 text-black text-center">
              <p className="mb-3 text-2xl font-bold text-primary">Link shortened!</p>
              <p className="mb-2 text-xl font-small text-primary">
                Access the My URLs page to view statistics on your shortened links
              </p>
            </div>
            <div className="flex h-10 w-full items-center content-between bg-white text-black p-2">
              <div className="me-3 flex grow p-2 border border-solid rounded-lg">
                <p>https://furl.one/slug</p>
              </div>
              <div className="w-fit rounded-lg hover:bg-[#bcccf9] aspect-square transition-all duration-100">
                <CopyToClipboard shortURL="https://furl.one/slug" />
              </div>
            </div>
            <button
              onClick={onClose}
              className="absolute right-3 top-3 z-20 flex aspect-square w-9 items-center justify-center rounded-full bg-black p-1 hover:cursor-pointer md:right-4 md:top-4 text-white font-bold"
            >
              X
            </button>
          </div>
        </div>
      </div>
    </div>
  )
  return createPortal(modalContent, document.body)
}
