import type { Cart } from "../types/cart";
import api from "./api";

export const getCartByID = async (cartID: number): Promise<Cart> => {
  const response = await api.get(`/carts/${cartID}`);
  return response.data;
};
