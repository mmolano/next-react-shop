import { GET_PRODUCTS } from '../../../lib/query'
import { useQuery } from 'urql'

export const getQuery = () => {
  return useQuery({ query: GET_PRODUCTS });
}