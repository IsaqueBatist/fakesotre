import { useEffect } from "react";
import { CartSidebar, CloseButton } from "./styles";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../redux/store";
import { getCartByID } from "../../services/cart";
import { getCartProducts } from "../../utils/getCartProducts";
import ItemCart from "./ItemCart/ItemCart";
import { setCart } from "../../redux/cart/slice";
import { CartTotal } from "./ItemCart/styles";
import { selectProductsTotalPrice } from "../../redux/cart/cart.selectors";

export interface ICartProps {
  isVisible: boolean;
  setCartVisible: (value: boolean) => void;
}

export default function Cart({ isVisible, setCartVisible }: ICartProps) {
  const cartProducts = useSelector(
    (state: RootState) => state.cartReducer.products
  );
  const userID: number = useSelector(
    (state: RootState) => state.userReducer.currentUser?.id
  );
  const cartTotal = useSelector(selectProductsTotalPrice);

  const dispatch = useDispatch();

  useEffect(() => {
    const getCart = async () => {
      const cart = await getCartByID(userID);
      const products = await getCartProducts(cart);
      dispatch(setCart(products));
    };
    getCart();
  }, [userID]);

  return (
    <CartSidebar visible={isVisible}>
      <CloseButton onClick={() => setCartVisible(false)}>×</CloseButton>
      <h3>Your cart</h3>
      {cartProducts && cartProducts.map((p) => <ItemCart key={p.id} {...p} />)}
      <CartTotal>Total: ${cartTotal.toFixed(2)}</CartTotal>
    </CartSidebar>
  );
}
