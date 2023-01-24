import Image from 'next/image';
import { toast } from 'react-toastify';
import { cartProduct } from '../../interface/product';
import { parsePrice } from '../../lib/price';
import { useStateContext } from '../../lib/Product/context';

export const Cart = (props: { product: cartProduct }) => {
  const { onRemoveAll, removeItemFromCart, setRemoveItemFromCart } = useStateContext();

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
      <div className={`${removeItemFromCart ? 'animate-out' : ''} md:flex items-center mt-14 py-8 border-t border-gray-200`}>
        <div className="w-1/4">
          <Image
            src={props.product.image.data[0].attributes.formats.thumbnail.url}
            alt={props.product.slug}
            className="w-full h-full object-center object-cover"
            width={props.product.image.data[0].attributes.formats.thumbnail.width}
            height={props.product.image.data[0].attributes.formats.thumbnail.height}
          />
        </div>
        <div className="md:pl-3 md:w-3/4">
          <p className="text-xs leading-3 text-gray-800 md:pt-0 pt-4">Reference: {props.product.slug}</p>
          <div className="flex items-center justify-between w-full pt-1">
            <p className="text-base font-black leading-none text-gray-800">{props.product.name}</p>
            <div className="py-1 px-2 mr-6 focus:outline-none">
              <p>x {props.product.quantity}</p>
            </div>
          </div>
          <p className="text-xs leading-3 text-gray-600 pt-2">Height: 10 inches</p>
          <p className="text-xs leading-3 text-gray-600 py-4">Color: Black</p>
          <p className="w-96 text-xs leading-3 text-gray-600">Composition: 100% calf leather</p>
          <div className="flex items-center justify-between pt-5 pr-6">
            <div className="flex itemms-center">
              <p onClick={() => {
                setRemoveItemFromCart?.(true);
                setTimeout(() => {
                  onRemoveAll?.(props.product, props.product.quantity);
                }, 220)
                notify()
              }
              } className="text-xs leading-3 underline text-red-500 pl-5 cursor-pointer">Remove</p>
            </div>
            <p className="text-base font-black leading-none text-gray-800">${parsePrice(props.product.price)}</p>
          </div>
        </div>
      </div> 
  )
}
