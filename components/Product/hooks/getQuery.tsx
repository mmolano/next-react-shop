import { useQuery } from 'urql';
import { GET_PRODUCT, GET_PRODUCTS } from '../../../lib/Product/query';

export const GetQueryProducts: any = () => {
  return useQuery({ query: GET_PRODUCTS });
}

export const GetQueryProduct: any = (id: string) => {
  return useQuery({ query: GET_PRODUCT, variables: { id: id } });
}