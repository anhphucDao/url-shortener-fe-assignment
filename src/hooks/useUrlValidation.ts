export type UrlValidationResult = 'blank' | 'invalid' | 'valid'

const validateUrlValue = (value: string): UrlValidationResult => {
  const trimmedValue = value.trim()

  if (!trimmedValue) {
    return 'blank'
  }

  try {
    new URL(trimmedValue)
    return 'valid'
  } catch {
    return 'invalid'
  }
}

const useUrlValidation = () => {
  return {
    validateUrl: validateUrlValue,
  }
}

export default useUrlValidation
