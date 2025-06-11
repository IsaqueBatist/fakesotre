import { useEffect, useState } from 'react'
import Card from '../../components/card/Card'
import { getAllProducts } from '../../services/products'
import type { Product } from '../../types/product'
import { CardsContainer } from './styles'

export default function Home() {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    getAllProducts().then(setProducts)

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

  return <CardsContainer>{products && products.map((p) => <Card key={p.id} product={p} />)}</CardsContainer>
}
