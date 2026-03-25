import { useState, useRef, useEffect } from 'react'
export const DEFAULT_COPY_TIMEOUT_MS = 2000

export interface CopyToClipboardReturn {
  isCopied: boolean
  copy: (text: string) => Promise<void>
  error: string | null
}
export function useCopyToClipboard(timeout = DEFAULT_COPY_TIMEOUT_MS): CopyToClipboardReturn {
  const [isCopied, setIsCopied] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)
  const timeoutRef = useRef<number | null>(null)
  const copy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setIsCopied(true)
      setError(null)

      if (timeoutRef.current) clearTimeout(timeoutRef.current)
      timeoutRef.current = window.setTimeout(() => setIsCopied(false), timeout)
    } catch {
      setError('Failed to copy to clipboard.')
      setIsCopied(false)
    }
  }

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  }, [])

  return { isCopied, copy, error }
}
