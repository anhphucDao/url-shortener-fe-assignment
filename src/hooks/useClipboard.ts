interface UseClipboardReturn {
  copyText: (text: string) => Promise<boolean>
}

const useClipboard = (): UseClipboardReturn => {
  const copyText = async (text: string): Promise<boolean> => {
    if (!text) {
      return false
    }

    try {
      if (navigator?.clipboard?.writeText) {
        await navigator.clipboard.writeText(text)
        return true
      }

      const textarea = document.createElement('textarea')
      textarea.value = text
      textarea.style.position = 'fixed'
      textarea.style.opacity = '0'
      document.body.appendChild(textarea)
      textarea.focus()
      textarea.select()
      const success = document.execCommand('copy')
      document.body.removeChild(textarea)
      return success
    } catch (error) {
      console.error('Failed to copy text:', error)
      return false
    }
  }

  return { copyText }
}

export default useClipboard
