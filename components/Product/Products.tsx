
import { Loader } from "../Loader/Loader";
import { getQueryProducts } from "./hooks/getQuery";
import { Product } from "./Product";

export const Products = () => {
  const [results] = getQueryProducts();
  const { data, fetching, error } = results;

  //TODO: put conditions on loader
  if (fetching) return <Loader/>;
  //TODO: flash popup on error
  if (error) return <p>{error.message}</p>;

  const products = data.products.data;

  return (
    <>
      <div className="bg-white max-w-2xl mx-full py-10 px-4 sm:py-8 sm:px-6 lg:max-w-7xl lg:px-8 mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4">
        {
          products.map((product: object) => (
            <Product key={product.id} product={product} />
          ))
        }
      </div>
    </>
  )
}