import Image from "next/image";
import Link from "next/link";
import ProductProps from "../../interface/product";
import { sanitizeUrl } from "../../lib/sanitizer";
import { parsePrice } from "../../lib/price";

export const Product = (product: ProductProps) => {
  const { name, price, image, slug } = product.product.attributes;
  const id: number = product.product.id;
  const url = sanitizeUrl(`/product/${id}`);

  return (
    <>
      <article className="group">
        <Link href={url}>
          <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 overflow-hidden lg:h-96 lg:aspect-none">
            <Image
              className="w-full h-full object-center object-cover lg:w-full lg:h-full"
              src={image.data[0].attributes.formats.small.url}
              alt={slug}
              width={image.data[0].attributes.formats.small.width}
              height={image.data[0].attributes.formats.small.height}
            />
          </div>
        </Link>
        <div className="mt-4 flex flex-col">
          <h2 className="text-base text-gray-900">
            {name}
          </h2>
          <p className="text-sm font-medium text-gray-900 mt-3">${parsePrice(price)}</p>
        </div>
      </article>
    </>
  )
}