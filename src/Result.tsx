import { type MouseEvent, useState } from 'react'
import qrPattern1 from './image/Component 25.svg'
import qrPattern2 from './image/Component 24.png'
import copyIcon from './image/content_copy.png'
import successIcon from './image/vertical_align_bottom.png'
import close from './image/close.png'

type ResultProps = {
  isOpen: boolean
  onClose: () => void
  shortUrl: string
}

const Result = ({ isOpen, onClose, shortUrl }: ResultProps) => {
  const [copied, setCopied] = useState(false)

  if (!isOpen) return null

  const handleBackdropClick = (event: MouseEvent<HTMLDivElement>) => {
    if (event.target !== event.currentTarget) return
    setCopied(false)
    onClose()
  }

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(shortUrl)
      setCopied(true)
    } catch {
      setCopied(false)
    }
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 px-4"
      onClick={handleBackdropClick}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="shortened-link-title"
        className="relative h-[469px] w-96 overflow-hidden rounded-lg bg-primary-0"
      >
        <div className="absolute top-0 left-0 h-48 w-96 rounded-tl-lg rounded-tr-lg bg-primary-500" />
        <div className="absolute top-[40px] left-[90px] h-56 w-56 rounded-lg bg-white shadow-[0px_4px_12px_0px_rgba(11,40,120,0.16)]" />

        <div className="absolute top-[240px] left-[290px] grid h-10 w-10 place-items-center rounded-full bg-primary-500">
          <img src={successIcon} alt="" className="h-7 w-7" />
        </div>

        <button
          type="button"
          onClick={() => {
            setCopied(false)
            onClose()
          }}
          aria-label="Close result popup"
          className="absolute top-[12px] left-[342px] grid h-8 w-8 place-items-center rounded-full bg-neutral-200 transition hover:bg-neutral-300"
        >
          <img className="size-5 relative overflow-hidden" src={close} alt="close icon" />
        </button>

        <h3
          id="shortened-link-title"
          className="absolute top-[292px] left-[115px] text-2xl font-bold text-primary-500"
        >
          Link shortened!
        </h3>
        <p className="absolute top-[331px] left-[70px] w-64 text-center text-sm font-normal text-primary-500">
          Access the &ldquo;My URL&rdquo; page to view statistics on your shortened links
        </p>

        <div className="absolute top-[389px] left-[38px] h-10 w-[272px] rounded-lg border border-primary-500 bg-primary-0" />
        <p className="absolute top-[397px] left-[50px] max-w-[250px] text-base font-medium text-primary-500">
          {shortUrl}
        </p>

        <button
          type="button"
          onClick={handleCopy}
          aria-label="Copy shortened URL"
          className="absolute top-[389px] left-[318px] grid h-10 w-10 place-items-center rounded-lg border-[0.5px] border-primary-500 bg-primary-500 transition hover:bg-primary-300"
        >
          <img src={copyIcon} alt="" className="h-6 w-6" />
        </button>

        {copied && (
          <p className="absolute top-[434px] left-[165px] text-xs font-medium text-success-500">
            Copied!
          </p>
        )}

        <img
          src={qrPattern1}
          alt=""
          className="absolute top-[32px] left-[-28px] h-20 w-20 opacity-30"
        />
        <img
          src={qrPattern2}
          alt=""
          className="absolute top-[64px] left-[348px] h-20 w-20 opacity-20"
        />
      </div>
    </div>
  )
}

export default Result
