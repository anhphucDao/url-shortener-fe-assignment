import { useState, useEffect } from 'react'
import { TIME_OUT_CONST } from '../constants'
interface useCopyProps {
  handleCopy: (data: string) => Promise<void>
  isCopied: boolean
}
function useCopy(): useCopyProps {
  const [isCopied, setCopied] = useState<boolean>(false)
  useEffect(() => {
    if (!isCopied) return
    const timer = setTimeout(() => {
      setCopied(false)
    }, TIME_OUT_CONST)
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
