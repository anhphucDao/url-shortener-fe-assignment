export const ButtonShape = {
  round: 'round',
  square: 'square',
} as const

export const ButtonWidth = {
  full: 'full',
  fit: 'fit',
} as const

export const ButtonSize = {
  sm: 'sm',
  md: 'md',
  lg: 'lg',
} as const

export type ButtonShapeType = (typeof ButtonShape)[keyof typeof ButtonShape]
export type ButtonWidthType = (typeof ButtonWidth)[keyof typeof ButtonWidth]
export type ButtonSizeType = (typeof ButtonSize)[keyof typeof ButtonSize]
