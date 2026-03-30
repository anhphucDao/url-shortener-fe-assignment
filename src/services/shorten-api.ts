import axios from 'axios'
import { buildBaseResponse } from '../utils/response'
import { ERROR_MESSAGE } from '../constants'
export interface ShortenerResponse {
  shortUrl?: string
  errorMessage?: string
}
export interface ShortenerProps {
  isSuccess: boolean
  data: string | null
  errorMessage: string | null
}
export const shortenUrl = async (url: string): Promise<ShortenerProps> => {
  try {
    const response = await axios.get<ShortenerResponse>(
      `/api/create.php?format=json&url=${encodeURIComponent(url)}`
    )
    const { shortUrl, errorMessage } = response.data
    if (errorMessage) {
      return buildBaseResponse(false, null, errorMessage)
    }
    if (shortUrl) return buildBaseResponse(true, shortUrl, null)
    return buildBaseResponse(false, null, ERROR_MESSAGE)
  } catch (error) {
    if (error instanceof Error) {
      return buildBaseResponse(false, null, error.message || ERROR_MESSAGE)
    } else return buildBaseResponse(false, null, ERROR_MESSAGE)
  }
}
