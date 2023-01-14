import ProductProps from "../../interface/product";
import Link from "next/link";

export const Product = (product: ProductProps) => {
  const { name, price, image, slug } = product.product.attributes;
  const id = product.product.id;

  return (
    <>
      <article className="group relative">
        <Link href={`/product/${id}`}>
          <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden lg:h-80 lg:aspect-none">
            <img
              className="w-full h-full object-center object-cover lg:w-full lg:h-full"
              src={image.data[0].attributes.formats.small.url}
              alt={slug}
            />
          </div>
        </Link>
        <div className="mt-4 flex justify-between">
          <h2 className="text-sm text-gray-700">
            {name}
          </h2>
          <p className="text-sm font-medium text-gray-900">{price} $</p>
        </div>
        <button
          className="mt-6 group outline-none relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none"
        >
          Buy
        </button>
        <button
          className="mt-4 group outline-none relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-black bg-gray-100 hover:bg-gray-300 focus:outline-none"
        >
          Add
        </button>
      </article>
    </>
  )
}