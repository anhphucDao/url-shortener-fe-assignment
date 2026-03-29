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
    // Get QR code image filename from URL or use default if not available
    // Psudocode:
    // const fetchImageName = async () => {
    //   try {
    //     const response = await fetch(imageUrl, { method: 'GET' })
    //     const jsonResponse = await response.json()
    //     return jsonResponse.filename || QR_DOWNLOAD_FILE_NAME
    //   } catch (error) {
    //     console.error('Failed to fetch QR code image name:', error)
    //     return QR_DOWNLOAD_FILE_NAME
    //   }
    // }
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
