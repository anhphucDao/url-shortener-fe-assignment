const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5001/api'

export interface ShortenResponse {
  success: boolean
  data?: {
    shortUrl: string
    shortCode: string
    qrCode: string
    originalUrl: string
    clicks: number
    createdAt: string
  }
  error?: string
}

export interface StatsResponse {
  success: boolean
  data?: {
    shortUrl: string
    shortCode: string
    originalUrl: string
    clicks: number
    createdAt: string
    lastAccessed: string
    formattedCreatedAt: string
  }
  error?: string
}

class ApiService {
  /**
   * Create a shortened URL with QR code
   */
  async shortenUrl(originalUrl: string): Promise<ShortenResponse> {
    try {
      const response = await fetch(`${API_BASE_URL}/shorten`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ originalUrl }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to shorten URL')
      }

      return data
    } catch (error) {
      console.error('API Error - shortenUrl:', error)
      throw error
    }
  }

  /**
   * Get statistics for a shortened URL
   */
  async getUrlStats(shortCode: string): Promise<StatsResponse> {
    try {
      const response = await fetch(`${API_BASE_URL}/stats/${shortCode}`)
      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to fetch stats')
      }

      return data
    } catch (error) {
      console.error('API Error - getUrlStats:', error)
      throw error
    }
  }

  /**
   * Get recent URLs
   */
  async getRecentUrls(limit = 10, page = 1) {
    try {
      const response = await fetch(`${API_BASE_URL}/recent?limit=${limit}&page=${page}`)
      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to fetch recent URLs')
      }

      return data
    } catch (error) {
      console.error('API Error - getRecentUrls:', error)
      throw error
    }
  }

  /**
   * Deactivate a shortened URL
   */
  async deactivateUrl(shortCode: string) {
    try {
      const response = await fetch(`${API_BASE_URL}/${shortCode}`, {
        method: 'DELETE',
      })
      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to deactivate URL')
      }

      return data
    } catch (error) {
      console.error('API Error - deactivateUrl:', error)
      throw error
    }
  }

  /**
   * Validate URL format
   */
  isValidUrl(url: string): boolean {
    try {
      const urlObj = new URL(url)
      return urlObj.protocol === 'http:' || urlObj.protocol === 'https:'
    } catch {
      return false
    }
  }
}

export const apiService = new ApiService()
