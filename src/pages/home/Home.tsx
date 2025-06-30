import { useEffect, useMemo, useState } from 'react'
import Card from '../../components/card/Card'
import { getAllCategories } from '../../services/category'
import { getAllProducts } from '../../services/products'
import type { Product } from '../../types/product'
import {
  CardsContainer,
  CategoriesContainer,
  Category,
  CategoryDisabled,
  FiltersContainer,
} from './styles'

export default function Home() {
  const [products, setProducts] = useState<Product[]>([])
  const [categories, setCategories] = useState<string[]>([])
  const [selectedCategory, setSelectedCategory] = useState('')

  useEffect(() => {
    getProducts()
    getAllCategories().then(setCategories)

    /*Função para remover fundo
    OBS: Não está implementada pela limitação de requisições
    
    const removeBgFromImages = async () => {
      //Pega todos os produtos
      const data: Product[] = await getAllProducts()

      //Remove o fundo
      const processedData = await Promise.all(
        data.map(async (p) => {
          try {
            const newUrl = await removeBg(p.image)
            return { ...p, image: newUrl }
          } catch (error) {
            console.error(`Something went wrong whit image ${p.title}`, error)
            return p
          }
        })
      )

      setProducts(processedData)
    }

    removeBgFromImages()
    */
  }, [])

  const getProducts = async () => {
    const data = await getAllProducts()
    setProducts(data)
  }

  const filterProducts = useMemo(() => {
    if (!selectedCategory) return products
    return products.filter((p) => p.category === selectedCategory)
  }, [products, selectedCategory])

  return (
    <>
      <FiltersContainer>
        <CategoriesContainer>
          {categories &&
            categories.map((c) =>
              c === selectedCategory ? (
                <Category onClick={() => setSelectedCategory('')}>{c}</Category>
              ) : (
                <CategoryDisabled onClick={() => setSelectedCategory(c)}>{c}</CategoryDisabled>
              )
            )}
        </CategoriesContainer>
      </FiltersContainer>
      <CardsContainer>
        {filterProducts && filterProducts.map((p) => <Card key={p.id} product={p} />)}
      </CardsContainer>
    </>
  )
}
