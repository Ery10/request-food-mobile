import React, { createContext, ReactNode, useState, useCallback } from "react";
import { ItemProps } from "../../data/itemData";
import { bebidas, crepes, salgados } from '../../data/itemData'

export interface ProductsContextType {
  cart: ItemProps[];
  crepes: ItemProps[];
  salgados: ItemProps[];
  bebidas: ItemProps[];
  addToCart: (product: ItemProps, quantity: number) => void;
  removeFromCart: (product: ItemProps) => void;
}

export const ProductsContext = createContext<ProductsContextType | undefined>(undefined);

export const ProductsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<ItemProps[]>([]);

  const addToCart = useCallback((product: ItemProps, quantity: number) => {
    const existingProduct = cart.find((item) => item.title === product.title);

    if (existingProduct) {
      const updatedCart = cart.map((item) =>
        item.title === product.title
          ? { ...item, quantity: item.quantity + quantity }
          : item
      );
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...product, quantity }]);
    }
  }, [cart]);

  const removeFromCart = useCallback((product: ItemProps) => {
    const updatedCart = cart.filter((item) => item.title !== product.title);
    setCart(updatedCart);
  }, [cart]);

  return (
    <ProductsContext.Provider value={{ cart, crepes, salgados, bebidas, addToCart, removeFromCart }}>
      {children}
    </ProductsContext.Provider>
  );
};
