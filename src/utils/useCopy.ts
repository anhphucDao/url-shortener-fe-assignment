import { useState, useEffect } from 'react'
function useCopy() {
  const [isCopied, setCopied] = useState<boolean>(false)
  const TIMEOUT_CONST = 2000
  useEffect(() => {
    if (!isCopied) return
    const timer = setTimeout(() => {
      setCopied(false)
    }, TIMEOUT_CONST)
    return () => {
      clearTimeout(timer)
    }
  }, [isCopied, setCopied])
  const handleCopy = async (data: string) => {
    if (data)
      try {
        await navigator.clipboard.writeText(data)
        setCopied(true)
      } catch {
        throw Error('Something went wrong')
      }
  }
  return { handleCopy, isCopied }
}
export default useCopy
