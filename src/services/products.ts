import type { Product } from "../types/product";
import api from "./api"


export const getAllProducts = async (): Promise<Product[]> => {
  const response = await api.get('/products');
  return response.data;
}

export const getProductById = async (id:number): Promise<Product> => {
  const response = await api.get(`/products/${id}`)
  return response.data
}

export const getCategories = async (): Promise<string[]> => {
  const response = await api.get('/products/categories')
  return response.data
}

