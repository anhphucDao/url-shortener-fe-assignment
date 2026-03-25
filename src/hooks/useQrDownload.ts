import { useRef } from 'react'

const QR_DOWNLOAD_FILE_NAME = 'shortened-url-qr.png'

const useQrDownload = () => {
  const qrImageRef = useRef<HTMLImageElement | null>(null)

  const downloadQrImage = () => {
    const qrImage = qrImageRef.current

    if (!qrImage) {
      return
    }

    const imageUrl = qrImage.currentSrc || qrImage.src

    if (!imageUrl) {
      return
    }

    const downloadLink = document.createElement('a')
    downloadLink.href = new URL(imageUrl, window.location.href).href
    downloadLink.download = QR_DOWNLOAD_FILE_NAME
    document.body.appendChild(downloadLink)
    downloadLink.click()
    document.body.removeChild(downloadLink)
  }

  return {
    qrImageRef,
    downloadQrImage,
  }
}

export default useQrDownload
