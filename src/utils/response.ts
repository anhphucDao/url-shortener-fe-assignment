export function buildBaseResponse<T>(
  isSuccess: boolean,
  data: T | null,
  errorMessage: string | null = null
) {
  return {
    isSuccess,
    data,
    errorMessage,
  }
}
