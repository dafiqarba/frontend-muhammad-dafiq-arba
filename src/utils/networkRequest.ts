import { getQuery } from './strings'
import { COUNTRIES, GOODS, PORTS } from '@/constants'

export const fetchCountry = async () => {
  const response = await fetch(`/api/proxy?path=${COUNTRIES}`)
  return await response.json()
}

export const fetchPorts = async (query: string) => {
  const response = await fetch(`/api/proxy?path=${PORTS}${getQuery(query, 'negara')}`)
  return await response.json()
}

export const fetchGoods = async (query: string) => {
  const response = await fetch(`/api/proxy?path=${GOODS}${getQuery(query, 'pelabuhan')}`)
  return await response.json()
}
