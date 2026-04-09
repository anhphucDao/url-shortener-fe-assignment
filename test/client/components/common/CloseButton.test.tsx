import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import CloseButton from '../../../../src/client/components/common/CloseButton'

describe('CloseButton Component', () => {
  it('should render close button', () => {
    render(<CloseButton onClick={vi.fn()} />)
    const button = screen.getByRole('button')
    expect(button).toBeInTheDocument()
  })

  it('should call onClick when clicked', async () => {
    const user = userEvent.setup()
    const handleClick = vi.fn()
    render(<CloseButton onClick={handleClick} />)

    await user.click(screen.getByRole('button'))
    expect(handleClick).toHaveBeenCalledOnce()
  })

  it('should have secondary variant style', () => {
    render(<CloseButton onClick={vi.fn()} />)
    const button = screen.getByRole('button')
    expect(button).toHaveClass('border')
  })

  it('should have positioned classes', () => {
    render(<CloseButton onClick={vi.fn()} />)
    const button = screen.getByRole('button')
    expect(button).toHaveClass('absolute', 'top-3', 'right-3', 'z-20')
  })
})
