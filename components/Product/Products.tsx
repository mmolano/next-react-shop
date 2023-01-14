
import { getQuery } from "./hooks/getQuery";
import { Product } from "./Product";

export const Products = () => {
  const [results] = getQuery();
  const { data, fetching, error } = results;

  //TODO: put loader
  if (fetching) return <p>Loading ...</p>;
  //TODO: flash popup on error
  if (error) return <p>{error.message}</p>;

  const products = data.products.data;

  return (
    <>
      {
        products.map((product: object) => (
          <Product key={product.id} product={product} />
        ))
      }
    </>
  )
}