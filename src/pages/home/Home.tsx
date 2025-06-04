import { useEffect, useState } from "react"
import type { Product } from "../../types/product"
import { getAllProducts } from "../../services/products"

export default function Home() {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    getAllProducts().then(setProducts)
  }, [])
  return (
    <div>
      {products.map((p) => (
        <div>
          <p>{p.title}</p>
        </div>
      ))}
    </div>
  )
}
