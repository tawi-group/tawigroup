import 'dotenv/config';
// Base API URL - changes based on environment
const API_BASE_URL = import.meta.env.VITE_API_URL || '';

export async function apiRequest(endpoint: string, options?: RequestInit) {
  const url = `${API_BASE_URL}${endpoint}`;

  try {
    const response = await fetch(url, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...options?.headers,
      },
    });

    if (!response.ok) {
      const error = await response
        .json()
        .catch(() => ({ message: response.statusText }));
      throw new Error(
        error.message || `API request failed: ${response.statusText}`
      );
    }

    return response.json();
  } catch (error) {
    console.error('API request failed:', error);
    throw error;
  }
}

export const api = {
  contact: {
    submit: (data: any) =>
      apiRequest('/api/contact', {
        method: 'POST',
        body: JSON.stringify(data),
      }),
    getAll: () => apiRequest('/api/contacts'),
  },
  health: () => apiRequest('/api/health'),
};
