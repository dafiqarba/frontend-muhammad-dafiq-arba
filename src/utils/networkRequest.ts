import { getQuery } from './strings'
import { BASE_API_URL, COUNTRIES, GOODS, PORTS } from '@/constants'

export const fetchCountry = async () => {
  const response = await fetch(`${BASE_API_URL}/${COUNTRIES}`)
  return await response.json()
}

export const fetchPorts = async (query: string | null) => {
  const response = await fetch(`${BASE_API_URL}/${PORTS}${getQuery(query, 'negara')}`)
  return await response.json()
}

export const fetchGoods = async (query: string | null) => {
  const response = await fetch(`${BASE_API_URL}/${GOODS}${getQuery(query, 'pelabuhan')}`)
  return await response.json()
}
