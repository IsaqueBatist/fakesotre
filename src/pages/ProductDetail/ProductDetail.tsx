import { useParams } from 'react-router-dom'

export default function ProductDetail() {
  const param = useParams()
  console.log(param.id)
  return <h1>ProductDetail {param.Id} ssssssssssssssssssssssssssss</h1>
}
