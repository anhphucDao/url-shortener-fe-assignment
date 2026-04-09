 # Test Suite

This folder contains all tests for the URL Shortener application, organized to mirror the `src/client` structure.

## Structure

```
__tests__/
├── setup.ts                  # Test environment setup
├── client/
│   ├── components/           # Component tests
│   │   ├── common/           # Common UI components
│   │   └── sections/         # Page/section components
│   ├── utils/                # Utility function tests
│   └── services/             # API service tests
```

## Running Tests

```bash
# Run all tests
yarn test

# Run in watch mode (auto-rerun on file changes)
yarn test:watch

# Open UI dashboard
yarn test:ui

# Generate coverage report
yarn test:coverage
```

## Writing Tests

### Test File Naming
- Test files mirror source structure
- Name: `{ComponentName}.test.tsx` or `{functionName}.test.ts`
- Example: Component at `src/client/components/common/Button.tsx` → Test at `src/__tests__/client/components/common/Button.test.tsx`

### Test Template

**For Components:**
```typescript
import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import MyComponent from '../../../client/components/MyComponent'

describe('MyComponent', () => {
  it('should render correctly', () => {
    render(<MyComponent />)
    expect(screen.getByText('text')).toBeInTheDocument()
  })

  it('should handle user interaction', async () => {
    const user = userEvent.setup()
    const handleClick = vi.fn()
    render(<MyComponent onClick={handleClick} />)
    
    await user.click(screen.getByRole('button'))
    expect(handleClick).toHaveBeenCalledOnce()
  })
})
```

**For Utilities:**
```typescript
import { describe, it, expect } from 'vitest'
import { myFunction } from '../../../client/utils/myUtils'

describe('myFunction', () => {
  it('should return expected result', () => {
    expect(myFunction('input')).toBe('expected')
  })
})
```

## Best Practices

✅ **Do:**
- Test behavior, not implementation
- Use descriptive test names
- Test error cases and edge cases
- Keep tests focused and isolated
- Mock external dependencies (APIs, services)

❌ **Don't:**
- Test internal state
- Create brittle snapshots
- Skip error cases
- Write tests for trivial code
- Make tests dependent on execution order

## Resources

- [Vitest Documentation](https://vitest.dev)
- [React Testing Library](https://testing-library.com/react)
- [Testing Best Practices](https://kentcdodds.com/blog/common-mistakes-with-react-testing-library)
