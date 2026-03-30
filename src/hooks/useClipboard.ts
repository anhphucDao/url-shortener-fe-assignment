import { useRef, useState } from 'react'

const COPY_FEEDBACK_DURATION_MS = 2000

function useClipboard(textToCopy: string) {
  const [copySuccess, setCopySuccess] = useState('')
  const copyTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  async function handleCopy() {
    if (!textToCopy) {
      return
    }

    try {
      await navigator.clipboard.writeText(textToCopy)
      setCopySuccess('Copied to clipboard!')
      if (copyTimerRef.current) {
        clearTimeout(copyTimerRef.current)
      }
      copyTimerRef.current = setTimeout(() => setCopySuccess(''), COPY_FEEDBACK_DURATION_MS)
    } catch (err) {
      setCopySuccess('Failed to copy')
      console.error('Failed to copy text: ', err)
      return
    }
  }

  return {
    copySuccess,
    copyTimerRef,
    handleCopy,
  }
}

export default useClipboard
