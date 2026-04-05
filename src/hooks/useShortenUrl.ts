import { useState } from 'react'
import { shortenUrl } from '../services/shorten-api'
import { ERROR_MESSAGE } from '../constants'
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
      const { isSuccess, data, errorMessage } = shortenurl
      if (isSuccess)
        setUrlState({
          data: data,
          error: null,
          isSuccess: true,
        })
      else {
        setUrlState({
          data: null,
          error: errorMessage,
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
          error: ERROR_MESSAGE,
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
