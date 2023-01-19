import { GET_PRODUCTS, GET_PRODUCT } from '../../../lib/product/query'
import { Query, useQuery } from 'urql'

export const getQueryProducts: object = () => {
  return useQuery({ query: GET_PRODUCTS });
}

export const getQueryProduct: object = (id: string) => {
  return useQuery({ query: GET_PRODUCT, variables: { id: id } });
}