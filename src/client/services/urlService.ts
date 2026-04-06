import axios from 'axios'
import { type ShortLink } from '../types'
import { generateShortCode, normalizeUrl } from '../utils/url'

const STORAGE_KEY = 'shortLinks'
const API_BASE = import.meta.env.VITE_API_BASE

function buildShortUrl(code: string): string {
  return `${API_BASE}/${code}`
}

function readLocalLinks(): ShortLink[] {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]') as ShortLink[]
  } catch {
    return []
  }
}

function writeLocalLinks(links: ShortLink[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(links))
}

export async function shortenUrl(originalUrl: string): Promise<ShortLink> {
  const normalizedUrl = normalizeUrl(originalUrl)

  const existing = readLocalLinks().find(link => link.originalUrl === normalizedUrl)
  if (existing) return existing

  const shortCode = generateShortCode()
  const shortUrl = buildShortUrl(shortCode)
  const payload = {
    originalUrl: normalizedUrl,
    shortCode,
  }

  let saved: ShortLink = {
    originalUrl: normalizedUrl,
    shortCode,
    shortUrl,
    clicks: 0,
    createdAt: new Date().toISOString(),
  }

  if (API_BASE !== '') {
    try {
      const { data } = await axios.post<ShortLink>(`${API_BASE}/api/urls`, payload)
      saved = {
        ...saved,
        id: (data as ShortLink & { _id?: string })._id || data.id,
        clicks: data.clicks ?? 0,
        createdAt: data.createdAt || saved.createdAt,
      }
    } catch (err) {
      console.warn('API shorten failed, falling back to local storage', err)
    }
  }

  writeLocalLinks([saved, ...readLocalLinks()])
  return saved
}

export function getSavedLinks(): ShortLink[] {
  return readLocalLinks()
}
