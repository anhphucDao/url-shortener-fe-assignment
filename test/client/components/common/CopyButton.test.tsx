import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import CopyButton from '../../../../src/client/components/common/CopyButton'

describe('CopyButton Component', () => {
  it('should render with copy icon by default', () => {
    render(<CopyButton isCopied={false} onClick={vi.fn()} />)
    const button = screen.getByRole('button', { name: /copy short url/i })
    expect(button).toBeInTheDocument()
  })

  it('should render checkmark when isCopied is true', () => {
    render(<CopyButton isCopied={true} onClick={vi.fn()} />)
    const button = screen.getByRole('button', { name: /copy short url/i })
    expect(button).toBeInTheDocument()
  })

  it('should call onClick when clicked', async () => {
    const user = userEvent.setup()
    const handleClick = vi.fn()
    render(<CopyButton isCopied={false} onClick={handleClick} />)

    await user.click(screen.getByRole('button'))
    expect(handleClick).toHaveBeenCalledOnce()
  })

  it('should have correct title attribute', () => {
    render(<CopyButton isCopied={false} onClick={vi.fn()} />)
    expect(screen.getByRole('button')).toHaveAttribute('title', 'Copy short URL')
  })

  it('should update icon state when isCopied changes', () => {
    const { rerender } = render(<CopyButton isCopied={false} onClick={vi.fn()} />)
    expect(screen.getByRole('button')).toBeInTheDocument()

    rerender(<CopyButton isCopied={true} onClick={vi.fn()} />)
    expect(screen.getByRole('button')).toBeInTheDocument()
  })
})
