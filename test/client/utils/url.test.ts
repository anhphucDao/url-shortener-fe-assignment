import { describe, it, expect, vi } from 'vitest'
import {
  isValidUrl,
  normalizeUrl,
  generateShortCode,
  downloadCanvas,
} from '../../../src/client/utils/url'

describe('URL Utils', () => {
  describe('isValidUrl', () => {
    it('should validate http URLs', () => {
      expect(isValidUrl('http://example.com')).toBe(true)
    })

    it('should validate https URLs', () => {
      expect(isValidUrl('https://example.com')).toBe(true)
    })

    it('should reject URLs without protocol', () => {
      expect(isValidUrl('example.com')).toBe(false)
    })

    it('should reject empty strings', () => {
      expect(isValidUrl('')).toBe(false)
    })

    it('should reject whitespace only', () => {
      expect(isValidUrl('   ')).toBe(false)
    })

    it('should reject FTP URLs', () => {
      expect(isValidUrl('ftp://example.com')).toBe(false)
    })
  })

  describe('normalizeUrl', () => {
    it('should add https:// prefix if missing', () => {
      expect(normalizeUrl('example.com')).toBe('https://example.com')
    })

    it('should preserve http:// protocol', () => {
      expect(normalizeUrl('http://example.com')).toBe('http://example.com')
    })

    it('should preserve https:// protocol', () => {
      expect(normalizeUrl('https://example.com')).toBe('https://example.com')
    })

    it('should trim whitespace before normalizing', () => {
      expect(normalizeUrl('  example.com  ')).toBe('https://example.com')
    })
  })

  describe('generateShortCode', () => {
    it('should generate a 6 character code by default', () => {
      const code = generateShortCode()
      expect(code).toHaveLength(6)
    })

    it('should generate a code with custom length', () => {
      const code = generateShortCode(12)
      expect(code).toHaveLength(12)
    })

    it('should only contain alphanumeric characters', () => {
      const code = generateShortCode()
      expect(/^[a-zA-Z0-9]+$/.test(code)).toBe(true)
    })

    it('should generate different codes on multiple calls', () => {
      const code1 = generateShortCode()
      const code2 = generateShortCode()
      expect(code1).not.toBe(code2)
    })
  })

  describe('downloadCanvas', () => {
    it('should create and trigger download link with correct filename', () => {
      const mockCanvas = document.createElement('canvas')
      mockCanvas.toDataURL = () => 'data:image/png;base64,abc123'

      const mockLink = document.createElement('a')
      const createElementSpy = vi.spyOn(document, 'createElement').mockReturnValueOnce(mockLink)
      const clickSpy = vi.spyOn(mockLink, 'click')

      downloadCanvas(mockCanvas, 'test-file.png')

      expect(createElementSpy).toHaveBeenCalledWith('a')
      expect(mockLink.download).toBe('test-file.png')
      expect(mockLink.href).toBe('data:image/png;base64,abc123')
      expect(clickSpy).toHaveBeenCalledOnce()

      createElementSpy.mockRestore()
      clickSpy.mockRestore()
    })

    it('should convert canvas to PNG data URL', () => {
      const mockCanvas = document.createElement('canvas')
      const mockDataURL = 'data:image/png;base64,xyz789'
      mockCanvas.toDataURL = vi.fn().mockReturnValue(mockDataURL)

      const mockLink = document.createElement('a')
      vi.spyOn(document, 'createElement').mockReturnValueOnce(mockLink)
      vi.spyOn(mockLink, 'click')

      downloadCanvas(mockCanvas, 'qr.png')

      expect(mockCanvas.toDataURL).toHaveBeenCalledWith('image/png')
      expect(mockLink.href).toBe(mockDataURL)
    })

    it('should handle different filename formats', () => {
      const mockCanvas = document.createElement('canvas')
      mockCanvas.toDataURL = () => 'data:image/png;base64,test'

      const mockLink = document.createElement('a')
      const createElementSpy = vi.spyOn(document, 'createElement').mockReturnValueOnce(mockLink)
      vi.spyOn(mockLink, 'click')

      const filename = 'my-qr-code-2024.png'
      downloadCanvas(mockCanvas, filename)

      expect(mockLink.download).toBe(filename)

      createElementSpy.mockRestore()
    })
  })
})
