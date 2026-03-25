import { useState } from 'react'
import { shortenUrl } from '../services/shorten-api'
export interface UrlState {
  data: string | null
  error: string | null
}
interface useShortenUrlProps {
  isLoading: boolean
  handleShorten: () => Promise<void>
  resetStates: () => void
  setInputUrl: React.Dispatch<React.SetStateAction<string>>
  inputUrl: string
  urlState: UrlState
  setUrlState: React.Dispatch<React.SetStateAction<UrlState>>
}
function useShortenUrl(): useShortenUrlProps {
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
