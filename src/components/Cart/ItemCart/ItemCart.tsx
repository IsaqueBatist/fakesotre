import { useDispatch } from "react-redux";
import type { CartProduct } from "../../../types/cart";
import {
  Card,
  IconButton,
  Info,
  Name,
  Price,
  Quantity,
  QuantityControl,
  RemoveButton,
} from "./styles";
import { Minus, Plus, Trash2 } from "lucide-react";
import {
  decreaseItem,
  increaseItem,
  removeItem,
} from "../../../redux/cart/slice";

export default function ItemCart({
  price,
  quantity,
  title,
  id,
}: Pick<CartProduct, "id" | "title" | "price" | "quantity">) {
  const dispatch = useDispatch();

  return (
    <Card>
      <Info>
        <Name>{title}</Name>
        <Price>R$ {price.toFixed(2)}</Price>
      </Info>

      <QuantityControl>
        <IconButton>
          <Minus size={18} onClick={() => dispatch(decreaseItem(id))} />
        </IconButton>
        <Quantity>{quantity}</Quantity>
        <IconButton>
          <Plus size={18} onClick={() => dispatch(increaseItem(id))} />
        </IconButton>
      </QuantityControl>

      <RemoveButton>
        <Trash2 size={20} onClick={() => dispatch(removeItem(id))} />
      </RemoveButton>
    </Card>
  );
}
