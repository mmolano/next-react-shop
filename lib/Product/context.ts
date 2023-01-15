import React, { createContext, useContext, useState } from "react";

const ProductStateContext = createContext();

// TODO: add interface check && must fix context error
export const ProductProvider = ({ children }) => {
  const [quantity, setQty]: number[] = useState(1);

  return (
    <ProductStateContext.Provider value={{ quantity }}>
  { children }
  </ProductStateContext.Provider>
  );
};

export default ProductStateContext;