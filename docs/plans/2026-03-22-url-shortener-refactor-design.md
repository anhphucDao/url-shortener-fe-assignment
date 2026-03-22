# URL Shortener Refactor Design (UI + Hooks)

## Goal
Improve component structure, hooks usage, and TypeScript safety by splitting App UI into presentational components and extracting reusable logic into hooks.

## Scope
- Extract `Header` and `UrlInputCard` presentational components.
- Create `useUrlValidation` and `useClipboard` hooks.
- Keep state and orchestration in `App`.
- Preserve current UI and alert-based UX.

## Architecture
- **App (container)**: owns state (`urlValue`, `shortenedUrl`, `isModalOpen`) and handlers.
- **Header**: renders logo + user info block.
- **UrlInputCard**: renders title/subtitle, URL input, and shorten button.
- **ShortenModal**: unchanged, receives props from App.

## Hooks & Data Flow
- `useUrlValidation` provides `validateUrl(value)` returning a union type (`'blank' | 'invalid' | 'valid'`).
- `useClipboard` exposes `copyText(text)` returning `Promise<boolean>` using Clipboard API with textarea fallback.
- App uses hooks to validate and copy; handlers remain in App.

## Type Safety
- Explicit event typing for input changes.
- Union type for validation result to guard logic branches.

## Error Handling
- Keep existing alert messages for validation errors and copy failures.
- Log clipboard errors to console.

## Out of Scope
- API integration.
- UI/UX changes beyond existing behavior.

## Success Criteria
- `App` is smaller and focused on orchestration.
- Hooks are reusable and typed.
- UI output remains unchanged.
