export const ButtonVariant = {
  Primary: 'primary',
  Icon: 'icon',
  Rounded: 'rounded',
} as const

export type ButtonVariant = (typeof ButtonVariant)[keyof typeof ButtonVariant]
