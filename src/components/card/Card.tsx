import { ShoppingCart } from 'lucide-react'
import Starts from '../../Assets/svg/mockStars.svg'
import Category from '../category/Category'
import {
  Button,
  CardBody,
  CardContainer,
  CardImage,
  CategoryContainer,
  ItemName,
  ItemRating,
  ProductDescription,
} from './styles'

export default function Card() {
  return (
    <CardContainer>
      <CardImage src="https://placehold.co/220x100" alt="Fjallraven - Foldsack product image" />
      <CardBody>
        <ItemName>Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops</ItemName>
        <ItemRating>
          <img src={Starts} aria-label="5 out of 5 stars" />
          <span>5 (120)</span>
        </ItemRating>
        <strong>$00,00</strong>
        <ProductDescription>
          Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15
          inches) in the padded sleeve, your everyday
        </ProductDescription>
        <hr />
        <CategoryContainer>
          <Category content="man" />
        </CategoryContainer>
        <Button type="button">
          <ShoppingCart size={17} />
          <p>Add to Cart</p>
        </Button>
      </CardBody>
    </CardContainer>
  )
}
