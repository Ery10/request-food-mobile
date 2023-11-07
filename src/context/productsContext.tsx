import React, { createContext, ReactNode, useState, useCallback, useEffect } from "react";
import { ItemProps } from "../../mock/menu";
import { menuProducts } from "../../mock/menu";

const MIN_QUANTITY = 1;
const MAX_QUANTITY = 9;

export interface ProductsContextType {
  cart: ItemProps[];
  totalQuantity: number;
  addToCart: (product: ItemProps) => void;
  removeFromCart: (product: ItemProps) => void;
  initialTotalQuantity: number;
}

export const ProductsContext = createContext<ProductsContextType | undefined>(undefined);

export const ProductsProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<ItemProps[]>([]);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [initialTotalQuantity, setInitialTotalQuantity] = useState(0);

  const addToCart = useCallback(
    (product: ItemProps) => {
      // Encontre o item no carrinho (se existir)
      const existingItem = cart.find((item) => item.title === product.title);

      if (existingItem) {
        if (existingItem.quantity < MAX_QUANTITY) {
          existingItem.quantity += 1;
          setTotalQuantity((prevTotal) => prevTotal + 1);
        }
      } else {
        if (product.quantity < MAX_QUANTITY) {
          product.quantity += 1;
          setCart((prevCart) => [...prevCart, product]);
          setTotalQuantity((prevTotal) => prevTotal + 1);
        }
      }
    },
    [cart]
  );

  const removeFromCart = useCallback(
    (product: ItemProps) => {
      const existingItem = cart.find((item) => item.title === product.title);

      if (existingItem) {
        if (existingItem.quantity > MIN_QUANTITY) {
          existingItem.quantity -= 1;
          setTotalQuantity((prevTotal) => prevTotal - 1);
        }
      }
    },
    [cart]
  );

  return (
    <ProductsContext.Provider value={{ cart, totalQuantity, addToCart, removeFromCart, initialTotalQuantity }}>
      {children}
    </ProductsContext.Provider>
  );
};