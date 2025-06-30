import api from './api'

export const getAllCategories = async (): Promise<string[]> => {
  const response = await api.get('/products/categories')
  return response.data
}
