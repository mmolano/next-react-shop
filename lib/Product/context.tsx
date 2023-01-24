import React, { useContext, useState } from 'react';
import { contextIF } from '../../interface/context';
import { productAttributes } from '../../interface/product';

export const ProductStateContext = React.createContext<contextIF>({});

export const StateContext = ({ children }: { children: React.ReactNode }) => {
  const [showCart, setShowCart] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [slide, setSlide] = useState(false);
  const [removeItemFromCart, setRemoveItemFromCart] = useState(false);

  const [cartItems, setCartItems]: any[] = useState([]);
  const [quantity, setQty] = useState(1);

  const [totalCountProduct, setTotalCountProduct] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const addProduct = () => {
    setQty(prevState => prevState + 1)
  };
  const removeProduct = () => {
    if (quantity > 0) {
      setQty(prevState => prevState - 1)
    }
  };

  const onAdd = (product: productAttributes, quantity: number) => {
    setTotalCountProduct(prev => prev + quantity);
    setTotalPrice(prev => prev + (product.price * quantity));

    const exist = cartItems.find((item: productAttributes) => item.slug === product.slug);
    if (exist) {
      setCartItems(cartItems.map((item: productAttributes) => item.slug === product.slug ? { ...exist, quantity: exist.quantity + quantity } : item));
    } else {
      setCartItems([...cartItems, { ...product, quantity: quantity }]);
    }
    setQty(1);
  }

  const onRemove = (product: productAttributes) => {
    setTotalCountProduct(prev => prev - 1);
    setTotalPrice(prev => prev - product.price);

    const exist = cartItems.find((item: productAttributes) => item.slug === product.slug);

    if (exist.quantity === 1) {
      setCartItems(cartItems.filter((item: productAttributes) => item.slug !== product.slug))
    } else {
      setCartItems(cartItems.map((item: productAttributes) => item.slug === product.slug ? { ...exist, quantity: exist.quantity - 1 } : item));
    }
  }

  const onRemoveAll = (product: productAttributes, quantity: number) => {
    setTotalCountProduct(prev => prev - quantity);
    setTotalPrice(prev => prev - (product.price * quantity));

    setCartItems(cartItems.filter((item: productAttributes) => item.slug !== product.slug))
  }

  return (
    <ProductStateContext.Provider
      value=
      {{
        quantity,
        addProduct,
        removeProduct,
        cartItems,
        showCart,
        setShowCart,
        slide,
        setSlide,
        removeItemFromCart,
        setRemoveItemFromCart,
        showMenu,
        setShowMenu,
        onAdd,
        onRemove,
        onRemoveAll,
        totalCountProduct,
        totalPrice
      }}>
      {children}
    </ProductStateContext.Provider>
  );
};

export const useStateContext = () => useContext(ProductStateContext);