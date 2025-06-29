import { useEffect, useState } from "react";
import { CartSidebar, CloseButton } from "./styles";
import type { CartProduct } from "../../types/cart";
import { useSelector } from "react-redux";
import type { RootState } from "../../redux/store";
import { getCartByID } from "../../services/cart";
import { getCartProducts } from "../../utils/getCartProducts";
import ItemCart from "./ItemCart/ItemCart";

export interface ICartProps {
  isVisible: boolean;
  setCartVisible: (value: boolean) => void;
}

export default function Cart({ isVisible, setCartVisible }: ICartProps) {
  const [products, setProducts] = useState<CartProduct[]>([]);

  const userID: number = useSelector(
    (state: RootState) => state.userReducer.currentUser?.id
  );

  useEffect(() => {
    const getCart = async () => {
      const cart = await getCartByID(userID);
      const products = await getCartProducts(cart);
      setProducts(products);
    };
    getCart();
  }, [userID]);

  return (
    <CartSidebar visible={isVisible}>
      <CloseButton onClick={() => setCartVisible(false)}>×</CloseButton>
      <h3>Your cart</h3>
      {products && products.map((p) => <ItemCart {...p} />)}
    </CartSidebar>
  );
}
