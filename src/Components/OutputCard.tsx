import { X, Copy, ArrowDownToLine } from 'lucide-react'

export default function OutputCard(qrCode: string, resultUrl: string) {
  const handleCopyClick = async () => {
    try {
      await navigator.clipboard.writeText(resultUrl)
      // TODO: Replace alert with a UI toast notification
      alert('Shortened link is copied!')
    } catch (err) {
      console.error('Copy error: ', err)
      // TODO: Action to show actual error on UI (like a toast) instead of just logging to console
    }
  }

  return (
    <div className="relative w-100 h-117 z-31 bg-white rounded-[10px]">
      {/* Phần xanh xanh */}
      <div className="w-100 h-49 bg-primary-500 rounded-t-[10px] [clip-path:polygon(0%_0%,100%_0%,100%_80%,0%_100%)]" />
      <X
        className="absolute right-3 top-3 bg-neutral-100 rounded-full w-8 h-8 hover:cursor-pointer"
        onClick={() => handleQuit()}
      />

      <div className="absolute z-32 w-55 p-3 aspect-square rounded-[10px] bg-white shadow-md shadow-shade-black/20 top-10 justify-self-center">
        <img className="object-contain rounded-[10px]" src={qrCode} alt="QR Code" />
        <div className="absolute flex justify-center items-center -bottom-4 -right-4 bg-primary-500 w-10 h-10 rounded-full text-white hover:cursor-pointer border-2 hover:border-primary-500">
          <ArrowDownToLine />
        </div>
      </div>
      <div className="mt-20 mx-9">
        <h1 className="text-center text-[24px] text-primary-500 font-bold">Link shortend!</h1>
        <div className="text-center text-[14px] text-primary-500 font-medium">
          Access the “My URL” page to view statistics <br /> on your shortened links
        </div>
        <div className="flex flex-row mt-5">
          <input
            type="text"
            value={resultUrl}
            readOnly
            className="h-10 w-69 focus:outline-none border border-primary-500 rounded-[5px] p-3"
          />
          <Copy
            className="h-10 w-10 rounded-[5px] bg-primary-500 text-white ml-1 p-2 hover:cursor-pointer"
            onClick={() => handleCopyClick()}
          />
        </div>
      </div>
    </div>
  )
}
