import { ShoppingCart } from 'lucide-react'
import Starts from '../../Assets/svg/mockStars.svg'
import type { Product } from '../../types/product'
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

interface IProps {
  product: Product
}

export default function Card({ product }: IProps) {
  return (
    <CardContainer>
      <CardImage src={product.image} alt={`${product.title} product image`} />
      <CardBody>
        <ItemName>{product.title}</ItemName>
        <ItemRating>
          <img src={Starts} aria-label="5 out of 5 stars" />
          <span>
            {product.rating.rate} ({product.rating.count})
          </span>
        </ItemRating>
        <strong>${product.price}</strong>
        <ProductDescription>{product.description}</ProductDescription>
        <hr />
        <CategoryContainer>
          <Category content={product.category} />
        </CategoryContainer>
        <Button type="button">
          <ShoppingCart size={17} />
          <p>Add to Cart</p>
        </Button>
      </CardBody>
    </CardContainer>
  )
}
