import { ShoppingCart, Star } from 'lucide-react'
import { useDispatch } from 'react-redux'
import { addItem } from '../../redux/cart/slice'
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

const renderStars = (rate: number) => {
  const stars = []
  for (let i = 1; i <= 5; i++) {
    if (rate >= i) {
      stars.push(<Star key={i} size={16} fill="#ffc107" stroke="#ffc107" />)
    } else {
      stars.push(<Star key={i} size={16} fill="none" stroke="#ccc" />)
    }
  }

  return stars
}

export default function Card({ product }: IProps) {
  const dispatch = useDispatch()
  return (
    <CardContainer>
      <CardImage src={product.image} alt={`${product.title} product image`} />
      <CardBody>
        <ItemName>{product.title}</ItemName>
        <ItemRating>
          <div aria-label={`${product.rating.rate} out of 5 stars`}>
            {renderStars(product.rating.rate)}
          </div>
          <span>
            {product.rating.rate} ({product.rating.count})
          </span>
        </ItemRating>
        <strong>${product.price.toFixed(2)}</strong>
        <ProductDescription>{product.description}</ProductDescription>
        <hr />
        <CategoryContainer>
          <Category content={product.category} />
        </CategoryContainer>
        <Button type="button" onClick={() => dispatch(addItem({ ...product, quantity: 1 }))}>
          <ShoppingCart size={17} />
          <p>Add to Cart</p>
        </Button>
      </CardBody>
    </CardContainer>
  )
}
