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
      <CardImage src="https://placehold.co/220x100" />
      <CardBody>
        <ItemName>Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops</ItemName>
        <ItemRating>
          <img src={Starts} alt="start rating" />
          <span>5 (120)</span>
        </ItemRating>
        <span id="price">$00,00</span>
        <ProductDescription>
          Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
          velit...
        </ProductDescription>
        <hr />
        <CategoryContainer>
          <Category content="man" />
        </CategoryContainer>
        <Button>Add to Cart</Button>
      </CardBody>
    </CardContainer>
  )
}
