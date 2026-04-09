export function isValidUrl(value: string): boolean {
  if (!value?.trim()) return false
  try {
    const url = new URL(value.trim())
    return url.protocol === 'http:' || url.protocol === 'https:'
  } catch {
    return false
  }
}

export function normalizeUrl(value: string): string {
  const clean = value.trim()
  if (!/^https?:\/\//i.test(clean)) {
    return `https://${clean}`
  }
  return clean
}

export function generateShortCode(length = 6): string {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  let result = ''
  for (let i = 0; i < length; i += 1) {
    result += chars.charAt(Math.floor(Math.random() * chars.length))
  }
  return result
}

export const downloadCanvas = (canvas: HTMLCanvasElement, filename: string) => {
  const url = canvas.toDataURL('image/png')
  const link = document.createElement('a')
  link.href = url
  link.download = filename
  link.click()
}
