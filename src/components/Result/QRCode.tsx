import DownloadButton from './DownloadButton'
function QRCode() {
  return (
    <div
      className="w-[220px] h-[220px] bg-shade-white flex items-center justify-center
    shadow-[0_4px_12px_rgba(11,40,120,0.16)] absolute left-1/2 top-[40px] -translate-x-1/2 rounded-lg"
    >
      <img src="images/QR_code.svg" className="w-[200px] h-[200px] rounded-lg" />
      <DownloadButton />
    </div>
  )
}
export default QRCode
