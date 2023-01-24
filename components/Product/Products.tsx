import { toast } from 'react-toastify';
import { products } from '../../interface/product';
import { GetQueryProducts } from "./hooks/getQuery";
import { Product } from './Product';
import React from 'react';

export const Products = () => {
  const [results] = GetQueryProducts();
  const { data, fetching, error } = results;

  if (fetching) return <></>;

  if (error) return <> {
    toast.error(error.message ? error.message : 'Error', {
      toastId: ' ',
      position: "top-right",
      autoClose: false,
      hideProgressBar: true,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
      theme: "light",
    })
  }
  </>

  const products: products[] = data.products.data;

  return (
    <>
      <div className="bg-white max-w-2xl mx-full py-10 px-4 sm:py-8 sm:px-6 lg:max-w-7xl lg:px-8 mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4">
        {
          products.map((product: products) => (
            <Product key={product.id} product={product} />
          ))
        }
      </div>
    </>
  )
}