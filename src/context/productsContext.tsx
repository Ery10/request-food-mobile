import React, { createContext, ReactNode } from "react";
import { ItemProps } from "../../mock/menu";
import useProducts from "../hook/useProducts";

export interface ProductsContextType {
  cart: ItemProps[];
  totalQuantity: number;
  addToCart: (product: ItemProps) => void;
  removeFromCart: (product: ItemProps) => void;
  initialTotalQuantity: any;
  selectedTable: number | null; // Adicione esta linha
  setSelectedTable: (tableId: number | null) => void; 
  tableId: number | null;
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
    selectedTable,
    setSelectedTable,
    tableId
  } = useProducts();

  return (
    <ProductsContext.Provider
      value={{
        cart,
        totalQuantity,
        addToCart,
        removeFromCart,
        initialTotalQuantity,
        selectedTable,
        setSelectedTable, 
        tableId
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
