import axios from 'axios'
import type { removeBgRequest } from '../types/removebgRequest'

const apiKey: string = import.meta.env.VITE_REMOVEBG_API_KEY

export const removeBg = async (imageUrl: string): Promise<string> => {
  const data: removeBgRequest = {
    image_url: imageUrl,
    size: 'auto',
  }

  //Fazendo a requisição
  const response = await axios.post('https://api.remove.bg/v1.0/removebg', data, {
    headers: { 'X-Api-Key': apiKey },
    responseType: 'arraybuffer',
  })

  //Tratando o retorno da função
  const blob = new Blob([response.data], { type: 'image/png' })
  const reader = new FileReader()

  return await new Promise((resolve) => {
    reader.onloadend = () => {
      resolve(reader.result as string)
    }
    reader.readAsDataURL(blob)
  })
}
