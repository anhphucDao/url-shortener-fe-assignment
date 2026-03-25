import { useState } from 'react'

export const useUrlShortener = () => {
  const [inputUrl, setInputUrl] = useState('')
  const [resultUrl, setResultUrl] = useState('')
  const [qrCode, setQrCode] = useState('')
  const [isSubmited, setIsSubmited] = useState(false)
  const [copyStatus, setCopyStatus] = useState('')
  const [pasteStatus, setPasteStatus] = useState('')

  return {
    inputUrl,
    resultUrl,
    qrCode,
    isSubmited,
    copyStatus,
    pasteStatus,
    setResultUrl,
    setQrCode,
    setInputUrl,
    setIsSubmited,
    setCopyStatus,
    setPasteStatus,
  }
}
