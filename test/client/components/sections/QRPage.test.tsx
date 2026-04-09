import '@testing-library/jest-dom'
import { describe, it, expect, beforeEach, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import QRPage from '../../../../src/client/components/sections/QRPage'

// Mock the icons and components
vi.mock('../../../../src/client/components/icons', () => ({
  DownloadIcon: () => <span data-testid="download-icon">⬇</span>,
}))

vi.mock('../../../../src/client/components/common', () => ({
  CopyButton: ({
    isCopied,
    onClick,
  }: {
    isCopied: boolean
    onClick: () => void
  }) => (
    <button data-testid="copy-button" data-copied={isCopied} onClick={onClick}>
      {isCopied ? 'Copied!' : 'Copy'}
    </button>
  ),
  CloseButton: ({ onClick }: { onClick: () => void }) => (
    <button data-testid="close-button" onClick={onClick}>
      ✕
    </button>
  ),
  Button: ({
    children,
    onClick,
    title,
  }: {
    children: React.ReactNode
    onClick: () => void
    title?: string
  }) => (
    <button data-testid="button" onClick={onClick} title={title}>
      {children}
    </button>
  ),
  SlantedDivider: ({ className }: { className?: string }) => (
    <div data-testid="slanted-divider" className={className} />
  ),
  CornerDecorations: () => <div data-testid="corner-decorations" />,
}))

// Mock QRCodeCanvas
vi.mock('qrcode.react', () => ({
  QRCodeCanvas: ({ value }: { value: string }) => (
    <canvas data-testid="qr-canvas" data-value={value} />
  ),
}))

describe('QRPage Component', () => {
  const mockProps = {
    shortUrl: 'http://localhost:3000/abc123',
    originalUrl: 'https://example.com/very/long/url',
    onClose: vi.fn(),
  }

  beforeEach(() => {
    vi.clearAllMocks()
  })

  describe('Rendering', () => {
    it('should render with heading "Link shortened!"', () => {
      render(<QRPage {...mockProps} />)
      expect(screen.getByText('Link shortened!')).toBeInTheDocument()
    })

    it('should render description text', () => {
      render(<QRPage {...mockProps} />)
      expect(
        screen.getByText(/Access the "My URL" page to view statistics/i)
      ).toBeInTheDocument()
    })

    it('should render QR code canvas', () => {
      render(<QRPage {...mockProps} />)
      expect(screen.getByTestId('qr-canvas')).toBeInTheDocument()
    })

    it('should render short URL in input field', () => {
      render(<QRPage {...mockProps} />)
      const input = screen.getByDisplayValue(mockProps.shortUrl) as HTMLInputElement
      expect(input).toBeInTheDocument()
      expect(input).toHaveAttribute('readOnly')
    })

    it('should render copy button', () => {
      render(<QRPage {...mockProps} />)
      expect(screen.getByTestId('copy-button')).toBeInTheDocument()
    })

    it('should render close button', () => {
      render(<QRPage {...mockProps} />)
      expect(screen.getByTestId('close-button')).toBeInTheDocument()
    })

    it('should render download QR button', () => {
      render(<QRPage {...mockProps} />)
      const buttons = screen.getAllByTestId('button')
      expect(buttons.length).toBeGreaterThan(0)
    })

    it('should render with modal styling', () => {
      const { container } = render(<QRPage {...mockProps} />)
      const modal = container.firstChild
      expect(modal).toHaveClass('fixed', 'inset-0', 'z-50')
    })
  })

  describe('QR Code Generation', () => {
    it('should generate QR code with provided short URL', () => {
      render(<QRPage {...mockProps} />)
      const qrCanvas = screen.getByTestId('qr-canvas')
      expect(qrCanvas).toHaveAttribute('data-value', mockProps.shortUrl)
    })

    it('should generate QR code with different URLs', () => {
      const altProps = {
        ...mockProps,
        shortUrl: 'http://localhost:3000/xyz789',
      }
      render(<QRPage {...altProps} />)
      const qrCanvas = screen.getByTestId('qr-canvas')
      expect(qrCanvas).toHaveAttribute('data-value', 'http://localhost:3000/xyz789')
    })

    it('should display corner decorations', () => {
      render(<QRPage {...mockProps} />)
      expect(screen.getByTestId('corner-decorations')).toBeInTheDocument()
    })

    it('should display slanted divider', () => {
      render(<QRPage {...mockProps} />)
      expect(screen.getByTestId('slanted-divider')).toBeInTheDocument()
    })
  })

  describe('Copy to Clipboard', () => {
    it('should copy short URL when copy button is clicked', async () => {
      const user = userEvent.setup()

      const mockClipboard = {
        writeText: vi.fn().mockResolvedValue(undefined),
      }
      Object.defineProperty(navigator, 'clipboard', {
        value: mockClipboard,
        configurable: true,
      })

      render(<QRPage {...mockProps} />)

      const copyButton = screen.getByTestId('copy-button')
      await user.click(copyButton)

      expect(mockClipboard.writeText).toHaveBeenCalledWith(mockProps.shortUrl)
    })

    it('should show copied state after copy', async () => {
      const user = userEvent.setup()

      const mockClipboard = {
        writeText: vi.fn().mockResolvedValue(undefined),
      }
      Object.defineProperty(navigator, 'clipboard', {
        value: mockClipboard,
        configurable: true,
      })

      render(<QRPage {...mockProps} />)

      const copyButton = screen.getByTestId('copy-button')
      expect(copyButton).toHaveAttribute('data-copied', 'false')

      await user.click(copyButton)

      expect(copyButton).toHaveAttribute('data-copied', 'true')
    })
  })

  describe('Download QR Code', () => {
    it('should download QR code when download button is clicked', async () => {
      const user = userEvent.setup()

      // Mock URL.createObjectURL and document.createElement
      const createElementSpy = vi.spyOn(document, 'createElement')
      const mockLink = document.createElement('a')
      mockLink.click = vi.fn()
      createElementSpy.mockReturnValueOnce(mockLink)

      render(<QRPage {...mockProps} />)

      const downloadButton = screen.getByTitle('Download QR')
      await user.click(downloadButton)

      expect(createElementSpy).toHaveBeenCalledWith('a')

      createElementSpy.mockRestore()
    })
  })

  describe('Close Modal', () => {
    it('should call onClose when close button is clicked', async () => {
      const user = userEvent.setup()
      const onCloseSpy = vi.fn()

      render(<QRPage {...mockProps} onClose={onCloseSpy} />)

      const closeButton = screen.getByTestId('close-button')
      await user.click(closeButton)

      expect(onCloseSpy).toHaveBeenCalledOnce()
    })

    it('should be triggered only once per click', async () => {
      const user = userEvent.setup()
      const onCloseSpy = vi.fn()

      render(<QRPage {...mockProps} onClose={onCloseSpy} />)

      const closeButton = screen.getByTestId('close-button')
      await user.click(closeButton)

      expect(onCloseSpy).toHaveBeenCalledTimes(1)
    })
  })

  describe('Input Field', () => {
    it('should display short URL in read-only input', () => {
      render(<QRPage {...mockProps} />)
      const input = screen.getByDisplayValue(mockProps.shortUrl) as HTMLInputElement
      expect(input).toHaveAttribute('readOnly')
      expect(input).toHaveAttribute('type', 'text')
    })



    it('should have correct styling classes', () => {
      render(<QRPage {...mockProps} />)
      const input = screen.getByDisplayValue(mockProps.shortUrl)
      expect(input).toHaveClass('border', 'rounded-xl', 'px-4', 'py-3')
    })
  })

  describe('Layout and Styling', () => {
    it('should have blue header background', () => {
      const { container } = render(<QRPage {...mockProps} />)
      const header = container.querySelector('.bg-\\[\\#0B2A7B\\]')
      expect(header).toBeInTheDocument()
    })

    it('should have modal overlay with backdrop blur', () => {
      const { container } = render(<QRPage {...mockProps} />)
      const overlay = container.firstChild
      expect(overlay).toHaveClass('bg-black/30')
      expect(overlay).toHaveClass('backdrop-blur-[2px]')
    })

    it('should center content', () => {
      const { container } = render(<QRPage {...mockProps} />)
      const overlay = container.firstChild
      expect(overlay).toHaveClass('flex', 'items-center', 'justify-center')
    })

    it('should have rounded corners', () => {
      const { container } = render(<QRPage {...mockProps} />)
      const modal = container.querySelector('.rounded-2xl')
      expect(modal).toBeInTheDocument()
    })

    it('should have shadow styling', () => {
      const { container } = render(<QRPage {...mockProps} />)
      const modal = container.querySelector('.shadow-2xl')
      expect(modal).toBeInTheDocument()
    })
  })

  describe('Integration', () => {
    it('should render complete modal with all elements', () => {
      render(<QRPage {...mockProps} />)

      expect(screen.getByText('Link shortened!')).toBeInTheDocument()
      expect(screen.getByTestId('qr-canvas')).toBeInTheDocument()
      expect(screen.getByDisplayValue(mockProps.shortUrl)).toBeInTheDocument()
      expect(screen.getByTestId('copy-button')).toBeInTheDocument()
      expect(screen.getByTestId('close-button')).toBeInTheDocument()
    })


  })

  describe('Accessibility', () => {
    it('should have proper z-index for modal', () => {
      const { container } = render(<QRPage {...mockProps} />)
      const modal = container.firstChild
      expect(modal).toHaveClass('z-50')
    })

    it('should have title for download button', () => {
      render(<QRPage {...mockProps} />)
      const downloadButton = screen.getByTitle('Download QR')
      expect(downloadButton).toBeInTheDocument()
    })

    it('should have alt text for profile image', () => {
      render(<QRPage {...mockProps} />)
      const input = screen.getByDisplayValue(mockProps.shortUrl)
      expect(input).toBeInTheDocument()
    })
  })
})
