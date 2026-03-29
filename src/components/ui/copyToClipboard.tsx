import { useEffect, useRef, useState } from 'react'

interface ClipBoardProps {
  shortURL: string
}

export const CopyToClipboard = ({ shortURL }: ClipBoardProps) => {
  const [isCopied, setIsCopied] = useState(false)

  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  }, [])

  const executeCopy = async () => {
    if (!shortURL) return

    try {
      await navigator.clipboard.writeText(shortURL)

      setIsCopied(true)

      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }

      timeoutRef.current = setTimeout(() => {
        setIsCopied(false)
      }, 2000)
    } catch (error) {
      console.error('Clipboard failed', error)
    }
  }

  return (
    <>
      <button
        type="button"
        onClick={executeCopy}
        className="flex size-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary-500 text-white hover:bg-primary-600 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
        aria-label={isCopied ? 'Copied to clipboard' : 'Copy to clipboard'}
      >
        {isCopied ? (
          <svg
            className="size-6 animate-in zoom-in duration-200"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
              d="M5 13l4 4L19 7"
            />
          </svg>
        ) : (
          <svg
            className="size-6 transition-transform hover:scale-110"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
            />
          </svg>
        )}
      </button>
    </>
  )
}
