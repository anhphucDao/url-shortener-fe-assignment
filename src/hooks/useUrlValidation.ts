import { UrlValidationResult } from '../../types/types'

const validateUrlValue = (value: string): UrlValidationResult => {
  const trimmedValue = value.trim()

  if (!trimmedValue) {
    // return UrlValidationResult.Blank
    return UrlValidationResult.Blank
  }

  try {
    new URL(trimmedValue)
    return UrlValidationResult.Valid
  } catch {
    return UrlValidationResult.Invalid
  }
}

const useUrlValidation = () => {
  return {
    validateUrl: validateUrlValue,
  }
}

export default useUrlValidation
