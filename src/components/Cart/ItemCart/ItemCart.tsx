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

export default function ItemCart({
  price,
  quantity,
  title,
}: Pick<CartProduct, "id" | "title" | "price" | "quantity">) {
  return (
    <Card>
      <Info>
        <Name>{title}</Name>
        <Price>R$ {price.toFixed(2)}</Price>
      </Info>

      <QuantityControl>
        <IconButton>
          <Minus size={18} />
        </IconButton>
        <Quantity>{quantity}</Quantity>
        <IconButton>
          <Plus size={18} />
        </IconButton>
      </QuantityControl>

      <RemoveButton>
        <Trash2 size={20} />
      </RemoveButton>
    </Card>
  );
}
