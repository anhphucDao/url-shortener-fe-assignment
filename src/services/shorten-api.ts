import axios from 'axios'

export interface ShortenerResponse {
  shorturl?: string
  errormessage?: string
}
export interface ShortenerProps {
  isSuccess: boolean
  data: string | null
  errormessage: string | null
}
export const shortenUrl = async (url: string): Promise<ShortenerProps> => {
  try {
    const response = await axios.get<ShortenerResponse>(
      `/api/create.php?format=json&url=${encodeURIComponent(url)}`
    )
    if (response.data.errormessage) {
      return { isSuccess: false, data: null, errormessage: response.data.errormessage }
    }
    if (response.data.shorturl)
      return { isSuccess: true, data: response.data.shorturl, errormessage: null }
    return { isSuccess: false, data: null, errormessage: 'Unexpected error occurred' }
  } catch (error) {
    if (error instanceof Error) {
      return {
        isSuccess: false,
        data: null,
        errormessage: error.message || 'Unexpected error occurred',
      }
    } else return { isSuccess: false, data: null, errormessage: 'Unexpected error occurred' }
  }
}
