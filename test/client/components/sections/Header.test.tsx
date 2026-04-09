import '@testing-library/jest-dom'
import { describe, it, expect, vi } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Header from '../../../../src/client/components/sections/Header'

// Mock the icons to avoid import issues
vi.mock('../../../../src/client/components/icons', () => ({
  DropdownIcon: ({ isOpen }: { isOpen: boolean }) => (
    <span data-testid="dropdown-icon" data-open={isOpen}>
      {isOpen ? '▲' : '▼'}
    </span>
  ),
  LogoutIcon: () => <span data-testid="logout-icon">⎋</span>,
}))

describe('Header Component', () => {
  describe('Initial Render', () => {
    it('should render header with title', () => {
      render(<Header />)
      expect(screen.getByText('Fessior DevCamp 2026')).toBeInTheDocument()
    })

    it('should render in logged in state by default', () => {
      render(<Header />)
      expect(screen.getByText('Vinh Luong')).toBeInTheDocument()
    })

    it('should display profile avatar', () => {
      render(<Header />)
      const avatar = screen.getByAltText('Profile')
      expect(avatar).toBeInTheDocument()
      expect(avatar).toHaveAttribute(
        'src',
        'https://avatars.githubusercontent.com/u/9919?v=4'
      )
    })

    it('should not show dropdown menu by default', () => {
      render(<Header />)
      expect(screen.queryByText('Logout')).not.toBeInTheDocument()
    })
  })

  describe('Login/Logout State', () => {
    it('should show login button when not logged in', async () => {
      const user = userEvent.setup()
      render(<Header />)

      // Start logged in, click logout
      const profileButton = screen.getByRole('button', { name: /vinh luong/i })
      await user.click(profileButton)

      const logoutButton = screen.getByRole('button', { name: /logout/i })
      await user.click(logoutButton)

      // Now should show login button
      expect(screen.getByRole('button', { name: /log in/i })).toBeInTheDocument()
      expect(screen.queryByText('Vinh Luong')).not.toBeInTheDocument()
    })

    it('should return to logged in state after login', async () => {
      const user = userEvent.setup()
      render(<Header />)

      // Logout
      const profileButton = screen.getByRole('button', { name: /vinh luong/i })
      await user.click(profileButton)

      const logoutButton = screen.getByRole('button', { name: /logout/i })
      await user.click(logoutButton)

      // Login again
      const loginButton = screen.getByRole('button', { name: /log in/i })
      await user.click(loginButton)

      expect(screen.getByText('Vinh Luong')).toBeInTheDocument()
      expect(screen.getByAltText('Profile')).toBeInTheDocument()
    })

    it('should close dropdown after login action', async () => {
      const user = userEvent.setup()
      render(<Header />)

      // Logout to show login button
      const profileButton = screen.getByRole('button', { name: /vinh luong/i })
      await user.click(profileButton)

      const logoutButton = screen.getByRole('button', { name: /logout/i })
      await user.click(logoutButton)

      // Login
      const loginButton = screen.getByRole('button', { name: /log in/i })
      await user.click(loginButton)

      // Dropdown should not be visible
      expect(screen.queryByText('Logout')).not.toBeInTheDocument()
    })
  })

  describe('Dropdown Menu', () => {
    it('should toggle dropdown visibility when clicking profile button', async () => {
      const user = userEvent.setup()
      render(<Header />)

      const profileButton = screen.getByRole('button', { name: /vinh luong/i })

      // Open dropdown
      await user.click(profileButton)
      expect(screen.getByText('Logout')).toBeInTheDocument()

      // Close dropdown
      await user.click(profileButton)
      expect(screen.queryByText('Logout')).not.toBeInTheDocument()
    })

    it('should show logout button in dropdown', async () => {
      const user = userEvent.setup()
      render(<Header />)

      const profileButton = screen.getByRole('button', { name: /vinh luong/i })
      await user.click(profileButton)

      const logoutButton = screen.getByRole('button', { name: /logout/i })
      expect(logoutButton).toBeInTheDocument()
    })

    it('should have correct styles on dropdown menu', async () => {
      const user = userEvent.setup()
      render(<Header />)

      const profileButton = screen.getByRole('button', { name: /vinh luong/i })
      await user.click(profileButton)

      const logoutButton = screen.getByRole('button', { name: /logout/i })
      expect(logoutButton.closest('div')).toHaveClass('rounded-2xl', 'bg-white')
    })

    it('should close dropdown after logout', async () => {
      const user = userEvent.setup()
      render(<Header />)

      const profileButton = screen.getByRole('button', { name: /vinh luong/i })
      await user.click(profileButton)

      const logoutButton = screen.getByRole('button', { name: /logout/i })
      await user.click(logoutButton)

      expect(screen.queryByText('Logout')).not.toBeInTheDocument()
    })
  })

  describe('Dropdown Icon', () => {
    it('should show closed dropdown icon by default', () => {
      render(<Header />)
      const dropdownIcon = screen.getByTestId('dropdown-icon')
      expect(dropdownIcon).toHaveAttribute('data-open', 'false')
    })

    it('should update dropdown icon when menu is opened', async () => {
      const user = userEvent.setup()
      render(<Header />)

      const profileButton = screen.getByRole('button', { name: /vinh luong/i })
      await user.click(profileButton)

      const dropdownIcon = screen.getByTestId('dropdown-icon')
      expect(dropdownIcon).toHaveAttribute('data-open', 'true')
    })

    it('should revert dropdown icon when menu is closed', async () => {
      const user = userEvent.setup()
      render(<Header />)

      const profileButton = screen.getByRole('button', { name: /vinh luong/i })

      // Open
      await user.click(profileButton)
      let dropdownIcon = screen.getByTestId('dropdown-icon')
      expect(dropdownIcon).toHaveAttribute('data-open', 'true')

      // Close
      await user.click(profileButton)
      dropdownIcon = screen.getByTestId('dropdown-icon')
      expect(dropdownIcon).toHaveAttribute('data-open', 'false')
    })
  })

  describe('Styling and Layout', () => {
    it('should have header element with correct classes', () => {
      render(<Header />)
      const header = screen.getByRole('banner')
      expect(header).toHaveClass('bg-white', 'relative')
    })

    it('should display profile button with proper structure', () => {
      render(<Header />)
      const profileButton = screen.getByRole('button', { name: /vinh luong/i })
      expect(profileButton).toBeInTheDocument()
      expect(within(profileButton).getByAltText('Profile')).toBeInTheDocument()
      expect(within(profileButton).getByText('Vinh Luong')).toBeInTheDocument()
    })

    it('should display login button with rounded-full style', async () => {
      const user = userEvent.setup()
      render(<Header />)

      // Logout first
      const profileButton = screen.getByRole('button', { name: /vinh luong/i })
      await user.click(profileButton)

      const logoutButton = screen.getByRole('button', { name: /logout/i })
      await user.click(logoutButton)

      const loginButton = screen.getByRole('button', { name: /log in/i })
      expect(loginButton).toHaveClass('rounded-full')
    })
  })

  describe('Accessibility', () => {
    it('should render buttons with semantic role', () => {
      render(<Header />)
      expect(screen.getByRole('banner')).toBeInTheDocument()
    })

    it('should have profile image with alt text', () => {
      render(<Header />)
      expect(screen.getByAltText('Profile')).toBeInTheDocument()
    })

    it('should have descriptive button labels', async () => {
      const user = userEvent.setup()
      render(<Header />)

      const profileButton = screen.getByRole('button', { name: /vinh luong/i })
      expect(profileButton).toBeInTheDocument()

      await user.click(profileButton)
      expect(screen.getByRole('button', { name: /logout/i })).toBeInTheDocument()
    })
  })

  describe('Multiple Interactions', () => {
    it('should handle rapid toggle of dropdown', async () => {
      const user = userEvent.setup()
      render(<Header />)

      const profileButton = screen.getByRole('button', { name: /vinh luong/i })

      // Toggle multiple times
      await user.click(profileButton)
      expect(screen.getByText('Logout')).toBeInTheDocument()

      await user.click(profileButton)
      expect(screen.queryByText('Logout')).not.toBeInTheDocument()

      await user.click(profileButton)
      expect(screen.getByText('Logout')).toBeInTheDocument()
    })

    it('should handle complete login/logout cycle', async () => {
      const user = userEvent.setup()
      render(<Header />)

      // Start logged in
      expect(screen.getByText('Vinh Luong')).toBeInTheDocument()

      // Logout
      const profileButton = screen.getByRole('button', { name: /vinh luong/i })
      await user.click(profileButton)
      await user.click(screen.getByRole('button', { name: /logout/i }))

      expect(screen.getByRole('button', { name: /log in/i })).toBeInTheDocument()

      // Login again
      await user.click(screen.getByRole('button', { name: /log in/i }))
      expect(screen.getByText('Vinh Luong')).toBeInTheDocument()
    })
  })
})
