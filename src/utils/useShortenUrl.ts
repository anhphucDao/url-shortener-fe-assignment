import { useState } from 'react'
import { shortenUrl } from '../services/shorten-api'
export interface UrlState {
  data: string | null
  error: string | null
}
function useShortenUrl() {
  const [inputUrl, setInputUrl] = useState('')
  const [isLoading, setLoading] = useState<boolean>(false)
  const [urlState, setUrlState] = useState<UrlState>({
    data: null,
    error: null,
  })
  const handleShorten = async () => {
    setLoading(true)
    try {
      const shortenurl = await shortenUrl(inputUrl)
      setUrlState({
        data: shortenurl,
        error: null,
      })
    } catch {
      setUrlState({
        data: null,
        error: 'Something went wrong',
      })
    }
  }
  const resetStates = () => {
    setLoading(false)
    setUrlState({
      data: null,
      error: null,
    })
  }
  return { isLoading, handleShorten, resetStates, setInputUrl, inputUrl, urlState, setUrlState }
}
export default useShortenUrl
