import { QRCodeCanvas } from 'qrcode.react' // chuyển thành canvas thay vì svg

export default function ResultModal({
  shortUrl,
  onclose,
}: {
  shortUrl: string
  onclose: () => void
}) {
  // Thêm shortUrl vào đây
  const handleCopy = () => {
    navigator.clipboard.writeText(shortUrl)
    alert('Đã copy thành công!')
  }

  const handleDownloadQR = () => {
    // Tìm cái hình QR dựa vào id
    const canvas = document.getElementById('qr-canvas') as HTMLCanvasElement
    if (!canvas) return

    // Chuyển hình đó thành một đường link dữ liệu ảnh PNG
    const pngUrl = canvas.toDataURL('image/png')

    // tạo anchor <a></a> element
    const downloadLink = document.createElement('a')
    downloadLink.href = pngUrl
    downloadLink.download = 'devcamp-qr.png'
    downloadLink.click()
  }

  return (
    // layer 1: mờ đen
    <div className="fixed inset-0 z-10 flex items-center justify-center bg-black/30 backdrop-blur-[1.5px]">
      {/* layer 2: the box*/}
      <div className="relative mx-3 flex aspect-[9/10] w-[500px] overflow-hidden rounded-lg bg-[#0B2878]">
        {/* mảng trắng vắt chéo */}
        <div className="absolute bottom-[-64px] left-[-30px] h-4/5 w-[150%] -rotate-6 bg-white"></div>

        {/* decor*/}
        <img alt="qr-decor" className="absolute -left-5 top-14 size-auto" src="./qr_decor.svg" />
        <img alt="qr-decor" className="absolute -right-5 top-20 size-auto" src="./qr_decor.svg" />

        {/* main component*/}
        <div className="absolute inset-0 z-15 flex flex-col items-center justify-between p-10">
          {/* mã QR + download section */}
          <div className="relative flex aspect-square h-1/2 items-center justify-center rounded-lg bg-white p-3 shadow-[0px_4px_12px_0px_rgba(11,40,120,0.16)]">
            <QRCodeCanvas id="qr-canvas" value={shortUrl} size={180} />
            <button
              onClick={handleDownloadQR}
              className="absolute -bottom-3 -right-3 aspect-square w-9 rounded-full bg-[#0B2878] p-1 hover:cursor-pointer flex items-center justify-center"
            >
              <img alt="download" className="size-auto" src="./dowload_icon.svg" />
            </button>
          </div>

          {/* text section */}
          <div className="mb-3 flex grow flex-col items-center justify-center px-3">
            <h4 className="mb-2 text-2xl font-bold text-[#0B2878] mt-[10px]">Link shortened!</h4>
            <p className="text-center text-[#0B2878]">
              Access the{' '}
              <a href="/tools/url-shortener/my-urls" className="underline">
                My URLs
              </a>{' '}
              page to view statistics on your shortened links
            </p>
          </div>

          {/* LINK section */}
          <div className="flex h-10 w-full content-between">
            <div className="me-1 flex grow items-center overflow-hidden rounded-lg border border-solid border-[#0B2878] p-2">
              <p className="truncate text-[#0B2878]">{shortUrl}</p>
            </div>
            <button
              onClick={handleCopy}
              className="w-fit border-[#0B2878] text-[#0B2878] hover:bg-[#0B2878ff] border h-10 text-base aspect-square p-2 rounded-lg relative flex min-w-fit items-center justify-center overflow-hidden transition-all duration-100 bg-[#0B2878de] hover:cursor-pointer"
            >
              <img
                alt="/icons/shorten/content_copy.svg"
                className="h-full w-auto"
                src="./copy_icon.svg"
              />
            </button>
          </div>
        </div>

        {/* close button*/}
        <button
          onClick={onclose}
          className="absolute right-4 top-4 z-15 flex aspect-square w-9 items-center justify-center rounded-full bg-white hover:cursor-pointer"
        >
          <img alt="close-icon" className="size-auto" src="/close_icon.svg" />
        </button>
      </div>
    </div>
  )
}
