import { cartProduct, productAttributes } from './product';

export interface contextIF {
   showCart?: boolean,
   setShowCart?: React.Dispatch<React.SetStateAction<boolean>>,
   showMenu?: boolean,
   setShowMenu?: React.Dispatch<React.SetStateAction<boolean>>,
   slide?: boolean,
   setSlide?: React.Dispatch<React.SetStateAction<boolean>>,
   removeItemFromCart?: boolean,
   setRemoveItemFromCart?: React.Dispatch<React.SetStateAction<boolean>>,
   cartItems?: cartProduct[],
   quantity?: number,
   totalCountProduct?: number,
   totalPrice?: number,
   addProduct?: () => void,
   removeProduct?: () => void,
   onAdd?: (product: productAttributes, quantity: number) => void,
   onRemove?: (product: productAttributes) => void,
   onRemoveAll?: (product: productAttributes, quantity: number) => void,
}