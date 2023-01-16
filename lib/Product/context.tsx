import React, { createContext, useContext, useState } from "react";

export const ProductStateContext = createContext();

// TODO: add interface check && must fix context error | Split context
export const StateContext = ({ children }) => {
  const [showCart, setShowCart] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const [cartItems, setCartItems] = useState([]);
  const [quantity, setQty]: number[] = useState(1);

  const [totalCountProduct, setTotalCountProduct]: number[] = useState(0);
  const [totalPrice, setTotalPrice]: number[] = useState(0);

  const addProduct = () => {
    setQty(prevState => prevState + 1)
  };
  const removeProduct = () => {
    if (quantity > 0) {
      setQty(prevState => prevState - 1)
    }
  };

  const onAdd = (product: object, quantity: number) => {
    setTotalCountProduct(prev => prev + quantity);
    setTotalPrice(prev => prev + (product.price * quantity));

    const exist = cartItems.find(item => item.slug === product.slug);
    if (exist) {
      setCartItems(cartItems.map((item) => item.slug === product.slug ? { ...exist, quantity: exist.quantity + quantity } : item));
    } else {
      setCartItems([...cartItems, { ...product, quantity: quantity }]);
    }
    setQty(1);
  }

  const onRemove = (product: object) => {
    setTotalCountProduct(prev => prev - 1);
    setTotalPrice(prev => prev - product.price);

    const exist = cartItems.find(item => item.slug === product.slug);
    if (exist.quantity === 1) {
      setCartItems(cartItems.filter((item) => item.slug !== product.slug))
    } else {
      setCartItems(cartItems.map((item) => item.slug === product.slug ? { ...exist, quantity: exist.quantity - 1 } : item));
    }
  }

  const onRemoveAll = (product: object, quantity: number) => {
    setTotalCountProduct(prev => prev - quantity);
    setTotalPrice(prev => prev - (product.price * quantity));

    setCartItems(cartItems.filter((item) => item.slug !== product.slug))
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