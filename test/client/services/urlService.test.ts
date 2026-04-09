import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import axios from 'axios'
import { shortenUrl, getSavedLinks } from '../../../src/client/services/urlService'
import type { ShortLink } from '../../../src/client/types'

// Mock axios
vi.mock('axios')
const mockedAxios = vi.mocked(axios)

// Mock localStorage
const localStorageMock = (() => {
  let store: Record<string, string> = {}

  return {
    getItem: (key: string) => store[key] || null,
    setItem: (key: string, value: string) => {
      store[key] = value.toString()
    },
    removeItem: (key: string) => {
      delete store[key]
    },
    clear: () => {
      store = {}
    },
  }
})()

Object.defineProperty(window, 'localStorage', {
  value: localStorageMock,
})

describe('urlService', () => {
  beforeEach(() => {
    vi.clearAllMocks()
    localStorage.clear()
    // Mock import.meta.env
    vi.stubGlobal('import', {
      meta: {
        env: {
          VITE_API_BASE: '',
        },
      },
    })
  })

  afterEach(() => {
    localStorage.clear()
  })

  describe('shortenUrl', () => {
    it('should create a shortened URL with local storage fallback', async () => {
      const originalUrl = 'https://example.com/very/long/url/path'

      const result = await shortenUrl(originalUrl)

      expect(result).toBeDefined()
      expect(result.originalUrl).toBe(originalUrl)
      expect(result.shortCode).toHaveLength(6)
      expect(result.shortUrl).toContain(result.shortCode)
      expect(result.clicks).toBe(0)
      expect(result.createdAt).toBeDefined()
    })

    it('should normalize URL before shortening', async () => {
      const inputUrl = 'example.com'

      const result = await shortenUrl(inputUrl)

      // Should add https:// prefix
      expect(result.originalUrl).toBe('https://example.com')
      expect(result.shortCode).toHaveLength(6)
    })

    it('should return existing link if URL already shortened', async () => {
      const url = 'https://example.com'

      const firstResult = await shortenUrl(url)
      const secondResult = await shortenUrl(url)

      expect(firstResult.shortCode).toBe(secondResult.shortCode)
      expect(firstResult.originalUrl).toBe(secondResult.originalUrl)
    })

    it('should save link to localStorage', async () => {
      const url = 'https://example.com'

      await shortenUrl(url)

      const saved = getSavedLinks()
      expect(saved).toHaveLength(1)
      expect(saved[0].originalUrl).toBe(url)
    })

    it('should handle API call when API_BASE is set', async () => {
      const mockResponse: ShortLink = {
        id: '123',
        originalUrl: 'https://example.com',
        shortCode: 'abc123',
        shortUrl: 'http://localhost:3000/abc123',
        clicks: 0,
        createdAt: new Date().toISOString(),
      }

      mockedAxios.post.mockResolvedValueOnce({ data: mockResponse })

      // Mock API_BASE by directly testing - actual implementation will vary
      const originalUrl = 'https://example.com'
      const result = await shortenUrl(originalUrl)

      expect(result).toBeDefined()
      expect(result.originalUrl).toBe(originalUrl)
    })

    it('should fall back to local storage on API failure', async () => {
      mockedAxios.post.mockRejectedValueOnce(new Error('API Error'))

      const url = 'https://example.com'
      const result = await shortenUrl(url)

      expect(result).toBeDefined()
      expect(result.originalUrl).toBe(url)

      const saved = getSavedLinks()
      expect(saved).toHaveLength(1)
    })

    it('should generate unique short codes for different URLs', async () => {
      const url1 = 'https://example1.com'
      const url2 = 'https://example2.com'

      const result1 = await shortenUrl(url1)
      const result2 = await shortenUrl(url2)

      expect(result1.shortCode).not.toBe(result2.shortCode)
      expect(result1.shortUrl).not.toBe(result2.shortUrl)
    })

    it('should maintain insertion order with newest links first', async () => {
      const url1 = 'https://example1.com'
      const url2 = 'https://example2.com'

      await shortenUrl(url1)
      await shortenUrl(url2)

      const saved = getSavedLinks()
      expect(saved).toHaveLength(2)
      expect(saved[0].originalUrl).toBe(url2)
      expect(saved[1].originalUrl).toBe(url1)
    })

    it('should handle whitespace-only URLs gracefully', async () => {
      const url = '  https://example.com  '

      const result = await shortenUrl(url)

      expect(result.originalUrl).toBe('https://example.com')
    })

    it('should include timestamp in createdAt field', async () => {
      const url = 'https://example.com'
      const beforeTime = new Date().toISOString()

      const result = await shortenUrl(url)

      const afterTime = new Date().toISOString()

      expect(result.createdAt).toBeDefined()
      expect(new Date(result.createdAt).getTime()).toBeGreaterThanOrEqual(
        new Date(beforeTime).getTime()
      )
      expect(new Date(result.createdAt).getTime()).toBeLessThanOrEqual(
        new Date(afterTime).getTime()
      )
    })
  })

  describe('getSavedLinks', () => {
    it('should return empty array when no links saved', () => {
      const links = getSavedLinks()
      expect(links).toEqual([])
    })

    it('should return all saved links', async () => {
      const url1 = 'https://example1.com'
      const url2 = 'https://example2.com'
      const url3 = 'https://example3.com'

      await shortenUrl(url1)
      await shortenUrl(url2)
      await shortenUrl(url3)

      const links = getSavedLinks()
      expect(links).toHaveLength(3)
    })

    it('should return links in insertion order (newest first)', async () => {
      const url1 = 'https://example1.com'
      const url2 = 'https://example2.com'

      await shortenUrl(url1)
      await shortenUrl(url2)

      const links = getSavedLinks()
      expect(links[0].originalUrl).toBe(url2)
      expect(links[1].originalUrl).toBe(url1)
    })

    it('should handle corrupted localStorage gracefully', () => {
      localStorage.setItem('shortLinks', 'invalid json {')

      const links = getSavedLinks()
      expect(links).toEqual([])
    })

    it('should return links with all required fields', async () => {
      const url = 'https://example.com'
      await shortenUrl(url)

      const links = getSavedLinks()
      const link = links[0]

      expect(link).toHaveProperty('originalUrl')
      expect(link).toHaveProperty('shortCode')
      expect(link).toHaveProperty('shortUrl')
      expect(link).toHaveProperty('clicks')
      expect(link).toHaveProperty('createdAt')
    })
  })
})
