import { useState } from 'react'
import { DELAY_TIME } from '../Constants/DelayTime.ts'

export const useUrlShortener = () => {
  const [inputUrl, setInputUrl] = useState('')
  const [resultUrl, setResultUrl] = useState('')
  const [qrCode, setQrCode] = useState('')
  const [isSubmited, setIsSubmited] = useState(false)
  const [copyStatus, setCopyStatus] = useState('')
  const [pasteStatus, setPasteStatus] = useState('')

  const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))
  const handleSubmit = async () => {
    try {
      if (inputUrl === '') return
      setIsSubmited(true)
      setPasteStatus('')
      await delay(DELAY_TIME)
      setResultUrl('https://furl.one/myshortenlink')
      setQrCode('mock_QR.jpg')
    } catch (e) {
      console.log('Error: ', e)
    }
  }
  const handlePasteClick = async () => {
    try {
      setInputUrl(await navigator.clipboard.readText())
      setPasteStatus('Paste successfull !')
    } catch (err) {
      setPasteStatus('Paste error: ' + err)
    }
  }
  const handleCopyClick = async () => {
    try {
      await navigator.clipboard.writeText(resultUrl)
      setCopyStatus('Shorten link is copied !')
    } catch (err) {
      setCopyStatus('Copy error: ' + err)
    }
  }
  const handleQuit = () => {
    setIsSubmited(false)
    setInputUrl('')
    setQrCode('')
    setCopyStatus('')
  }

  return {
    inputUrl,
    resultUrl,
    qrCode,
    isSubmited,
    copyStatus,
    pasteStatus,
    handleSubmit,
    handleQuit,
    setInputUrl,
    handleCopyClick,
    handlePasteClick,
  }
}
