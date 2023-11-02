import React, { createContext, ReactNode, useState, useCallback } from "react";
import { ItemProps } from "../../mock/menu";
import { menuProducts } from "../../mock/menu";

export interface ProductsContextType {
  cart?: ItemProps[];
  data: any;
  addToCart: (product: ItemProps, quantity: number) => void;
  removeFromCart: (product: ItemProps) => void;
}

export const ProductsContext = createContext<ProductsContextType | undefined>(
  undefined
);

export const ProductsProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<ItemProps[]>([]);
  const [data, setData] = useState(menuProducts as any);

  console.log("data", data);
  // console.log("data", data);

  const addToCart = useCallback(
    (product: ItemProps) => {
      // const existingProduct = cart.find((item) => item.title === product.title);
      console.log("product", product);
      const findProduct = data[0].Crepes.map(
        (item: {
          title: string;
          price: number;
          quantity: number;
          newPrice: number;
        }) => {
          if (item.title === product.title) {
            item.price = item.newPrice + product.price;
            // item.price += product.price;
            item.quantity += 1;
          }
          return item;
        }
      );
      console.log("findProduct", findProduct);

      setData([...data, { Crepes: findProduct }]);
    },
    [data]
  );

  const removeFromCart = useCallback(
    (product: ItemProps) => {
      const updatedCart = cart.filter((item) => item.title !== product.title);
      setCart(updatedCart);
    },
    [cart]
  );

  return (
    <ProductsContext.Provider value={{ cart, data, addToCart, removeFromCart }}>
      {children}
    </ProductsContext.Provider>
  );
};
