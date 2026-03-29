import { useState } from 'react'
import { shortenUrl } from '../services/shorten-api'
export interface UrlState {
  data: string | null
  error: string | null
  isSuccess: boolean | null
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
    isSuccess: null,
  })
  const handleShorten = async () => {
    setLoading(true)
    try {
      const shortenurl = await shortenUrl(inputUrl)
      if (shortenurl.isSuccess) {
        setUrlState({
          data: shortenurl.data,
          error: null,
          isSuccess: true,
        })
      } else {
        setUrlState({
          data: null,
          error: shortenurl.errormessage,
          isSuccess: false,
        })
      }
    } catch (error) {
      if (error instanceof Error)
        setUrlState({
          data: null,
          error: error.message,
          isSuccess: false,
        })
      else
        setUrlState({
          data: null,
          error: 'Unexpected error happen',
          isSuccess: false,
        })
    }
    setLoading(false)
  }
  const resetStates = () => {
    setUrlState({
      data: null,
      error: null,
      isSuccess: null,
    })
  }
  return { isLoading, handleShorten, resetStates, setInputUrl, inputUrl, urlState, setUrlState }
}
export default useShortenUrl
