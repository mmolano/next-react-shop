import Image from "next/image";
import { toast } from 'react-toastify';
import { parsePrice } from "../../lib/price";
import { useStateContext } from "../../lib/product/context";

// TODO check type
export const Cart = (product) => {
  const { onRemoveAll } = useStateContext();

  const notify = () => toast.warning('The product has been removed!', {
    position: "bottom-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });

  return (
    <>
      <div className="md:flex items-center mt-14 py-8 border-t border-gray-200 transition-transform translate-x-6">
        <div className="w-1/4">
          <Image
            src={product.product.image.data[0].attributes.formats.thumbnail.url}
            alt={product.product.slug}
            className="w-full h-full object-center object-cover"
            width={product.product.image.data[0].attributes.formats.thumbnail.width}
            height={product.product.image.data[0].attributes.formats.thumbnail.height}
          />
        </div>
        <div className="md:pl-3 md:w-3/4">
          <p className="text-xs leading-3 text-gray-800 md:pt-0 pt-4">RF293</p>
          <div className="flex items-center justify-between w-full pt-1">
            <p className="text-base font-black leading-none text-gray-800">{product.name}</p>
            <select className="py-2 px-1 border border-gray-200 mr-6 focus:outline-none">
              <option value={product.product.quantity}>{product.product.quantity}</option>
              <option>01</option>
              <option>02</option>
              <option>03</option>
            </select>
          </div>
          <p className="text-xs leading-3 text-gray-600 pt-2">Height: 10 inches</p>
          <p className="text-xs leading-3 text-gray-600 py-4">Color: Black</p>
          <p className="w-96 text-xs leading-3 text-gray-600">Composition: 100% calf leather</p>
          <div className="flex items-center justify-between pt-5 pr-6">
            <div className="flex itemms-center">
              <p onClick={() => {
                onRemoveAll(product.product, product.product.quantity);
                notify()
              }
              } className="text-xs leading-3 underline text-red-500 pl-5 cursor-pointer">Remove</p>
            </div>
            <p className="text-base font-black leading-none text-gray-800">${parsePrice(product.product.price)}</p>
          </div>
        </div>
      </div>
    </>
  )
}
