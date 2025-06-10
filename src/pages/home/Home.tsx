import { useEffect, useState } from "react";
import { getAllProducts } from "../../services/products";
import type { Product } from "../../types/product";
import { CardsContainer } from "./styles";
import Card from "../../components/card/Card";

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);


  useEffect(() => {
    getAllProducts().then(setProducts)
  },[])


  return (
    <CardsContainer>
      {products && products.map((p) => <Card product={p}/>)}
    </CardsContainer>
  )
}
