import '@testing-library/jest-dom'
import { describe, it, expect, beforeEach, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import ShortenForm from '../../../../src/client/components/sections/ShortenForm'
import * as urlService from '../../../../src/client/services/urlService'
import type { ShortLink } from '../../../../src/client/types'

// Mock the URL service
vi.mock('../../../../src/client/services/urlService')

// Mock the url utilities
vi.mock('../../../../src/client/utils/url', () => ({
  isValidUrl: (url: string) =>
    /^(https?):\/\//.test(url.trim()),
  normalizeUrl: (url: string) => {
    const trimmed = url.trim()
    if (trimmed.startsWith('http://') || trimmed.startsWith('https://')) {
      return trimmed
    }
    return `https://${trimmed}`
  },
  generateShortCode: () => 'abc123',
}))

const mockedUrlService = vi.mocked(urlService)

describe('ShortenForm Component', () => {
  const mockShortLink: ShortLink = {
    id: '1',
    originalUrl: 'https://example.com',
    shortCode: 'abc123',
    shortUrl: '/abc123',
    clicks: 0,
    createdAt: new Date().toISOString(),
  }

  beforeEach(() => {
    vi.clearAllMocks()
  })

  describe('Rendering', () => {
    it('should render form with label and input', () => {
      const mockOnCreated = vi.fn()
      render(<ShortenForm onCreated={mockOnCreated} />)

      expect(screen.getByLabelText(/your long url/i)).toBeInTheDocument()
      expect(screen.getByPlaceholderText(/input the url you want to shorten/i)).toBeInTheDocument()
    })

    it('should render shorten button', () => {
      const mockOnCreated = vi.fn()
      render(<ShortenForm onCreated={mockOnCreated} />)

      expect(screen.getByRole('button', { name: /shorten/i })).toBeInTheDocument()
    })

    it('should render input field with correct attributes', () => {
      const mockOnCreated = vi.fn()
      render(<ShortenForm onCreated={mockOnCreated} />)

      const input = screen.getByPlaceholderText(/input the url you want to shorten/i)
      expect(input).toHaveAttribute('type', 'text')
      expect(input).toHaveAttribute('id', 'url')
    })

    it('should have globe emoji icon', () => {
      const mockOnCreated = vi.fn()
      render(<ShortenForm onCreated={mockOnCreated} />)

      expect(screen.getByText('🌐')).toBeInTheDocument()
    })
  })

  describe('Input Handling', () => {
    it('should update input value when typing', async () => {
      const user = userEvent.setup()
      const mockOnCreated = vi.fn()
      render(<ShortenForm onCreated={mockOnCreated} />)

      const input = screen.getByPlaceholderText(/input the url you want to shorten/i) as HTMLInputElement
      await user.type(input, 'https://example.com')

      expect(input.value).toBe('https://example.com')
    })

    it('should clear input after successful submission', async () => {
      const user = userEvent.setup()
      const mockOnCreated = vi.fn()

      mockedUrlService.shortenUrl.mockResolvedValueOnce(mockShortLink)

      render(<ShortenForm onCreated={mockOnCreated} />)

      const input = screen.getByPlaceholderText(/input the url you want to shorten/i) as HTMLInputElement
      await user.type(input, 'https://example.com')
      await user.click(screen.getByRole('button', { name: /shorten/i }))

      expect(input.value).toBe('')
    })

    it('should accept different valid URLs', async () => {
      const user = userEvent.setup()
      const mockOnCreated = vi.fn()
      render(<ShortenForm onCreated={mockOnCreated} />)

      const input = screen.getByPlaceholderText(/input the url you want to shorten/i) as HTMLInputElement

      await user.type(input, 'https://github.com')
      expect(input.value).toBe('https://github.com')

      await user.clear(input)
      await user.type(input, 'http://localhost:3000')
      expect(input.value).toBe('http://localhost:3000')
    })
  })

  describe('Form Validation', () => {
    it('should show error for empty input', async () => {
      const user = userEvent.setup()
      const mockOnCreated = vi.fn()
      render(<ShortenForm onCreated={mockOnCreated} />)

      await user.click(screen.getByRole('button', { name: /shorten/i }))

      expect(screen.getByText(/please enter a url/i)).toBeInTheDocument()
    })

    it('should show error for whitespace-only input', async () => {
      const user = userEvent.setup()
      const mockOnCreated = vi.fn()
      render(<ShortenForm onCreated={mockOnCreated} />)

      const input = screen.getByPlaceholderText(/input the url you want to shorten/i)
      await user.type(input, '   ')
      await user.click(screen.getByRole('button', { name: /shorten/i }))

      expect(screen.getByText(/please enter a url/i)).toBeInTheDocument()
    })

    it('should show error for invalid URL without protocol', async () => {
      const user = userEvent.setup()
      const mockOnCreated = vi.fn()
      render(<ShortenForm onCreated={mockOnCreated} />)

      const input = screen.getByPlaceholderText(/input the url you want to shorten/i)
      await user.type(input, 'example.com')
      await user.click(screen.getByRole('button', { name: /shorten/i }))

      expect(screen.getByText(/please enter a valid url/i)).toBeInTheDocument()
    })

    it('should accept URLs with http protocol', async () => {
      const user = userEvent.setup()
      const mockOnCreated = vi.fn()

      mockedUrlService.shortenUrl.mockResolvedValueOnce(mockShortLink)

      render(<ShortenForm onCreated={mockOnCreated} />)

      const input = screen.getByPlaceholderText(/input the url you want to shorten/i)
      await user.type(input, 'http://example.com')
      await user.click(screen.getByRole('button', { name: /shorten/i }))

      expect(screen.queryByText(/please enter a valid url/i)).not.toBeInTheDocument()
    })

    it('should accept URLs with https protocol', async () => {
      const user = userEvent.setup()
      const mockOnCreated = vi.fn()

      mockedUrlService.shortenUrl.mockResolvedValueOnce(mockShortLink)

      render(<ShortenForm onCreated={mockOnCreated} />)

      const input = screen.getByPlaceholderText(/input the url you want to shorten/i)
      await user.type(input, 'https://example.com')
      await user.click(screen.getByRole('button', { name: /shorten/i }))

      expect(screen.queryByText(/please enter a valid url/i)).not.toBeInTheDocument()
    })

    it('should clear previous error on new submission', async () => {
      const user = userEvent.setup()
      const mockOnCreated = vi.fn()
      render(<ShortenForm onCreated={mockOnCreated} />)

      // First attempt with empty input
      await user.click(screen.getByRole('button', { name: /shorten/i }))
      expect(screen.getByText(/please enter a url/i)).toBeInTheDocument()

      // Second attempt with valid URL
      mockedUrlService.shortenUrl.mockResolvedValueOnce(mockShortLink)
      const input = screen.getByPlaceholderText(/input the url you want to shorten/i)
      await user.type(input, 'https://example.com')
      await user.click(screen.getByRole('button', { name: /shorten/i }))

      // Error should be gone
      expect(screen.queryByText(/please enter a url/i)).not.toBeInTheDocument()
    })
  })

  describe('Form Submission', () => {
    it('should call shortenUrl service when submitting valid URL', async () => {
      const user = userEvent.setup()
      const mockOnCreated = vi.fn()

      mockedUrlService.shortenUrl.mockResolvedValueOnce(mockShortLink)

      render(<ShortenForm onCreated={mockOnCreated} />)

      const input = screen.getByPlaceholderText(/input the url you want to shorten/i)
      await user.type(input, 'https://example.com')
      await user.click(screen.getByRole('button', { name: /shorten/i }))

      // Wait for async operation
      await screen.findByPlaceholderText(/input the url you want to shorten/i)

      expect(mockedUrlService.shortenUrl).toHaveBeenCalledWith('https://example.com')
    })

    it('should call onCreated callback with shortened link', async () => {
      const user = userEvent.setup()
      const mockOnCreated = vi.fn()

      mockedUrlService.shortenUrl.mockResolvedValueOnce(mockShortLink)

      render(<ShortenForm onCreated={mockOnCreated} />)

      const input = screen.getByPlaceholderText(/input the url you want to shorten/i)
      await user.type(input, 'https://example.com')
      await user.click(screen.getByRole('button', { name: /shorten/i }))

      await screen.findByPlaceholderText(/input the url you want to shorten/i)

      expect(mockOnCreated).toHaveBeenCalledWith(mockShortLink)
    })

    it('should show loading state while submitting', async () => {
      const user = userEvent.setup()
      const mockOnCreated = vi.fn()

      mockedUrlService.shortenUrl.mockImplementationOnce(
        () =>
          new Promise((resolve) => {
            setTimeout(() => resolve(mockShortLink), 100)
          })
      )

      render(<ShortenForm onCreated={mockOnCreated} />)

      const input = screen.getByPlaceholderText(/input the url you want to shorten/i)
      await user.type(input, 'https://example.com')
      await user.click(screen.getByRole('button', { name: /shorten/i }))

      expect(screen.getByRole('button', { name: /shortening/i })).toBeInTheDocument()
    })

    it('should disable button while loading', async () => {
      const user = userEvent.setup()
      const mockOnCreated = vi.fn()

      mockedUrlService.shortenUrl.mockImplementationOnce(
        () =>
          new Promise((resolve) => {
            setTimeout(() => resolve(mockShortLink), 100)
          })
      )

      render(<ShortenForm onCreated={mockOnCreated} />)

      const input = screen.getByPlaceholderText(/input the url you want to shorten/i)
      await user.type(input, 'https://example.com')
      const button = screen.getByRole('button', { name: /shorten/i })
      await user.click(button)

      expect(button).toBeDisabled()
    })
  })

  describe('Error Handling', () => {
    it('should show error when service throws error', async () => {
      const user = userEvent.setup()
      const mockOnCreated = vi.fn()

      mockedUrlService.shortenUrl.mockRejectedValueOnce(new Error('API Error'))

      render(<ShortenForm onCreated={mockOnCreated} />)

      const input = screen.getByPlaceholderText(/input the url you want to shorten/i)
      await user.type(input, 'https://example.com')
      await user.click(screen.getByRole('button', { name: /shorten/i }))

      await screen.findByText(/could not create short link/i)

      expect(screen.getByText(/could not create short link/i)).toBeInTheDocument()
    })

    it('should not call onCreated when service fails', async () => {
      const user = userEvent.setup()
      const mockOnCreated = vi.fn()

      mockedUrlService.shortenUrl.mockRejectedValueOnce(new Error('API Error'))

      render(<ShortenForm onCreated={mockOnCreated} />)

      const input = screen.getByPlaceholderText(/input the url you want to shorten/i)
      await user.type(input, 'https://example.com')
      await user.click(screen.getByRole('button', { name: /shorten/i }))

      await screen.findByText(/could not create short link/i)

      expect(mockOnCreated).not.toHaveBeenCalled()
    })

    it('should not clear input on error', async () => {
      const user = userEvent.setup()
      const mockOnCreated = vi.fn()

      mockedUrlService.shortenUrl.mockRejectedValueOnce(new Error('API Error'))

      render(<ShortenForm onCreated={mockOnCreated} />)

      const input = screen.getByPlaceholderText(/input the url you want to shorten/i) as HTMLInputElement
      await user.type(input, 'https://example.com')
      await user.click(screen.getByRole('button', { name: /shorten/i }))

      await screen.findByText(/could not create short link/i)

      expect(input.value).toBe('https://example.com')
    })

    it('should recover from error state', async () => {
      const user = userEvent.setup()
      const mockOnCreated = vi.fn()

      mockedUrlService.shortenUrl.mockRejectedValueOnce(new Error('API Error'))

      render(<ShortenForm onCreated={mockOnCreated} />)

      const input = screen.getByPlaceholderText(/input the url you want to shorten/i)
      await user.type(input, 'https://example.com')
      await user.click(screen.getByRole('button', { name: /shorten/i }))

      await screen.findByText(/could not create short link/i)

      // Try again successfully
      mockedUrlService.shortenUrl.mockResolvedValueOnce(mockShortLink)

      await user.clear(input)
      await user.type(input, 'https://example2.com')
      await user.click(screen.getByRole('button', { name: /shorten/i }))

      await screen.findByPlaceholderText(/input the url you want to shorten/i)

      expect(mockOnCreated).toHaveBeenCalledWith(mockShortLink)
    })
  })

  describe('Accessibility', () => {
    it('should have associated label for input', () => {
      const mockOnCreated = vi.fn()
      render(<ShortenForm onCreated={mockOnCreated} />)

      const label = screen.getByText(/your long url/i)
      const input = screen.getByPlaceholderText(/input the url you want to shorten/i)

      expect(label).toHaveAttribute('for', 'url')
      expect(input).toHaveAttribute('id', 'url')
    })

    it('should have proper button role', () => {
      const mockOnCreated = vi.fn()
      render(<ShortenForm onCreated={mockOnCreated} />)

      expect(screen.getByRole('button', { name: /shorten/i })).toBeInTheDocument()
    })

    it('should display error messages clearly', async () => {
      const user = userEvent.setup()
      const mockOnCreated = vi.fn()
      render(<ShortenForm onCreated={mockOnCreated} />)

      await user.click(screen.getByRole('button', { name: /shorten/i }))

      const errorElement = screen.getByText(/please enter a url/i)
      expect(errorElement).toHaveClass('text-red-500')
    })
  })
})
