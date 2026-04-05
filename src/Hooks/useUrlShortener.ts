import { useState } from 'react'

export const useUrlShortener = () => {
  const [inputUrl, setInputUrl] = useState('')
  const [resultUrl, setResultUrl] = useState('')
  const [isSubmited, setIsSubmited] = useState(false)
  const [copyStatus, setCopyStatus] = useState('')
  const [pasteStatus, setPasteStatus] = useState('')

  return {
    inputUrl,
    resultUrl,
    isSubmited,
    copyStatus,
    pasteStatus,
    setResultUrl,
    setInputUrl,
    setIsSubmited,
    setCopyStatus,
    setPasteStatus,
  }
}
