import React, { createContext, ReactNode, useState, useCallback, useEffect } from "react";
import { ItemProps } from "../../mock/menu";

const MIN_QUANTITY = 1;
const MAX_QUANTITY = 9;

export interface ProductsContextType {
  cart: ItemProps[];
  totalQuantity: number;
  selectedProduct: ItemProps | null;
  setSelectedProduct: (product: ItemProps | null) => void;
  addToCart: (product: ItemProps) => void;
  removeFromCart: (product: ItemProps) => void;
}

export const ProductsContext = createContext<ProductsContextType | undefined>(undefined);

export const ProductsProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<ItemProps[]>([]);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState<ItemProps | null>(null);

  const addToCart = useCallback(
    (product: ItemProps, callback?: (updatedProduct: ItemProps) => void) => {
      setCart((prevCart) => {
        const existingItem = prevCart.find((item) => item.title === product.title);

        if (existingItem) {
          if (existingItem.quantity < MAX_QUANTITY) {
            existingItem.quantity += 1;
          }
          existingItem.newPrice = existingItem.price * existingItem.quantity; // Calcular e armazenar newPrice
          const updatedProduct = { ...existingItem };
          if (callback) {
            callback(updatedProduct);
          }
          return [...prevCart];
        } else {
          if (product.quantity < MAX_QUANTITY) {
            product.quantity += 1;
            product.newPrice = product.price * product.quantity; // Calcular e armazenar newPrice
            return [...prevCart, product];
          }
        }

        return prevCart;
      });

      setTotalQuantity((prevTotal) => prevTotal + 1);
    },
    []
  );
  
  const removeFromCart = useCallback(
    (product: ItemProps) => {
      setCart((prevCart) => {
        const existingItem = prevCart.find((item) => item.title === product.title);

        if (existingItem) {
          if (existingItem.quantity > MIN_QUANTITY) {
            existingItem.quantity -= 1;
            existingItem.newPrice = existingItem.price * existingItem.quantity; // Recalcular newPrice ao remover
          } else {
            // Remove completamente o item do carrinho se a quantidade for menor que MIN_QUANTITY
            return prevCart.filter((item) => item.title !== product.title);
          }
          return [...prevCart];
        }

        return prevCart;
      });

      setTotalQuantity((prevTotal) => prevTotal - 1);
    },
    []
  );

  return (
    <ProductsContext.Provider value={{ cart, totalQuantity, addToCart, selectedProduct, setSelectedProduct, removeFromCart }}>
      {children}
    </ProductsContext.Provider>
  );
};