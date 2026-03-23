import axios from 'axios'

export interface ShortenerResponse {
  shorturl?: string
  errormessage?: string
}

export const shortenUrl = async (url: string): Promise<string> => {
  const response = await axios.get<ShortenerResponse>(
    `/api/create.php?format=json&url=${encodeURIComponent(url)}`
  )
  if (response.data.shorturl) {
    return response.data.shorturl
  } else {
    throw new Error(response.data.errormessage)
  }
}
