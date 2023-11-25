import React, { createContext, ReactNode } from "react";
import { ItemProps } from "../../mock/menu";
import useProducts from "../hook/quantityItems";

export interface ProductsContextType {
  cart: ItemProps[];
  totalQuantity: number;
  addToCart: (product: ItemProps) => void;
  removeFromCart: (product: ItemProps) => void;
  initialTotalQuantity: any;
}

export const ProductsContext = createContext<ProductsContextType | undefined>(
  undefined
);

export const ProductsProvider = ({ children }: { children: ReactNode }) => {
  const {
    cart,
    totalQuantity,
    addToCart,
    removeFromCart,
    initialTotalQuantity,
  } = useProducts();

  return (
    <ProductsContext.Provider
      value={{
        cart,
        totalQuantity,
        addToCart,
        removeFromCart,
        initialTotalQuantity,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
