export const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000'

export const api = {
  get: async (endpoint: string) => {
    const response = await fetch(`${API_URL}${endpoint}`)
    if (!response.ok) {
      throw new Error(`GET ${endpoint} failed with status ${response.status}`)
    }
    return response.json()
  },

  post: async <T>(endpoint: string, data: T) => {
    const response = await fetch(`${API_URL}${endpoint}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}))
      throw new Error(errorData.error || `POST ${endpoint} failed with status ${response.status}`)
    }
    return response.json()
  },
}
