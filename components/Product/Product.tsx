import ProductProps from "../../interface/product";
import Link from "next/link";

export const Product = (product: ProductProps) => {
  const { name, price, image, slug } = product.product.attributes;
  const id = product.product.id;

  return (
    <>
      <article className="group relative">
        <Link href={`/product/${id}`}>
          <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 overflow-hidden lg:h-96 lg:aspect-none">
            <img
              className="w-full h-full object-center object-cover lg:w-full lg:h-full"
              src={image.data[0].attributes.formats.small.url}
              alt={slug}
            />
          </div>
        </Link>
        <div className="mt-4 flex flex-col">
          <h2 className="text-base text-gray-900">
            {name}
          </h2>
          <p className="text-sm font-medium text-gray-900 mt-3">${price}</p>
        </div>
      </article>
    </>
  )
}