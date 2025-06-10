import { CategoryItemContainer } from './styles'

interface IProp {
  content: string
}

export default function Category({ content }: IProp) {
  return <CategoryItemContainer>{content}</CategoryItemContainer>
}
