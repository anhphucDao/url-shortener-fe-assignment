import { useCallback, useEffect, useState } from 'react'

const TOAST_DURATION_MS = 3000

type ToastState = {
  key: number
  message: string
}

function useToast(durationMs: number = TOAST_DURATION_MS) {
  const [toast, setToast] = useState<ToastState | null>(null)

  const showToast = useCallback((message: string) => {
    setToast({
      key: Date.now(),
      message,
    })
  }, [])

  const clearToast = useCallback(() => {
    setToast(null)
  }, [])

  useEffect(() => {
    if (!toast) {
      return
    }

    const timerId = setTimeout(() => {
      setToast(null)
    }, durationMs)

    return () => {
      clearTimeout(timerId)
    }
  }, [toast, durationMs])

  return {
    toastMessage: toast?.message ?? '',
    showToast,
    clearToast,
  }
}

export default useToast
