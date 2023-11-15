import React, {
  createContext,
  ReactNode,
  useState,
  useCallback,
  useEffect,
} from "react";
import { ItemProps } from "../../mock/menu";

const MIN_QUANTITY = 1;
const MAX_QUANTITY = 9;

export interface ProductsContextType {
  cart: ItemProps[];
  totalQuantity: number;
  addToCart: (product: ItemProps) => void;
  removeFromCart: (product: ItemProps) => void;
  initialTotalQuantity: number;
}

export const ProductsContext = createContext<ProductsContextType | undefined>(
  undefined
);

export default function useProducts() {
  const [cart, setCart] = useState<ItemProps[]>([]);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [initialTotalQuantity, setInitialTotalQuantity] = useState(0);

  const addToCart = useCallback((product: ItemProps) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find(
        (item) => item.title === product.title
      );

      if (existingItem) {
        if (existingItem.quantity < MAX_QUANTITY) {
          existingItem.quantity += 1;
        }
        return [...prevCart];
      } else {
        if (product.quantity < MAX_QUANTITY) {
          product.quantity += 1;
          return [...prevCart, product];
        }
      }

      return prevCart;
    });

    setTotalQuantity((prevTotal) => prevTotal + 1);
  }, []);

  const removeFromCart = useCallback((product: ItemProps) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find(
        (item) => item.title === product.title
      );

      if (existingItem) {
        if (existingItem.quantity > MIN_QUANTITY) {
          existingItem.quantity -= 1;
        }
        return [...prevCart];
      }

      return prevCart;
    });

    setTotalQuantity((prevTotal) => prevTotal - 1);
  }, []);

  return {
    cart,
    totalQuantity,
    addToCart,
    removeFromCart,
    initialTotalQuantity,
  };
}
