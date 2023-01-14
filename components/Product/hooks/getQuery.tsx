import { GET_PRODUCT } from '../../../lib/query'
import { useQuery } from 'urql'

export const getQuery = () => {
  return useQuery({ query: GET_PRODUCT });
}