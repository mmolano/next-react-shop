
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
      <div className="bg-white max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8 mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {
          products.map((product: object) => (
            <Product key={product.id} product={product} />
          ))
        }
      </div>
    </>
  )
}