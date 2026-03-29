export const UrlValidationResult = {
  // Cant use enum because erasableSyntaxOnly is enabled
  Blank: 'blank',
  Invalid: 'invalid',
  Valid: 'valid',
} as const

export type UrlValidationResult = (typeof UrlValidationResult)[keyof typeof UrlValidationResult]
