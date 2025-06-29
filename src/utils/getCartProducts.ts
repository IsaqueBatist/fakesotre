import { getProductById } from "../services/products";
import type { Cart, CartProduct } from "../types/cart";

export const getCartProducts = async (cart: Cart): Promise<CartProduct[]> => {
  const cartProducts = await Promise.all(
    cart.products.map(async (p) => {
      const data = await getProductById(p.productId);

      return {
        ...data,
        quantity: p.quantity,
      };
    })
  );

  return cartProducts;
};
